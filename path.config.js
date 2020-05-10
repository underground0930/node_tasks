const path = require('path')

const NODE_ENV = process.env.NODE_ENV

// プロダクションビルドのディレクトリ
let buildRoot = 'htdocs'

// 開発中の場合はビルドされるディレクトリが変更される
if (NODE_ENV === 'dev') {
  buildRoot = 'htdocs_dev'
}
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
