/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "inter" : ['inter'],
        "Circular" : ['Cirlucar STD'],
        
      },
      
    colors : {
      'purple-custom' : '#5D50C6',
      'pink-custom' : '#F85E9F',
      'orange-custom' : '#FF5722',
      'grey-custom' : '#8B8B91',
    }
  },
  },
  plugins: [],
}

