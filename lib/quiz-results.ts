export type QuizResultInsert = {
  quizSlug: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
};

export type StoredQuizResult = {
  id: number;
  quiz_slug: string;
  quiz_title: string;
  score: number;
  total_questions: number;
  created_at: string;
};

function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL;
}

function getSupabaseServiceRoleKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY;
}

export function isSupabaseConfigured() {
  return Boolean(getSupabaseUrl() && getSupabaseServiceRoleKey());
}

function getBaseHeaders() {
  const serviceRoleKey = getSupabaseServiceRoleKey();

  if (!serviceRoleKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
  }

  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    "Content-Type": "application/json"
  };
}

function getTableUrl(query = "") {
  const supabaseUrl = getSupabaseUrl();

  if (!supabaseUrl) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  }

  return `${supabaseUrl}/rest/v1/quiz_results${query}`;
}

export async function insertQuizResult(result: QuizResultInsert) {
  const response = await fetch(getTableUrl(), {
    method: "POST",
    headers: {
      ...getBaseHeaders(),
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      quiz_slug: result.quizSlug,
      quiz_title: result.quizTitle,
      score: result.score,
      total_questions: result.totalQuestions
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Supabase insert failed: ${response.status}`);
  }
}

export async function fetchQuizResults(limit = 100) {
  const response = await fetch(
    getTableUrl(`?select=id,quiz_slug,quiz_title,score,total_questions,created_at&order=created_at.desc&limit=${limit}`),
    {
      headers: getBaseHeaders(),
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase fetch failed: ${response.status}`);
  }

  return (await response.json()) as StoredQuizResult[];
}

export async function fetchQuizResultsBySlug(quizSlug: string, limit = 100) {
  const encodedSlug = encodeURIComponent(quizSlug);
  const response = await fetch(
    getTableUrl(
      `?select=id,quiz_slug,quiz_title,score,total_questions,created_at&quiz_slug=eq.${encodedSlug}&order=created_at.desc&limit=${limit}`
    ),
    {
      headers: getBaseHeaders(),
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase fetch failed: ${response.status}`);
  }

  return (await response.json()) as StoredQuizResult[];
}

export function getResultsAdminKey() {
  return process.env.RESULTS_ADMIN_KEY ?? "";
}

export function formatPercentage(score: number, totalQuestions: number) {
  if (!totalQuestions) {
    return "0%";
  }

  return `${Math.round((score / totalQuestions) * 100)}%`;
}
