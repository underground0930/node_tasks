/**
 * 削除タスク
 * @param {array} src - 削除対象のファイルパス
 * @param {function} cb - 削除完了後に走らせる関数
 */

const del = require('del'); // データの削除

const dele = async (src) => {
  // const deletedPaths = await del(src, { force: false }).catch((err) => {
  //   console.log(err);
  // });
  // console.log('Deleted files and directories:\n', deletedPaths.join('\n'));

  // MEMO: 非同期だとglobの配列で競合が起きてエラーになるので
  // 同期処理に変更

  console.log('■■ delete task start ■■');

  del.sync(src, { force: false });
  console.log('■■ delete task end ■■');
  return;
};

module.exports = dele;
