import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "520px",
        sm: "760px",
        md: "960px",
        lg: "1280px",
        xl: "1440px",
      },
      colors: {
        primary: {
          100: "#f0ecfb",
          200: "#e2dbf9",
          300: "#ccbef4",
          400: "#b399ec",
          500: "#9a70e2",
          600: "#8a51d6",
          800: "#6634a3",
          900: "#552d85",
          950: "#351b5a",
        },
        base: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
      },
    },
    spacing: {
      "1": "8px",
      "2": "12px",
      "3": "16px",
      "4": "24px",
      "5": "32px",
      "6": "48px",
      "7": "56px",
      "8": "64px",
      "9": "108px",
    },
  },
  plugins: [],
};
export default config;
