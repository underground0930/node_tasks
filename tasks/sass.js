/**
 * cssタスク
 * @param {string} src - scssファイル群が入っているディレクトリのルート
 * @param {string} dist - 出力されるcssファイルのディレクトリのルート
 * @param {boolean} isDev - 開発フラグの有無
 */

const sass = require('node-sass') // node用 sass
const nodeSassGlobbing = require('node-sass-globbing') // sassファイル内でglobを使用する
const postcss = require('postcss') // autoprefixerに必要
const autoprefixer = require('autoprefixer') // cssにプレフィックスをつける
const fs = require('fs-extra') // ディレクトリを再帰的に作成
const glob = require('glob') // ファイル名のパターンマッチング

const css = (src, dist, isDev) => {
  glob('/**/!(_)*.scss', { root: src }, (err, files) => {
    // 対処となるファイルのパターンマッチング
    if (err) {
      console.log(err)
      return
    }
    const resultArr = []
    const { length } = files
    let count = 0
    files.forEach(file => {
      sass.render(
        {
          importer: nodeSassGlobbing,
          file,
          outputStyle: isDev ? 'expanded' : 'compressed'
        },
        (error, resultSass) => {
          if (error) {
            console.log(error.message)
            return
          }
          const f = file.split(src)
          let filename = dist + f[1]
          filename = filename.replace('.scss', '.css')
          const dir = path.dirname(filename)
          if (!fs.existsSync(dir)) {
            // ディレクトリが無かったら
            fs.mkdirsSync(dir) // ディレクトリを再帰的に作成
          }
          postcss([autoprefixer]) // postcssのプラグインのautoprefixerを設定
            .process(resultSass.css, { from: undefined })
            .then(resultPost => {
              fs.writeFile(filename, resultPost.css, err => {
                // ファイルに書き込む処理
                if (err) throw err
                resultArr.push(f[1])
                count++
                if (count === length) {
                  // ファイル数を数えてタスクが完了
                  console.log('css: [' + resultArr.join(', ') + ']')
                  console.log('====== css finished ======')
                }
              })
            })
        }
      )
    })
  })
}

module.exports = css
