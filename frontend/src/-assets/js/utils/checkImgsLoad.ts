/**
 * 画像の読み込み判定
 * @param {String} selecor - ロード判定をしたい画像のセレクタ
 * @param {Function} callback - 画像読み込み毎に呼び出す関数
 * @param {Function} callbackFinish - 全ての画像を読み込み後に呼び出す関数
 */

type Props = {
  imgArray: string[];
  callback: (() => void) | null;
  callbackFinish: () => void;
};

export const checkImgsLoad = ({ imgArray, callback, callbackFinish }: Props): void => {
  const len = imgArray.length;

  let count = 0;

  imgArray.forEach((imgSrc) => {
    const $img = document.createElement('img');
    $img.addEventListener('load', () => {
      count++;

      if (callback !== null) {
        callback();
      }

      if (len === count) {
        callbackFinish();
      }
    });

    $img.src = imgSrc;
  });
};
