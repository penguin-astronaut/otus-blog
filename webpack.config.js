const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      title: "Blog",
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist/public"),
    compress: true,
    port: 9000,
  },
};
