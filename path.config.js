const path = require('path')
const NODE_ENV = process.env.NODE_ENV // 環境変数を取得

// 開発中と納品用でビルドディレクトリを変更する
const buildRoot = NODE_ENV === 'dev' ? 'htdocs_dev' : 'htdocs'

// ルートからのディレクトリを取得
const rootDir = process.cwd()

// os間のパスの違いを吸収
const pr = str => {
  return path.resolve(str)
}

const paths = {
  src: {
    root: pr(`${rootDir}/src`),
    assets: pr(`${rootDir}/src/assets`),
    js: pr(`${rootDir}/src/assets/js`),
    css: pr(`${rootDir}/src/assets/scss`),
    img: pr(`${rootDir}/src/assets/img`),
    json: pr(`${rootDir}/src/assets/json`),
    font: pr(`${rootDir}/src/assets/fonts`),
    movie: pr(`${rootDir}/src/assets/movie`)
  },
  dist: {
    root: pr(`${rootDir}/${buildRoot}`),
    assets: pr(`${rootDir}/${buildRoot}/assets`),
    js: pr(`${rootDir}/${buildRoot}/assets/js`),
    css: pr(`${rootDir}/${buildRoot}/assets/css`),
    img: pr(`${rootDir}/${buildRoot}/assets/img`),
    json: pr(`${rootDir}/${buildRoot}/assets/json`),
    font: pr(`${rootDir}/${buildRoot}/assets/fonts`),
    movie: pr(`${rootDir}/${buildRoot}/assets/movie`)
  },
  node_env: NODE_ENV
}

module.exports = paths
