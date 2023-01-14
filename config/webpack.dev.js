const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
  entry: path.join(__dirname, "../client", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public", "index.html"),
      favicon: path.join(__dirname, "../public", "favicon.ico"),
    }),
    new InterpolateHtmlPlugin({ PUBLIC_URL: 'static' })
  ],
  mode: 'development',
};
