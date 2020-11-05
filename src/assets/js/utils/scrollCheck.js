/**
 * @param {Object} options - IntersectionObserverのオプション
 * @param {String} targets - スクロールで監視したい要素
 * @param {Boolean} once - 処理を繰り返すかどうか
 * @param {Function} cb - 発火したときに呼びたい関数
 */

// 使い方の例
/**
scrollCheck({
  root: null,
  rootMargin: "0px 0px",
  threshold: [0.25]
}, '.box', function (e) {
  e.classList.add('is-show')
});
 */

// IEが非対応のため
import 'intersection-observer'

const defaultOptions = {
  root: null,
  rootMargin: '-50% 0%',
  threshold: [0]
}

const scrollCheck = args => {
  const { targets, once, options, callback } = args
  const margeOptions = Object.assign(defaultOptions, options)

  let boxes = document.querySelectorAll(targets)
  boxes = Array.prototype.slice.call(boxes, 0)

  const setCallback = (entries, observer) => {
    entries.forEach(entry => {
      callback(entry, observer)
    })
  }
  const observer = new IntersectionObserver(setCallback, margeOptions)
  boxes.forEach(box => {
    observer.observe(box)
  })
}

export default scrollCheck
