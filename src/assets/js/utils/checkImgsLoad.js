/**
 * 画像の読み込み判定
 * @param {String} selecor - ロード判定をしたい画像のセレクタ
 * @param {Function} callback - 画像読み込み毎に呼び出す関数
 * @param {Function} callbackFinish - 全ての画像を読み込み後に呼び出す関数
 */

import qsa from './qsa';

const checkImgsLoad = args => {
  const { selector, callback, callbackFinish } = args;
  const $elms = qsa(selector);
  const len = $elms.length;
  const isCallbackFunc = typeof callback === 'function';
  const isCallbackFinishFunc = typeof callbackFinish === 'function';

  let count = 0;

  $elms.forEach(elm => {
    let src;
    const $img = document.createElement('img');

    if (elm.tagName === 'IMG') {
      src = elm.src;
    } else {
      src = getComputedStyle(elm, '').backgroundImage;
      src = src.replace(/url\(|\)|"|'/g, '');
    }

    $img.addEventListener('load', () => {
      count++;

      if (isCallbackFunc) {
        callback();
      }

      if (!isCallbackFinishFunc) return;

      if (len === count) {
        callbackFinish();
      }
    });

    $img.src = src;
  });
};

export default checkImgsLoad;
