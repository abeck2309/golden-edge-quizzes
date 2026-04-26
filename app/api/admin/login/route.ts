import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME } from "@/lib/admin-auth";
import { getResultsAdminKey } from "@/lib/quiz-results";

export async function POST(request: Request) {
  const formData = await request.formData();
  const submittedKey = String(formData.get("adminKey") ?? "");
  const adminKey = getResultsAdminKey();

  if (!adminKey || submittedKey !== adminKey) {
    return NextResponse.redirect(new URL("/admin", request.url), { status: 303 });
  }

  const response = NextResponse.redirect(new URL("/admin/results", request.url), { status: 303 });
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: adminKey,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12
  });

  return response;
}
