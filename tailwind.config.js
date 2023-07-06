/** @type {import('tailwindcss').Config} */
export default {
  // vue js

  // vue js

  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
  ],
 
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c44e13",
        
"secondary": "#00ff00",
        
"accent": "#ddd716",
        
"neutral": "#1e1a2e",
        
"base-100": "#008080",
        
"info": "#7ab7f0",
        
"success": "#11786e",
        
"warning": "#f4b915",
        
"error": "#e73639",
"--rounded-box": "2rem",
"--rounded-btn": "2rem",
        },
      },
      "dark",
      "light",
      "cupcake",
      "winter",
      "bumblebee",
      "forest"
    ],
  },
  plugins: [
    require('daisyui'),
  ],

};
