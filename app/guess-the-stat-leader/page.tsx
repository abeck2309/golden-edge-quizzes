import { CupRunQuizExperience } from "@/components/cup-run-quiz-experience";
import type { QuizResultLine } from "@/components/typed-quiz";
import { guessTheStatLeaderQuizQuestions } from "@/lib/guess-the-stat-leader-quiz";

const resultLines: QuizResultLine[] = [
  { minimumPercentage: 1, text: "Stat-sheet demon. You cleaned up every leaderboard." },
  { minimumPercentage: 0.8, text: "Strong numbers memory. You know who owns the big VGK marks." },
  { minimumPercentage: 0.6, text: "Solid stat recall. You had most of the big leaders lined up." },
  { minimumPercentage: 0, text: "Some of those leaderboards were nasty. Time for another lap through the numbers." }
];

export default function GuessTheStatLeaderQuizPage() {
  return (
    <CupRunQuizExperience
      quizSlug="guess-the-stat-leader"
      eyebrow="Numbers and Records"
      title="Guess the Stat Leader"
      description="Type the names behind the franchise leaderboards, single-season marks, and deeper-cut VGK stat questions."
      questions={guessTheStatLeaderQuizQuestions}
      resultLines={resultLines}
      imageDisplayMode="previous"
    />
  );
}
