/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["0.955rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "2rem" }],
        xl: ["1.25rem", { lineHeight: "2rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["2rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      colors: {
        // Brand Colors
        "aimara-teal": "#00C2CB",
        "aimara-black": "#000000",
        "aimara-white": "#FFFFFF",

        // Legacy/Gradient Support (Refined)
        "azul_aimara": "#000000", // Shifted to black for cleaner look or keep deep blue if needed for gradients
        "celeste_aimara": "#00C2CB", // Aligned with brand teal
        "boton_aimara": "#00A8B0", // Slightly darker teal for hover states

        // Dark Theme Palette (Premium AI Aesthetic)
        "space-950": "#050505", // Almost black
        "space-900": "#0A0A0A", // Very dark gray
        "space-800": "#121212", // Standard dark surface

        black: "#000000",
        white: "#FFFFFF",

        accent: {
          50: "#E0FCFD",
          100: "#B3F6F8",
          200: "#80EFF3",
          300: "#4DE8EE",
          400: "#26E2E9",
          500: "#00C2CB", // Brand Primary
          600: "#009DA5",
          700: "#00797F",
          800: "#00565A",
          900: "#003436",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        display: ["Cabinet Grotesk", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
});