import { CupRunQuizExperience } from "@/components/cup-run-quiz-experience";
import type { QuizResultLine } from "@/components/typed-quiz";
import { cupRunQuizQuestions } from "@/lib/cup-run-quiz";

const resultLines: QuizResultLine[] = [
  { minimumPercentage: 1, text: "Cup in six energy. You remembered all of it." },
  { minimumPercentage: 0.8, text: "Deep playoff memory. You know the run cold." },
  { minimumPercentage: 0.6, text: "Solid Cup-run recall. The big moments are still right there." },
  { minimumPercentage: 0, text: "A few of those shifts got away from you. Time for a rewatch." }
];

export default function CupRunQuizPage() {
  return (
    <CupRunQuizExperience
      quizSlug="reliving-the-2023-stanley-cup-run"
      eyebrow="2023 Cup Run"
      title="Reliving the 2023 Stanley Cup Run"
      description="No choices. Type the answer from memory and see how much of Vegas' Cup run is still living rent-free in your head."
      questions={cupRunQuizQuestions}
      resultLines={resultLines}
      imageDisplayMode="previous"
    />
  );
}
