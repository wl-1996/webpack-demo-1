var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "[index].[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "XDML - 写代码啦",
      template: "src/assets/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/, //正则表达式，匹配所有以.css结尾的文件
        //css-loader把css文件读到js文件里，style-loader把css-loader读到的内容变成style标签，放到html的head里：
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
