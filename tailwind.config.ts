import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080a0d",
        steel: "#141a20",
        panel: "#171e26",
        line: "#2b3642",
        gold: "#b4975a",
        "gold-bright": "#d8bc7a",
        redline: "#b82836",
        frost: "#f7f8fa",
        mist: "#a8b3bf"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(180, 151, 90, 0.18), 0 24px 70px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "rink-glow":
          "radial-gradient(circle at top left, rgba(216, 188, 122, 0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(184, 40, 54, 0.14), transparent 24%), linear-gradient(180deg, #080a0d 0%, #0d1116 46%, #080a0d 100%)"
      }
    }
  },
  plugins: []
};

export default config;
