const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        popup: "./src/popup.js",
        // version: "./version.js",
        background: "./src/background.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
};
