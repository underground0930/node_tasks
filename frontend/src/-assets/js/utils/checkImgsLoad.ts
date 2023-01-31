/**
 * 画像の読み込み判定
 * @param {String} selecor - ロード判定をしたい画像のセレクタ
 * @param {Number} timeout - ロードが終わっていなくてもcallbackFinishを呼び出す時間
 * @param {Function} callback - 画像読み込み毎に呼び出す関数
 * @param {Function} callbackFinish - 全ての画像を読み込み後に呼び出す関数
 */

type Props = {
  imgArray: string[]
  timeout?: number
  callback?: () => void
  callbackFinish: () => void
}

export const checkImgsLoad = ({ imgArray, timeout = 5000, callback, callbackFinish }: Props): void => {
  const len = imgArray.length
  let finished = false
  let count = 0

  setTimeout(() => {
    if (finished) return
    finished = true
    callbackFinish()
  }, timeout)

  for (const imgSrc of imgArray) {
    const $img = document.createElement('img')
    $img.addEventListener('load', () => {
      count++
      if (callback) {
        callback()
      }
      if (len === count && !finished) {
        finished = true
        callbackFinish()
      }
    })
    $img.src = imgSrc
  }
}
