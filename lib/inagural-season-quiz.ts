import type { TypedQuizQuestion } from "@/lib/cup-run-quiz";

export const inaguralSeasonQuizQuestions: TypedQuizQuestion[] = [
  {
    prompt: "Who scored the first ever goal in Golden Knights history? Hint: or first two.",
    acceptedAnswers: ["James Neal", "Neal"],
    displayAnswer: "James Neal",
    answerImages: [
      { src: "/James_Neal_2018-02-04_1.jpg", alt: "James Neal", objectPosition: "center top" }
    ]
  },
  {
    prompt: "What was the score of the first ever Golden Knights game?",
    acceptedAnswers: ["2-1", "2 1", "2 to 1", "Two one", "Two to one"],
    displayAnswer: "2-1",
    answerPlaceholder: "Example: 0-0",
    answerImages: [{ src: "/first-game.jpg", alt: "Golden Knights first game", objectPosition: "center center" }]
  },
  {
    prompt: "Who spoke prior to the first ever home game?",
    acceptedAnswers: ["Deryk Engelland", "Engelland", "Derek Engelland"],
    displayAnswer: "Deryk Engelland",
    answerImages: [{ src: "/engelland.jpg", alt: "Deryk Engelland", objectPosition: "center top" }]
  },
  {
    prompt: "What team did William Karlsson score his between-the-legs goal against?",
    acceptedAnswers: ["San Jose Sharks", "Sharks", "San Jose"],
    displayAnswer: "San Jose Sharks",
    answerPlaceholder: "Example: Vegas Golden Knights",
    answerImages: [
      {
        src: "/sjs-new.JPG",
        alt: "Vegas against San Jose",
        objectPosition: "center center",
        objectFit: "contain"
      }
    ]
  },
  {
    prompt: "Which player led the team in scoring during the 2018 playoff run?",
    acceptedAnswers: ["Reilly Smith", "Riley Smith", "Smith"],
    displayAnswer: "Reilly Smith",
    answerImages: [{ src: "/reilly-smith-5.jpg", alt: "Reilly Smith", objectPosition: "center top" }]
  },
  {
    prompt:
      "Name EVERY player to wear an \"A\" on their sweater during the 2018 regular season. In no particular order.",
    answerGroups: [
      ["Luca Sbisa", "Sbisa"],
      ["Reilly Smith", "Riley Smith", "Smith"],
      ["Deryk Engelland", "Derek Engelland", "Engelland"],
      ["David Perron", "Perron"],
      ["James Neal", "Neal"],
      ["Jason Garrison", "Garrison"]
    ],
    displayAnswer: "Luca Sbisa, Reilly Smith, Deryk Engelland, David Perron, James Neal, and Jason Garrison",
    answerPlaceholder: "Example: Player One, Player Two, Player Three",
    answerImages: [{ src: "/perron-new.jpg", alt: "David Perron", objectPosition: "center top" }]
  },
  {
    prompt: "How many home games did Vegas sell out during the Inagural Season?",
    acceptedAnswers: ["41", "Forty one", "Forty-one"],
    displayAnswer: "41",
    answerPlaceholder: "Example: 30",
    answerImages: [{ src: "/tmobile.webp", alt: "T-Mobile Arena", objectPosition: "center center" }]
  },
  {
    prompt:
      "Who scored the first, and only of the game, goal in Golden Knights playoff history?",
    acceptedAnswers: ["Shea Theodore", "Theodore"],
    displayAnswer: "Shea Theodore",
    answerImages: [
      { src: "/theodore.webp", alt: "Shea Theodore", objectPosition: "center top" }
    ]
  },
  {
    prompt: "Did Ryan Reaves start the season as a Golden Knight?",
    acceptedAnswers: ["No", "Nope"],
    displayAnswer: "No",
    answerPlaceholder: "Example: Yes/No",
    answerImages: [{ src: "/reaves.webp", alt: "Ryan Reaves", objectPosition: "center top" }]
  },
  {
    prompt:
      "Who were the youngest and oldest players to enter a game for the Golden Knights in the 2018 season?",
    answerGroups: [
      ["Dylan Ferguson", "Ferguson"],
      ["Deryk Engelland", "Derek Engelland", "Engelland"]
    ],
    displayAnswer: "Dylan Ferguson and Deryk Engelland",
    answerPlaceholder: "Example: Player One, Player Two",
    answerImages: [{ src: "/dylan-ferguson.jpg", alt: "Dylan Ferguson", objectPosition: "center top" }]
  },
  {
    prompt: "Who was the honorary captain of the Inagural Season?",
    acceptedAnswers: ["Marc-Andre Fleury", "Marc Andre Fleury", "Fleury", "MAF"],
    displayAnswer: "Marc-Andre Fleury",
    answerImages: [{ src: "/fleury-new.webp", alt: "Marc-Andre Fleury", objectPosition: "center top" }]
  },
  {
    prompt:
      "Which player infamously refused to get sent down to the AHL after signing a two-year, $9 million deal, leading to his suspension and retirement from the NHL after just three games?",
    acceptedAnswers: ["Vadim Shipachyov", "Vadim Shipachev", "Shipachyov", "Shipachev"],
    displayAnswer: "Vadim Shipachyov",
    answerImages: [{ src: "/shipaychov.webp", alt: "Vadim Shipachyov", objectPosition: "center top" }]
  },
  {
    prompt: "Who was the first ever Golden Knights draft pick?",
    acceptedAnswers: ["Cody Glass", "Glass"],
    displayAnswer: "Cody Glass",
    answerImages: [{ src: "/glass.jpg", alt: "Cody Glass", objectPosition: "center top" }]
  },
  {
    prompt: "Who was the first ever head coach of the Golden Knights?",
    acceptedAnswers: ["Gerard Gallant", "Gerard", "Gallant"],
    displayAnswer: "Gerard Gallant",
    answerImages: [{ src: "/gallantr.webp", alt: "Gerard Gallant", objectPosition: "center top" }]
  },
  {
    prompt: "Who did the Golden Knights face in the Stanley Cup Final?",
    acceptedAnswers: ["Washington Capitals", "Capitals", "Washington"],
    displayAnswer: "Washington Capitals",
    answerPlaceholder: "Example: Vegas Golden Knights",
    answerImages: [
      { src: "/636624462559682497-vegas-trophy.webp", alt: "Vegas against Washington", objectPosition: "center center" }
    ]
  },
  {
    prompt:
      "Who holds the record for most single-season points by a rookie, set in the 2018 season?",
    acceptedAnswers: ["Alex Tuch", "Tuch"],
    displayAnswer: "Alex Tuch",
    answerImages: [{ src: "/tuch.jpg", alt: "Alex Tuch", objectPosition: "center top" }]
  },
  {
    prompt: "Who won the Lady Byng Trophy AND finished top 10 in Hart Trophy voting?",
    acceptedAnswers: ["William Karlsson", "Karlsson", "Wild Bill"],
    displayAnswer: "William Karlsson",
    answerImages: [
      { src: "/william-karlsson-3.jpg", alt: "William Karlsson", objectPosition: "center top" }
    ]
  },
  {
    prompt: "Did Zach Whitecloud debut in the Inagural Season?",
    acceptedAnswers: ["Yes", "Yeah", "Yep"],
    displayAnswer: "Yes",
    answerPlaceholder: "Example: Yes/No",
    answerImages: [{ src: "/whitecloud.webp", alt: "Zach Whitecloud", objectPosition: "center top" }]
  },
  {
    prompt: "What position in the Pacific Division did the Golden Knights finish?",
    acceptedAnswers: ["1st", "First", "1", "First place", "1st place"],
    displayAnswer: "1st",
    answerPlaceholder: "Example: 3rd",
    answerImages: [{ src: "/champions.jpg", alt: "Golden Knights division champions", objectPosition: "center center" }]
  },
  {
    prompt: "How many games did the Golden Knights play in the 2018 playoffs?",
    acceptedAnswers: ["20", "Twenty"],
    displayAnswer: "20",
    answerPlaceholder: "Example: 18",
    answerImages: [{ src: "/the-save.jpg", alt: "2018 playoff moment", objectPosition: "center center" }]
  }
];
