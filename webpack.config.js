const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/frontend/index.tsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },

    target: "web",
    devServer: {
        port: 3000,
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader"
            }
        ]
    }
};