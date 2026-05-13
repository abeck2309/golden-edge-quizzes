"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  buildRandomDistinctPair,
  buildRestingReelTeams,
  buildSpinReelTeams,
  getLogoPathForTeam,
  type TeamInfo
} from "@/lib/team-pair-data";

type PairResult = {
  pair: [TeamInfo, TeamInfo];
  userAnswer: string;
  isCorrect: boolean;
  players: string[];
};

type SharedPlayersResponse = {
  players: string[];
};

const quizSlug = "played-for-both-teams";
const quizTitle = "Played for Both Teams";
const bestStreakStorageKey = "played-for-both-teams-best-streak";

const resultLines = [
  { minimumScore: 15, text: "Jackpot behavior. You were living in the crossover matrix." },
  { minimumScore: 10, text: "Strong run. You know these shared-team careers cold." },
  { minimumScore: 5, text: "Nice streak. You had a solid feel for the overlap board." },
  { minimumScore: 0, text: "One miss and it is curtains. That is jackpot life." }
];

function normalizeAnswer(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesAcceptedAnswer(normalizedAnswer: string, normalizedAccepted: string) {
  if (!normalizedAnswer || !normalizedAccepted) {
    return false;
  }

  if (normalizedAnswer === normalizedAccepted) {
    return true;
  }

  const paddedAnswer = ` ${normalizedAnswer} `;
  const paddedAccepted = ` ${normalizedAccepted} `;
  return paddedAnswer.includes(paddedAccepted);
}

function getEditDistance(left: string, right: string) {
  const rows = left.length + 1;
  const cols = right.length + 1;
  const matrix = Array.from({ length: rows }, () => Array<number>(cols).fill(0));

  for (let row = 0; row < rows; row += 1) {
    matrix[row][0] = row;
  }

  for (let col = 0; col < cols; col += 1) {
    matrix[0][col] = col;
  }

  for (let row = 1; row < rows; row += 1) {
    for (let col = 1; col < cols; col += 1) {
      const cost = left[row - 1] === right[col - 1] ? 0 : 1;
      matrix[row][col] = Math.min(
        matrix[row - 1][col] + 1,
        matrix[row][col - 1] + 1,
        matrix[row - 1][col - 1] + cost
      );
    }
  }

  return matrix[left.length][right.length];
}

function tokenMatchesWithTypoTolerance(answerToken: string, acceptedToken: string) {
  if (answerToken === acceptedToken) {
    return true;
  }

  if (acceptedToken.length < 5 || answerToken.length < 5) {
    return false;
  }

  if (Math.abs(answerToken.length - acceptedToken.length) > 1) {
    return false;
  }

  return getEditDistance(answerToken, acceptedToken) <= 1;
}

function fuzzyPhraseMatch(normalizedAnswer: string, normalizedAccepted: string) {
  const answerTokens = normalizedAnswer.split(" ");
  const acceptedTokens = normalizedAccepted.split(" ");

  if (answerTokens.length !== acceptedTokens.length) {
    return false;
  }

  return acceptedTokens.every((acceptedToken, index) =>
    tokenMatchesWithTypoTolerance(answerTokens[index], acceptedToken)
  );
}

function generatePlayerAliases(name: string) {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return [];
  }

  const aliases = new Set<string>([trimmedName]);
  const nameParts = trimmedName.split(/\s+/);

  if (nameParts.length > 1) {
    aliases.add(nameParts.at(-1)!);

    const lowerPrefixes = new Set(["van", "von", "de", "del", "du", "la", "le", "st.", "st"]);
    const secondToLast = nameParts.at(-2)?.toLowerCase();

    if (secondToLast && lowerPrefixes.has(secondToLast)) {
      aliases.add(`${nameParts.at(-2)} ${nameParts.at(-1)}`);
    }
  }

  return Array.from(aliases);
}

