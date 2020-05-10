/**
 * 処理を間引く
 * @param {function} callback - 呼びたい処理
 * @param {number} duration - 間引く間隔
 * @return {function} closer
 *
 */

const debounce = (callback, duration = 400) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(callback, duration)
  }
}

export default debounce
