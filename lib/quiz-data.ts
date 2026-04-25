export type QuizOption = {
  label: string;
  result: ResultKey;
};

export type QuizQuestion = {
  prompt: string;
  kicker: string;
  options: QuizOption[];
};

export type ResultKey = "creator" | "finisher" | "engine" | "protector";

export const resultProfiles: Record<
  ResultKey,
  {
    title: string;
    subtitle: string;
    description: string;
    traits: string[];
  }
> = {
  creator: {
    title: "The Playmaking Center",
    subtitle: "You see the next pass before the lane fully opens.",
    description:
      "Your answers lean toward control, patience, and making the people around you better. You are the fan who values the setup as much as the finish.",
    traits: ["Vision", "Tempo control", "Late-game poise"]
  },
  finisher: {
    title: "The Top-Six Finisher",
    subtitle: "You want the puck when the game needs a moment.",
    description:
      "Your profile is built around pressure, confidence, and decisive scoring chances. You trust talent, timing, and a clean release.",
    traits: ["Shot creation", "Confidence", "Big swings"]
  },
  engine: {
    title: "The Two-Way Engine",
    subtitle: "You tilt the ice by doing a little bit of everything.",
    description:
      "Your answers point toward pace, responsibility, and winning details. You like players who connect shifts and make the game easier to manage.",
    traits: ["Pace", "Reliability", "Details"]
  },
  protector: {
    title: "The Shutdown Defender",
    subtitle: "You are happiest when the other team has no clean path.",
    description:
      "Your result is about structure, edge, and protecting the middle of the ice. You appreciate the shifts that do not always make the highlight reel.",
    traits: ["Structure", "Physicality", "Defensive reads"]
  }
};

export const quizQuestions: QuizQuestion[] = [
  {
    kicker: "Opening shift",
    prompt: "What kind of first impression are you trying to make?",
    options: [
      { label: "Set someone up for an easy chance", result: "creator" },
      { label: "Fire the first dangerous shot", result: "finisher" },
      { label: "Win the puck back and keep moving", result: "engine" },
      { label: "Close space and make the rink feel small", result: "protector" }
    ]
  },
  {
    kicker: "Late third period",
    prompt: "Vegas is protecting a one-goal lead. What do you trust most?",
    options: [
      { label: "Smart possession and clean exits", result: "creator" },
      { label: "One more goal to end the stress", result: "finisher" },
      { label: "Short shifts and responsible pressure", result: "engine" },
      { label: "Layered defense in front of the goalie", result: "protector" }
    ]
  },
  {
    kicker: "Power play",
    prompt: "Where do you want to be on the advantage?",
    options: [
      { label: "Half wall, scanning every option", result: "creator" },
      { label: "Faceoff circle, ready to one-time it", result: "finisher" },
      { label: "Net front, winning rebounds and tips", result: "engine" },
      { label: "Blue line, keeping everything organized", result: "protector" }
    ]
  },
  {
    kicker: "Roster taste",
    prompt: "Which player type do you always end up defending?",
    options: [
      { label: "The passer whose best work is subtle", result: "creator" },
      { label: "The scorer who can go quiet until the big chance", result: "finisher" },
      { label: "The middle-six driver who fixes every line", result: "engine" },
      { label: "The defenseman who eats the ugly minutes", result: "protector" }
    ]
  },
  {
    kicker: "Playoff mood",
    prompt: "What wins a tight series?",
    options: [
      { label: "Stars creating better looks than the opponent", result: "creator" },
      { label: "Finishing chances when the window appears", result: "finisher" },
      { label: "Depth wearing teams down shift after shift", result: "engine" },
      { label: "Structure holding up when chaos hits", result: "protector" }
    ]
  }
];
