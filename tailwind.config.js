module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      animation: {
        typing: "typing 3.5s steps(15)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0",
          },

          "50%": {
            width: "8ch",
          },
          "100%": {
            width: "15ch",
          },
        },
      },
      colors: {
        softBlue: "#98C1D9",
        grayishBlue: "#adb5bd",
        borderBlue: "#3D5A80",
        bgDark: "#212529",
        grayCopyright: "#6C757D",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
};
