/**
 * コピータスク
 * @param {string} root - コピーするファイル群が入っているディレクトリのルート
 * @param {glob} pattern - ワイルドカード
 * @param {string} dist - コピー先のディレクトリのルート
 * @param {string} taskName - タスクネーム
 */

const fs = require('fs-extra')
const _glob = require('./glob') // globのラッパー

const copy = ({ root, dist, pattern, taskName }) => {
  console.log(`■■ ${taskName} copy task start ■■`)
  _glob({
    pattern,
    root,
    cb: ({ file, results, length, count }) => {
      const fileSplit = file.split(root)
      fs.copy(file, dist + fileSplit[1], (err) => {
        if (err) return console.error(err)
        results.push(fileSplit[1])
        if (++count === length) console.log(`■■ ${taskName} copy task finished ■■`)
      })
    },
  })
}

module.exports = copy
