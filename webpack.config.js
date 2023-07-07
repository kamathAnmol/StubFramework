const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {presets: ["@babel/env", "@babel/preset-react"]},
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif|pdf/,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
      {
        test: /\.s[ac]ss/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
