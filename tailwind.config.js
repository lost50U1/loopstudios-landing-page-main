/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "hsl(0, 0%, 41%)",
        "dark-gray": "hsl(0, 0%, 55%)",
      },
      fontFamily: {
        alata: "'Alata', sans-serif;",
        josefin: "'Josefin Sans', sans-serif;",
      },
      container: {
        center: "true",
        padding: {
          DEFAULT: "1rem",
          sm: "3rem", // for 640px
          desktop: "10rem", // for 1440px
        },
      },
      screens: {
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
