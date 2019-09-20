const path = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  HtmlWebPackPlugin = require('html-webpack-plugin'),
  isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  entry: ['../src/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.jsx$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader/webpack'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: isDevelopment,
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: !isDevelopment }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' })//,
    // new HtmlWebPackPlugin({
    //   template: '../index.html',
    //   filename: '../index.html'
    // })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  }
};