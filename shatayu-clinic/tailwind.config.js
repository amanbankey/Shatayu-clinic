export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#e8f4fd",
          100: "#c8e7fa",
          200: "#91ccf5",
          300: "#5ab1f0",
          400: "#2494e8",
          500: "#0e7fd4",
          600: "#0864aa",
          700: "#064d83",
          800: "#04375d",
          900: "#022038",
        },
      },
    },
  },
  plugins: [],
};
