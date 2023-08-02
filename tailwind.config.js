const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=lemonade]"],
          "primary": "#95C1B7",
          // "primary-focus": "mediumblue",
          "info": "#2A5042"
        },
      },
    ],
    // themes: ["lemonade", "forest"],
    darkTheme: "forest",
    utils: true,
  },
}
