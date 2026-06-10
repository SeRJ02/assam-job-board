import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "assam-green": {
          50: "#f0f7f3",
          100: "#d9eae0",
          200: "#b3d5c8",
          300: "#8cc0af",
          400: "#66ab97",
          500: "#3f9680",
          600: "#2b7d68",
          700: "#1b5c50",
          800: "#134538",
          900: "#0c2e20",
        },
        "assam-gold": {
          50: "#fffbf0",
          100: "#fff3d6",
          200: "#ffe7ac",
          300: "#ffdb82",
          400: "#ffcf58",
          500: "#ffc82e",
          600: "#ffb800",
          700: "#e6a300",
          800: "#cc8f00",
          900: "#996b00",
        },
      },
    },
  },
  plugins: [],
};

export default config;
