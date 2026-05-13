export type TeamInfo = {
  name: string;
  shortName: string;
  accentClassName: string;
  hockeyReferenceCode: string;
  logoPath: string;
};

export const teams: Record<string, TeamInfo> = {
  ANA: {
    name: "Anaheim Ducks",
    shortName: "ANA",
    accentClassName: "from-[#f47a38]/30 to-white/5",
    hockeyReferenceCode: "ANA",
    logoPath: "/ANA.png"
  },
  BOS: {
    name: "Boston Bruins",
    shortName: "BOS",
    accentClassName: "from-gold/30 to-white/5",
    hockeyReferenceCode: "BOS",
    logoPath: "/BOS.png"
  },
  BUF: {
    name: "Buffalo Sabres",
    shortName: "BUF",
    accentClassName: "from-[#003087]/35 to-white/5",
    hockeyReferenceCode: "BUF",
    logoPath: "/BUF.png"
  },
  CAR: {
    name: "Carolina Hurricanes",
    shortName: "CAR",
    accentClassName: "from-[#cc0000]/35 to-white/5",
    hockeyReferenceCode: "CAR",
    logoPath: "/CAR.png"
  },
  CBJ: {
    name: "Columbus Blue Jackets",
    shortName: "CBJ",
    accentClassName: "from-[#002654]/35 to-white/5",
    hockeyReferenceCode: "CBJ",
    logoPath: "/CBJ.png"
  },
  CGY: {
    name: "Calgary Flames",
    shortName: "CGY",
    accentClassName: "from-[#c8102e]/35 to-white/5",
    hockeyReferenceCode: "CGY",
    logoPath: "/CGY.png"
  },
  CHI: {
    name: "Chicago Blackhawks",
    shortName: "CHI",
    accentClassName: "from-[#cf0a2c]/35 to-white/5",
    hockeyReferenceCode: "CHI",
    logoPath: "/CHI.png"
  },
  COL: {
    name: "Colorado Avalanche",
    shortName: "COL",
    accentClassName: "from-[#6f263d]/35 to-white/5",
    hockeyReferenceCode: "COL",
    logoPath: "/COL.png"
  },
  DAL: {
    name: "Dallas Stars",
    shortName: "DAL",
    accentClassName: "from-[#006847]/35 to-white/5",
    hockeyReferenceCode: "DAL",
    logoPath: "/DAL.png"
  },
  DET: {
    name: "Detroit Red Wings",
    shortName: "DET",
    accentClassName: "from-[#ce1126]/35 to-white/5",
    hockeyReferenceCode: "DET",
    logoPath: "/DET.png"
  },
  EDM: {
    name: "Edmonton Oilers",
    shortName: "EDM",
    accentClassName: "from-[#ff4c00]/35 to-white/5",
    hockeyReferenceCode: "EDM",
    logoPath: "/EDM.png"
  },
  FLA: {
    name: "Florida Panthers",
    shortName: "FLA",
    accentClassName: "from-[#c8102e]/35 to-white/5",
    hockeyReferenceCode: "FLA",
    logoPath: "/FLA.png"
  },
  LAK: {
    name: "Los Angeles Kings",
    shortName: "LAK",
    accentClassName: "from-white/20 to-white/5",
    hockeyReferenceCode: "LAK",
    logoPath: "/LAK.png"
  },
  MIN: {
    name: "Minnesota Wild",
    shortName: "MIN",
    accentClassName: "from-[#154734]/35 to-white/5",
    hockeyReferenceCode: "MIN",
    logoPath: "/MIN.png"
  },
  MTL: {
    name: "Montreal Canadiens",
    shortName: "MTL",
    accentClassName: "from-[#af1e2d]/35 to-white/5",
    hockeyReferenceCode: "MTL",
    logoPath: "/MTL.png"
  },
  NJD: {
    name: "New Jersey Devils",
    shortName: "NJD",
    accentClassName: "from-[#ce1126]/35 to-white/5",
    hockeyReferenceCode: "NJD",
    logoPath: "/N.J.png"
  },
  NSH: {
    name: "Nashville Predators",
    shortName: "NSH",
    accentClassName: "from-[#ffb81c]/35 to-white/5",
    hockeyReferenceCode: "NSH",
    logoPath: "/NSH.png"
  },
  NYI: {
    name: "New York Islanders",
    shortName: "NYI",
    accentClassName: "from-[#00539b]/35 to-white/5",
    hockeyReferenceCode: "NYI",
    logoPath: "/NYI.png"
  },
  NYR: {
    name: "New York Rangers",
    shortName: "NYR",
    accentClassName: "from-[#0038a8]/35 to-white/5",
    hockeyReferenceCode: "NYR",
    logoPath: "/NYR.png"
  },
  OTT: {
    name: "Ottawa Senators",
    shortName: "OTT",
    accentClassName: "from-[#c52032]/35 to-white/5",
    hockeyReferenceCode: "OTT",
    logoPath: "/OTT.png"
  },
  PHI: {
    name: "Philadelphia Flyers",
    shortName: "PHI",
    accentClassName: "from-[#f74902]/35 to-white/5",
    hockeyReferenceCode: "PHI",
    logoPath: "/PHI.png"
  },
  PIT: {
    name: "Pittsburgh Penguins",
    shortName: "PIT",
    accentClassName: "from-[#ffb81c]/35 to-white/5",
    hockeyReferenceCode: "PIT",
    logoPath: "/PIT.png"
  },
  SEA: {
    name: "Seattle Kraken",
    shortName: "SEA",
    accentClassName: "from-[#001628]/35 to-white/5",
    hockeyReferenceCode: "SEA",
    logoPath: "/SEA.png"
  },
  SJS: {
    name: "San Jose Sharks",
    shortName: "SJS",
    accentClassName: "from-[#006d75]/35 to-white/5",
    hockeyReferenceCode: "SJS",
    logoPath: "/SJS.png"
  },
  STL: {
    name: "St. Louis Blues",
    shortName: "STL",
    accentClassName: "from-[#003087]/35 to-white/5",
    hockeyReferenceCode: "STL",
    logoPath: "/STL.png"
  },
  TBL: {
    name: "Tampa Bay Lightning",
    shortName: "TBL",
    accentClassName: "from-[#002868]/35 to-white/5",
    hockeyReferenceCode: "TBL",
    logoPath: "/T.B.png"
  },
  TOR: {
    name: "Toronto Maple Leafs",
    shortName: "TOR",
    accentClassName: "from-[#003e7e]/35 to-white/5",
    hockeyReferenceCode: "TOR",
    logoPath: "/TOR.png"
  },
  UTA: {
    name: "Utah Mammoth",
    shortName: "UTA",
    accentClassName: "from-[#6e5f4a]/35 to-white/5",
    hockeyReferenceCode: "UTA",
    logoPath: "/UTA.png"
  },
  VAN: {
    name: "Vancouver Canucks",
    shortName: "VAN",
    accentClassName: "from-[#00205b]/35 to-white/5",
    hockeyReferenceCode: "VAN",
    logoPath: "/VAN.png"
  },
  VGK: {
    name: "Vegas Golden Knights",
    shortName: "VGK",
    accentClassName: "from-gold/35 to-white/5",
    hockeyReferenceCode: "VEG",
    logoPath: "/VGK.png"
  },
  WPG: {
    name: "Winnipeg Jets",
    shortName: "WPG",
    accentClassName: "from-[#041e42]/35 to-white/5",
    hockeyReferenceCode: "WPG",
    logoPath: "/WPG.png"
  },
  WSH: {
    name: "Washington Capitals",
    shortName: "WSH",
    accentClassName: "from-[#c8102e]/35 to-white/5",
    hockeyReferenceCode: "WSH",
    logoPath: "/WSH.png"
  }
};

