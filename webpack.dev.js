const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,
              experimentalWatchApi: true,
            },
          }
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devServer: {
    stats: 'errors-only',
    clientLogLevel: 'warning',
    host: 'localhost',
    port: 3030,
    hot: true,
    contentBase: false,
    compress: true,
    inline: true,
    progress: true,
    open: true,
    overlay: true
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Ts' }),
    new webpack.HotModuleReplacementPlugin()
  ]
}