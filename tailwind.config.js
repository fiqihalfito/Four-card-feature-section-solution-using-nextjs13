/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/index.js",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "hsl(0, 78%, 62%)",
        primaryCyan: "hsl(180, 62%, 55%)",
        primaryOrange: "hsl(34, 97%, 64%)",
        primaryBlue: "hsl(212, 86%, 64%)",
        neutralVeryDarkBlue: "hsl(234, 12%, 34%)",
        neutralGrayishBlue: "hsl(229, 6%, 66%)",
        neutralVeryLightGray: "hsl(0, 0%, 98%)",
      },
      fontSize: {
        '15px': '15px',
      },
      fontFamily: {
        poppins: "var(--font-poppins)"
      }
    },
  },
  plugins: [],
}
