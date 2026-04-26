import { cookies } from "next/headers";
import { getResultsAdminKey } from "@/lib/quiz-results";

export const ADMIN_COOKIE_NAME = "gea_quiz_admin";

export async function isAdminAuthenticated() {
  const adminKey = getResultsAdminKey();

  if (!adminKey) {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE_NAME)?.value === adminKey;
}
