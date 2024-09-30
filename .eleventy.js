module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/img/");
    eleventyConfig.addWatchTarget("./src/img/");

    eleventyConfig.addCollection("conceptsAlpha", function(collection) {
        return collection.getFilteredByGlob("src/subpages/**").sort(function(a, b) {
            let nameA = a.data.title.toUpperCase();
            let nameB = b.data.title.toUpperCase();
            if (nameA < nameB) return -1;
            else if (nameA > nameB) return 1;
            else return 0;
        });
    });

    eleventyConfig.addCollection("postsAscending", (collection) =>
        collection.getFilteredByGlob("src/subpages/**").sort((a, b) => {
            if (a.data.title > b.data.title) return -1;
            else if (a.data.title < b.data.title) return 1;
            else return 0;
        })
    );

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};