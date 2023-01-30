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
    cb: ({ file, fileRelative, results, length, count }) => {
      fs.copy(file, dist + fileRelative, (err) => {
        if (err) console.error(err)
        results.push(fileRelative)
        if (++count === length) console.log(`■■ ${taskName} copy task finished ■■`)
      })
    },
  })
}

module.exports = copy
