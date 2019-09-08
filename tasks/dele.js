/**
 * 削除タスク
 * @param {glob} src - 削除対象のファイルパス
 * @param {function} cb - 削除完了後に走らせる関数
 */

const del = require('del') // データの削除

const dele = async (src, cb) => {
  const deletedPaths = await del([src], {
    force: true
  })
  console.log('Deleted files and directories:\n', deletedPaths.join('\n'))
  cb() //削除が終わった時のコールバック
}

module.exports = dele
