/**
 * IE11の判定
 * https://www.yoheim.net/blog.php?q=20190301
 * @return {boolean} - IE11の判定
 */

const checkIE = () => {
  let IE11 = false

  // UserAgent を取得し、全て小文字にする.
  const ua = window.navigator.userAgent.toLowerCase()

  // Internet Explorer であるかを判定する.
  const isIE = ua.indexOf('msie') >= 0 || ua.indexOf('trident') >= 0

  // もしIEの場合は、
  if (isIE) {
    // IEのバージョンを、正規表現で取得する.
    const array = /(msie|rv:?)\s?([\d\.]+)/.exec(ua)
    let version = array ? array[2] : ''

    // バージョンを整数の形式にする（11.0 -> 11）
    version = version.split('.')[0]

    // IE11であるかを判定する.
    if (version === '11') {
      document.documentElement.classList.add('is-ie11')
      IE11 = true
    }
  }
  return IE11
}

export default checkIE
