/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        prosto: ["Prosto One"],

        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "regal-blue": "#243c5a",
        myblue: "#374151",
        "myblue-light": "#586170",
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};
