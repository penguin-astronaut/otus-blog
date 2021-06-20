const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  target: "web",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/pug/pages/index.pug"),
      title: "Blog",
      filename: "index.html",
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    inline: true,
    hot: true,
    port: 9000,
    watchContentBase: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/i,
        use: ["pug-loader"],
      },
    ],
  },
};
