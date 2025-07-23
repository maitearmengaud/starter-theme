/** @type {import('tailwindcss').Config} */
module.exports = {
    important: false,
    content: [
      "./src/**/*.{php,html,js,jsx}",
      "./includes/**/*.{php,html,js,jsx}",
      "./templates/**/*.{php,html,js,jsx}",
    ],
    safelist: [],
    theme: {
      extend: {
        spacing: {
          "global-padding": "var(--global-padding)",
        },
        fontFamily: {
          yeseva: ["Yeseva One", "serif"],
          inclusive: ["Inclusive Sans", "Arial", "sans-serif"],
        },
        fontSize: {
          0: "0px",
          legend: [
            "0.875rem",
            {
              lineHeight: "1.3",
              fontWeight: "500",
            },
          ],
          base: [
            "clamp(0.875rem, 0.8vw + 0.125rem, 1rem)",
            {
              lineHeight: "1.5",
              fontWeight: "400",
            },
          ],
          big: [
            "clamp(1.5rem, 1vw + 0.25rem, 2rem)",
            {
              lineHeight: "1.2",
              fontWeight: "500",
            },
          ],
          button: [
            "clamp(1rem, 1vw + 0.25rem, 1.25rem)",
            {
              lineHeight: "1.2",
              fontWeight: "500",
            },
          ],
          h1: [
            "clamp(2.75rem, 4.68vw + 1rem, 5.625rem)",
            {
              lineHeight: "1.1",
              fontWeight: "200",
            },
          ],
          h2: [
            "clamp(2.25rem, 3.64vw + 1rem, 4.375rem)",
            {
              lineHeight: "1.1",
              fontWeight: "200",
            },
          ],
          h3: [
            "clamp(1.5rem, 2.6vw + 1rem, 3.125rem)",
            {
              lineHeight: "1.1",
              fontWeight: "200",
            },
          ],
          h4: [
            "clamp(1.375rem, 1.56vw + 1rem, 1.875rem)",
            {
              lineHeight: "1.2",
              fontWeight: "500",
            },
          ],
          h5: [
            "clamp(1rem, 1vw + 0.25rem, 1.375rem)",
            {
              lineHeight: "1.2",
              fontWeight: "500",
            },
          ],
          h6: [
            "clamp(0.875rem, 1vw + 0.25rem, 1.25rem)",
            {
              lineHeight: "1.2",
              fontWeight: "500",
            },
          ],
        },
        colors: {
          black: "rgb(var(--black))",
          white: "rgb(var(--white))",
          dark: "rgb(var(--dark))",
          light: "rgb(var(--light))",
          primary: "rgb(var(--primary))",
          secondary: "rgb(var(--secondary))",
          transparent: "rgb(var(--transparent))",
          background: "rgb(var(--background))",
          "background-opacified": "rgba(var(--background), 0.2)",
          foreground: "rgb(var(--foreground))",
          "foreground-opacified": "rgba(var(--foreground), 0.2)",
          accent: "rgb(var(--accent-color))",
        },
        textColor: {
          black: "rgb(var(--black))",
          white: "rgb(var(--white))",
          dark: "rgb(var(--dark))",
          light: "rgb(var(--light))",
          primary: "rgb(var(--primary))",
          secondary: "rgb(var(--secondary))",
          transparent: "rgb(var(--transparent))",
          background: "rgb(var(--background))",
          "background-opacified": "rgba(var(--background), 0.2)",
          foreground: "rgb(var(--foreground))",
          "foreground-opacified": "rgba(var(--foreground), 0.2)",
          accent: "rgb(var(--accent-color))",
        },
        borderColor: {
          opacity: {
            base: "rgba(var(--color-text-tag-base), .2)",
          },
        },
        backgroundColor: {
          black: "rgb(var(--black))",
          white: "rgb(var(--white))",
          dark: "rgb(var(--dark))",
          light: "rgb(var(--light))",
          primary: "rgb(var(--primary))",
          secondary: "rgb(var(--secondary))",
          transparent: "rgb(var(--transparent))",
          background: "rgb(var(--background))",
          "background-opacified": "rgba(var(--background), 0.2)",
          foreground: "rgb(var(--foreground))",
          "foreground-opacified": "rgba(var(--foreground), 0.2)",
          accent: "rgb(var(--accent-color))",
        },
        margin: {
          "1/2": "50%",
          button: "64px",
          gallery: "64px",
          subtitle: "64px",
        },
        maxWidth: {
          default: "960px",
          wide: "1400px",
          full: "100%",
        },
        gap: {
          buttons: "32px",
        },
        zIndex: {
          "-1": "-1",
        },
        borderRadius: {
          base: "16px",
        },
        gridTemplateRows: {
          0: "0fr",
        },
        scrollbar: {
          hide: "scrollbar-hide",
        },
      },
      variants: {
        extend: {
          before: ["hover", "focus"],
          after: ["hover", "focus"],
        },
      },
    },
    plugins: [
      function ({ addBase }) {
        addBase({
          "h1, h2, h3, h4, h5, h6, .text-h1, .text-h2, .text-h3, .text-h4, .text-h5, .text-h6": {
            fontFamily: "yeseva",
          },
          "body, p, span, a, li, ul, ol, blockquote, cite, figcaption, caption, input, textarea, select, button": {
            fontFamily: "inclusive",
          },
        });
      },
      function ({ addUtilities }) {
        addUtilities({
          ".grid-auto-columns-minmax": {
            "grid-auto-columns": "minmax(100px, auto)",
          },
        });
        addUtilities(
          {
            ".before-hover": {
              content: '""',
              display: "block",
              height: "100%",
              left: "0",
              position: "absolute",
              top: "0",
              width: "100%",
              "z-index": "1",
            },
            ".content-empty": {
              content: '""',
            },
          },
          ["before", "after"],
        );
      },
      require('@tailwindcss/forms'),
    ],
  };
  