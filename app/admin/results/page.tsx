import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  fetchQuizResults,
  fetchQuizResultsBySlug,
  formatPercentage,
  isSupabaseConfigured,
  type StoredQuizResult
} from "@/lib/quiz-results";

export const dynamic = "force-dynamic";

type SearchParamValue = string | string[] | undefined;

const trackedLiveQuizzes = [
  {
    slug: "played-for-both-teams",
    title: "Played for Both Teams"
  },
  {
    slug: "guess-the-stat-leader",
    title: "Guess the Stat Leader"
  },
  {
    slug: "guess-the-jersey-number",
    title: "Guess the Jersey Number"
  },
  {
    slug: "which-team-did-he-come-from",
    title: "Which Team Did He Come From?"
  },
  {
    slug: "reliving-the-2023-stanley-cup-run",
    title: "Reliving the 2023 Stanley Cup Run"
  },
  {
    slug: "the-inagural-season",
    title: "The Inagural Season"
  }
] as const;

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles"
  });
}

function getFirstParam(value: SearchParamValue) {
  return typeof value === "string" ? value : "";
}

function buildStats(results: StoredQuizResult[]) {
  const byQuiz = results.reduce<
    Record<
      string,
      {
        title: string;
        plays: number;
        totalScore: number;
        totalQuestions: number;
        bestScore: number;
        latestAt: string;
      }
    >
  >((accumulator, result) => {
    const current = accumulator[result.quiz_slug] ?? {
      title: result.quiz_title,
      plays: 0,
      totalScore: 0,
      totalQuestions: 0,
      bestScore: 0,
      latestAt: result.created_at
    };

    current.plays += 1;
    current.totalScore += result.score;
    current.totalQuestions += result.total_questions;
    current.bestScore = Math.max(current.bestScore, result.score);
    if (new Date(result.created_at).getTime() > new Date(current.latestAt).getTime()) {
      current.latestAt = result.created_at;
    }

    accumulator[result.quiz_slug] = current;
    return accumulator;
  }, {});

  return trackedLiveQuizzes
    .map((quiz) => {
      const stat = byQuiz[quiz.slug];

      if (!stat) {
        return {
          slug: quiz.slug,
          title: quiz.title,
          plays: 0,
          totalScore: 0,
          totalQuestions: 0,
          bestScore: 0,
          latestAt: "",
          averageScore: 0,
          averageTotalQuestions: 0
        };
      }

      return {
        slug: quiz.slug,
        ...stat,
        averageScore: stat.totalScore / stat.plays,
        averageTotalQuestions: stat.totalQuestions / stat.plays
      };
    })
    .sort((left, right) => right.plays - left.plays);
}

