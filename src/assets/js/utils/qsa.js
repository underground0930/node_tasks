/**
 * domを取得する
 * @param {string} elm - 取得したいセレクタ
 * @returns {array} - nodeListを配列に直したもの
 */

const qsa = elm => {
  const $elm = document.querySelectorAll(elm);
  return Array.prototype.slice.call($elm, 0);
};

export default qsa;
