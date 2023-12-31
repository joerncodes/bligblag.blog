const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const {
  fortawesomeFreeRegularPlugin,
} = require("@vidhill/fortawesome-free-regular-11ty-shortcode");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginRss = require("@11ty/eleventy-plugin-rss");

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
  eleventyConfig.addPlugin(pluginRss);

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("wordcount", (str) => {
    return str.trim().split(/\s+/).length;
  });

  eleventyConfig.addFilter("readtime", (str) => {
    const words = str.trim().split(/\s+/).length;
    return Math.round(words / 238, 2);
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("yy-MM-dd");
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toLocaleString(DateTime.DATE_FULL)
  });

  eleventyConfig.addFilter("relativeDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toRelative()
  });

  return {
    dir: { input: "src", output: "_site" },
  };
};
