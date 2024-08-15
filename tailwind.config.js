module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        '90vh': '90vh',
      },
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
      screens: {
        'sm': '425px',  // Small screens
        'md': '768px',  // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
        '2xl': '1536px', // Extra extra large screens
        '3xl':'2560px',
        // Custom breakpoints
        'custom-sm': '320px', // Custom small breakpoint
        'custom-md': '960px', // Custom medium breakpoint
        'custom-lg': '1440px', // Custom large breakpoint
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
};
