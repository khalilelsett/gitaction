/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cbg: "rgb(33, 33, 33)",
        cc1: "rgb(52, 47, 88)",
        cc2: "rgb(132, 85, 163)",
        ctd: "rgb(35, 35, 35)",
        bgm: "rgb(91, 94, 96)",
        bgtask: "rgb(33, 37, 41)",
      },
    },
  },
  plugins: [],
};
