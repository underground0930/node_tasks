/**
 * 入力された文字列をチェックして数字に変換、不正な値の場合はデフォルトの数値を返す
 *
 * @param {number} defaultVal - 入力が無い または 不正の場合に返すデフォルトの数値
 * @param {string} str - 入力されたテキスト
 * @return {number} parseNum - 文字列から変換された数字 または デフォルトの数字
 */

export const strToNum = (defaultVal: number, str: string | undefined): number => {
  if (str === undefined) return defaultVal;

  const parseNum = Number(str);

  if (Number.isNaN(parseNum)) return defaultVal;

  return parseNum;
};
