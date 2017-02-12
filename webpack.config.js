var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'src/public')
var APP_DIR = path.resolve(__dirname, 'src/app')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ],
    query: {
      presets: ['react', 'es2015'],
      plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
    }
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
}
//// https://auth0.com/blog/bootstrapping-a-react-project/
module.exports = config