const allTeams = Object.values(teams);

export function getTeamByCode(code: string) {
  return teams[code as keyof typeof teams] ?? null;
}

export function getLogoPathForTeam(code: string) {
  return getTeamByCode(code)?.logoPath ?? "";
}

export function buildRandomDistinctPair() {
  const leftIndex = Math.floor(Math.random() * allTeams.length);
  let rightIndex = Math.floor(Math.random() * allTeams.length);

  while (rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * allTeams.length);
  }

  return [allTeams[leftIndex], allTeams[rightIndex]] as [TeamInfo, TeamInfo];
}

function getRandomTeam(excludedShortNames: string[] = []) {
  const eligibleTeams = allTeams.filter((team) => !excludedShortNames.includes(team.shortName));
  return eligibleTeams[Math.floor(Math.random() * eligibleTeams.length)];
}

export function buildSpinReelTeams(centerTeam: TeamInfo, excludedShortNames: string[] = [], length = 10) {
  const reelTeams: TeamInfo[] = [];

  for (let index = 0; index < length; index += 1) {
    const nextExcluded = [centerTeam.shortName, ...excludedShortNames, ...reelTeams.map((team) => team.shortName)];
    reelTeams.push(getRandomTeam(nextExcluded));
  }

  reelTeams.push(centerTeam);
  return reelTeams;
}

export function buildRestingReelTeams(centerTeam: TeamInfo, excludedShortNames: string[] = []) {
  const topTeam = getRandomTeam([centerTeam.shortName, ...excludedShortNames]);
  const bottomTeam = getRandomTeam([centerTeam.shortName, topTeam.shortName, ...excludedShortNames]);
  return [topTeam, centerTeam, bottomTeam];
}
