import { CupRunQuizExperience } from "@/components/cup-run-quiz-experience";
import type { QuizResultLine } from "@/components/typed-quiz";
import { leadershipQuizQuestions } from "@/lib/leadership-quiz";

const resultLines: QuizResultLine[] = [
  { minimumPercentage: 1, text: "Front-office and captaincy encyclopedia. You nailed the full timeline." },
  { minimumPercentage: 0.8, text: "Strong leadership memory. You know the eras and the names that ran them." },
  { minimumPercentage: 0.6, text: "Nice work. You remember a lot of the captaincy and staff timeline." },
  { minimumPercentage: 0, text: "Some of those leadership years blur together. A roster-history refresher would help." }
];

export default function LeadershipQuizPage() {
  return (
    <CupRunQuizExperience
      quizSlug="leadership-quiz"
      eyebrow="Captains, Coaches, GM"
      title="Leadership Quiz"
      description="Name the captains, coaches, and front-office leaders from their Vegas tenure lines."
      questions={leadershipQuizQuestions}
      resultLines={resultLines}
    />
  );
}
