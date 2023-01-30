/**
 * 監視タスク
 * @param {glob} src - 監視対象のファイルパス
 * @param {function} cb - ファイル更新後に走らせる関数
 */

const chokidar = require('chokidar') //ファイル監視

const watch = ({ src, cb }) => {
  const watcher = chokidar.watch(src, {
    ignored: /(^|[\/\\])\../,
    persistent: true, // 監視を続けている間プロセスを終了するか
    ignoreInitial: true, // 監視開始時のイベントを無視するかどうか
    awaitWriteFinish: {
      // イベントの発生を遅らせる
      stabilityThreshold: 1000,
      pollInterval: 100,
    },
  })
  watcher
    .on('add', cb) // ファイルが追加された時のイベント
    .on('change', cb) // ファイルが変更された時のイベント
    .on('unlink', cb) // ファイルが削除された時のイベント
}

module.exports = watch
