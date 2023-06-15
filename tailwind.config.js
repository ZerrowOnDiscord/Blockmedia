/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#060b17",
        secondary: "#00f6ff",
        darkGray: "#202020",
        lightGray: "rgb(82, 82, 82)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        darkBlue: "#03172d",
        iconBlue: "#2484FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      img: "463px",
    },
    animation: {
      'appear-anim-mob': 'appear2 0.5s ease-in-out',
      'appear-anim': 'appear 0.5s ease-in-out',
      'scroll-anim': 'scroll-mouse 2s linear infinite',
      'arrow-appear': 'arrow 1s ease-in-out',
      'appear-text-delay-1': 'appear-delay 0.5s ease-in-out',
      'appear-text-delay-2': 'appear-delay 1s ease-in-out',
    },
    keyframes: {
      'appear2': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'appear': {
        '0%': { opacity: '0', transform: 'translateY(-10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'scroll-mouse': {
        '0%': { transform: 'translateY(0) translateX(-50%)' },
        '50%': { transform: 'translateY(17px) translateX(-50%)'},
        '100%': { transform: 'translateY(0) translateX(-50%)' },
      },
      'arrow': {
        '0%': { transform: 'translateY(10px) translateX(-50%) rotate(45deg)', opacity: '0' },
        '100%': { transform: 'translatex(-50%) translateY(-50%) rotate(45deg)', opacity : '1'},
      },
      'appear-delay': {
        '0%': { opacity: '0', transform: 'translateY(100%)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    }
  },
  plugins: [],
};