// next.config.js

const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const compose = require("next-compose");

module.exports = compose([
    [
        withCSS,
        {
            // cssLoaderOptions: {
            //     url: false,
            // },
        },
    ],
    [withImages, {}],
    [withSass, {}],
]);
