/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors:{
        // "blue-main":'#023047',
        "blue-main":'#003459',
        "yellow-main": '#ffb703',
        "orange-main":'#fb8500',
        "blue-second":'#219ebc'
  
      }
    },
  },


  plugins: [require("@tailwindcss/typography")],
};
