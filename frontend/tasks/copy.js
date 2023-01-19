/**
 * コピータスク
 * @param {string} rootSrcDir - コピーするファイル群が入っているディレクトリのルート
 * @param {string} rootDistDir - コピー先のディレクトリのルート
 * @param {glob} src - コピーするデータのルート以下からのワイルドカード
 */

const fs = require('fs-extra'); // ディレクトリを再帰的に作成
const glob = require('glob'); // ファイル名のパターンマッチング

const copy = (rootSrcDir, rootDistDir, src, taskName) => {
  console.log(`■■ ${taskName} copy task start ■■`);
  glob(src, { root: rootSrcDir }, (err, files) => {
    const resultArr = [];
    const { length } = files;
    let count = 0;

    if (err) return console.log(err);

    files.forEach((file) => {
      const f = file.split(rootSrcDir);
      fs.copy(file, rootDistDir + f[1], (err) => {
        if (err) return console.error(err);
        resultArr.push(f[1]);
        count++;
        if (count === length) {
          // ファイル数を数えてタスクが完了
          console.log(`■■ ${taskName} copy task finished ■■`);
        }
      });
    });
  });
};

module.exports = copy;
