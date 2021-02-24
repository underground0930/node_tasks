/**
 * 処理を間引く
 * @param {Function} callback - 呼びたい処理
 * @param {Number} duration - 間引く間隔
 * @return {Function} - closer
 *
 */

const debounce = (callback: () => void, duration = 400): (() => void) => {
  let timer: number;
  return (): void => {
    window.clearTimeout(timer);
    timer = window.setTimeout(callback, duration);
  };
};

export default debounce;
