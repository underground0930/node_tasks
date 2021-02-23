/**
 * 処理を間引く
 * @param {Function} callback - 呼びたい処理
 * @param {Number} duration - 間引く間隔
 * @return {Function} - closer
 *
 */

const debounce = (callback, duration = 400) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, duration);
  };
};

export default debounce;
