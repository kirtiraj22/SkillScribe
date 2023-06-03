module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black_900: "#000000",
        white_A700_90: "#ffffff90",
        blue_100: "#acd4f7",
        blue_100_01: "#c7e3fb",
        blue_gray_900_cc: "#363636cc",
        blue_gray_900: "#363636",
        white_A700: "#ffffff",
        blue_100_cc: "#c7e3fbcc",
      },
      fontFamily: { poppins: "Poppins", chalkboardse: "Chalkboard SE" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
