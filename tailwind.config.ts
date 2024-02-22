import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      maxWidth: {
        "screen-3xl": "137rem",
      },
      animation: {
        "bottom-to-top": "bottom-to-top 500ms linear both",
        "left-to-right": "left-to-right 3s linear",
      },
      keyframes: {
        "bottom-to-top": {
          from: { "clip-path": "inset(100% 0 0 0)" },
          to: { "clip-path": "inset(0)" },
        },
        "left-to-right": {
          from: {
            "clip-path": "inset(0 100% 0 0)",
          },
          to: {
            "clip-path": "inset(0)",
          },
        },
      },
      boxShadow: {
        outer:
          "calc(-1 * var(--size)) calc(-1 * var(--size)) 0 var(--size), var(--size) calc(-1 * var(--size)) 0 var(--size), var(--size) var(--size) 0 var(--size), calc(-1 * var(--size)) var(--size) 0 var(--size);",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
};
export default config;
