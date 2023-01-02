/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js, ejs}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('../images/site_showcase_bg.jpg')",
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'md':'800px',
        'lg': '800px',
        'xl': '800px',
        '2xl': '1000px',
      }
    },
    screens: {
      'md':'911px',
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
