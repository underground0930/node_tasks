/**
 * @param {Object} options - IntersectionObserverのオプション
 * @param {String} targets - スクロールで監視したい要素
 * @param {Function} callback - 発火したときに呼びたい関数
 */

import loadScript from '@/utils/loadScript'

/**
// usage
scrollCheck({
  root: null,
  rootMargin: "0px 0px",
  threshold: [0.25]
}, '.box', function (e) {
  e.classList.add('is-show')
});
 */

const scrollCheck = args => {
  const { targets, options, callback } = args
  const margeOptions = Object.assign(
    {
      root: null,
      rootMargin: '-50% 0%',
      threshold: [0]
    },
    options
  )
  const setCallback = (entries, observer) => {
    entries.forEach(entry => {
      callback(entry, observer)
    })
  }
  const setObserver = () => {
    let sections = document.querySelectorAll(targets)
    sections = Array.prototype.slice.call(sections, 0)
    const observer = new IntersectionObserver(setCallback, margeOptions)
    sections.forEach(section => {
      observer.observe(section)
    })
  }

  if (window.IntersectionObserver) {
    setObserver()
  } else {
    loadScript('https://polyfill.io/v3/polyfill.js?features=IntersectionObserver', setObserver)
  }
}

export default scrollCheck
