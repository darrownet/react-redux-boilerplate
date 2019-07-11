const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require('path');

module.exports = {
  entry: ['./index.jsx', './styles/styles.scss'],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ],
  performance: {
    hints: false
  }
};