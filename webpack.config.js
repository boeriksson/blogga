const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.styl'],
    modulesDirectories: [
      'node_modules',
      './src'
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {
      allChunks: true
    })
  ]
}