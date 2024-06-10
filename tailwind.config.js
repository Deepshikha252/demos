/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gold: {
          "100": "#ffdd2c",
          "200": "#e6c412",
        },
        silver: "#c1c1c1",
        gainsboro: {
          "100": "#dbdbdb",
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0.5)",
        },
        gray: "#040404",
        whitesmoke: "#f5f5f5",
        blueviolet: {
          "100": "#9747ff",
          "200": "#9320eb",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xl": "24px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "29xl": "48px",
      "19xl": "38px",
      "9xl": "28px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      "91xl": "110px",
      "14xl": "33px",
      "36xl": "55px",
      "6xl": "25px",
      "23xl": "42px",
      base: "16px",
      xl: "20px",
      "15xl": "34px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
