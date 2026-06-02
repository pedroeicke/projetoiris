import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Âncora
        cream: "#F3E8D5",
        creamDeep: "#EEDFC6",
        paper: "#FBF5EA",
        teal: "#0A5A5E",
        tealDeep: "#06474B",
        ink: "#37322A",
        inkSoft: "#6A6356",
        ochre: "#C98A3C",
        // Secundárias quentes
        terracotta: "#9F4526",
        sage: "#A6A06B",
        olive: "#76713A",
        salmon: "#E0A088",
        // Acento espectral (uso pontual)
        amber: "#E8C07A",
        sky: "#9FB6BE",
        blush: "#E6A8B0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-mulish)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        organic: "20px",
      },
      boxShadow: {
        warm: "0 18px 34px -22px rgba(55,50,42,.4)",
        "warm-lg": "0 32px 60px -30px rgba(6,71,75,.38)",
      },
      letterSpacing: {
        eyebrow: ".18em",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        warm: "cubic-bezier(.22,.61,.36,1)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1.5deg)" },
        },
      },
      animation: {
        "float-slow": "float-slow 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
