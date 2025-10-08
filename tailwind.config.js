/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        animation: {
          ["infinite-slider"]: "infiniteSlider 20s linear infinite",
        },
        keyframes: {
          infiniteSlider: {
            "0%": { transform: "translateX(0)" },
            "100%": {
              transform: "translateX(calc(-250px * 5))",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
