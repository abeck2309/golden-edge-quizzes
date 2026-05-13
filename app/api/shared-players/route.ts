import { NextResponse } from "next/server";
import { getTeamByCode } from "@/lib/team-pair-data";

const sharedPlayersCache = new Map<string, string[]>();

function buildCacheKey(team1: string, team2: string) {
  return [team1, team2].sort().join("__");
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'");
}

function parseSharedPlayers(html: string) {
  const players: string[] = [];
  const playerCellPattern = /<(?:th|td)[^>]*data-stat="player"[^>]*>[\s\S]*?<a [^>]*>([^<]+)<\/a>/g;

  for (const match of html.matchAll(playerCellPattern)) {
    const playerName = decodeHtmlEntities(match[1].trim());

    if (playerName && !players.includes(playerName)) {
      players.push(playerName);
    }
  }

  return players;
}

async function fetchSharedPlayers(team1: string, team2: string) {
  const teamOne = getTeamByCode(team1);
  const teamTwo = getTeamByCode(team2);

  if (!teamOne || !teamTwo) {
    throw new Error("Unknown team code.");
  }

  const cacheKey = buildCacheKey(team1, team2);
  const cached = sharedPlayersCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  const url = `https://www.hockey-reference.com/friv/players-who-played-for-multiple-teams-franchises.fcgi?level=franch&t1=${teamOne.hockeyReferenceCode}&t2=${teamTwo.hockeyReferenceCode}&t3=--&t4=--`;
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      Referer: "https://www.hockey-reference.com/",
      DNT: "1"
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Hockey Reference request failed: ${response.status}`);
  }

  const html = await response.text();
  const players = parseSharedPlayers(html);

  if (players.length === 0) {
    throw new Error("No shared players parsed for pair.");
  }

  sharedPlayersCache.set(cacheKey, players);
  return players;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const team1 = searchParams.get("team1");
  const team2 = searchParams.get("team2");

  if (!team1 || !team2 || team1 === team2) {
    return NextResponse.json({ error: "Invalid team pair." }, { status: 400 });
  }

  try {
    const players = await fetchSharedPlayers(team1, team2);
    return NextResponse.json({ players });
  } catch (error) {
    console.error("Failed to fetch shared players", error);
    return NextResponse.json({ error: "Failed to fetch shared players." }, { status: 500 });
  }
}
