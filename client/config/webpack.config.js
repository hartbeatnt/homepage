const path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [path.resolve("client/app.js")]
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
            presets: ["env"],
            plugins: [
              "transform-object-rest-spread",
              [ "transform-react-jsx", {
                pragma: "React"
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
	],
  devtool: "source-map",
  watch: true
};