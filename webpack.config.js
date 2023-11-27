const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = () => {
  const entryPoint = process.env.NODE_ENV || "main"; // Default to "main" if NODE_ENV is not specified

  const entryPaths = {
    main: "./src/index.js",
    devWebServer: "./devWebServer/index.js",
  };

  return {
    entry: entryPaths[entryPoint] || entryPaths.main,
    mode: "development",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",
    devServer: {
      hot: true,
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
          options: {presets: ["@babel/preset-env", "@babel/preset-react"]},
        },
        {
          test: /\.png|svg|jpg|gif|pdf/,
          exclude: /node_modules/,
          use: ["file-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
