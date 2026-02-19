module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/js");

  //Custom filter to Limit the amout of blogpost showed
  eleventyConfig.addFilter("limit", function(arr, amount) {
    if (!Array.isArray(arr)) return [];
    return arr.slice(0, amount);
  });

  //Custom filter to Exclude blog from tags
  eleventyConfig.addFilter('exclude', (collection, stringToFilter) => {
  if (!stringToFilter) {
    return collection;
  }
  return (collection ?? []).filter((item) => item !== stringToFilter);
  });

  // Add a collection for blog posts
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
      return b.date - a.date; // Sort in reverse chronological order (newest first)
    });
  });
  
  // Add date filter for RSS
  eleventyConfig.addFilter("dateToRfc822", function(date) {
    return new Date(date).toUTCString();
  });
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};

