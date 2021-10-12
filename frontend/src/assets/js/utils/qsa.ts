/**
 * domを取得する
 * @param {String} elm - 取得したいセレクタ
 * @returns {HTMLElement[]} - nodeListを配列に直したもの
 */

export const qsa = (elm: string): HTMLElement[] => {
  const $elm = document.querySelectorAll(elm);
  return Array.prototype.slice.call($elm, 0);
};
