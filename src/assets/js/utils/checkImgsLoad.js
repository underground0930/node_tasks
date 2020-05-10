/**
 * 画像の読み込み判定
 * @param {string} selecor -
 * @param {function} callback - 画像読み込み後に呼び出す関数
 */

import qsa from './qsa'

const checkImgsLoad = (selecor, callback) => {
  let $elms = qsa(selecor)
  $elms = Array.prototype.slice.call($elms)
  const len = $elms.length
  let count = 0

  $elms.forEach(elm => {
    let src
    const $img = document.createElement('img')

    if (elm.tagName === 'IMG') {
      src = elm.src
    } else {
      src = getComputedStyle(elm, '').backgroundImage
      src = src.replace(/url\(|\)|"|'/g, '')
    }

    $img.addEventListener('load', () => {
      count++
      if (len === count) {
        console.log('img load end')
        callback()
      }
    })
    $img.src = src
  })
}

export default checkImgsLoad
