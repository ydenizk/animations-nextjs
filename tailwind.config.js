/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "back": "url('/images/3/background.jpg')",
      },
      fontFamily:{
        nunito:['Nunito', "sans-serif"]
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      colors: {
        blackk: "rgb(26,26,33)",
        bgcolor: "rgb(239,239,239)",
        softBlack: "rgb(41,41,41)",
      },
    },
  },
  screens: {
    lg: { max: "1024px" },
    // => @media (min-width: 1024px and max-width: 1279px) { ... }

    mmd: { max: "860px" },
    // => @media (min-width: 768px and max-width: 1023px) { ... }
    md: { max: "760px" },
    sm: { max: "640px" },
    // => @media (min-width: 640px and max-width: 767px) { ... }

    xs: { max: "480px" },
  },
  plugins: [],
  darkMode:"class",
};
