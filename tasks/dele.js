/**
 * 削除タスク
 * @param {array} src - 削除対象のファイルパス
 * @param {function} cb - 削除完了後に走らせる関数
 */

const del = require('del') // データの削除

const dele = async src => {
  console.log('■■■■■ delete task start ■■■■■')
  const deletedPaths = await del(src, { force: false })

  console.log('Deleted files and directories:\n', deletedPaths.join('\n'))
  console.log('■■■■■ delete task end ■■■■■')
  return
}

module.exports = dele
