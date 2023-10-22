module.exports = function (eleventyConfig) {
    return {
      dir: {
        input: "resources",
        output: "public"
      }
    };
  };

  module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./resources/css/");
    eleventyConfig.addWatchTarget("./resources/css/");
    eleventyConfig.addPassthroughCopy("./resources/images/");
    eleventyConfig.addPassthroughCopy({ "./resources/favicons": "/" });
    eleventyConfig.addPassthroughCopy("./resources/fonts");
    eleventyConfig.addPassthroughCopy("./resources/web.config");
    eleventyConfig.addPassthroughCopy("./resources/scripts/");
    eleventyConfig.addWatchTarget("./resources/scripts/");
  
    return {
      dir: {
        input: "resources",
        output: "public"
      }
    };
  };
