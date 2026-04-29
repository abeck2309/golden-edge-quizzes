import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const heroImage =
  "/nhlgok3-vegas-golden-knights-hockey-champions-banner-raising-panoramic-art-print-nhl-blakeway-panoramas__76249.jpg";

const upcomingQuizzes = [
  {
    title: "VGK Draft Class",
    questionCount: "20 questions",
    description:
      "A Golden Knights draft-history quiz built around first picks, prospect trivia, trade fallout, and how Vegas has used the draft board."
  },
  {
    title: "Leadership Quiz",
    questionCount: "23 questions",
    description:
      "A Vegas history challenge built around captaincy runs, coaching tenures, and the front-office timeline that shaped the franchise."
  }
];

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

        <section className="mt-10 grid gap-6 md:mt-12">
          <article className="panel grid gap-6 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">Trivia</p>
                <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                  20 questions
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
                Guess the Stat Leader
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-mist md:text-base">
                A stat-focused challenge asking you to identify who led Vegas in different categories, franchise records, and playoff runs.
              </p>
            </div>

            <Link
              href="/guess-the-stat-leader"
              className="inline-flex w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
            >
              Start Quiz
            </Link>
          </article>

          <article className="panel grid gap-6 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">Trivia</p>
                <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                  20 questions
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
                Guess the Jersey Number
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-mist md:text-base">
                A VGK numbers quiz built around former sweater numbers, surprise names, and one
                entry that means more than hockey.
              </p>
            </div>

            <Link
              href="/guess-the-jersey-number"
              className="inline-flex w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
            >
              Start Quiz
            </Link>
          </article>

          <article className="panel grid gap-6 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">Trivia</p>
                <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                  20 questions
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
                Which Team Did He Come From?
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-mist md:text-base">
                A Golden Knights player-history challenge where the job is to identify each
                player&apos;s previous team.
              </p>
            </div>

            <Link
              href="/which-team-did-he-come-from"
              className="inline-flex w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
            >
              Start Quiz
            </Link>
          </article>

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
                A quiz covering playoff moments, series swings, Cup-clinching details, and deeper
                cuts from the run. No multiple choice. Just you and the memories.
              </p>
            </div>

            <Link
              href="/reliving-the-2023-stanley-cup-run"
              className="inline-flex w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
            >
              Start Quiz
            </Link>
          </article>

          <article className="panel grid gap-6 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">Trivia</p>
                <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                  20 questions
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
                The Inagural Season
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-mist md:text-base">
                A quiz on the first goals, first home game, breakout players, playoff run, and
                unforgettable details from Vegas&apos; first NHL season.
              </p>
            </div>

            <Link
              href="/the-inagural-season"
              className="inline-flex w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
            >
              Start Quiz
            </Link>
          </article>

          {upcomingQuizzes.map((quiz) => (
            <article
              key={quiz.title}
              className="panel grid gap-6 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="eyebrow">Coming Soon</p>
                  <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                    {quiz.questionCount}
                  </span>
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {quiz.title}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-8 text-mist md:text-base">
                  {quiz.description}
                </p>
              </div>

              <span className="inline-flex w-fit rounded-full border border-gold/30 px-6 py-3 text-sm font-semibold text-gold-bright">
                Coming Soon
              </span>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
