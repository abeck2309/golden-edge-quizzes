import { CupRunQuizExperience } from "@/components/cup-run-quiz-experience";
import { cupRunQuizQuestions } from "@/lib/cup-run-quiz";

export default function CupRunQuizPage() {
  return (
    <CupRunQuizExperience
      eyebrow="2023 Cup Run"
      title="Reliving the 2023 Stanley Cup Run"
      description="No choices. Type the answer from memory and see how much of Vegas' Cup run is still living rent-free in your head."
      questions={cupRunQuizQuestions}
    />
  );
}
