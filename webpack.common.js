const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "[name].js",
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /(\.png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "./images",
        },
      },

      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          outputPath: "./svgs",
        },
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
