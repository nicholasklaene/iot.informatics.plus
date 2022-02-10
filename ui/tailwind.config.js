module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        cta: "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
