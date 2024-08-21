import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: ' bg-gradient-to-br from-indigo-400 via-blue-500 to-teal-400 text-transparent bg-clip-text',
        dimWhite: "rgba(255, 255, 255, 0.7)", // A dimmed white color
        dimBlue: "rgba(9, 151, 124, 0.1)", // A dimmed blue color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Use the Poppins font family
      },
    },
    keyframes: {
      scale: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.2)' },
      },
    },
    animation: {
      'scale-pulse': 'scale 1s ease-in-out infinite',
      first: "moveVertical 30s ease infinite",
      second: "moveInCircle 20s reverse infinite",
      third: "moveInCircle 40s linear infinite",
      fourth: "moveHorizontal 40s ease infinite",
      fifth: "moveInCircle 20s ease infinite",
      spotlight: "spotlight 2s ease .75s 1 forwards",

    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    plugins: [

    ],
  },
  keyframes: {
    moveHorizontal: {
      "0%": {
        transform: "translateX(-50%) translateY(-10%)",
      },
      "50%": {
        transform: "translateX(50%) translateY(10%)",
      },
      "100%": {
        transform: "translateX(-50%) translateY(-10%)",
      },
    },
    moveInCircle: {
      "0%": {
        transform: "rotate(0deg)",
      },
      "50%": {
        transform: "rotate(180deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
    moveVertical: {
      "0%": {
        transform: "translateY(-50%)",
      },
      "50%": {
        transform: "translateY(50%)",
      },
      "100%": {
        transform: "translateY(-50%)",
      },
    },
    spotlight: {
      "0%": {
        opacity: 0,
        transform: "translate(-72%, -62%) scale(0.5)",
      },
      "100%": {
        opacity: 1,
        transform: "translate(-50%,-40%) scale(1)",
      },
    },
  },
};
export default config;
