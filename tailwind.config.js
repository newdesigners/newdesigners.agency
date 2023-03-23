module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Base
      transparent: "transparent",
      current: "currentColor",

      // Theme
      primary: "#223343",
      secondary: "#FFBA00",
      tertiary: "#00B2CD",

      // Abstract
      white: "#F2F2F2",
      realwhite: "#FFFFFF",
      gray: "#E9EBEC",
      black: "#000000",

      // Colors
      yellow: "#FFBA00",
      blue: {
        light: "#CAD0DC",
        DEFAULT: "#4E5B73",
        dark: "#3B4559",
        pacific: "#00B2CD"
      }
    },
    spacing: {
      px: "1px",
      0: "0px",
      0.125: "0.125rem",
      0.25: "0.25rem",
      0.375: "0.375rem",
      0.5: "0.5rem",
      0.625: "0.625rem",
      0.75: "0.75rem",
      0.875: "0.875rem",
      1: "1rem",
      1.25: "1.25rem",
      1.5: "1.5rem",
      1.75: "1.75rem",
      2: "2rem",
      2.25: "2.25rem",
      2.5: "2.5rem",
      2.75: "2.75rem",
      3: "3rem",
      3.5: "3.5rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
      7: "7rem",
      8: "8rem",
      9: "9rem",
      10: "10rem",
      11: "11rem",
      12: "12rem",
      13: "13rem",
      14: "14rem",
      15: "15rem",
      16: "16rem",
      18: "18rem",
      20: "20rem",
      24: "24rem"
    },
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      fontFamily: {
        heading: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        body: [
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      fontSize: {
        md: ["1.0625rem", { lineHeight: "1.5em" }]
      },
      width: {
        inherit: "inherit",
        'testimg': '196px',
        'testimgsmall': '135px'

      },
      height:{
        'testimg': '196px',
        'testimgsmall': '135px'

      },
      maxWidth: {
        "logo-xsm": "75px",
        "logo-sm": "150px",
        "logo": "250px",
        "logo-md": "350px",
      },
      transitionProperty: {
        'height': 'height, max-height',
      }
    }
  },
  variants: {
    extend: {
      rotate: ["group-hover"]
    }
  },
  plugins: []
};
