var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false
    })
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/, //正则表达式，匹配所有以.css结尾的文件
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/public/path/to/"
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};
