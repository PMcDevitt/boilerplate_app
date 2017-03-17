const path = require('path')
const BUILD_DIR = path.resolve(__dirname, 'public/javascript')
const APP_DIR = path.resolve(__dirname, 'src/app')

const config = {
  entry: APP_DIR + '/Main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src/app',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
module.exports = config
