/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        transparent: "transparent",

        black: "#000000",
        white: "#FFFFFF",

        gray: {
          900: "#121214",
          800: "#202024",
          400: "#c4c4cc",
          200: "#e1e1e6",
        },

        cyan: {
          500: "#81d8f7",
          300: "#9b1efb",
        },
      },
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32,
      },
    },
  },
  plugins: [],
};
