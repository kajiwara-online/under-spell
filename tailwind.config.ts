import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "751px",
      lg: "961px",
      xl: "1351px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "clamp(1.5rem, 2vw, 3rem)", // h1にclampを適用
            },
            h2: {
              fontSize: "clamp(1.25rem, 1.5vw, 2.5rem)", // h2にclampを適用
            },
            h3: {
              fontSize: "clamp(1rem, 1.25vw, 1.75rem)", // h3にclampを適用
            },
            p: {
              fontSize: "clamp(1rem, 1vw, 1.25rem)", // 段落にclampを適用
            },
          },
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(95%)" },
          "100%": { opacity: "1", transform: "scale(100%)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "scale(100%)" },
          "100%": { opacity: "0", transform: "scale(95%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
        fadeOut: "fadeOut 0.3s ease-out forwards",
      },
    },
  },
  plugins: [typography, aspectRatio],
};

export default config;
