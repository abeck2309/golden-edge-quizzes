import type { TypedQuizQuestion } from "@/lib/cup-run-quiz";

export const leadershipQuizQuestions: TypedQuizQuestion[] = [
  {
    prompt: "Who has served as VGK captain from 2020-present?",
    promptText: "Who has served as VGK captain from 2020-present?",
    acceptedAnswers: ["Mark Stone", "Stone"],
    displayAnswer: "Mark Stone",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Who has served as a VGK alternate captain from 2021-2025?",
    promptText: "Who has served as a VGK alternate captain from 2021-2025?",
    acceptedAnswers: ["Alex Pietrangelo", "Pietrangelo"],
    displayAnswer: "Alex Pietrangelo",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Who served as a VGK alternate captain from 2017-2023?",
    promptText: "Who served as a VGK alternate captain from 2017-2023?",
    acceptedAnswers: ["Reilly Smith", "Smith"],
    displayAnswer: "Reilly Smith",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Who served as a VGK alternate captain from 2019-2022?",
    promptText: "Who served as a VGK alternate captain from 2019-2022?",
    acceptedAnswers: ["Max Pacioretty", "Pacioretty"],
    displayAnswer: "Max Pacioretty",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Who served as a VGK alternate captain from 2017-2020?",
    promptText: "Who served as a VGK alternate captain from 2017-2020?",
    acceptedAnswers: ["Deryk Engelland", "Engelland"],
    displayAnswer: "Deryk Engelland",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Who served as a VGK alternate captain only during 2018-19?",
    promptText: "Who served as a VGK alternate captain only during 2018-19?",
    acceptedAnswers: ["Pierre Edouard Bellemare", "Pierre-Edouard Bellemare", "Bellemare"],
    displayAnswer: "Pierre-Edouard Bellemare",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Who served as a VGK alternate captain only during 2023-24?",
    promptText: "Who served as a VGK alternate captain only during 2023-24?",
    acceptedAnswers: ["Jonathan Marchessault", "Marchessault", "Marchy"],
    displayAnswer: "Jonathan Marchessault",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Name ANY player who served as a VGK alternate captain only during 2017-18.",
    promptText: "Name ANY player who served as a VGK alternate captain only during 2017-18.",
    answerGroups: [
      ["Jason Garrison", "Garrison"],
      ["James Neal", "Neal"],
      ["David Perron", "Perron"],
      ["Luca Sbisa", "Sbisa"]
    ],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Jason Garrison, James Neal, David Perron, or Luca Sbisa",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Name ANY player who has served as a VGK alternate captain from 2023-present.",
    promptText: "Name ANY player who has served as a VGK alternate captain from 2023-present.",
    answerGroups: [["Jack Eichel", "Eichel"], ["William Karlsson", "Karlsson"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Jack Eichel or William Karlsson",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Name ANY player who joined VGK captaincy during 2025-26.",
    promptText: "Name ANY player who joined VGK captaincy during 2025-26.",
    answerGroups: [["Mitchell Marner", "Marner"], ["Brayden McNabb", "McNabb"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Mitchell Marner or Brayden McNabb",
    answerPlaceholder: "Example: Mark Stone"
  },
  {
    prompt: "Who led VGK management from 2016-2019?",
    promptText: "Who led VGK management from 2016-2019?",
    acceptedAnswers: ["George McPhee", "McPhee"],
    displayAnswer: "George McPhee",
    answerPlaceholder: "Example: Kelly McCrimmon"
  },
  {
    prompt: "Who served as VGK head coach from 2017-2020?",
    promptText: "Who served as VGK head coach from 2017-2020?",
    acceptedAnswers: ["Gerard Gallant", "Gallant"],
    displayAnswer: "Gerard Gallant",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Who served as VGK head coach from 2019-2022?",
    promptText: "Who served as VGK head coach from 2019-2022?",
    acceptedAnswers: ["Peter DeBoer", "DeBoer", "Deboer"],
    displayAnswer: "Peter DeBoer",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Who served as VGK head coach from 2022-2026?",
    promptText: "Who served as VGK head coach from 2022-2026?",
    acceptedAnswers: ["Bruce Cassidy", "Cassidy"],
    displayAnswer: "Bruce Cassidy",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Which assistant coach was on the VGK bench from 2017-2022?",
    promptText: "Which assistant coach was on the VGK bench from 2017-2022?",
    acceptedAnswers: ["Ryan McGill", "McGill"],
    displayAnswer: "Ryan McGill",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Which assistant coach was on the VGK bench from 2017-2020?",
    promptText: "Which assistant coach was on the VGK bench from 2017-2020?",
    acceptedAnswers: ["Mike Kelly", "Kelly"],
    displayAnswer: "Mike Kelly",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Which assistant coach was on the VGK bench from 2017-2023?",
    promptText: "Which assistant coach was on the VGK bench from 2017-2023?",
    acceptedAnswers: ["Ryan Craig", "Craig"],
    displayAnswer: "Ryan Craig",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Who has led VGK management from 2019-present?",
    promptText: "Who has led VGK management from 2019-present?",
    acceptedAnswers: ["Kelly McCrimmon", "McCrimmon"],
    displayAnswer: "Kelly McCrimmon",
    answerPlaceholder: "Example: Kelly McCrimmon"
  },
  {
    prompt: "Which assistant coach was on the VGK bench from 2019-2023?",
    promptText: "Which assistant coach was on the VGK bench from 2019-2023?",
    acceptedAnswers: ["Misha Donskov", "Donskov"],
    displayAnswer: "Misha Donskov",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Which assistant coach was on the VGK bench from 2020-2022?",
    promptText: "Which assistant coach was on the VGK bench from 2020-2022?",
    acceptedAnswers: ["Steve Spott", "Spott"],
    displayAnswer: "Steve Spott",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Which assistant coach has been on the VGK bench from 2022-present?",
    promptText: "Which assistant coach has been on the VGK bench from 2022-present?",
    acceptedAnswers: ["John Stevens", "Stevens"],
    displayAnswer: "John Stevens",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Name ANY assistant coach who has been on the VGK bench from 2023-present.",
    promptText: "Name ANY assistant coach who has been on the VGK bench from 2023-present.",
    answerGroups: [["Dominique Ducharme", "Ducharme"], ["Joel Ward", "Ward"]],
    acceptAnyAnswerGroup: true,
    displayAnswer: "Dominique Ducharme or Joel Ward",
    answerPlaceholder: "Example: Bruce Cassidy"
  },
  {
    prompt: "Who was hired as VGK head coach in 2026?",
    promptText: "Who was hired as VGK head coach in 2026?",
    acceptedAnswers: ["John Tortorella", "Tortorella"],
    displayAnswer: "John Tortorella",
    answerPlaceholder: "Example: Bruce Cassidy"
  }
];
