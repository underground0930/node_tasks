const bs = require('browser-sync').create() // ローカルサーバー、ブラウザのリロード
const getJsonData = require('./getJsonData')
const apiServer = require('./middleware/apiServer')
const { createProxyMiddleware } = require('http-proxy-middleware')

/************************************************v
 my task
************************************************/
const dele = require('./dele') // 自作の削除タスク
const copy = require('./copy') // 自作のコピータスク
const watch = require('./watch') // 自作のwatchタスク
const sass = require('./sass') // 自作のsassタスク
const html = require('./html') // 自作のhtmlタスク

/************************************************
config
************************************************/

const paths = require('../path.config') // 使いやすいようにそれぞれのパスを変数に入れ直す
const environment = process.env.NODE_ENV
const isDev = environment === 'development' // isDev

/************************************************
data
************************************************/

const data = getJsonData(paths.src.assets + '/data/*.json')

/************************************************
tasks
************************************************/

const pattern = {
  html: '/**/*.html',
  ejs: '/**/*.{html,ejs}',
  js: '/**/*.js',
  sass: '/**/!(_)*.scss',
  css: '/**/*.css',
  img: '/**/*.{jpg,png,gif,webp,svg,ico}',
  font: '/**/*.{woff,woff2,ttf,svg,eot}',
  json: '/**/*.json',
  movie: '/**/*.mp4',
}

// 各タスク を関数化
const htmlTask = () => {
  html({
    root: paths.src.root,
    pattern: pattern.html,
    dist: paths.dist.root,
    data,
    isDev,
  })
}
const sassTask = () => {
  sass({
    root: paths.src.css,
    pattern: pattern.sass,
    dist: paths.dist.css,
    isDev,
  })
}
const imgTask = () =>
  copy({
    root: paths.src.img,
    dist: paths.dist.img,
    pattern: pattern.img,
    taskName: 'img',
  })
const jsonTask = () =>
  copy({
    root: paths.src.json,
    dist: paths.dist.json,
    pattern: pattern.json,
    taskName: 'json',
  })
const fontTask = () =>
  copy({
    root: paths.src.font,
    dist: paths.dist.font,
    pattern: pattern.font,
    taskName: 'font',
  })
const movieTask = () =>
  copy({
    root: paths.src.movie,
    dist: paths.dist.movie,
    pattern: pattern.movie,
    taskName: 'movie',
  })

// 監視して更新されたファイルに関するタスクを走らせる
const watchTasks = () => {
  watch({ src: paths.src.root + pattern.ejs, cb: htmlTask })
  watch({ src: paths.src.css + pattern.css, cb: sassTask })
  watch({ src: paths.src.img + pattern.img, cb: imgTask })
  watch({ src: paths.src.json + pattern.json, cb: jsonTask })
  watch({ src: paths.src.font + paths.font, cb: fontTask })
}

// ローカルサーバーを立ち上げる、該当ファイルが更新されたらブラウザをリロード
const serverTask = () => {
  bs.init({
    open: 'external',
    notify: false,
    host: 'localhost',
    ghostMode: false,
    server: [paths.dist.root],
    https: false, // or true
    startPath: './list.html',
    middleware: [
      createProxyMiddleware('/contact_api', {
        target: 'http://localhost:8888/',
        changeOrigin: false,
      }),
    ],
  })

  bs.watch(paths.dist.root + pattern.html).on('change', bs.reload)
  bs.watch(paths.dist.assets + pattern.js).on('change', bs.reload)
  bs.watch(paths.dist.assets + pattern.img).on('change', bs.reload)
  bs.watch(paths.dist.assets + pattern.json).on('change', bs.reload)
  bs.watch(paths.dist.assets + pattern.css, (e, f) => {
    if (e !== 'change') return
    bs.reload('*.css')
  })
}

// 古いデータを削除後に各タスクを走らせる
dele([paths.dist.root + '/**', '!' + paths.dist.root]).then(() => {
  // 各タスク
  htmlTask()
  sassTask()
  imgTask()
  jsonTask()
  fontTask()
  movieTask()
  if (!isDev) return
  // 開発中ならwatchとサーバーも走らせる
  setTimeout(() => {
    watchTasks()
    serverTask()
  }, 5000)
})
