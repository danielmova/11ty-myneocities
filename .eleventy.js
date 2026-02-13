module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/js");

  eleventyConfig.addFilter("limit", function(arr, amount) {
    if (!Array.isArray(arr)) return [];
    return arr.slice(0, amount);
  });

  eleventyConfig.addFilter('exclude', (collection, stringToFilter) => {
  if (!stringToFilter) {
    return collection;
  }
  return (collection ?? []).filter((item) => item !== stringToFilter);
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

