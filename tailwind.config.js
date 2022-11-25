// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "pages/**/*.{js,ts,jsx,tsx}",
    "components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        classic: ["Classic", "cursive"],
      },
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '1rem',
        xl: '2rem',
        '2xl': '4rem',
      },
    },
  },
  plugins: [],
}
