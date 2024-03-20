const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    target: "node",
    externals: [nodeExternals()],
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "output"),
        filename: "[name].bundle.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
};
