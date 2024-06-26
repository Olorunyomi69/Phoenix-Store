/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: "480px",
      md:"768px",
      lg: "976px",
      xl:"1440px"
    },
    extend: {
      colors: {
        peach: "#ffc59e",
        brightRedLight:"hsl(12, 88%, 69%)",
        brightRedSupLight:"hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue:"hsl(227, 12%, 61%)",
        veryDarkBlue:"hsl(233, 12%, 13%)",
        veryPaleRed:"hsl(13, 100%, 96%)",
        veryLightGray:"hsl(0, 0%, 98%)", 
        },
        utilities: {
          '.cubic-bezier': {
            'transition-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          },
        },
      },
     
  },
  plugins: [],
}