module.exports = {
  theme: {
    fontFamily: {
      heading: ["VC Honey Black Banner", "serif"],
      subheading: ["VC Honey Deck", "serif"],
    },
    extend: {
      colors: {
        accent: "#f31179",
      },
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
