export function SiteFooter() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-mist md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-1">
          <p>Golden Edge Quizzes</p>
          <p className="text-xs text-mist/80">© 2026 Golden Edge Analytics. All rights reserved.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <a href="/" className="hover:text-gold-bright">
            Quiz Hub
          </a>
          <a href="https://goldenedgeanalytics.vercel.app/" className="hover:text-gold-bright">
            Golden Edge Analytics
          </a>
        </nav>
      </div>
    </footer>
  );
}
