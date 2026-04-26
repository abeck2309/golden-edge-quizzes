import { CupRunQuizExperience } from "@/components/cup-run-quiz-experience";
import type { QuizResultLine } from "@/components/typed-quiz";
import { guessTheJerseyNumberQuizQuestions } from "@/lib/guess-the-jersey-number-quiz";

const resultLines: QuizResultLine[] = [
  { minimumPercentage: 1, text: "Sweater-number sicko status. You nailed every one." },
  { minimumPercentage: 0.8, text: "Strong number memory. You know this part of the roster history." },
  { minimumPercentage: 0.6, text: "Pretty solid. You got most of the obvious ones and some sneaky ones too." },
  { minimumPercentage: 0, text: "Those numbers can get weird fast. A few more reps and you are there." }
];

export default function GuessTheJerseyNumberQuizPage() {
  return (
    <CupRunQuizExperience
      quizSlug="guess-the-jersey-number"
      eyebrow="Numbers"
      title="Guess the Jersey Number"
      description={
        <>
          Some questions have more than one answer, each question only requires{" "}
          <span className="font-semibold text-gold-bright">ONE</span> player to be named. For a
          player to count they must have played at least one NHL{" "}
          <span className="font-semibold text-gold-bright">REGULAR SEASON</span> or{" "}
          <span className="font-semibold text-gold-bright">PLAYOFF GAME</span> for VGK. Preseason
          does not count.
        </>
      }
      questions={guessTheJerseyNumberQuizQuestions}
      resultLines={resultLines}
      heroImageOnly
    />
  );
}
