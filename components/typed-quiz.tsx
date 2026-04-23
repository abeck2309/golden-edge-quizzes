"use client";

import { FormEvent, useMemo, useState } from "react";
import { cupRunQuizQuestions, type TypedQuizQuestion } from "@/lib/cup-run-quiz";

export type AnswerResult = {
  question: TypedQuizQuestion;
  userAnswer: string;
  isCorrect: boolean;
};

function normalizeAnswer(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function answerMatches(question: TypedQuizQuestion, answer: string) {
  const normalizedAnswer = normalizeAnswer(answer);

  if (!normalizedAnswer) {
    return false;
  }

  if (question.answerGroups) {
    return question.answerGroups.every((group) =>
      group.some((accepted) => normalizedAnswer.includes(normalizeAnswer(accepted)))
    );
  }

  return (question.acceptedAnswers ?? []).some((accepted) => {
    const normalizedAccepted = normalizeAnswer(accepted);
    return normalizedAnswer === normalizedAccepted || normalizedAnswer.includes(normalizedAccepted);
  });
}

function getGradeLine(score: number, total: number) {
  const percentage = score / total;

  if (percentage === 1) {
    return "Banner-in-the-rafters stuff. You ran the table.";
  }

  if (percentage >= 0.8) {
    return "Deep playoff memory. You know the run cold.";
  }

  if (percentage >= 0.6) {
    return "Solid showing. You remember the big swings and a few deeper cuts.";
  }

  return "A few of those were nasty. Time for a rewatch.";
}

export function TypedQuiz({
  onLastResultChange
}: {
  onLastResultChange?: (result: AnswerResult | null) => void;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [results, setResults] = useState<AnswerResult[]>([]);
  const [lastResult, setLastResult] = useState<AnswerResult | null>(null);

  const currentQuestion = cupRunQuizQuestions[questionIndex];
  const isComplete = questionIndex >= cupRunQuizQuestions.length;
  const score = useMemo(() => results.filter((result) => result.isCorrect).length, [results]);
  const progress = Math.round((results.length / cupRunQuizQuestions.length) * 100);

  function submitAnswer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!currentQuestion || !currentAnswer.trim()) {
      return;
    }

    const result = {
      question: currentQuestion,
      userAnswer: currentAnswer.trim(),
      isCorrect: answerMatches(currentQuestion, currentAnswer)
    };

    setResults((previous) => [...previous, result]);
    setLastResult(result);
    onLastResultChange?.(result);
    setCurrentAnswer("");
    setQuestionIndex((previous) => previous + 1);
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setCurrentAnswer("");
    setResults([]);
    setLastResult(null);
    onLastResultChange?.(null);
  }

  return (
    <div className="panel p-5 md:p-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="eyebrow">Typed Answer Quiz</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
            Reliving the 2023 Stanley Cup Run
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-mist md:text-base">
            No choices. Type the answer from memory and see how much of Vegas&apos; Cup run is still
            living rent-free in your head.
          </p>
        </div>
        <div className="rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-left md:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-bright">Score</p>
          <p className="mt-1 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
            {score}/{cupRunQuizQuestions.length}
          </p>
        </div>
      </div>

      <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/8">
        <div className="h-full rounded-full bg-gold" style={{ width: `${progress}%` }} />
      </div>

      {isComplete ? (
        <div className="space-y-7">
          <div className="rounded-2xl border border-line bg-white/[0.03] p-5 md:p-6">
            <p className="eyebrow">Final Result</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-5xl">
              {score}/{cupRunQuizQuestions.length}
            </h2>
            <p className="mt-4 text-sm leading-7 text-mist md:text-base">
              {getGradeLine(score, cupRunQuizQuestions.length)}
            </p>
          </div>

          <div className="grid gap-3">
            {results.map((result, index) => (
              <div
                key={result.question.prompt}
                className="rounded-xl border border-line bg-white/[0.03] p-4"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <p className="text-sm font-semibold leading-6 text-white">
                    {index + 1}. {result.question.prompt}
                  </p>
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                      result.isCorrect
                        ? "border border-gold/30 bg-gold/10 text-gold-bright"
                        : "border border-redline/35 bg-redline/10 text-[#ff9ca4]"
                    }`}
                  >
                    {result.isCorrect ? "Correct" : "Missed"}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-mist">
                  Your answer: <span className="text-white">{result.userAnswer}</span>
                </p>
                <p className="mt-1 text-sm leading-6 text-mist">
                  Answer: <span className="text-gold-bright">{result.question.displayAnswer}</span>
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={restartQuiz}
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <form onSubmit={submitAnswer} className="rounded-2xl border border-line bg-white/[0.03] p-5 md:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-bright">
              Question {questionIndex + 1} of {cupRunQuizQuestions.length}
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight text-white md:text-4xl">
              {currentQuestion.prompt}
            </h2>
            <label htmlFor="typed-answer" className="mt-7 block text-sm font-semibold text-mist">
              Type your answer
            </label>
            <input
              id="typed-answer"
              value={currentAnswer}
              onChange={(event) => setCurrentAnswer(event.target.value)}
              autoComplete="off"
              autoFocus
              className="mt-3 w-full rounded-xl border border-line bg-ink/70 px-4 py-4 text-base font-semibold text-white outline-none placeholder:text-mist/60 focus:border-gold"
              placeholder={currentQuestion.answerPlaceholder ?? "Example: Mark Stone"}
            />
            <button
              type="submit"
              className="mt-5 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
            >
              Submit Answer
            </button>
          </form>

          <aside className="rounded-2xl border border-line bg-white/[0.03] p-5 md:p-6">
            <p className="eyebrow">Last Answer</p>
            {lastResult ? (
              <div className="mt-4">
                <p
                  className={`text-lg font-bold ${
                    lastResult.isCorrect ? "text-gold-bright" : "text-[#ff9ca4]"
                  }`}
                >
                  {lastResult.isCorrect ? "Correct" : "Not quite"}
                </p>
                <p className="mt-3 text-sm leading-7 text-mist">
                  Answer: <span className="text-white">{lastResult.question.displayAnswer}</span>
                </p>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-7 text-mist">
                Submit your first answer and feedback will show here.
              </p>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
