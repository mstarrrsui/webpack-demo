
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = env => {
  console.log(env);
  const devMode = env.mode === 'development';

  return (
    {
      mode: env.mode,
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader,"css-loader"]
          }
        ]
      },
      plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin(), new MiniCssExtractPlugin()]
    }
  );
};