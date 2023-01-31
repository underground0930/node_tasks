const path = require('path')
const webpack = require('webpack')

// tasks
const getJsonData = require('./tasks/getJsonData')

const environment = process.env.NODE_ENV

// config
const paths = require('./paths')
const config = ((env) => {
  if (env === 'development') {
    return {
      buildRoot: 'htdocs_dev',
      mode: environment,
      watch: true,
      devtool: 'source-map',
      pluginParams: {
        apiPath: 'https://dev.jp/api/',
      },
    }
  }
  return {
    buildRoot: 'htdocs',
    mode: environment,
    watch: false,
    pluginParams: {
      apiPath: 'https://prod.jp/api/',
    },
  }
})(environment)

const { mode, devtool, watch, pluginParams } = config
const data = getJsonData(paths.src.assets + '/data/*.json')

module.exports = {
  mode,
  devtool,
  watch,
  entry: {
    script: paths.src.js + '/script.ts',
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
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      data: JSON.stringify(data),
      ...pluginParams,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'json'],
    alias: {
      '@': paths.src.js,
    },
  },
  target: ['web', 'es5'],
  performance: {
    maxAssetSize: 9999999,
    maxEntrypointSize: 9999999,
  },
}
