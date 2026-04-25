import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Edge Quizzes",
  description:
    "Interactive Vegas Golden Knights quizzes, trivia, roster prompts, and fan results from Golden Edge Analytics.",
  icons: {
    icon: "/vgk-logo.png",
    shortcut: "/vgk-logo.png",
    apple: "/vgk-logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-gold px-4 py-2 font-semibold text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to quiz
        </a>
        <main id="main-content">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
