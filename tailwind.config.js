module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
  },
  plugins: [],
};
