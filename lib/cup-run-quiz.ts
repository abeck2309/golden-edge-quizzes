export type AnswerImage = {
  src: string;
  alt: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  diagonalFrameClassName?: string;
  diagonalImageClassName?: string;
};

export type TypedQuizQuestion = {
  prompt: React.ReactNode;
  promptText?: string;
  acceptedAnswers?: string[];
  answerGroups?: string[][];
  acceptAnyAnswerGroup?: boolean;
  requireAnswerGroupOrder?: boolean;
  displayAnswer: string;
  answerPlaceholder?: string;
  answerImages?: AnswerImage[];
};

export const cupRunQuizQuestions: TypedQuizQuestion[] = [
  {
    prompt: "Who scored a hat trick in Game 5 of the Cup Final?",
    acceptedAnswers: ["Mark Stone", "Stone"],
    displayAnswer: "Mark Stone",
    answerImages: [{ src: "/mark-stone-2.jpg", alt: "Mark Stone", objectPosition: "center top" }]
  },
  {
    prompt: "Who scored the first goal of the 2023 playoffs for the Golden Knights?",
    acceptedAnswers: ["William Karlsson", "Karlsson", "Wild Bill"],
    displayAnswer: "William Karlsson",
    answerImages: [
      { src: "/william-karlsson-3.jpg", alt: "William Karlsson", objectPosition: "center top" }
    ]
  },
  {
    prompt: "Who led the team in scoring that year?",
    acceptedAnswers: ["Jack Eichel", "Eichel"],
    displayAnswer: "Jack Eichel",
    answerImages: [{ src: "/jack-eichel-4.jpg", alt: "Jack Eichel", objectPosition: "center top" }]
  },
  {
    prompt:
      "Who scored the eventual Cup-clinching goal on the infamous \"Rat Trap Shift\" in Game 5 of the Final?",
    acceptedAnswers: ["Reilly Smith", "Riley Smith", "Smith"],
    displayAnswer: "Reilly Smith",
    answerImages: [{ src: "/reilly-smith-5.jpg", alt: "Reilly Smith", objectPosition: "center top" }]
  },
  {
    prompt: "Which defenseman led all Vegas skaters in ice time during the 2023 playoffs?",
    acceptedAnswers: ["Alex Pietrangelo", "Pietrangelo"],
    displayAnswer: "Alex Pietrangelo",
    answerImages: [
      { src: "/alex-pietrangelo-7.jpg", alt: "Alex Pietrangelo", objectPosition: "center top" }
    ]
  },
  {
    prompt: "Who were the two players to score OT GWGs in the WCF vs. Dallas?",
    answerGroups: [
      ["Brett Howden", "Howden"],
      ["Chandler Stephenson", "Stephenson"]
    ],
    displayAnswer: "Brett Howden and Chandler Stephenson",
    answerPlaceholder: "Example: Mark Stone, Jack Eichel",
    answerImages: [
      {
        src: "/brett-howden-9.jpg",
        alt: "Brett Howden",
        objectPosition: "center 20%"
      }
    ]
  },
  {
    prompt: "Who won the Conn Smythe Trophy?",
    acceptedAnswers: ["Jonathan Marchessault", "Marchessault", "Marchy"],
    displayAnswer: "Jonathan Marchessault",
    answerImages: [
      {
        src: "/jonathan-marchessault-8.jpg",
        alt: "Jonathan Marchessault",
        objectPosition: "center top"
      }
    ]
  },
  {
    prompt: "Who led the team in hits?",
    acceptedAnswers: ["Keegan Kolesar", "Kolesar"],
    displayAnswer: "Keegan Kolesar",
    answerImages: [
      { src: "/keegan-kolesar-9.jpg", alt: "Keegan Kolesar", objectPosition: "center top" }
    ]
  },
  {
    prompt: "Who was given the nickname \"The Cigarette Machine\" during the Final series vs. Florida?",
    acceptedAnswers: ["Ivan Barbashev", "Barbashev"],
    displayAnswer: "Ivan Barbashev",
    answerImages: [
      { src: "/ivan-barbashev-10.jpg", alt: "Ivan Barbashev", objectPosition: "52% 24%" }
    ]
  },
  {
    prompt: "Who scored exactly 9 years after his Cup-clinching goal in 2014?",
    acceptedAnswers: ["Alec Martinez", "Martinez"],
    displayAnswer: "Alec Martinez",
    answerImages: [
      { src: "/alec-martinez-11.jpg", alt: "Alec Martinez", objectPosition: "center top" }
    ]
  },
  {
    prompt: "Who started the playoffs in goal for Vegas vs. Winnipeg?",
    acceptedAnswers: ["Laurent Brossoit", "Brossoit"],
    displayAnswer: "Laurent Brossoit",
    answerImages: [
      { src: "/laurent-brossoit.jpg", alt: "Laurent Brossoit", objectPosition: "center top" }
    ]
  },
  {
    prompt: "How many names were engraved on Lord Stanley for the organization?",
    acceptedAnswers: ["52", "Fifty two", "Fifty-two"],
    displayAnswer: "52",
    answerPlaceholder: "Example: 23",
    answerImages: [{ src: "/StanleyCup.jpg", alt: "Stanley Cup", objectPosition: "center center" }]
  },
  {
    prompt: "Who was the only Golden Knights player to score a shorthanded goal during the run?",
    acceptedAnswers: ["Mark Stone", "Stone"],
    displayAnswer: "Mark Stone",
    answerImages: [{ src: "/mark-stone-2.jpg", alt: "Mark Stone", objectPosition: "center top" }]
  },
  {
    prompt:
      "What nickname was used for the players who started Game 5 of the Stanley Cup Final for Vegas?",
    acceptedAnswers: ["The Golden Misfits", "Golden Misfits", "Misfits"],
    displayAnswer: "The Golden Misfits",
    answerPlaceholder: "Example: The Manitoba Maniac",
    answerImages: [
      { src: "/vegas-strong-15.jpg", alt: "The Golden Misfits", objectPosition: "center center" }
    ]
  },
  {
    prompt:
      "Which coach, now the head coach in Henderson, was part of the coaching staff during the 2023 run?",
    acceptedAnswers: ["Ryan Craig", "Craig"],
    displayAnswer: "Ryan Craig",
    answerImages: [{ src: "/ryan-craig.jpg", alt: "Ryan Craig", objectPosition: "48% 18%" }]
  },
  {
    prompt:
      "How many active players in the lineup for Game 5 of the Stanley Cup Final were Canadian?",
    acceptedAnswers: ["15", "Fifteen"],
    displayAnswer: "15",
    answerPlaceholder: "Example: 8",
    answerImages: [
      { src: "/Shea Theodore 021225.jpg", alt: "Shea Theodore", objectPosition: "center top" }
    ]
  },
  {
    prompt: "How many games did Vegas play in the 2023 playoffs?",
    acceptedAnswers: ["22", "Twenty two", "Twenty-two"],
    displayAnswer: "22",
    answerPlaceholder: "Example: 18",
    answerImages: [
      {
        src: "/18310732_web1_HKN-KNIGHTS-OCT11-23-021.jpg",
        alt: "Golden Knights Cup celebration",
        objectPosition: "center center"
      }
    ]
  },
  {
    prompt: "Who were the two oldest players on the playoff roster?",
    answerGroups: [
      ["Alec Martinez", "Martinez"],
      ["Phil Kessel", "Kessel"]
    ],
    displayAnswer: "Alec Martinez and Phil Kessel",
    answerPlaceholder: "Example: Mark Stone, Jack Eichel",
    answerImages: [
      { src: "/alec-martinez-11.jpg", alt: "Alec Martinez", objectPosition: "center top" },
      { src: "/phil-kessel.jpg", alt: "Phil Kessel", objectPosition: "center top" }
    ]
  },
  {
    prompt: "How many Misfits were on the Cup-winning roster?",
    acceptedAnswers: ["6", "Six"],
    displayAnswer: "6",
    answerPlaceholder: "Example: 4",
    answerImages: [
      { src: "/misfits.jpg", alt: "Golden Knights Misfits", objectPosition: "center center" }
    ]
  },
  {
    prompt: "Who was the one former Golden Knight on the 2023 Panthers roster?",
    acceptedAnswers: ["Nick Cousins", "Cousins"],
    displayAnswer: "Nick Cousins",
    answerImages: [{ src: "/nick-cousins.jpg", alt: "Nick Cousins", objectPosition: "center top" }]
  }
];
