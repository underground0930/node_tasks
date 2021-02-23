/**
 * IEの判定
 * https://www.yoheim.net/blog.php?q=20190301
 * @return {Boolean}
 */

const checkIE = (): boolean => {
  const ua:string = window.navigator.userAgent.toLowerCase();
  const isIE:boolean = ua.indexOf('msie') >= 0 || ua.indexOf('trident') >= 0;

  return isIE;
};

export default checkIE;
