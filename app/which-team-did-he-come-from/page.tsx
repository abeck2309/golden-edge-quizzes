import { CupRunQuizExperience } from "@/components/cup-run-quiz-experience";
import type { QuizResultLine } from "@/components/typed-quiz";
import { whichTeamDidHeComeFromQuizQuestions } from "@/lib/which-team-did-he-come-from-quiz";

const resultLines: QuizResultLine[] = [
  { minimumPercentage: 1, text: "Front-office brain. You tracked every stop before Vegas." },
  { minimumPercentage: 0.8, text: "Strong roster memory. You know where these guys came from." },
  { minimumPercentage: 0.6, text: "Nice work. You had most of the player-history trail mapped out." },
  { minimumPercentage: 0, text: "A few of those past stops were sneaky. Time to brush up on the timeline." }
];

export default function WhichTeamDidHeComeFromQuizPage() {
  return (
    <CupRunQuizExperience
      quizSlug="which-team-did-he-come-from"
      eyebrow="Player Origins"
      title="Which Team Did He Come From?"
      description="Type the last team for each player before they got to Vegas. No choices, just roster memory."
      questions={whichTeamDidHeComeFromQuizQuestions}
      resultLines={resultLines}
      imageDisplayMode="previous"
    />
  );
}
