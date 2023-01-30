/**
 * globのラッパー
 * @param {glob} src - コピーするデータのルート以下からのワイルドカード
 */

const glob = require('glob')

const _glob = ({ root, pattern, cb }) => {
  glob(pattern, { root }, (err, files) => {
    const results = []
    const { length } = files
    let count = 0
    if (err) return console.log(err)
    files.forEach((file) => cb({ file, results, length, count }))
  })
}

module.exports = _glob
