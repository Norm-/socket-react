const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    // 'eventsource-polyfill', // necessary for hot reloading with IE
    "webpack-hot-middleware/client",
    "./src",
  ],
  output: {
    path: path.resolve(__dirname, "public", "js"),
    publicPath: "/js/", // src=js/bundle.js for dev
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        // include: path.join(__dirname, "src"),
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        test: /\.(png|jpg|ttf|eot|woff)$/,
        // include: path.join(__dirname, "app"),
        loader: "url?limit=10000",
      },
      {
        test: /\.json$/,
        // exclude: path.resolve(__dirname, "node_modules"),
        loader: "json",
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.css$/,
        // exclude: path.resolve(__dirname, "node_modules"),
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
      {
        test: /\.(less)$/i,
        loader: "style!css!less",
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
      },
    }),
    new ExtractTextPlugin("bundle.css"),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    host: "localhost",
    inline: true,
    // outputPath: "/",
    // filename: "bundle.js",
    quiet: false,
    noInfo: false,
    hot: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false,
    },
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    root: path.join(__dirname),
    fallback: path.join(__dirname, "node_modules"),
    modulesDirectories: ["node_modules"],
    extensions: ["", ".json", ".js", ".jsx", ".scss", ".png", ".jpg", ".jpeg", ".gif", ".less"],
  },
};
