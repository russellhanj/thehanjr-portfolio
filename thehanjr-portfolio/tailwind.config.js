/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F8F6F3",
        surface: "#FFFFFF",
        surfaceMuted: "#F0ECE8",

        text: {
          primary: "#1A1A1A",
          secondary: "#4A4A4A",
        },

        accent: {
          DEFAULT: "#B68A6E",
          dark: "#946D53",
        },

        gray: {
          100: "#E9E6E2",
          300: "#D2CEC9",
          500: "#A7A29B",
          700: "#6C6862",
          900: "#2B2B2B",
        },
      },

      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },

      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1" }],
        "display-md": ["3rem", { lineHeight: "1.1" }],
        "display-sm": ["2.25rem", { lineHeight: "1.15" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        caption: ["0.875rem", { lineHeight: "1.4" }],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        subtle: "0 8px 24px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
