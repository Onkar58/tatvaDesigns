/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation : {
        slider: "slider 50s infinite linear ",
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        }
      },
      backgroundImage:{
        'contact':"url('./src/assets/images/contact.jpg')"
      }
    },
  },
  plugins: [],
}

