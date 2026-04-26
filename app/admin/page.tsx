import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { isSupabaseConfigured } from "@/lib/quiz-results";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const isAuthenticated = await isAdminAuthenticated();

  if (isAuthenticated) {
    redirect("/admin/results");
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-5 pb-20 pt-8 md:px-8 md:pt-12">
        <section className="panel p-6 md:p-8">
          <p className="eyebrow">Admin</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
            Results Sign In
          </h1>
          {!isSupabaseConfigured() ? (
            <p className="mt-4 text-sm leading-7 text-mist md:text-base">
              Supabase is not configured yet. Finish that first, then come back here.
            </p>
          ) : (
            <>
              <p className="mt-4 text-sm leading-7 text-mist md:text-base">
                Enter your results admin key to open the score dashboard.
              </p>
              <form action="/api/admin/login" method="post" className="mt-8 rounded-2xl border border-line bg-white/[0.03] p-5 md:p-6">
                <label htmlFor="admin-key" className="block text-sm font-semibold text-mist">
                  Admin key
                </label>
                <input
                  id="admin-key"
                  name="adminKey"
                  type="password"
                  autoComplete="current-password"
                  className="mt-3 w-full rounded-xl border border-line bg-ink/70 px-4 py-4 text-base font-semibold text-white outline-none placeholder:text-mist/60 focus:border-gold"
                  placeholder="Enter your private key"
                  required
                />
                <button
                  type="submit"
                  className="mt-5 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-bright"
                >
                  Open Results
                </button>
              </form>
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
