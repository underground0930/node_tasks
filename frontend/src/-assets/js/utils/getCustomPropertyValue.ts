/**
 * カスタムプロパティの値を取得
 */

export const getCustomPropertyValue = (prop: string): string => {
  return String(getComputedStyle(document.documentElement).getPropertyValue(prop)).trim()
}
