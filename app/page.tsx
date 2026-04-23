import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const heroImage =
  "/nhlgok3-vegas-golden-knights-hockey-champions-banner-raising-panoramic-art-print-nhl-blakeway-panoramas__76249.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-8 md:px-8 md:pt-12">
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1015]">
          <div className="relative aspect-[3/1] min-h-[260px] w-full md:aspect-[4/1] md:min-h-[320px]">
          <Image
            src={heroImage}
            alt="Vegas Golden Knights championship banner raising panorama"
            fill
            priority
            className="object-contain object-center"
          />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,9,0),rgba(5,7,9,0.18)_52%,rgba(5,7,9,0.82)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <p className="eyebrow">Golden Edge Quizzes</p>
              <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
                Test Your VGK Knowledge
              </h1>
            </div>
          </div>
        </section>

        <section className="mt-10 md:mt-12">
          <article className="panel grid gap-6 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">Trivia</p>
                <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                  20 questions
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
                Reliving the 2023 Stanley Cup Run
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-mist md:text-base">
                A typed-answer quiz covering playoff moments, series swings, Cup-clinching details,
                and deeper cuts from the run. No multiple choice. Just you and the memories.
              </p>
            </div>

            <Link
              href="/reliving-the-2023-stanley-cup-run"
              className="inline-flex w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
            >
              Start Quiz
            </Link>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
