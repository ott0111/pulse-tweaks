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
        background: "#050505",
        foreground: "#ffffff",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 6s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
