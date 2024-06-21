/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        f1:"#31A0FE",
        TX1:"#F83535",
        TX01:"#A4B5B8",
        TX2:"#42424",
        TX3:"#fdc62e",
        TX4:"#F42C37",
        TX5:"#D9D9D9",
        TX6:"#3DDD6A",
        TX7:"#1376f4",
        TX8:"#D9D9D9",
        TX9:"#263B3E",
        TX10:"#334B4F",
        TX11:"##ffffff0d",
        b1:"#263B3E",
        b2:"#273242",
        b3:"#B22222",
        b4:"#A4B5B8",
        // warna buat yang di Account 
        b5:"#F5F5F5",
      },  
      backgroundImage:{
        bgl:"url('../img/cp-bg.png')",
        bg2:"url('../img/cp-bg-2.png')",
        bg3:"url('../img/payy2.png')",
        bg3:"url('../img/payy3.png')",
        
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode:'class'
}

