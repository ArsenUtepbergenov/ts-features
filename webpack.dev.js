const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    port: 3030,
    open: true,
    compress: true,
    magicHtml: true,
    historyApiFallback: true,
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: false,
      reconnect: 3,
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({ title: 'Ts' })],
}
