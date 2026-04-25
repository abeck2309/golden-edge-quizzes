"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { TypedQuizQuestion } from "@/lib/cup-run-quiz";

export type AnswerResult = {
  question: TypedQuizQuestion;
  userAnswer: string;
  isCorrect: boolean;
};

export type QuizResultLine = {
  minimumPercentage: number;
  text: string;
};

const defaultResultLines: QuizResultLine[] = [
  { minimumPercentage: 1, text: "Banner-in-the-rafters stuff. You ran the table." },
  { minimumPercentage: 0.8, text: "Deep playoff memory. You know the run cold." },
  {
    minimumPercentage: 0.6,
    text: "Solid showing. You remember the big swings and a few deeper cuts."
  },
  { minimumPercentage: 0, text: "A few of those were nasty. Time for a rewatch." }
];

function getQuestionPromptText(question: TypedQuizQuestion) {
  return question.promptText ?? (typeof question.prompt === "string" ? question.prompt : question.displayAnswer);
}

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
    if (question.acceptAnyAnswerGroup) {
      return question.answerGroups.some((group) =>
        group.some((accepted) => {
          const normalizedAccepted = normalizeAnswer(accepted);
          return (
            normalizedAnswer === normalizedAccepted ||
            normalizedAnswer.includes(normalizedAccepted) ||
            normalizedAccepted.includes(normalizedAnswer)
          );
        })
      );
    }

    return question.answerGroups.every((group) =>
      group.some((accepted) => normalizedAnswer.includes(normalizeAnswer(accepted)))
    );
  }

  return (question.acceptedAnswers ?? []).some((accepted) => {
    const normalizedAccepted = normalizeAnswer(accepted);
    return normalizedAnswer === normalizedAccepted || normalizedAnswer.includes(normalizedAccepted);
  });
}

function getGradeLine(score: number, total: number, resultLines: QuizResultLine[]) {
  const percentage = score / total;
  return resultLines.find((line) => percentage >= line.minimumPercentage)?.text ?? defaultResultLines.at(-1)!.text;
}

export function TypedQuiz({
  title,
  description,
  questions,
  resultLines = defaultResultLines,
  onLastResultChange,
  onCurrentQuestionChange
}: {
  title: string;
  description: React.ReactNode;
  questions: TypedQuizQuestion[];
  resultLines?: QuizResultLine[];
  onLastResultChange?: (result: AnswerResult | null) => void;
  onCurrentQuestionChange?: (question: TypedQuizQuestion | null) => void;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [results, setResults] = useState<AnswerResult[]>([]);
  const [lastResult, setLastResult] = useState<AnswerResult | null>(null);

  const currentQuestion = questions[questionIndex];
  const isComplete = questionIndex >= questions.length;
  const score = useMemo(() => results.filter((result) => result.isCorrect).length, [results]);
  const progress = Math.round((results.length / questions.length) * 100);

  useEffect(() => {
    onCurrentQuestionChange?.(isComplete ? null : currentQuestion);
  }, [currentQuestion, isComplete, onCurrentQuestionChange]);

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
    onCurrentQuestionChange?.(questions[0] ?? null);
  }

  return (
    <div className="panel p-5 md:p-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="eyebrow">Typed Answer Quiz</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <div className="mt-4 max-w-3xl text-sm leading-7 text-mist md:text-base">{description}</div>
        </div>
        <div className="rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-left md:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-bright">Score</p>
          <p className="mt-1 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
            {score}/{questions.length}
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
              {score}/{questions.length}
            </h2>
            <p className="mt-4 text-sm leading-7 text-mist md:text-base">
              {getGradeLine(score, questions.length, resultLines)}
            </p>
          </div>

          <div className="grid gap-3">
            {results.map((result, index) => (
              <div
                key={getQuestionPromptText(result.question)}
                className="rounded-xl border border-line bg-white/[0.03] p-4"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <p className="text-sm font-semibold leading-6 text-white">
                    {index + 1}. {getQuestionPromptText(result.question)}
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
              Question {questionIndex + 1} of {questions.length}
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
