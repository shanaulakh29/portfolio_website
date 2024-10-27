/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes:{
        "bounce":{
          "0%, 100%":{
            transform:"translateY(0)"
          },
          "50%":{
            transform:"translateY(-15px)"
          }
        }
      },
      animation:{
        bounce:"bounce 1.5s linear  infinite"
      },
      boxShadow:{
      'blue': '10px 6px 12px blue'
      }
    },
  },
  plugins: [],
}

