const webpack = require('webpack');
const path = require('path');

const nodeModules = path.resolve(__dirname, 'node_modules');

const config = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.DefinePlugin(),
    // new webpack.ProvidePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: nodeModules,
        loaders: 'ng-annotate-loader!babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.s?css$/,
        exclude: nodeModules,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: nodeModules,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.html$/,
        exclude: nodeModules,
        loader: 'raw-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
};

module.exports = config;
