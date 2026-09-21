import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d9f0ff",
          200: "#bce5ff",
          300: "#8ed4ff",
          400: "#59b8ff",
          500: "#3396ff",
          600: "#1a75f5",
          700: "#135ee1",
          800: "#164cb6",
          900: "#18428f",
          950: "#132957",
        },
        accent: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(19,41,87,0.95) 0%, rgba(26,117,245,0.85) 50%, rgba(51,150,255,0.75) 100%)",
        "water-pattern":
          "radial-gradient(circle at 20% 50%, rgba(51,150,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,117,245,0.1) 0%, transparent 40%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
