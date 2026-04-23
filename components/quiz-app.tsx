"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { quizQuestions, resultProfiles, type ResultKey } from "@/lib/quiz-data";

export function QuizApp() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ResultKey[]>([]);

  const currentQuestion = quizQuestions[questionIndex];
  const isComplete = questionIndex >= quizQuestions.length;
  const progress = Math.min((answers.length / quizQuestions.length) * 100, 100);

  const result = useMemo(() => {
    const counts = answers.reduce<Record<ResultKey, number>>(
      (acc, answer) => {
        acc[answer] += 1;
        return acc;
      },
      { creator: 0, finisher: 0, engine: 0, protector: 0 }
    );

    return (Object.keys(counts) as ResultKey[]).sort((a, b) => counts[b] - counts[a])[0];
  }, [answers]);

  function chooseAnswer(answer: ResultKey) {
    setAnswers((previous) => [...previous, answer]);
    setQuestionIndex((previous) => previous + 1);
  }

  function restartQuiz() {
    setAnswers([]);
    setQuestionIndex(0);
  }

  const profile = resultProfiles[result];

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/5 bg-[#080a0d]/86 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <Image src="/vgk-logo.png" alt="" width={36} height={36} className="h-9 w-auto" priority />
            <div className="leading-tight">
              <p className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-[0.08em] text-white">
                Golden Edge Quizzes
              </p>
              <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.2em] text-gold-bright">
                A Golden Edge Analytics Experience
              </p>
            </div>
          </div>
          <a
            href="https://goldenedgeanalytics.vercel.app/"
            className="w-fit rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-gold-bright hover:border-gold hover:text-white"
          >
            Back to GEA
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-7xl gap-8 px-5 py-8 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c1015] lg:min-h-[680px]">
          <Image
            src="/vgk-intro.jpg"
            alt="Vegas Golden Knights game atmosphere"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,9,0.18),rgba(5,7,9,0.62)_46%,rgba(5,7,9,0.96)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="eyebrow">Featured Quiz</p>
            <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-white md:text-6xl">
              Which Golden Knights Player Type Are You?
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-frost/86 md:text-base">
              Answer five quick choices and get a VGK-style role profile built for the way you see
              the game.
            </p>
          </div>
        </div>

        <div className="panel p-5 md:p-7">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow">{isComplete ? "Result" : currentQuestion.kicker}</p>
              <p className="mt-2 text-sm font-semibold text-mist">
                {answers.length} of {quizQuestions.length} answered
              </p>
            </div>
            <div className="h-12 w-12 rounded-full border border-gold/25 bg-gold/10 text-center text-sm font-bold leading-[48px] text-gold-bright">
              {Math.round(progress)}%
            </div>
          </div>

          <div className="mb-7 h-2 overflow-hidden rounded-full bg-white/8">
            <div className="h-full rounded-full bg-gold" style={{ width: `${progress}%` }} />
          </div>

          {isComplete ? (
            <div className="space-y-7">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-5xl">
                  {profile.title}
                </h2>
                <p className="mt-3 text-lg font-semibold text-gold-bright">{profile.subtitle}</p>
                <p className="mt-5 text-sm leading-8 text-mist md:text-base">{profile.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {profile.traits.map((trait) => (
                  <div key={trait} className="rounded-xl border border-line bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold text-white">{trait}</p>
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
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-5xl">
                {currentQuestion.prompt}
              </h2>
              <div className="mt-7 grid gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => chooseAnswer(option.result)}
                    className="rounded-xl border border-line bg-white/[0.035] p-4 text-left text-sm font-semibold leading-6 text-frost hover:border-gold/55 hover:bg-gold/10 hover:text-white md:p-5 md:text-base"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
