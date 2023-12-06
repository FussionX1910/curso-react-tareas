/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        keyframes: {
          wiggle: {
            "0%, 100%": { transform: "rotate(-3deg)" },
            "50%": { transform: "rotate(3deg)" }
          }
        },
        animation: {
          wiggle: "wiggle 200ms ease-in-out"
        }
      }
  },
  plugins: [],
};