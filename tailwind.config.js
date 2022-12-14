module.exports = {
  purge: [
  './_includes/**/*.html',
  './_layouts/**/*.html',
  './_posts/*.html',
  './*.html'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend:{
    colors:{
      'Pal':{
        red: {
          100: "#ffe2e1",
          200: "#fec5c2",
          300: "#fea9a4",
          400: "#fd8c85",
          500: "#fd6f67",
          600: "#ca5952",
          700: "#98433e",
          800: "#652c29",
          900: "#331615"
      },
      teal: {
          100: "#dbefed",
          200: "#b7dfdb",
          300: "#94d0ca",
          400: "#70c0b8",
          500: "#4cb0a6",
          600: "#3d8d85",
          700: "#2e6a64",
          800: "#1e4642",
          900: "#0f2321"
      },
      orange: {
          100: "#ffe9da",
          200: "#ffd3b5",
          300: "#febd91",
          400: "#fea76c",
          500: "#fe9147",
          600: "#cb7439",
          700: "#98572b",
          800: "#663a1c",
          900: "#331d0e"
      },
      white: {
          100: "#f7f9fa",
          200: "#eff3f6",
          300: "#e6ecf1",
          400: "#dee6ed",
          500: "#d6e0e8",
          600: "#abb3ba",
          700: "#80868b",
          800: "#565a5d",
          900: "#2b2d2e"
      },
      },
      'LM':{
        black: {
          100: "#d2d0df",
          200: "#a5a0bf",
          300: "#78719f",
          400: "#4b417f",
          500: "#1e125f",
          600: "#180e4c",
          700: "#120b39",
          800: "#0c0726",
          900: "#060413"
      },
      pink: {
          100: "#fee1f1",
          200: "#fdc3e3",
          300: "#fca5d5",
          400: "#fb87c7",
          500: "#fa69b9",
          600: "#c85494",
          700: "#963f6f",
          800: "#642a4a",
          900: "#321525"
      },
      orange: {
          100: "#ffedd0",
          200: "#ffdba1",
          300: "#fec972",
          400: "#feb743",
          500: "#fea514",
          600: "#cb8410",
          700: "#98630c",
          800: "#664208",
          900: "#332104"
      },
      purple: {
          100: "#e8dcff",
          200: "#d1b9ff",
          300: "#ba96ff",
          400: "#a373ff",
          500: "#8c50ff",
          600: "#7040cc",
          700: "#543099",
          800: "#382066",
          900: "#1c1033"
      },

      }
    },
    backgroundImage: {
    'bg-1': "url('images/background-1.png')",
    'bg-2': "url('images/background-2.png')",
    }
    },
    screens: {
      // Tiny => @media (min-width: 320px) { ... }
      'ty': '320px',
      // Mobile
      'md': '640px',
      // Tablet
      'sm': '768px',
      // Desktop
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'tiny': {'max': '320px'},
      'mob': {'max': '768px'},
    },
    fontFamily:{
      'Josefin': ['Josefin Sans', 'sans-serif'],
      'bungee': ['Bungee', 'cursive'],
      'OpenSans': ['Open Sans', 'sans-serif'],
    },

    
   
  },
  variants: {
    extend: {
      
    }
  },
  plugins: [
  require('@tailwindcss/typography'),
  //require('@tailwindcss/line-clamp'),
  //require('@tailwindcss/forms'),
  ]
}