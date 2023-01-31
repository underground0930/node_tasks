/**
 * 処理を間引く
 * @param {Function} callback - 呼びたい処理
 * @param {Number} duration - 間引く間隔
 * @return {Function} - closer
 *
 */

export const debounceEvent = (callback: () => void, duration = 400): (() => void) => {
  let timer: number
  return () => {
    window.clearTimeout(timer)
    timer = window.setTimeout(callback, duration)
  }
}
