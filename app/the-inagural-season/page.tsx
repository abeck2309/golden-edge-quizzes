import { CupRunQuizExperience } from "@/components/cup-run-quiz-experience";
import type { QuizResultLine } from "@/components/typed-quiz";
import { inaguralSeasonQuizQuestions } from "@/lib/inagural-season-quiz";

const resultLines: QuizResultLine[] = [
  { minimumPercentage: 1, text: "Expansion-draft wizardry. You ran this one start to finish." },
  { minimumPercentage: 0.8, text: "You remember Year One like it happened yesterday." },
  { minimumPercentage: 0.6, text: "Good inaugural-season memory. The bigger moments are still with you." },
  { minimumPercentage: 0, text: "That season had a lot going on. A refresher might help." }
];

export default function InaguralSeasonQuizPage() {
  return (
    <CupRunQuizExperience
      quizSlug="the-inagural-season"
      eyebrow="2017-18 Season"
      title="The Inagural Season"
      description="No multiple choice. Type the answers and see how well you remember the season that changed hockey in Las Vegas."
      questions={inaguralSeasonQuizQuestions}
      resultLines={resultLines}
      imageDisplayMode="previous"
    />
  );
}