function answerMatches(players: string[], answer: string) {
  const normalizedAnswer = normalizeAnswer(answer);

  if (!normalizedAnswer) {
    return false;
  }

  return players.some((player) =>
    generatePlayerAliases(player).some((alias) => {
      const normalizedAlias = normalizeAnswer(alias);
      return (
        matchesAcceptedAnswer(normalizedAnswer, normalizedAlias) ||
        fuzzyPhraseMatch(normalizedAnswer, normalizedAlias)
      );
    })
  );
}

function getGradeLine(score: number) {
  return resultLines.find((line) => score >= line.minimumScore)?.text ?? resultLines.at(-1)!.text;
}

function TeamLogoBox({
  team,
  reelTeams,
  reelOffset,
  spotlight,
  revealTeam
}: {
  team: TeamInfo;
  reelTeams: TeamInfo[];
  reelOffset: number;
  spotlight?: boolean;
  revealTeam?: boolean;
}) {
  const visibleReelTeams = reelTeams.length > 0 ? reelTeams : [team];
  const showTeamAccent = Boolean(revealTeam);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-5 md:p-6 ${
        spotlight ? "border-gold/35 bg-white/[0.04]" : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="absolute inset-0 bg-[#11161d]" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${team.accentClassName} transition-opacity duration-700 ease-out ${
          showTeamAccent ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] transition-opacity duration-500 ${
            showTeamAccent ? "text-gold-bright opacity-100" : "text-gold-bright/70 opacity-75"
          }`}
        >
          {showTeamAccent ? team.shortName : "???"}
        </p>
        <div className="mt-4 h-[220px] overflow-hidden rounded-xl border border-white/10 bg-black/10">
          <div
            style={{
              transform: `translateY(-${reelOffset}px)`,
              transition: spotlight
                ? "transform 1.2s cubic-bezier(0.12, 0.78, 0.22, 1)"
                : "transform 0.35s ease-out"
            }}
          >
            {visibleReelTeams.map((reelTeam, index) => (
              <div key={`${reelTeam.shortName}-${index}`} className="flex h-[220px] items-center justify-center p-5">
                <img
                  src={getLogoPathForTeam(reelTeam.shortName)}
                  alt={reelTeam.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <h3
          className={`mt-5 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight transition-all duration-500 md:text-2xl ${
            showTeamAccent ? "translate-y-0 opacity-100 text-white" : "translate-y-1 opacity-80 text-mist"
          }`}
        >
          {showTeamAccent ? team.name : "Spinning..."}
        </h3>
      </div>
    </div>
  );
}

async function fetchSharedPlayers(pair: [TeamInfo, TeamInfo]) {
  const response = await fetch(
    `/api/shared-players?team1=${pair[0].shortName}&team2=${pair[1].shortName}`,
    {
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error(`Shared players lookup failed: ${response.status}`);
  }

  const data = (await response.json()) as SharedPlayersResponse;
  return data.players;
}

export function BothTeamsSpinnerQuiz() {
  const [currentPair, setCurrentPair] = useState<[TeamInfo, TeamInfo]>(() => buildRandomDistinctPair());
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [results, setResults] = useState<PairResult[]>([]);
  const [hasLoggedResult, setHasLoggedResult] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentPlayers, setCurrentPlayers] = useState<string[]>([]);
  const [expandedResults, setExpandedResults] = useState<number[]>([]);
  const [loadingPlayers, setLoadingPlayers] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [leftReelTeams, setLeftReelTeams] = useState<TeamInfo[]>(() =>
    buildRestingReelTeams(currentPair[0], [currentPair[1].shortName])
  );
  const [rightReelTeams, setRightReelTeams] = useState<TeamInfo[]>(() =>
    buildRestingReelTeams(currentPair[1], [currentPair[0].shortName])
  );
  const [leftReelOffset, setLeftReelOffset] = useState(220);
  const [rightReelOffset, setRightReelOffset] = useState(220);

  const score = useMemo(() => results.filter((result) => result.isCorrect).length, [results]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedBestStreak = window.localStorage.getItem(bestStreakStorageKey);
    const parsedBestStreak = savedBestStreak ? Number.parseInt(savedBestStreak, 10) : 0;

    if (!Number.isNaN(parsedBestStreak) && parsedBestStreak > 0) {
      setBestStreak(parsedBestStreak);
    }
  }, []);

  useEffect(() => {
    if (!hasStarted || isComplete) {
      return;
    }

    let isCancelled = false;

    async function loadPlayers() {
      setLoadingPlayers(true);
      setLoadError(null);

      try {
        const players = await fetchSharedPlayers(currentPair);

        if (isCancelled) {
          return;
        }

        setCurrentPlayers(players);
      } catch (error) {
        if (isCancelled) {
          return;
        }

        setCurrentPlayers([]);
        setLoadError("Shared-player lookup did not load for this pair.");
      } finally {
        if (!isCancelled) {
          setLoadingPlayers(false);
        }
      }
    }

    void loadPlayers();

    return () => {
      isCancelled = true;
    };
  }, [currentPair, hasStarted, isComplete]);

  useEffect(() => {
    if (!hasStarted || isComplete) {
      return;
    }

    if (!isSpinning) {
      setLeftReelTeams(buildRestingReelTeams(currentPair[0], [currentPair[1].shortName]));
      setRightReelTeams(buildRestingReelTeams(currentPair[1], [currentPair[0].shortName]));
      setLeftReelOffset(220);
      setRightReelOffset(220);
      return;
    }

    const nextLeftReelTeams = buildSpinReelTeams(currentPair[0], [currentPair[1].shortName], 12);
    const nextRightReelTeams = buildSpinReelTeams(currentPair[1], [currentPair[0].shortName], 14);

    setLeftReelTeams(nextLeftReelTeams);
    setRightReelTeams(nextRightReelTeams);
    setLeftReelOffset(0);
    setRightReelOffset(0);

    const startMotionTimeout = window.setTimeout(() => {
      setLeftReelOffset((nextLeftReelTeams.length - 1) * 220);
      setRightReelOffset((nextRightReelTeams.length - 1) * 220);
    }, 30);

    const settleTimeout = window.setTimeout(() => {
      setLeftReelTeams(buildRestingReelTeams(currentPair[0], [currentPair[1].shortName]));
      setRightReelTeams(buildRestingReelTeams(currentPair[1], [currentPair[0].shortName]));
      setLeftReelOffset(220);
      setRightReelOffset(220);
      setIsSpinning(false);
    }, 1450);

    return () => {
      window.clearTimeout(startMotionTimeout);
      window.clearTimeout(settleTimeout);
    };
  }, [currentPair, hasStarted, isComplete, isSpinning]);

  useEffect(() => {
    if (!isComplete || hasLoggedResult || attemptedCount === 0) {
      return;
    }

    let isCancelled = false;

    async function logResult() {
      try {
        const response = await fetch("/api/quiz-results", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            quizSlug,
            quizTitle,
            score,
            totalQuestions: attemptedCount
          })
        });

        if (!isCancelled) {
          setHasLoggedResult(true);
        }

        if (!response.ok) {
          return;
        }
      } catch {
        if (!isCancelled) {
          setHasLoggedResult(true);
        }
      }
    }

    void logResult();

    return () => {
      isCancelled = true;
    };
  }, [attemptedCount, hasLoggedResult, isComplete, score]);

  function moveToNextPair() {
    let nextPair = buildRandomDistinctPair();

    while (
      nextPair[0].shortName === currentPair[0].shortName &&
      nextPair[1].shortName === currentPair[1].shortName
    ) {
      nextPair = buildRandomDistinctPair();
    }

    setCurrentPair(nextPair);
    setCurrentPlayers([]);
    setCurrentAnswer("");
    setIsSpinning(true);
  }

  function submitAnswer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!currentAnswer.trim() || loadingPlayers || currentPlayers.length === 0) {
      return;
    }

    const isCorrect = answerMatches(currentPlayers, currentAnswer);
    const result: PairResult = {
      pair: currentPair,
      userAnswer: currentAnswer.trim(),
      isCorrect,
      players: currentPlayers
    };

    setResults((previous) => [...previous, result]);
    setAttemptedCount((previous) => previous + 1);

    if (!isCorrect) {
      setIsComplete(true);
      setIsSpinning(false);

      if (score > bestStreak) {
        setBestStreak(score);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(bestStreakStorageKey, String(score));
        }
      }

      return;
    }

    moveToNextPair();
  }

  function restartQuiz() {
    const nextPair = buildRandomDistinctPair();
    setCurrentPair(nextPair);
    setCurrentAnswer("");
    setResults([]);
    setExpandedResults([]);
    setHasLoggedResult(false);
    setCurrentPlayers([]);
    setLoadError(null);
    setIsSpinning(false);
    setLeftReelTeams(buildRestingReelTeams(nextPair[0], [nextPair[1].shortName]));
    setRightReelTeams(buildRestingReelTeams(nextPair[1], [nextPair[0].shortName]));
    setLeftReelOffset(220);
    setRightReelOffset(220);
    setIsComplete(false);
    setAttemptedCount(0);
    setHasStarted(false);
  }

  function startGame() {
    const nextPair = buildRandomDistinctPair();
    setCurrentPair(nextPair);
    setCurrentAnswer("");
    setResults([]);
    setExpandedResults([]);
    setHasLoggedResult(false);
    setCurrentPlayers([]);
    setLoadError(null);
    setAttemptedCount(0);
    setIsComplete(false);
    setHasStarted(true);
    setLeftReelTeams(buildRestingReelTeams(nextPair[0], [nextPair[1].shortName]));
    setRightReelTeams(buildRestingReelTeams(nextPair[1], [nextPair[0].shortName]));
    setLeftReelOffset(220);
    setRightReelOffset(220);
    setIsSpinning(true);
  }

  return (
    <section className="panel p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <p className="eyebrow">Jackpot</p>
        <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-mist">
          Hockey Reference
        </span>
      </div>

      <h1 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
        Played for Both Teams
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-mist md:text-base">
        Spin two NHL teams, then name any player who played at least one NHL regular-season or playoff
        game for both. Keep going until you miss one.
      </p>

      {!hasStarted ? (
        <div className="mt-8 rounded-2xl border border-line bg-white/[0.03] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="rounded-2xl border border-white/10 bg-[#0c1015] p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">Jackpot</p>
              <p className="mt-4 text-sm leading-7 text-mist">Two teams spin up.</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-[family-name:var(--font-heading)] text-xl font-bold text-gold-bright">
                VS
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0c1015] p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">Streak</p>
              <p className="mt-4 text-sm leading-7 text-mist">One wrong answer ends the run.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={startGame}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
            >
              Start Game
            </button>
            <p className="text-sm leading-7 text-mist">
              Best streak: <span className="text-white">{bestStreak}</span>
            </p>
          </div>
        </div>
      ) : isComplete ? (
        <div className="mt-8 space-y-7">
          <div className="rounded-2xl border border-line bg-white/[0.03] p-5 md:p-6">
            <p className="eyebrow">Final Result</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-5xl">
              {score} in a row
            </h2>
            <p className="mt-4 text-sm leading-7 text-mist md:text-base">{getGradeLine(score)}</p>
            <p className="mt-3 text-sm leading-7 text-mist md:text-base">
              Best streak: <span className="text-white">{Math.max(bestStreak, score)}</span>
            </p>
          </div>

          <div className="grid gap-3">
            {results.map((result, index) => (
              <div
                key={`${result.pair[0].shortName}-${result.pair[1].shortName}-${index}`}
                className="rounded-xl border border-line bg-white/[0.03] p-4"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <p className="text-sm font-semibold leading-6 text-white">
                    {index + 1}. {result.pair[0].name} and {result.pair[1].name}
                  </p>
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                      result.isCorrect
                        ? "border border-gold/30 bg-gold/10 text-gold-bright"
                        : "border border-redline/35 bg-redline/10 text-[#ff9ca4]"
                    }`}
                  >
                    {result.isCorrect ? "Correct" : "Missed"}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-mist">
                  Your answer: <span className="text-white">{result.userAnswer}</span>
                </p>
                <p className="mt-1 text-sm leading-6 text-mist">
                  Valid answers:{" "}
                  <span className="text-gold-bright">
                    {result.players.slice(0, 8).join(", ")}
                    {result.players.length > 8 ? (
                      <>
                        {" "}
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedResults((previous) =>
                              previous.includes(index)
                                ? previous.filter((value) => value !== index)
                                : [...previous, index]
                            )
                          }
                          className="font-semibold text-gold-bright underline decoration-gold/60 underline-offset-4 hover:text-white"
                        >
                          and {result.players.length - 8} more
                        </button>
                      </>
                    ) : null}
                  </span>
                </p>
                {expandedResults.includes(index) ? (
                  <div className="mt-3 rounded-xl border border-white/10 bg-black/10 p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
                      Full shared-player list
                    </p>
                    <p className="mt-2 text-sm leading-6 text-mist">
                      <span className="text-white">{result.players.join(", ")}</span>
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={restartQuiz}
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <TeamLogoBox
              team={currentPair[0]}
              reelTeams={leftReelTeams}
              reelOffset={leftReelOffset}
              spotlight={isSpinning}
              revealTeam={!isSpinning}
            />
            <div className="flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-[family-name:var(--font-heading)] text-xl font-bold text-gold-bright">
                VS
              </div>
            </div>
            <TeamLogoBox
              team={currentPair[1]}
              reelTeams={rightReelTeams}
              reelOffset={rightReelOffset}
              spotlight={isSpinning}
              revealTeam={!isSpinning}
            />
          </div>

          <form onSubmit={submitAnswer} className="mt-8 rounded-2xl border border-line bg-white/[0.03] p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-bright">Jackpot Round</p>
                <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight text-white md:text-4xl">
                  Name any player who played for both teams.
                </h2>
              </div>
              <div className="rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-left md:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-bright">Current Streak</p>
                <p className="mt-1 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">{score}</p>
              </div>
            </div>

            <label htmlFor="both-teams-answer" className="mt-7 block text-sm font-semibold text-mist">
              Type your answer
            </label>
            <input
              id="both-teams-answer"
              value={currentAnswer}
              onChange={(event) => setCurrentAnswer(event.target.value)}
              autoComplete="off"
              autoFocus
              className="mt-3 w-full rounded-xl border border-line bg-ink/70 px-4 py-4 text-base font-semibold text-white outline-none placeholder:text-mist/60 focus:border-gold"
              placeholder={loadingPlayers ? "Loading valid players..." : "Example: Reilly Smith"}
              disabled={loadingPlayers || isSpinning}
            />
            <button
              type="submit"
              disabled={isSpinning || loadingPlayers || currentPlayers.length === 0}
              className="mt-5 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright disabled:cursor-not-allowed disabled:bg-gold/60"
            >
              {isSpinning
                ? "Spinning..."
                : loadingPlayers
                  ? "Loading Answers..."
                  : "Submit Answer"}
            </button>
            {loadError ? <p className="mt-4 text-sm text-[#ff9ca4]">{loadError}</p> : null}
          </form>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#0c1015] p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">Best Streak</p>
                <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
                  {bestStreak}
                </p>
              </div>
              <div className="text-sm leading-7 text-mist">
                <p>Valid answers are pulled per team pair from the Hockey Reference shared-player page.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
