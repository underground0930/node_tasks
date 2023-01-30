/**
 * jsonファイルからデータを取得
 * @param {glob} src - コピーするデータのルート以下からのワイルドカード
 */

const glob = require('glob')
const fs = require('fs')

const getJsonData = (src) => {
  let data = {}
  const paths = glob.sync(src, {})
  for (const file of paths) {
    const result = JSON.parse(fs.readFileSync(file, 'utf8'))
    data = { ...data, ...result }
  }
  return data
}

module.exports = getJsonData
