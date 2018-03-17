const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill',path.resolve("client/_index.js")]
  },
  output: {
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve("client"),
        loader: "style-loader"
      },
      {
        test: /\.css$/,
        include: path.resolve("client"),
        loader: "css-loader",
        query: {
          modules: true,
          localIdentName: "[name]__[local]__[hash:base64:5]"
        }
      },
      {
        test: /.jsx?$/,
        include: path.resolve("client"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"],
            plugins: [
              "transform-object-rest-spread",
              [ "transform-react-jsx", {
                pragma: "React.createElement"
              }]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    modules: ["node_modules", "client"],
    mainFiles: ["_index", "index"]
	},
	plugins: [
		new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.resolve("client/index.html")
    }),
	],
  devtool: "source-map",
};