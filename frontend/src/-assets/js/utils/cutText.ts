/**
 * descriptionの文字列を生成
 * @param {string} text - 制限したい文字数
 * @param {number} limit - 制限したい文字数
 * @return {boolean} 文字数を調整した文字列
 */

export function cutText(text: string, limit: number): string {
  const length = text.length
  if (length > limit) {
    return text.slice(0, limit) + '...'
  }
  return text
}
