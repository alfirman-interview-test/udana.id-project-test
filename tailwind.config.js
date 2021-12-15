module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/public/assets/img/hero-image.jpg')",
        "hero-image-mobile": "url('/public/assets/img/hero-image-mobile.jpg')",
        "step": "url('/public//assets/step/bg-step.png')",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        ubuntu: [
          "Ubuntu",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
        ],
      },
    },
  },
  plugins: [],
};
