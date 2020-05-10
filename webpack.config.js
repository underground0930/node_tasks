const path = require('path')
const paths = require('./path.config')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const yaml = require('js-yaml') // yamlをjsに変換
const fs = require('fs') // ファイルシステム

let webpackConfig = {
  // prodの設定
  mode: 'production'
}
if (paths.node_env === 'dev') {
  // devの設定
  webpackConfig = {
    devtool: 'inline-source-map',
    watch: true,
    mode: 'development'
  }
}

webpackConfig = Object.assign(webpackConfig, {
  entry: {
    common: paths.src.js + '/common/script.js',
    top: paths.src.js + '/pages/top.js',
    detail: paths.src.js + '/pages/detail.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: paths.dist.js,
    jsonpFunction: 'webpackJsonpData'
  },
  module: {
    // Loaderの設定
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        exclude: /node_modules[\\\/](?!(dom7|ssr-window|swiper)[\\\/]).*/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'entry',
                    corejs: 3
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        },
        utils: {
          test: path.resolve(paths.src.js + '/utils/'),
          name: 'utils',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      data: JSON.stringify(
        yaml.safeLoad(fs.readFileSync(paths.src.assets + '/data/data.yaml', 'utf8'))
      )
    })
  ],
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': paths.src.js
    }
  },
  performance: {
    maxAssetSize: 9000000,
    maxEntrypointSize: 9000000
  }
})

module.exports = webpackConfig
