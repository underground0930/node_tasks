/**
 * cssタスク
 * @param {string} root - ファイル群が入っているディレクトリのルート
 * @param {glob} pattern - ワイルドカード
 * @param {string} dist - 出力されるcssファイルのディレクトリのルート
 * @param {boolean} isDev - 開発フラグの有無
 */

const sass = require('sass')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const fs = require('fs-extra')
const path = require('path')
const _glob = require('./glob') // globのラッパー

const _sass = ({ root, pattern, dist, isDev }) => {
  _glob({
    pattern,
    root,
    cb: ({ file, fileRelative, results, length, count }) => {
      const result = sass.compile(file, { style: isDev ? 'expanded' : 'compressed' })
      let filename = dist + fileRelative
      filename = filename.replace('.scss', '.css')
      const dir = path.dirname(filename)
      if (!fs.existsSync(dir)) fs.mkdirsSync(dir)
      postcss([autoprefixer])
        .process(result.css, { from: undefined })
        .then((resultPost) => {
          fs.writeFile(filename, resultPost.css, (err) => {
            if (err) console.error(err)
            results.push(fileRelative)
            if (++count === length) {
              console.log(`■■ css files : [${results.join(', ')}] ■■`)
              console.log(`■■ sass task finished ■■`)
            }
          })
        })
    },
  })
}

module.exports = _sass
