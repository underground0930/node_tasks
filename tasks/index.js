const bs = require('browser-sync').create(); // ローカルサーバー、ブラウザのリロード
const getFileData = require('./getFileData');

/************************************************v
 my task
************************************************/
const dele = require('./dele'); // 自作の削除タスク
const copy = require('./copy'); // 自作のコピータスク
const watch = require('./watch'); // 自作のwatchタスク
const sass = require('./sass'); // 自作のsassタスク
const html = require('./html'); // 自作のhtmlタスク

/************************************************
paths
************************************************/

const paths = require('../path.config'); // 使いやすいようにそれぞれのパスを変数に入れ直す
const isDev = paths.node_env === 'dev' ? true : false; // isDev

/************************************************
data
************************************************/

const data = getFileData(paths.src.assets + '/data/*.yaml');

/************************************************
tasks
************************************************/

// 各タスク を関数化
const htmlTask = () => {
  const src = paths.src.root;
  const dist = paths.dist.root;
  html({
    src,
    dist,
    data,
    isDev,
  });
};
const cssTask = () => {
  sass(paths.src.css, paths.dist.css, isDev);
};
const imgTask = () => {
  copy(paths.src.img, paths.dist.img, '/**/*.{jpg,png,gif,svg,ico}');
};
const jsonTask = () => {
  copy(paths.src.json, paths.dist.json, '/**/*.json');
};
const fontTask = () => {
  copy(paths.src.font, paths.dist.font, '/**/*.{woff,woff2,ttf,svg,eot}');
};
const libTask = () => {
  copy(paths.src.js, paths.dist.js, '/plugins/**/*.js');
};
const movieTask = () => {
  copy(paths.src.movie, paths.dist.movie, '/**/*.mp4');
};

// 監視して更新されたファイルに関するタスクを走らせる
const watchTasks = () => {
  watch(paths.src.root + '/**/*.{html,ejs}', () => {
    htmlTask();
  });
  watch(paths.src.css + '/**/*.scss', () => {
    cssTask();
  });
  watch(paths.src.img + '/**/*.{jpg,png,gif,svg,ico}', () => {
    imgTask();
  });
  watch(paths.src.json + '/**/*.json', () => {
    jsonTask();
  });
  watch(paths.src.font + '/**/*', () => {
    fontTask();
  });
  watch(paths.src.js + '/plugins/**/*.js', () => {
    libTask();
  });
};

// ローカルサーバーを立ち上げる、該当ファイルが更新されたらブラウザをリロード
const serverTask = () => {
  bs.init({
    open: 'external',
    notify: false,
    host: 'localhost',
    ghostMode: false,
    server: [paths.dist.root],
    https: false, // or true
  });

  bs.watch(paths.dist.root + '/**/*.html').on('change', bs.reload);
  bs.watch(paths.dist.assets + '/**/*.js').on('change', bs.reload);
  bs.watch(paths.dist.assets + '/**/*.{png,jpg,gif,svg,ico}').on('change', bs.reload);
  bs.watch(paths.dist.assets + '/**/*.json').on('change', bs.reload);
  bs.watch(paths.dist.assets + '/**/*.css', (e, f) => {
    if (e === 'change') {
      bs.reload('*.css');
    }
  });
};

// 古いデータを削除後に各タスクを走らせる
dele([paths.dist.root + '/**', '!' + paths.dist.root]).then(() => {
  // 各タスク
  console.log('■■■■■ build task start ■■■■■');
  htmlTask();
  cssTask();
  imgTask();
  jsonTask();
  fontTask();
  libTask();
  movieTask();
  if (isDev) {
    // 開発中ならwatchとサーバーも走らせる
    setTimeout(() => {
      watchTasks();
      serverTask();
    }, 5000);
  }
});
