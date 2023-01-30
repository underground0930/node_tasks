/**
 * 削除タスク
 * @param {array} src - 削除対象のファイルパス
 */

const del = require('del')

const dele = async (src) => {
  console.log('■■ delete task start ■■')
  del.sync(src, { force: false })
  console.log('■■ delete task end ■■')
  return
}

module.exports = dele
