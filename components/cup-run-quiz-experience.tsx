"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TypedQuiz, type AnswerResult } from "@/components/typed-quiz";
import type { AnswerImage, TypedQuizQuestion } from "@/lib/cup-run-quiz";

function AnswerHeroGraphic({ result, eyebrow }: { result: AnswerResult | null; eyebrow: string }) {
  const visibleImages = result?.question.answerImages?.slice(0, 2) ?? [];
  const label = result?.question.displayAnswer;

  return (
    <section className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c1015] lg:sticky lg:top-8 lg:min-h-[640px]">
      {visibleImages.length === 0 ? (
        result ? (
          <div className="flex h-full min-h-[360px] flex-col justify-end bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6 md:p-8 lg:min-h-[640px]">
            <p className="eyebrow">Image Coming Soon</p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-white md:text-5xl">
              {label}
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

      {visibleImages.length > 0 || !result ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,9,0.18),rgba(5,7,9,0.44)_44%,rgba(5,7,9,0.9)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="eyebrow">{result ? "Previous Answer" : eyebrow}</p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-white md:text-5xl">
              {label ?? "Type it from memory."}
            </h2>
            {!result ? (
              <p className="mt-4 text-sm leading-7 text-frost/86 md:text-base">
                Easy ones, deep cuts, and a few questions that reward the fans who watched every
                shift.
              </p>
            ) : null}
          </div>
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
  eyebrow,
  title,
  description,
  questions
}: {
  eyebrow: string;
  title: string;
  description: string;
  questions: TypedQuizQuestion[];
}) {
  const [lastResult, setLastResult] = useState<AnswerResult | null>(null);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto grid w-full max-w-7xl gap-8 px-5 pb-20 pt-8 md:px-8 md:pt-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
        <AnswerHeroGraphic result={lastResult} eyebrow={eyebrow} />
        <TypedQuiz
          title={title}
          description={description}
          questions={questions}
          onLastResultChange={setLastResult}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
