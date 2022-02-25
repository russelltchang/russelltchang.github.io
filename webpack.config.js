const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "/client/src/index.js",
  devServer: {
    historyApiFallback: true,
  },
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(pdf|png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebPackPlugin({
      template: "client/src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  externals: {
    cheerio: "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
  },
};
