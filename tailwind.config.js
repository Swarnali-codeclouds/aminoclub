module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        "float-sway": "floatSway 8s ease-in-out infinite",
        "float-rotate": "floatRotate 10s ease-in-out infinite",
        "float-pulse": "floatPulse 7s ease-in-out infinite",
      },
      keyframes: {
        floatSway: {
          "0%,100%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(-15px) translateX(10px)",
          },
        },
        floatRotate: {
          "0%,100%": {
            transform: "rotate(0deg) translateY(0)",
          },
          "50%": {
            transform: "rotate(6deg) translateY(-12px)",
          },
        },
        floatPulse: {
          "0%,100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};