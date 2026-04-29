"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TypedQuiz, type QuizResultLine, type AnswerResult } from "@/components/typed-quiz";
import type { AnswerImage, TypedQuizQuestion } from "@/lib/cup-run-quiz";

function AnswerHeroGraphic({
  displayQuestion,
  isPreviousAnswer,
  eyebrow,
  imageOnly = false
}: {
  displayQuestion: TypedQuizQuestion | null;
  isPreviousAnswer?: boolean;
  eyebrow: string;
  imageOnly?: boolean;
}) {
  const visibleImages = displayQuestion?.answerImages?.slice(0, 2) ?? [];
  const label = displayQuestion?.displayAnswer;

  return (
    <section className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c1015] lg:sticky lg:top-8 lg:min-h-[640px]">
      {visibleImages.length === 0 ? (
        displayQuestion ? (
          <div className="flex h-full min-h-[360px] flex-col justify-end bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6 md:p-8 lg:min-h-[640px]">
            <p className="eyebrow">Image Coming Soon</p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-white md:text-5xl">
              Clue loaded.
            </h2>
          </div>
        ) : (
          <Image
            src="/golden-knight.jpg"
            alt="Golden knight hero graphic"
            fill
            priority
            className="object-cover object-center"
          />
        )
      ) : visibleImages.length === 1 ? (
        <AnswerImage image={visibleImages[0]} priority />
      ) : (
        <>
          <DiagonalAnswerImage image={visibleImages[0]} side="left" priority />
          <DiagonalAnswerImage image={visibleImages[1]} side="right" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[3px] origin-center rotate-45 bg-gold/80" />
        </>
      )}

      {visibleImages.length > 0 || !displayQuestion ? (
        <>
          <div
            className={`absolute inset-0 ${
              imageOnly
                ? "bg-[linear-gradient(180deg,rgba(5,7,9,0.04),rgba(5,7,9,0.12)_44%,rgba(5,7,9,0.28)_100%)]"
                : "bg-[linear-gradient(180deg,rgba(5,7,9,0.18),rgba(5,7,9,0.44)_44%,rgba(5,7,9,0.9)_100%)]"
            }`}
          />
          {!imageOnly ? (
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="eyebrow">{displayQuestion ? (isPreviousAnswer ? "Previous Answer" : "Current Question") : eyebrow}</p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-white md:text-5xl">
                {label ?? "Type it from memory."}
              </h2>
              {!displayQuestion ? (
                <p className="mt-4 text-sm leading-7 text-frost/86 md:text-base">
                  Some are obvious, some are sneaky, and a few are for the fans who remember every
                  detail.
                </p>
              ) : null}
            </div>
          ) : null}
        </>
      ) : null}
    </section>
  );
}

function AnswerImage({ image, priority = false }: { image: AnswerImage; priority?: boolean }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      sizes="(min-width: 1024px) 37vw, 90vw"
      className={image.objectFit === "contain" ? "object-contain" : "object-cover"}
      style={{ objectPosition: image.objectPosition ?? "center center" }}
    />
  );
}

function DiagonalAnswerImage({
  image,
  side,
  priority = false
}: {
  image: AnswerImage;
  side: "left" | "right";
  priority?: boolean;
}) {
  const clipPath =
    side === "left" ? "polygon(0 0, 100% 0, 0 100%)" : "polygon(100% 0, 100% 100%, 0 100%)";
  const frameClass =
    image.diagonalFrameClassName ??
    (side === "left"
      ? "absolute bottom-0 left-0 top-0 w-[72%]"
      : "absolute bottom-0 right-0 top-0 w-[72%]");

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ clipPath }}>
      <div className={frameClass}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 28vw, 90vw"
          className={`${image.objectFit === "contain" ? "object-contain" : "object-cover"} ${
            image.diagonalImageClassName ?? ""
          }`}
          style={{ objectPosition: image.objectPosition ?? "center center" }}
        />
      </div>
    </div>
  );
}

export function CupRunQuizExperience({
  quizSlug,
  eyebrow,
  title,
  description,
  questions,
  resultLines,
  heroImageOnly = false,
  imageDisplayMode = "current"
}: {
  quizSlug: string;
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  questions: TypedQuizQuestion[];
  resultLines?: QuizResultLine[];
  heroImageOnly?: boolean;
  imageDisplayMode?: "current" | "previous";
}) {
  const [lastResult, setLastResult] = useState<AnswerResult | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<TypedQuizQuestion | null>(questions[0] ?? null);
  const heroQuestion = imageDisplayMode === "previous" ? lastResult?.question ?? null : activeQuestion;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto grid w-full max-w-7xl gap-8 px-5 pb-20 pt-8 md:px-8 md:pt-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
        <AnswerHeroGraphic
          displayQuestion={heroQuestion}
          isPreviousAnswer={imageDisplayMode === "previous"}
          eyebrow={eyebrow}
          imageOnly={heroImageOnly}
        />
        <TypedQuiz
          quizSlug={quizSlug}
          title={title}
          description={description}
          questions={questions}
          resultLines={resultLines}
          onLastResultChange={setLastResult}
          onCurrentQuestionChange={setActiveQuestion}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
