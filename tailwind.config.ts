import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0a09",
        foreground: "#ededed",
        brand: {
          gold: "#e0a456",
          bronze: "#b06a35",
          dark: "#14110c",
          surface: "#17140f",
          card: "#1f1a14",
          muted: "#57534d",
          light: "#f5f4f2",
        },
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "Schibsted Grotesk", "sans-serif"],
        hanken: ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
