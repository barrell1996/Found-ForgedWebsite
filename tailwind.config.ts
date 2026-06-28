import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        forged: {
          black: "#050505",
          charcoal: "#181818",
          steel: "#5f6468",
          concrete: "#d7d7d3",
          smoke: "#f3f3f1",
          silver: "#c9ced1"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial Black", "Arial", "sans-serif"]
      },
      boxShadow: {
        industrial: "0 18px 60px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
