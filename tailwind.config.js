module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Lato", "ui-sans-serif", "system-ui", "-apple-system"],
      heading: ["VC Honey Black Banner", "serif"],
      subheading: ["VC Honey Deck", "serif"],
    },
    extend: {
      colors: {
        accent: "#f31179",
      },
      typography: {
        DEFAULT: {
          css: {
          }
        }
      }
    },
  },
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  plugins: [require("@tailwindcss/typography")],
};
