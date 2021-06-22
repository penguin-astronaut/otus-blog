const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = fs
  .readdirSync(`${__dirname}/src/pug/pages`)
  .filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
  entry: "./src/index.js",
  target: "web",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${__dirname}/src/pug/pages/${page}`,
          filename: `./${page.replace(/\.pug/, ".html")}`,
        })
    ),
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
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "./img/[name].[ext]",
        },
      },
    ],
  },
};
