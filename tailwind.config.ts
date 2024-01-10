import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        mobile: "490px",
        tablet: "1040px",
        desktop: "1620px",
      },
      boxShadow: {
        custom: "10px 10px 30px -15px rgba(23, 23, 23, 0.4)",
      },
      scale: {
        "-100": "-1",
      },
      colors: {
        beige: {
          DEFAULT: "#FFD1AF",
          100: "#FFEBDC",
          200: "#FFE0CA",
          300: "#FFD9BD",
          400: "#FFD1AF",
          500: "#FFC9A1",
          600: "#F0A56D",
          700: "#C88554",
          800: "#9A633A",
          900: "#372416",
        },
      },
    },
  },
  plugins: [],
};
export default config;
