/**
 * 関数の説明
 * @param {string} d - ISO 8601形式の日付
 * @return {string} yyyy-mm-dd 形式の日付
 */

export function conversionDate(d: string): string {
  return d.replace(/(\d{4}-\d{2}-\d{2})(.*)/, '$1');
}
