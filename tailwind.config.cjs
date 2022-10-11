/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.css', './**/*.html'],
  theme: {
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '46px',
      '6xl': '64px',
      '7xl': '80px',
      '8xl': '96px',
    },
    screens: {
      xl: '1170px',

      lg: { max: '1279px' },

      // 'md': { max: '1535px' },
      md: { max: '920px' },

      sm: { max: '768px' },
      xsm: { max: '660px' },
      xs: { max: '460px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        main: "url('../../assets/img/bg.jpg')",
        bgsm: "url('../../assets/img/bg-sm.jpg')",
        banner1: "url('../../assets/img/banner.jpg')",
        banner2: "url('../../assets/img/banner-2.jpg')",
        checkbox: "url('../../assets/img/checkbox.svg')",
        calc: "url('../../assets/img/calculator/calc.jpg')",
        'checkbox-dis': "url('../../assets/img/checkbox-dis.svg)",
      },
      colors: {
        grBlue: '#4872C6',
        grPurple: '#36326A',
        grLBlue: '#0193CC',
        grCyan: '#01D0CC',
        grLight: '#D9F4FF',
        grTransparent: 'rgba(217, 244, 255, 0)',
        text: '#040404',

        transparent: 'transparent',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
