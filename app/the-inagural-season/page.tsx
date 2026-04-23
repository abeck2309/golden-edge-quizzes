import { CupRunQuizExperience } from "@/components/cup-run-quiz-experience";
import { inaguralSeasonQuizQuestions } from "@/lib/inagural-season-quiz";

export default function InaguralSeasonQuizPage() {
  return (
    <CupRunQuizExperience
      eyebrow="2017-18 Season"
      title="The Inagural Season"
      description="No multiple choice. Type the answers and see how well you remember the season that changed hockey in Las Vegas."
      questions={inaguralSeasonQuizQuestions}
    />
  );
}

