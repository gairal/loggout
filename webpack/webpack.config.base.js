const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app/app.js',
    examples: './src/examples/js/app.js',
  },
  output: {
    filename: 'js/[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(['build', 'dist'], { root: path.join(__dirname, '../') }),
    new HtmlWebpackPlugin({
      template: './src/examples/index.pug',
      inject: true,
    }),
    new WriteFilePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
        include: path.join(__dirname, '../src'),
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        include: path.join(__dirname, '../src'),
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/app/'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'app',
          test: /\.(sa|sc|c)ss$/,
          chunks: 'all',
          enforce: false,
        },
      },
    },
  },
};
