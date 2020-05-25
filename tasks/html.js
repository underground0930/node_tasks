/**
 * ejsタスク
 * @param {string} src - htmlファイル群が入っているディレクトリのルート
 * @param {string} dist - 出力先のディレクトリのルート
 * @param {object} data - ejsで使用するデータ
 */

const ejs = require('ejs') // htmlテンプレートエンジン ejs
const fs = require('fs-extra') // ディレクトリを再帰的に作成
const glob = require('glob') // ファイル名のパターンマッチング
const path = require('path') // 標準モジュール パスの文字列操作

const html = (src, dist, data) => {
  glob('/**/*.html', { root: src }, (err, files) => {
    // 対処となるファイルのパターンマッチング
    if (err) {
      console.log(err)
      return
    }
    const resultArr = []
    const { length } = files
    let count = 0
    files.forEach(file => {
      ejs.renderFile(file, { data }, { outputFunctionName: 'echo' }, (err, str) => {
        if (err) {
          console.log(err)
          return
        }
        const f = file.split(src)
        const filename = dist + f[1]
        const dir = path.dirname(filename)
        if (!fs.existsSync(dir)) {
          // ディレクトリが無かったら
          fs.mkdirsSync(dir) // ディレクトリを再帰的に作成
        }
        fs.writeFile(filename, str, err => {
          // ファイルに書き込む処理
          if (err) throw err
          resultArr.push(f[1])
          count++
          if (count === length) {
            // ファイル数を数えてタスクが完了
            console.log('ejs: [' + resultArr.join(', ') + ']')
            console.log('====== ejs finished ======')
          }
        })
      })
    })
  })
}

module.exports = html
