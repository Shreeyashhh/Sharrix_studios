/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          beige: "#F9F5EF",
          cream: "#FFFFFF",
          surface: "#F2ECE1",
          sand: "#E6DDD0",
          orange: "#FF5500",
          "orange-hover": "#E64A00",
          amber: "#FFA800",
          dark: "#1C1917",
          muted: "#78716C",
          border: "rgba(28, 25, 23, 0.10)",
          "border-hover": "rgba(255, 85, 0, 0.40)",
        }
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'spin 18s linear infinite reverse',
      }
    },
  },
  plugins: [],
}
