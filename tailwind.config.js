module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      fourK: "2560px",
      laptopL: "1440px",
      laptop: "1024px",
      tablet: "768px",
      tabletS: "524px",
      tabletM: "624px",
      mobileL: "425px",
      mobileM: "375px",
      mobileS: "320px",
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {
      colors: {
        black1: "#130F40",
        Red: "#FF0000",
        white1: "#f5f7fa",
        white2: "#b8c6db",
        // bgBlack: "#0D1117",
        // bgBlackSec: "#0A0D12",
        // tWhite: "#E5E9F0",
        // tWhiteSec: "#bdc2c9",
        // yellow: "#8A6E35",
        // tRed: "#79C0FF",
      },
    },
  },
  plugins: [],
};
