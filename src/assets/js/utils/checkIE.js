/**
 * IEの判定
 * https://www.yoheim.net/blog.php?q=20190301
 * @return {Boolean}
 */

const checkIE = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  const isIE = ua.indexOf('msie') >= 0 || ua.indexOf('trident') >= 0

  return isIE
}

export default checkIE
