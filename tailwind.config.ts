import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        timeline: "var(--color-timeline)",
        pill: "var(--color-pill)",
        "pill-text": "var(--color-pill-text)",
        "red": "var(--color-red)",
        "red-mute": "var(--color-red-mute)",
        "blue": "var(--color-blue)",
        "yellow": "var(--color-yellow)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        body: ["var(--font-body)", "ui-serif", "serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        panel: "1rem",
      },
    },
  },
};

export default config;
