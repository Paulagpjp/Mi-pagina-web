import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B12",
        cream: "#FFF7EE",
        magenta: "#E2005A",
        violet: "#6C2BD9",
        lime: "#C6FF4F",
        amber: "#FFC93C",
        cyan: "#22D3EE",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-fast": "marquee 16s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spinSlow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
