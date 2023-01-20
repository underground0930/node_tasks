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

const css = ({ root, pattern, dist, isDev }) => {
  _glob({
    pattern,
    root,
    cb: ({ file, results, length, count }) => {
      sass.compile(
        {
          file,
          outputStyle: isDev ? 'expanded' : 'compressed',
        },
        (error, resultSass) => {
          if (error) return console.log(error.message)
          const f = file.split(root)
          let filename = dist + f[1]
          filename = filename.replace('.scss', '.css')
          const dir = path.dirname(filename)
          if (!fs.existsSync(dir)) {
            fs.mkdirsSync(dir) // ディレクトリを再帰的に作成
          }
          postcss([autoprefixer]) // postcssのプラグインのautoprefixerを設定
            .process(resultSass.css, { from: undefined })
            .then((resultPost) => {
              fs.writeFile(filename, resultPost.css, (err) => {
                // ファイルに書き込む処理
                if (err) throw err
                results.push(f[1])
                count++
                if (count === length) {
                  // ファイル数を数えてタスクが完了
                  console.log(`■■ css files : [${results.join(', ')}] ■■`)
                  console.log(`■■ sass task finished ■■`)
                }
              })
            })
        },
      )
    },
  })
}

module.exports = css
