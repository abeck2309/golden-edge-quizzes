import { CupRunQuizExperience } from "@/components/cup-run-quiz-experience";
import { whichTeamDidHeComeFromQuizQuestions } from "@/lib/which-team-did-he-come-from-quiz";

export default function WhichTeamDidHeComeFromQuizPage() {
  return (
    <CupRunQuizExperience
      eyebrow="Player Origins"
      title="Which Team Did He Come From?"
      description="Type the last team for each player before they got to Vegas. No choices, just roster memory."
      questions={whichTeamDidHeComeFromQuizQuestions}
    />
  );
}
