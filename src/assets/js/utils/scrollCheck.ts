/**
 * @param {Object} options - IntersectionObserverのオプション
 * @param {String} targets - スクロールで監視したい要素
 * @param {Function} callback - 発火したときに呼びたい関数
 */

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

const scrollCheck = args => {
  const { targets, options, callback } = args;
  const margeOptions = Object.assign(
    {
      root: null,
      rootMargin: '-50% 0%',
      threshold: [0]
    },
    options
  );
  const setCallback = (entries, observer) => {
    entries.forEach(entry => {
      callback(entry, observer);
    });
  };
  const setObserver = () => {
    let sections = document.querySelectorAll(targets);
    if(!sections) return;
    sections = Array.prototype.slice.call(sections, 0);
    const observer = new IntersectionObserver(setCallback, margeOptions);
    sections.forEach(section => {
      observer.observe(section);
    });
  };

  if (window.IntersectionObserver) {
    setObserver();
  }
};

export default scrollCheck;
