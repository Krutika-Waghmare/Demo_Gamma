/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('../images/site_showcase_bg.jpg')",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
