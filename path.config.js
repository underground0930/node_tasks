const path = require('path')

const NODE_ENV = process.env.NODE_ENV

// プロダクションビルドのディレクトリ
let buildRoot = 'prod'

// 開発中の場合はビルドされるディレクトリが変更される
if (NODE_ENV === 'dev') {
  buildRoot = 'dev'
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
    json: pr(`${rootDir}/src/assets/json`)
  },
  dist: {
    root: pr(`${rootDir}/htdocs/${buildRoot}`),
    assets: pr(`${rootDir}/htdocs/${buildRoot}/assets`),
    js: pr(`${rootDir}/htdocs/${buildRoot}/assets/js`),
    css: pr(`${rootDir}/htdocs/${buildRoot}/assets/css`),
    img: pr(`${rootDir}/htdocs/${buildRoot}/assets/img`),
    json: pr(`${rootDir}/htdocs/${buildRoot}/assets/json`)
  },
  node_env: NODE_ENV
}

module.exports = paths
