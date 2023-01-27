/**
 * @param {Object} options - IntersectionObserverのオプション
 * @param {String | null} options.root - root要素
 * @param {String} options.rootMargin - rootマージン
 * @param {Number[]} options.threshold - 発火ポイント
 * @param {String} targets - スクロールで監視したい要素
 * @param {Function} callback - 発火したときに呼びたい関数
 */

type args = {
  targets: string
  options: {
    root?: string | null
    rootMargin?: string
    threshold?: number[]
  }
  callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
}

export const scrollCheck = (args: args): void => {
  const { targets, options, callback } = args
  const margeOptions = Object.assign(
    {
      root: null,
      rootMargin: '-50% 0%',
      threshold: [0],
    },
    options,
  )
  const setCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      callback(entry, observer)
    })
  }
  const setObserver = () => {
    const sections = document.querySelectorAll(targets)
    if (sections.length === 0) return
    const sectionsArray = Array.prototype.slice.call(sections, 0)
    const observer = new IntersectionObserver(setCallback, margeOptions)
    sectionsArray.forEach((section) => {
      observer.observe(section)
    })
  }

  if (window.IntersectionObserver) {
    setObserver()
  }
}

/**
// usage
  scrollCheck({
    targets: '.p-box',
    options: {},
    callback: (entry, observer) => {
      const {
        boundingClientRect,
        intersectionRatio,
        intersectionRect,
        isIntersecting,
        rootBounds,
        target,
        time
      } = entry
      if (entry.isIntersecting) {
        target.classList.add('is-show')
        check(entry.target)
        // observer.unobserve(entry.target)
        return
      }
      target.classList.remove('is-show')
    }
  })
 */
