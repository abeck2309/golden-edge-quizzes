import type { TypedQuizQuestion } from "@/lib/cup-run-quiz";
import { jerseyNumberPrompt } from "@/lib/jersey-number-prompt";

export const guessTheJerseyNumberQuizQuestions: TypedQuizQuestion[] = [
  {
    prompt: jerseyNumberPrompt(77),
    promptText: "Name ANY player to wear number 77",
    answerGroups: [["Kai Uchacz", "Uchacz"], ["Brad Hunt", "Hunt"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Kai Uchacz or Brad Hunt",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-77.png", alt: "Number 77 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(23),
    promptText: "Name ANY player to wear number 23",
    answerGroups: [
      ["Daniel Carr", "Carr"],
      ["Alec Martinez", "Martinez"],
      ["Cole Reinhardt", "Reinhardt"]
    ],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Daniel Carr, Alec Martinez, or Cole Reinhardt",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-23.png", alt: "Number 23 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(90),
    promptText: "Name ANY player to wear number 90",
    answerGroups: [["Tomas Tatar", "Tatar"], ["Robin Lehner", "Lehner"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Tomas Tatar or Robin Lehner",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-90.png", alt: "Number 90 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(56),
    promptText: "Name ANY player to wear number 56",
    answerGroups: [["Erik Haula", "Haula", "Eric Haula"], ["Sheldon Rempal", "Rempal"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Erik Haula or Sheldon Rempal",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-56.png", alt: "Number 56 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(35),
    promptText: "Name ANY player to wear number 35",
    answerGroups: [["Oscar Dansk", "Dansk"], ["Ilya Samsonov", "Samsonov"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Oscar Dansk or Ilya Samsonov",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-35.png", alt: "Number 35 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(18),
    promptText: "Name ANY player to wear number 18",
    answerGroups: [
      ["James Neal", "Neal"],
      ["Peyton Krebs", "Krebs"],
      ["Robert Hagg", "Hagg"]
    ],
    acceptAnyAnswerGroup: true,
    displayAnswer: "James Neal, Peyton Krebs, or Robert Hagg",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-18.png", alt: "Number 18 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(62),
    promptText: "Name ANY player to wear number 62",
    answerGroups: [
      ["Daniil Miromanov", "Miromanov"],
      ["Raphael Lavoie", "Lavoie"],
      ["Nic Dowd", "Dowd"]
    ],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Daniil Miromanov, Raphael Lavoie, or Nic Dowd",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-62.png", alt: "Number 62 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(13),
    promptText: "Name ANY player to wear number 13",
    answerGroups: [["Brendan Leipsic", "Leipsic"], ["Tomas Jurco", "Jurco"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Brendan Leipsic or Tomas Jurco",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-13.png", alt: "Number 13 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(81),
    promptText: "Name ANY player to wear number 81",
    acceptedAnswers: ["Jonathan Marchessault", "Marchessault", "Marchy"],
    displayAnswer: "Jonathan Marchessault",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-81.png", alt: "Number 81 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(24),
    promptText: "Name ANY player to wear number 24",
    answerGroups: [["Oscar Lindberg", "Lindberg"], ["Adam Brooks", "Brooks"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Oscar Lindberg or Adam Brooks",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-24.png", alt: "Number 24 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(8),
    promptText: "Name ANY player to wear number 8",
    acceptedAnswers: ["Phil Kessel", "Kessel"],
    displayAnswer: "Phil Kessel",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-8.png", alt: "Number 8 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(47),
    promptText: "Name ANY player to wear number 47",
    answerGroups: [
      ["Luca Sbisa", "Sbisa"],
      ["Sven Baertschi", "Baertschi"],
      ["Grigori Denisenko", "Denisenko"]
    ],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Luca Sbisa, Sven Baertschi, or Grigori Denisenko",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-47.png", alt: "Number 47 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(22),
    promptText: "Name ANY player to wear number 22",
    answerGroups: [
      ["Nick Holden", "Holden"],
      ["Michael Amadio", "Amadio"],
      ["Cole Schwindt", "Schwindt"],
      ["Cole Smith", "Smith"]
    ],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Nick Holden, Michael Amadio, Cole Schwindt, or Cole Smith",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-22.png", alt: "Number 22 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(40),
    promptText: "Name ANY player to wear number 40",
    answerGroups: [
      ["Akira Schmid", "Schmid"],
      ["Ryan Carpenter", "Carpenter"],
      ["Garret Sparks", "Sparks"],
      ["Lukas Cormier", "Cormier"]
    ],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Akira Schmid, Ryan Carpenter, Garret Sparks, or Lukas Cormier",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-40.png", alt: "Number 40 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(51),
    promptText: "Name ANY player to wear number 51",
    answerGroups: [["Derrick Pouliot", "Pouliot"], ["Byron Froese", "Froese"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Derrick Pouliot or Byron Froese",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-51.png", alt: "Number 51 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(93),
    promptText: "Name ANY player to wear number 93",
    acceptedAnswers: ["Mitch Marner", "Marner"],
    displayAnswer: "Mitch Marner",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-93.png", alt: "Number 93 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(30),
    promptText: "Name ANY player to wear number 30",
    answerGroups: [
      ["Malcolm Subban", "Subban"],
      ["Jiri Patera", "Patera"],
      ["Carl Lindbom", "Lindbom"]
    ],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Malcolm Subban, Jiri Patera, or Carl Lindbom",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-30.png", alt: "Number 30 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(75),
    promptText: "Name ANY player to wear number 75",
    acceptedAnswers: ["Ryan Reaves", "Reaves"],
    displayAnswer: "Ryan Reaves",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-75.png", alt: "Number 75 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(25),
    promptText: "Name ANY player to wear number 25",
    acceptedAnswers: ["Stefan Matteau", "Matteau"],
    displayAnswer: "Stefan Matteau",
    answerPlaceholder: "Example: Mark Stone",
    answerImages: [{ src: "/blank-25.png", alt: "Number 25 jersey", objectFit: "contain" }]
  },
  {
    prompt: jerseyNumberPrompt(58),
    promptText: "Name ANY player to wear number 58",
    acceptedAnswers: [
      "Vegas Shooting Victims",
      "Las Vegas Shooting Victims",
      "Las Vegas Shooting",
      "Vegas Shooting",
      "Vegas Massacre",
      "Las Vegas Massacre",
      "Vegas Strong",
      "Las Vegas Strong",
      "October 1 Shooting",
      "October 1 Massacre",
      "1 October Shooting",
      "1 October Massacre",
      "October 1",
      "Route 91",
      "Route 91 Victims"
    ],
    displayAnswer: "Vegas shooting victims",
    answerPlaceholder: "Example: Vegas Strong",
    answerImages: [{ src: "/blank-58.png", alt: "Number 58 jersey", objectFit: "contain" }]
  }
];
