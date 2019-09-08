/**
 * コピータスク
 * @param {string} rootSrcDir - コピーするファイル群が入っているディレクトリのルート
 * @param {string} rootDistDir - コピー先のディレクトリのルート
 * @param {glob} src - コピーするデータのルート以下からのワイルドカード
 */

const fs = require('fs-extra') // ディレクトリを再帰的に作成
const glob = require('glob') // ファイル名のパターンマッチング

const copy = (rootSrcDir, rootDistDir, src) => {
  glob(src, { root: rootSrcDir }, (err, files) => {
    // 対処となるファイルのパターンマッチング
    if (err) {
      console.log(err)
      return
    }
    const resultArr = []
    const length = files.length
    let count = 0
    files.forEach(file => {
      const f = file.split(rootSrcDir)
      fs.copy(file, rootDistDir + f[1], err => {
        if (err) return console.error(err)
        resultArr.push(f[1])
        count++
        if (count === length) {
          // ファイル数を数えてタスクが完了
          console.log('copy: [' + resultArr.join(', ') + ']')
          console.log('====== copy finished ======')
        }
      })
    })
  })
}

module.exports = copy
