const path = require('path');
const webpack = require('webpack');
const getFileData = require('./tasks/getFileData');
const paths = require('./path.config');
const environment = process.env.NODE_ENV;
const config = require(`./config/${environment}.js`);

const { mode, devtool, watch } = config;
const data = JSON.stringify(getFileData(paths.src.assets + '/data/*.yaml'));

module.exports = {
  mode,
  devtool,
  watch,
  entry: {
    common: paths.src.js + '/common/script.ts',
    top: paths.src.js + '/pages/top.ts',
    detail: paths.src.js + '/pages/detail.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: paths.dist.js,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader',
        exclude: /node_modules[\\\/](?!(dom7|ssr-window|swiper)[\\\/]).*/,
      },
      { test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
        utils: {
          test: path.resolve(paths.src.js + '/utils/'),
          name: 'utils',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      data,
      ...config.pluginParams,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json'],
    alias: {
      '@': paths.src.js,
    },
  },
  target: ['web', 'es5'],
  performance: {
    maxAssetSize: 9000000,
    maxEntrypointSize: 9000000,
  },
};
