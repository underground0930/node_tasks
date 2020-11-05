/**
 * IEの判定
 * https://www.yoheim.net/blog.php?q=20190301
 * @return {Boolean}
 */

const checkIE = () => {
  // UserAgent を取得し、全て小文字にする.
  const ua = window.navigator.userAgent.toLowerCase()

  // Internet Explorer であるかを判定する.
  const isIE = ua.indexOf('msie') >= 0 || ua.indexOf('trident') >= 0

  return isIE
}

export default checkIE
