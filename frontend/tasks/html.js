/**
 * ejsタスク
 * @param {string} root - ファイル群が入っているディレクトリのルート
 * @param {glob} pattern - ワイルドカード
 * @param {string} dist - 出力先のディレクトリのルート
 * @param {object} data - ejsで使用するデータ
 * @param {boolean} isDev - 開発フラグの有無
 */

const ejs = require('ejs') // htmlテンプレートエンジン ejs
const fs = require('fs-extra') // ディレクトリを再帰的に作成
const path = require('path') // 標準モジュール パスの文字列操作
const beautify = require('js-beautify')

const _glob = require('./glob') // globのラッパー

// 整形オプション
// https://www.npmjs.com/package/js-beautify
const beautifyOptions = {
  indent_size: 2,
  end_with_newline: true,
  preserve_newlines: true,
  max_preserve_newlines: 0,
  wrap_line_length: 0,
  wrap_attributes_indent_size: 0,
  unformatted: ['b', 'em'],
}

const html = ({ root, pattern, dist, data, isDev }) => {
  const beautifyFn = isDev ? (str) => str : (str) => beautify.html(str, beautifyOptions)
  _glob({
    pattern,
    root,
    cb: ({ file, results, length, count }) => {
      const absolutePath = file.split(src)[1]
      const relativePath = '../'.repeat([absolutePath.split('/').length - 2])
      ejs.renderFile(
        file,
        { data, absolutePath, relativePath, time: new Date().getTime() },
        { outputFunctionName: 'echo', rmWhitespace: false },
        (err, str) => {
          if (err) return console.log(err)
          const f = file.split(src)
          const filename = dist + f[1]
          const dir = path.dirname(filename)
          if (!fs.existsSync(dir)) {
            fs.mkdirsSync(dir) // ディレクトリが無かったらディレクトリを再帰的に作成
          }
          const result = beautifyFn(str)
          fs.writeFile(filename, result, (err) => {
            // ファイルに書き込む処理
            if (err) throw err
            results.push(f[1])
            count++
            if (count === length) {
              // ファイル数を数えてタスクが完了
              console.log(`■■ ejs files : [${results.join(', ')}] ■■`)
              console.log(`■■ ejs task finished ■■`)
            }
          })
        },
      )
    },
  })
}

module.exports = html
