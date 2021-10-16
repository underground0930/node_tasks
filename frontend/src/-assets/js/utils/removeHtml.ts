/**
 * 文字列からhtmlタグを除去
 * @param {string} text - htmlが含まれている文字列
 * @return {string} htmlを除去した文字列
 */

export function removeHtml(text: string): string {
  return text.replace(/(<([^>]+)>)/gi, '')
}
