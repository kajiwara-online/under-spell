import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [typography, aspectRatio],
};

export default config;
