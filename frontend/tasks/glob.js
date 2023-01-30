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
    if (err) console.error(err)
    files.forEach((file) => {
      const fileRelative = file.split(root)[1]
      cb({ file, fileRelative, results, length, count })
    })
  })
}

module.exports = _glob