export default async function AdminResultsPage({
  searchParams
}: {
  searchParams: Promise<Record<string, SearchParamValue>>;
}) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin");
  }

  const params = await searchParams;
  const activeQuiz = getFirstParam(params.quiz);

  let results: StoredQuizResult[] = [];
  let allResults: StoredQuizResult[] = [];
  let loadError: string | null = null;

  if (isSupabaseConfigured()) {
    try {
      allResults = await fetchQuizResults(500);
      results = activeQuiz ? await fetchQuizResultsBySlug(activeQuiz, 200) : allResults;
    } catch (error) {
      console.error(error);
      loadError = "Results could not be loaded.";
    }
  }

  const quizStats = buildStats(allResults);
  const filteredStats = activeQuiz
    ? quizStats.find((quiz) => quiz.slug === activeQuiz) ?? null
    : null;
  const overallPlays = allResults.length;
  const overallAverage =
    overallPlays > 0
      ? formatPercentage(
          allResults.reduce((sum, result) => sum + result.score, 0) / overallPlays,
          allResults.reduce((sum, result) => sum + result.total_questions, 0) / overallPlays
        )
      : "0%";
  const bestOverall =
    allResults.length > 0
      ? allResults.reduce((best, result) =>
          result.score / result.total_questions > best.score / best.total_questions ? result : best
        )
      : null;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-8 md:px-8 md:pt-12">
        <section className="panel p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="eyebrow">Admin</p>
              <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
                Quiz Results
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-mist md:text-base">
                Track play counts, averages, top scores, and recent submissions across the quiz site.
              </p>
            </div>
            <form action="/api/admin/logout" method="post">
              <button
                type="submit"
                className="inline-flex rounded-full border border-gold/30 px-5 py-3 text-sm font-semibold text-gold-bright hover:bg-gold/10"
              >
                Sign Out
              </button>
            </form>
          </div>

          {!isSupabaseConfigured() ? (
            <p className="mt-6 max-w-3xl text-sm leading-7 text-mist md:text-base">
              Supabase is not configured yet. Add your environment variables first, then reload this page.
            </p>
          ) : loadError ? (
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#ff9ca4] md:text-base">{loadError}</p>
          ) : (
            <>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/admin/results"
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    !activeQuiz
                      ? "bg-gold text-ink"
                      : "border border-white/10 bg-white/[0.03] text-mist hover:border-gold/30 hover:text-white"
                  }`}
                >
                  All Quizzes
                </Link>
                {quizStats.map((quiz) => (
                  <Link
                    key={quiz.slug}
                    href={`/admin/results?quiz=${quiz.slug}`}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      activeQuiz === quiz.slug
                        ? "bg-gold text-ink"
                        : "border border-white/10 bg-white/[0.03] text-mist hover:border-gold/30 hover:text-white"
                    }`}
                  >
                    {quiz.title}
                  </Link>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-bright">
                    {activeQuiz ? "Filtered Plays" : "Total Plays"}
                  </p>
                  <p className="mt-3 text-3xl font-bold text-white">
                    {activeQuiz ? results.length : overallPlays}
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-bright">
                    {activeQuiz ? "Quiz Average" : "Overall Average"}
                  </p>
                  <p className="mt-3 text-3xl font-bold text-white">
                    {activeQuiz && filteredStats
                      ? formatPercentage(filteredStats.averageScore, filteredStats.averageTotalQuestions)
                      : overallAverage}
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-bright">
                    {activeQuiz ? "Best Quiz Score" : "Best Overall"}
                  </p>
                  <p className="mt-3 text-3xl font-bold text-white">
                    {activeQuiz && filteredStats
                      ? filteredStats.plays > 0
                        ? `${filteredStats.bestScore}/${Math.round(filteredStats.averageTotalQuestions)}`
                        : "0/0"
                      : bestOverall
                        ? `${bestOverall.score}/${bestOverall.total_questions}`
                        : "0/0"}
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-bright">
                    {activeQuiz ? "Latest Quiz Play" : "Quizzes Tracked"}
                  </p>
                  <p className="mt-3 text-lg font-bold text-white">
                    {activeQuiz && filteredStats
                      ? filteredStats.latestAt
                        ? formatDate(filteredStats.latestAt)
                        : "No plays yet"
                      : `${quizStats.length} active`}
                  </p>
                </div>
              </div>

              {!activeQuiz ? (
                <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white/[0.03]">
                  <div className="grid grid-cols-[1.4fr_0.6fr_0.7fr_0.6fr_1fr] gap-4 border-b border-line px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
                    <span>Quiz</span>
                    <span>Plays</span>
                    <span>Average</span>
                    <span>Best</span>
                    <span>Latest</span>
                  </div>
                  <div className="divide-y divide-line">
                    {quizStats.map((quiz) => (
                      <div
                        key={quiz.slug}
                        className="grid grid-cols-[1.4fr_0.6fr_0.7fr_0.6fr_1fr] gap-4 px-5 py-4 text-sm text-mist"
                      >
                        <span className="font-semibold text-white">{quiz.title}</span>
                        <span>{quiz.plays}</span>
                        <span>{quiz.plays > 0 ? formatPercentage(quiz.averageScore, quiz.averageTotalQuestions) : "0%"}</span>
                        <span>
                          {quiz.plays > 0 ? `${quiz.bestScore}/${Math.round(quiz.averageTotalQuestions)}` : "0/0"}
                        </span>
                        <span>{quiz.latestAt ? formatDate(quiz.latestAt) : "No plays yet"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white/[0.03]">
                <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr_1fr] gap-4 border-b border-line px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
                  <span>Quiz</span>
                  <span>Score</span>
                  <span>Percent</span>
                  <span>Completed</span>
                </div>
                <div className="divide-y divide-line">
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className="grid grid-cols-[1.5fr_0.7fr_0.7fr_1fr] gap-4 px-5 py-4 text-sm text-mist"
                    >
                      <span className="font-semibold text-white">{result.quiz_title}</span>
                      <span>
                        {result.score}/{result.total_questions}
                      </span>
                      <span>{formatPercentage(result.score, result.total_questions)}</span>
                      <span>{formatDate(result.created_at)}</span>
                    </div>
                  ))}
                  {results.length === 0 ? (
                    <div className="px-5 py-6 text-sm text-mist">No results yet for this view.</div>
                  ) : null}
                </div>
              </div>
            </>
          )}

          <div className="mt-8">
            <Link href="/" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright">
              Back to Quiz Hub
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
