/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
         shine: {
           '0%': { 'background-position': '100%' },
           '100%': { 'background-position': '-100%' },
           sparkle: {
          "0%, 100%": { opacity: "0.75", scale: "0.9" },
          "50%": { opacity: "1", scale: "1" },
         },
        },
       },
       animation: {
         shine: 'shine 5s linear infinite',
         sparkle: "sparkle 2s ease-in-out infinite",

       },
     },
   },
   plugins: [],
 }

