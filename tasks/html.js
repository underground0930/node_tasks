/**
 * ejsタスク
 * @param {string} src - htmlファイル群が入っているディレクトリのルート
 * @param {string} dist - 出力先のディレクトリのルート
 * @param {object} data - ejsで使用するデータ
 * @param {boolean} isDev - 開発フラグの有無
 */

const ejs = require('ejs'); // htmlテンプレートエンジン ejs
const fs = require('fs-extra'); // ディレクトリを再帰的に作成
const glob = require('glob'); // ファイル名のパターンマッチング
const path = require('path'); // 標準モジュール パスの文字列操作
const beautify = require('js-beautify');

// 整形オプション
// https://www.npmjs.com/package/js-beautify
const beautifyOptions = {
  indent_size: 2,
  end_with_newline: true,
  preserve_newlines: false,
  max_preserve_newlines: 0,
  wrap_line_length: 0,
  wrap_attributes_indent_size: 0,
  unformatted: ['b', 'em'],
};

const html = (src, dist, data, isDev) => {
  const beautifyFn = isDev
    ? (str) => {
        return str;
      }
    : (str) => {
        return beautify.html(str, beautifyOptions);
      };

  glob('/**/*.html', { root: src }, (err, files) => {
    // 対処となるファイルのパターンマッチング
    if (err) {
      console.log(err);
      return;
    }
    const resultArr = [];
    const { length } = files;
    let count = 0;
    files.forEach((file) => {
      ejs.renderFile(
        file,
        { data, time: new Date().getTime() },
        { outputFunctionName: 'echo', rmWhitespace: false },
        (err, str) => {
          if (err) {
            console.log(err);
            return;
          }
          const f = file.split(src);
          const filename = dist + f[1];
          const dir = path.dirname(filename);
          if (!fs.existsSync(dir)) {
            // ディレクトリが無かったら
            fs.mkdirsSync(dir); // ディレクトリを再帰的に作成
          }

          const result = beautifyFn(str);

          fs.writeFile(filename, result, (err) => {
            // ファイルに書き込む処理
            if (err) throw err;
            resultArr.push(f[1]);
            count++;
            if (count === length) {
              // ファイル数を数えてタスクが完了
              console.log('ejs: [' + resultArr.join(', ') + ']');
              console.log('====== ejs finished ======');
            }
          });
        }
      );
    });
  });
};

module.exports = html;
