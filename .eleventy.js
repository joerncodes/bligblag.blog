const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const {
  fortawesomeFreeRegularPlugin,
} = require("@vidhill/fortawesome-free-regular-11ty-shortcode");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "permalink text-slate-300 no-underline hover:underline hover:text-black",
    permalinkSymbol: "#"
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPlugin(fortawesomeFreeRegularPlugin);

  const { DateTime } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("yy-MM-dd");
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("dd-MM-yy");
  });

  return {
    dir: { input: "src", output: "_site" },
  };
};
