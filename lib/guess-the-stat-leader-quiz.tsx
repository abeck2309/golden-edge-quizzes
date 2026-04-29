import type { TypedQuizQuestion } from "@/lib/cup-run-quiz";

export const guessTheStatLeaderQuizQuestions: TypedQuizQuestion[] = [
  {
    prompt: "Name the top 3 2022-23 regular season goal scorers in order.",
    promptText: "Name the top 3 2022-23 regular season goal scorers in order.",
    answerGroups: [
      ["Jonathan Marchessault", "Marchessault", "Marchy"],
      ["Jack Eichel", "Eichel"],
      ["Reilly Smith", "Smith"]
    ],
    requireAnswerGroupOrder: true,
    displayAnswer: "Jonathan Marchessault, Jack Eichel, Reilly Smith",
    answerPlaceholder: "Example: Mark Stone, Jack Eichel, Shea Theodore",
    answerImages: [{ src: "/18417274_web1_HKN-KNIGHTS-OCT11-23-018.webp", alt: "Golden Knights goal scorers", objectPosition: "center center" }]
  },
  {
    prompt: "Who led the team in TOI in the 2017-18 season?",
    promptText: "Who led the team in TOI in the 2017-18 season?",
    acceptedAnswers: ["Nate Schmidt", "Schmidt"],
    displayAnswer: "Nate Schmidt",
    answerPlaceholder: "Example: Shea Theodore",
    answerImages: [{ src: "/636630537065997757-2018-05-27-Nate-Schmidt.webp", alt: "Nate Schmidt", objectPosition: "center top" }]
  },
  {
    prompt: "Who holds the single-season record for most PIMs?",
    promptText: "Who holds the single-season record for most PIMs?",
    acceptedAnswers: ["Jeremy Lauzon", "Lauzon"],
    displayAnswer: "Jeremy Lauzon",
    answerPlaceholder: "Example: Keegan Kolesar",
    answerImages: [{ src: "/lauzon.jpg", alt: "Jeremy Lauzon", objectPosition: "center top" }]
  },
  {
    prompt: "Who holds the record for most playoff games played in VGK history?",
    promptText: "Who holds the record for most playoff games played in VGK history?",
    acceptedAnswers: ["Shea Theodore", "Theodore"],
    displayAnswer: "Shea Theodore",
    answerPlaceholder: "Example: Alex Pietrangelo",
    answerImages: [{ src: "/theodore.webp", alt: "Shea Theodore", objectPosition: "center top" }]
  },
  {
    prompt: "Name the four players who have only played one regular-season VGK game.",
    promptText: "Name the four players who have only played one regular-season VGK game.",
    answerGroups: [
      ["Sven Baertschi", "Baertschi"],
      ["Dylan Ferguson", "Ferguson"],
      ["Jimmy Schuldt", "Schuldt"],
      ["Garret Sparks", "Sparks"]
    ],
    displayAnswer: "Sven Baertschi, Dylan Ferguson, Jimmy Schuldt, Garret Sparks",
    answerPlaceholder: "Example: Player One, Player Two, Player Three, Player Four",
    answerImages: [{ src: "/dylan-ferguson.jpg", alt: "Dylan Ferguson", objectPosition: "center top" }]
  },
  {
    prompt: "Who has the most All-Star Game selections as a Golden Knight?",
    promptText: "Who has the most All-Star Game selections as a Golden Knight?",
    acceptedAnswers: ["Marc Andre Fleury", "Marc-Andre Fleury", "Fleury"],
    displayAnswer: "Marc-Andre Fleury",
    answerPlaceholder: "Example: Jack Eichel",
    answerImages: [{ src: "/fleury-new.webp", alt: "Marc-Andre Fleury", objectPosition: "center top" }]
  },
  {
    prompt: "Who has the most assists, regular season plus playoffs, in VGK history?",
    promptText: "Who has the most assists, regular season plus playoffs, in VGK history?",
    acceptedAnswers: ["Shea Theodore", "Theodore"],
    displayAnswer: "Shea Theodore",
    answerPlaceholder: "Example: Jonathan Marchessault",
    answerImages: [{ src: "/Shea Theodore 021225.jpg", alt: "Shea Theodore", objectPosition: "center top" }]
  },
  {
    prompt: "Who has the most short-handed goals in VGK history?",
    promptText: "Who has the most short-handed goals in VGK history?",
    acceptedAnswers: ["William Karlsson", "Karlsson", "Wild Bill"],
    displayAnswer: "William Karlsson",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/william-karlsson-3.jpg", alt: "William Karlsson", objectPosition: "center top" }]
  },
  {
    prompt: "Which three players have won an individual trophy with Vegas?",
    promptText: "Which three players have won an individual trophy with Vegas?",
    answerGroups: [
      ["Deryk Engelland", "Engelland"],
      ["William Karlsson", "Karlsson"],
      ["Marc Andre Fleury", "Marc-Andre Fleury", "Fleury"]
    ],
    displayAnswer: "Deryk Engelland, William Karlsson, Marc-Andre Fleury",
    answerPlaceholder: "Example: Player One, Player Two, Player Three",
    answerImages: [{ src: "/636624462559682497-vegas-trophy.webp", alt: "Golden Knights trophy winners", objectPosition: "center center" }]
  },
  {
    prompt: "Who led the Golden Knights in both goals and points in 2019-20?",
    promptText: "Who led the Golden Knights in both goals and points in 2019-20?",
    acceptedAnswers: ["Max Pacioretty", "Pacioretty"],
    displayAnswer: "Max Pacioretty",
    answerPlaceholder: "Example: Jack Eichel",
    answerImages: [{ src: "/pacioertty.webp", alt: "Max Pacioretty", objectPosition: "center top" }]
  },
  {
    prompt: "Who holds the record for most power-play goals in a season?",
    promptText: "Who holds the record for most power-play goals in a season?",
    acceptedAnswers: ["Pavel Dorofeyev", "Dorofeyev"],
    displayAnswer: "Pavel Dorofeyev",
    answerPlaceholder: "Example: Jonathan Marchessault",
    answerImages: [{ src: "/dorofeyev.webp", alt: "Pavel Dorofeyev", objectPosition: "center top" }]
  },
  {
    prompt: "Who has the most points in a single playoff run in VGK history?",
    promptText: "Who has the most points in a single playoff run in VGK history?",
    acceptedAnswers: ["Jack Eichel", "Eichel"],
    displayAnswer: "Jack Eichel",
    answerPlaceholder: "Example: Jonathan Marchessault",
    answerImages: [{ src: "/eichel.jpg", alt: "Jack Eichel", objectPosition: "center top" }]
  },
  {
    prompt: "Who, and in what year, had the most shutouts in a single season?",
    promptText: "Who, and in what year, had the most shutouts in a single season?",
    answerGroups: [
      ["Marc Andre Fleury", "Marc-Andre Fleury", "Fleury"],
      ["2018 19", "2018-19", "2018 2019", "2018-2019", "2018", "2019"]
    ],
    displayAnswer: "Marc-Andre Fleury, 2018-19",
    answerPlaceholder: "Example: Marc-Andre Fleury, 2018-19",
    answerImages: [{ src: "/14817543_web1_HKN-KNIGHTS-021621_es_004.webp", alt: "Marc-Andre Fleury", objectPosition: "center top" }]
  },
  {
    prompt: (
      <>
        Shoutout{" "}
        <a
          href="https://www.instagram.com/gold_team_bad/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-gold-bright"
        >
          @gold_team_bad
        </a>
        , name the all-time leaders in offensive, defensive, and goalie point shares.
      </>
    ),
    promptText:
      "Shoutout @gold_team_bad, name the all-time leaders in offensive, defensive, and goalie point shares.",
    answerGroups: [
      ["Jonathan Marchessault", "Marchessault", "Marchy"],
      ["Brayden McNabb", "McNabb"],
      ["Marc Andre Fleury", "Marc-Andre Fleury", "Fleury"]
    ],
    requireAnswerGroupOrder: true,
    displayAnswer: "Jonathan Marchessault, Brayden McNabb, Marc-Andre Fleury",
    answerPlaceholder: "Example: Player One, Player Two, Player Three",
    answerImages: [{ src: "/jonathan-marchessault-8.jpg", alt: "Jonathan Marchessault", objectPosition: "center top" }]
  },
  {
    prompt: "Who has the highest shooting percentage in VGK history?",
    promptText: "Who has the highest shooting percentage in VGK history?",
    acceptedAnswers: ["Ivan Barbashev", "Barbashev"],
    displayAnswer: "Ivan Barbashev",
    answerPlaceholder: "Example: Pavel Dorofeyev",
    answerImages: [{ src: "/ivan-barbashev-10.jpg", alt: "Ivan Barbashev", objectPosition: "52% 24%" }]
  },
  {
    prompt: "Which arena do the Golden Knights have the best all-time points percentage at?",
    promptText: "Which arena do the Golden Knights have the best all-time points percentage at?",
    acceptedAnswers: [
      "SAP Center at San Jose",
      "SAP Center",
      "San Jose",
      "SAP Center San Jose"
    ],
    displayAnswer: "SAP Center at San Jose",
    answerPlaceholder: "Example: T-Mobile Arena",
    answerImages: [{ src: "/sap-center-home-nhl-san-jose-sharks-california-usa-395559367.webp", alt: "SAP Center at San Jose", objectPosition: "center center", objectFit: "contain" }]
  },
  {
    prompt: "Who has the highest assists per game in VGK history, minimum 25 GP?",
    promptText: "Who has the highest assists per game in VGK history, minimum 25 GP?",
    acceptedAnswers: ["David Perron", "Perron"],
    displayAnswer: "David Perron",
    answerPlaceholder: "Example: Jack Eichel",
    answerImages: [{ src: "/perron-new.jpg", alt: "David Perron", objectPosition: "center top" }]
  },
  {
    prompt: "Who has the most takeaways in VGK history?",
    promptText: "Who has the most takeaways in VGK history?",
    acceptedAnswers: ["Mark Stone", "Stone"],
    displayAnswer: "Mark Stone",
    answerPlaceholder: "Example: William Karlsson",
    answerImages: [{ src: "/mark-stone-2.jpg", alt: "Mark Stone", objectPosition: "center top" }]
  },
  {
    prompt: "Who has the most hits in VGK playoff history?",
    promptText: "Who has the most hits in VGK playoff history?",
    acceptedAnswers: ["William Carrier", "Carrier"],
    displayAnswer: "William Carrier",
    answerPlaceholder: "Example: Keegan Kolesar",
    answerImages: [{ src: "/carrier.jpg", alt: "William Carrier", objectPosition: "center top" }]
  },
  {
    prompt: "Marc-Andre Fleury is the only Golden Knights goalie to record a hit in a regular-season or playoff game. How many did he have?",
    promptText: "Marc-Andre Fleury is the only Golden Knights goalie to record a hit in a regular-season or playoff game. How many did he have?",
    acceptedAnswers: ["3", "Three"],
    displayAnswer: "3",
    answerPlaceholder: "Example: 2",
    answerImages: [{ src: "/fleury-new.webp", alt: "Marc-Andre Fleury", objectPosition: "center top" }]
  }
];
