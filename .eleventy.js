export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/projects/**/*.png");
  eleventyConfig.addPassthroughCopy("src/projects/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addCollection("projects", (c) =>
    c.getFilteredByTag("project").sort((a, b) => a.data.order - b.data.order)
  );

  eleventyConfig.addFilter("readTime", (content) => {
    const words = String(content).replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 220));
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
}
