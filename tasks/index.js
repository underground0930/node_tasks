const bs = require('browser-sync').create() // ローカルサーバー、ブラウザのリロード
const yaml = require('js-yaml') // yamlをjsに変換
const fs = require('fs') // ファイルシステム

/************************************************v
 my task
************************************************/
const dele = require('./dele') // 自作の削除タスク
const copy = require('./copy') // 自作のコピータスク
const watch = require('./watch') // 自作のwatchタスク
const sass = require('./sass') // 自作のsassタスク
const html = require('./html') // 自作のhtmlタスク

/************************************************
paths
************************************************/

// 使いやすいようにそれぞれのパスを変数に入れ直す
const paths = require('../path.config')

// isDev
const isDev = paths.node_env === 'dev' ? true : false

// root path
const src = paths.src.root
const dist = paths.dist.root

// assets path
const assetsSrc = paths.src.assets
const assetsDist = paths.dist.assets

// img path
const imgSrc = paths.src.img
const imgDist = paths.dist.img

// json path
const jsonSrc = paths.src.json
const jsonDist = paths.dist.json

// js path
const jsSrc = paths.src.js
const jsDist = paths.dist.js

// css path
const cssSrc = paths.src.css
const cssDist = paths.dist.css

// font path
const fontSrc = paths.src.font
const fontDist = paths.dist.font

// movie path
const movieSrc = paths.src.movie
const movieDist = paths.dist.movie

/************************************************
data
************************************************/
// ejsで使用するデータ
let data = {}
data = yaml.safeLoad(fs.readFileSync(assetsSrc + '/data/data.yaml', 'utf8'))

/************************************************
tasks
************************************************/

// 各タスク を関数化
const htmlTask = () => {
  html(src, dist, data)
}
const cssTask = () => {
  sass(cssSrc, cssDist, isDev)
}
const imgTask = () => {
  copy(imgSrc, imgDist, '/**/*.{jpg,png,gif,svg}')
}
const jsonTask = () => {
  copy(jsonSrc, jsonDist, '/**/*.json')
}
const fontTask = () => {
  copy(fontSrc, fontDist, '/**/*.{woff,woff2,ttf,svg,eot}')
}
const libTask = () => {
  copy(jsSrc, jsDist, '/plugins/**/*.js')
}
const movieTask = () => {
  copy(movieSrc, movieDist, '/**/*.mp4')
}

// 監視して更新されたファイルに関するタスクを走らせる
const watchTasks = () => {
  watch(src + '/**/*.{html,ejs}', f => {
    htmlTask()
  })
  watch(cssSrc + '/**/*.scss', f => {
    cssTask()
  })
  watch(imgSrc + '/**/*.{jpg,png,gif,svg}', f => {
    imgTask()
  })
  watch(jsonSrc + '/**/*.json', f => {
    jsonTask()
  })
  watch(fontSrc + '/**/*', f => {
    fontTask()
  })
  watch(jsSrc + '/plugins/**/*.js', f => {
    libTask()
  })
}

// ローカルサーバーを立ち上げる、該当ファイルが更新されたらブラウザをリロード
const serverTask = () => {
  bs.init({
    open: 'external',
    notify: false,
    host: 'localhost',
    ghostMode: false,
    server: [dist],
    https: false // or true
  })

  bs.watch(`htdocs/**/*.html`).on('change', bs.reload)
  bs.watch(`htdocs/**/*.js`).on('change', bs.reload)
  bs.watch(`htdocs/**/*.{png,jpg,gif}`).on('change', bs.reload)
  bs.watch(`htdocs/**/*.json`).on('change', bs.reload)
  bs.watch(`htdocs/**/*.css`, (e, f) => {
    if (e === 'change') {
      bs.reload('*.css')
    }
  })
}

// 古いデータを削除後に各タスクを走らせる
dele(dist, () => {
  // 各タスク
  htmlTask()
  cssTask()
  imgTask()
  jsonTask()
  fontTask()
  libTask()
  movieTask()
  if (isDev) {
    // 開発中ならwatchとサーバーも走らせる
    watchTasks()
    serverTask()
  }
})
