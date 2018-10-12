const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'client', 'index.jsx')
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-hot-loader' },
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  devServer: {
    port: 3001,
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    historyApiFallback: true
  },
  devtool: 'source-map'
};