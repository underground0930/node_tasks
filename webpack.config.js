const path = require('path');
const paths = require('./path.config');
const webpack = require('webpack');
const yaml = require('js-yaml'); // yamlをjsに変換
const fs = require('fs'); // ファイルシステム

const devConfig = {
  devtool: 'source-map',
  watch: true,
  mode: 'development',
};

const prodConfig = {
  mode: 'production',
};

const conf = paths.node_env === 'dev' ? devConfig : prodConfig;

module.exports = Object.assign(conf, {
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
    // Loaderの設定
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
      data: JSON.stringify(
        yaml.load(fs.readFileSync(paths.src.assets + '/data/data.yaml', 'utf8'))
      ),
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
});
