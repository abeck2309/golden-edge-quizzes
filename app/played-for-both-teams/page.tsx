import { BothTeamsSpinnerQuiz } from "@/components/both-teams-spinner-quiz";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PlayedForBothTeamsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-8 md:px-8 md:pt-12">
        <BothTeamsSpinnerQuiz />
      </main>
      <SiteFooter />
    </div>
  );
}
