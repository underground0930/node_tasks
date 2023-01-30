/**
 * ejsタスク
 * @param {string} root - ファイル群が入っているディレクトリのルート
 * @param {glob} pattern - ワイルドカード
 * @param {string} dist - 出力先のディレクトリのルート
 * @param {object} data - ejsで使用するデータ
 * @param {boolean} isDev - 開発フラグの有無
 */

const ejs = require('ejs')
const fs = require('fs-extra')
const path = require('path')
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
    cb: ({ file, fileRelative, results, length, count }) => {
      const relativePath = '../'.repeat([fileRelative.split('/').length - 2])
      ejs.renderFile(
        file,
        { data, absolutePath: fileRelative, relativePath, time: new Date().getTime() },
        { outputFunctionName: 'echo', rmWhitespace: false },
        (err, str) => {
          if (err) console.error(err)
          const filename = dist + fileRelative
          const dir = path.dirname(filename)
          if (!fs.existsSync(dir)) fs.mkdirsSync(dir)
          const result = beautifyFn(str)
          fs.writeFile(filename, result, (err) => {
            if (err) console.error(err)
            results.push(fileRelative)
            if (++count === length) {
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
