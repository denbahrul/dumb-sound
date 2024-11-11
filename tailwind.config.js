/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {},
    extend: {
      colors: {
        background: {
          primary: "#161616",
          secondary: "#2E2D2D",
          teritery: "#2B2B2B",
          quaternary: "#212121",
        },
        // border: {
        //   primary: "#BCBCBC",
        // },
        orange: "#EE4622",
        // green: "#56C05A",
        // gray: {
        //   textA: "#6A6A6A",
        //   textB: "#B7B7B7",
        //   textC: "#ABABAB",
        // },
      },
    },
  },
  plugins: [],
};
