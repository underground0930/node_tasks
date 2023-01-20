/**
 * yamlファイルからデータを取得
 * @param {glob} src - コピーするデータのルート以下からのワイルドカード
 */

const glob = require('glob') // ファイル名のパターンマッチング
const yaml = require('js-yaml') // yamlをjsに変換
const fs = require('fs')

const getYamlData = (src) => {
  let data = {}
  const paths = glob.sync(src, {})
  paths.forEach((file) => {
    const result = yaml.load(fs.readFileSync(file, 'utf8'))
    data = { ...data, ...result }
  })
  return data
}

module.exports = getYamlData
