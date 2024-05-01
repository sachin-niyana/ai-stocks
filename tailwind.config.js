/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "16px",
      xmd: "18px",
      md: "20px",
      lg: "24px",
      xl: "32px",
      xxl: "40px",
      "2xl": "44px",
      "3xl": "52px",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Open_Sans: ["Open_Sans", "sans-serif"],
    },
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "header-bg": "url('/assets/image/background/header-bg.png')",
        "btn-gradient":
          "linear-gradient(294.21deg, #034BDA 4.27%, #33A8FF 73.84%)",
        "footer-gradient":
          "linear-gradient(171.68deg, #00FFE1 39.97%, #6E5DF6 107.69%)",
      },
      colors: {
        "rich-black": "#101010",
        "light-blue": "#eff3fb",
        "dark-blue": "#0b203d",
        "navy-blue": "#3861e4",
        "sky-blue": "#f9fbff",
        "light-sky-blue": "#4b70a2",
        blue: "#1771e9",
        gray: "#8b8b8b",
        "lihgt-lback": "#020507",
      },
      boxShadow: {
        contectCard: "0px 11px 33.5px 0px #0000001F",
        stockCard: "0px 6px 16.9px 0px #3861C44D",
        nasdaqCard: "0px 15px 52.1px 0px #0000001F",
        trendingCard: "0px 38px 0px -9px #E8F1FD",
        house: "0px 9px 30.6px 0px #00000033",
      },
    },
  },
  plugins: [],
};
