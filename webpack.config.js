var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var nodeEnv = process.env.NODE_ENV
var src = path.join(__dirname, 'src')
var build = path.join(__dirname, 'build')

var config = {
  devServer: {
    host: '0.0.0.0'
  },
  entry: [ src ],
  output: { filename: 'main.js', path: build },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        include: [ src ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader'
        ),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin('main.css'),
    new CopyWebpackPlugin([
      { from: path.join(src, 'static'), to: 'static' },
      { from: path.join(src, 'favicon.ico') }
    ], {
      copyUnmodified: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(nodeEnv)
      }
    })
  ],
  postcss: function (webpack) {
    return [
      require('postcss-import')({ path: src, addDependencyTo: webpack }),
      require('postcss-simple-vars')({
        variables: require('./src/app/variables')
      }),
      require('postcss-url')(),
      require('postcss-cssnext')({
        browsers: '> 1%, last 2 versions, Firefox ESR, iOS 7'
      }),
      require('postcss-reporter')()
    ]
  }
}

module.exports = [ config ]
