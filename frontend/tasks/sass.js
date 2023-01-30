/**
 * cssタスク
 * @param {string} root - ファイル群が入っているディレクトリのルート
 * @param {glob} pattern - ワイルドカード
 * @param {string} dist - 出力されるcssファイルのディレクトリのルート
 * @param {boolean} isDev - 開発フラグの有無
 */

const sass = require('sass') // node用 sass
const postcss = require('postcss') // autoprefixerに必要
const autoprefixer = require('autoprefixer') // cssにプレフィックスをつける
const fs = require('fs-extra') // ディレクトリを再帰的に作成
const path = require('path')

const _glob = require('./glob') // globのラッパー

const _sass = ({ root, pattern, dist, isDev }) => {
  _glob({
    pattern,
    root,
    cb: ({ file, results, length, count }) => {
      const result = sass.compile(file, { style: isDev ? 'expanded' : 'compressed' })
      const fileSplit = file.split(root)
      let filename = dist + fileSplit[1]
      filename = filename.replace('.scss', '.css')
      const dir = path.dirname(filename)
      // ディレクトリを再帰的に作成
      if (!fs.existsSync(dir)) fs.mkdirsSync(dir)
      // postcssのプラグインのautoprefixerを設定
      postcss([autoprefixer])
        .process(result.css, { from: undefined })
        .then((resultPost) => {
          fs.writeFile(filename, resultPost.css, (err) => {
            // ファイルに書き込む処理
            if (err) throw err
            results.push(fileSplit[1])
            if (++count === length) {
              // ファイル数を数えてタスクが完了
              console.log(`■■ css files : [${results.join(', ')}] ■■`)
              console.log(`■■ sass task finished ■■`)
            }
          })
        })
    },
  })
}

module.exports = _sass
