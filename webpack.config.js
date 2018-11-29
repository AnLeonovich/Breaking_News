const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?url=false"
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader?name=/images/[name].[ext]'
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: path.resolve('./src/loader/json-loader.js')
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map'
  }

  if (argv.mode === 'production') {
    config.plugins = []
  }

  return config;
}
