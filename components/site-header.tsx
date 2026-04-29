import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="border-b border-white/5 bg-[#080a0d]/86 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <a href="/" className="flex items-center gap-3 rounded-md" aria-label="Golden Edge Quizzes home">
          <Image src="/VGK.png" alt="" width={36} height={36} className="h-9 w-auto" priority />
          <div className="leading-tight">
            <p className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-[0.08em] text-white">
              Golden Edge Quizzes
            </p>
            <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.2em] text-gold-bright">
              A Golden Edge Analytics Experience
            </p>
          </div>
        </a>
        <div className="flex flex-wrap gap-3">
          <a
            href="/"
            className="w-fit rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-gold/40 hover:text-gold-bright"
          >
            Back to Quiz Hub
          </a>
          <a
            href="https://goldenedgeanalytics.vercel.app/"
            className="w-fit rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-gold-bright hover:border-gold hover:text-white"
          >
            Back to GEA
          </a>
        </div>
      </div>
    </header>
  );
}
