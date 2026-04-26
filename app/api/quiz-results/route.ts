import { NextResponse } from "next/server";
import { insertQuizResult, isSupabaseConfigured } from "@/lib/quiz-results";

export async function POST(request: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "Supabase is not configured." }, { status: 503 });
  }

  try {
    const body = (await request.json()) as {
      quizSlug?: string;
      quizTitle?: string;
      score?: number;
      totalQuestions?: number;
    };

    if (
      !body.quizSlug ||
      !body.quizTitle ||
      typeof body.score !== "number" ||
      typeof body.totalQuestions !== "number"
    ) {
      return NextResponse.json({ error: "Invalid quiz result payload." }, { status: 400 });
    }

    await insertQuizResult({
      quizSlug: body.quizSlug,
      quizTitle: body.quizTitle,
      score: body.score,
      totalQuestions: body.totalQuestions
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to record quiz result", error);
    return NextResponse.json({ error: "Failed to record quiz result." }, { status: 500 });
  }
}
