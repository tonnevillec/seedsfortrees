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
        seedfortrees: {
          "primary": "#74B88B",
          "secondary": "#24382a",
          "accent": "#ef4444",
          "neutral": "#333c4d",
          "base-100": "#ffffff",
          "info": "#4c785b",
          "success": "#7cc494",
          "warning": "#fef08a",
          "error": "#fecaca",
        },
      },
    ],
    // themes: [
    //   {
    //     light: {
    //       ...require("daisyui/src/theming/themes")["[data-theme=lemonade]"],
    //       "primary": "#95C1B7",
    //       "info": "#2A5042"
    //     },
    //   },
    // ],
    darkTheme: "forest",
    utils: true,
  },
}
