/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "base-100": "#131313",
          "base-300": "#202020",
        },
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        },
        cupcake: {
          ...require("daisyui/src/colors/themes")["[data-theme=cupcake]"],
        },
        forest: {
          ...require("daisyui/src/colors/themes")["[data-theme=forest]"],
        },
        black: {
          ...require("daisyui/src/colors/themes")["[data-theme=black]"],
        },
        pastel: {
          ...require("daisyui/src/colors/themes")["[data-theme=pastel]"],
          "--rounded-btn": "0.5rem",
        },
        autumn: {
          ...require("daisyui/src/colors/themes")["[data-theme=autumn]"],
        },
        synthwave: {
          ...require("daisyui/src/colors/themes")["[data-theme=synthwave]"],
        },
        aqua: {
          ...require("daisyui/src/colors/themes")["[data-theme=aqua]"],
        },
      },
    ],
  },
};
