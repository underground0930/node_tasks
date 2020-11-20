/**
 * jsを動的に読み込んだ後にcallbackを走らせる
 * @param {String} src - 読み込むソースパス
 * @param {Function} callback - 読み込み後に実行する関数
 */

const loadScript = (src, callback) => {
  const head = document.head
  const script = document.createElement('script')
  script.src = src
  script.addEventListener('load', callback)
  head.appendChild(script)
}

export default loadScript