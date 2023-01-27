/**
 * 入力されたテキストからlinkを抽出してaタグをつけて返す
 *
 * @param {string} str - 入力されたテキスト
 * @return {string} - aタグが付加されたテキスト
 */

const autoLink = (str: string): string => {
  const regexpUrl = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g // ']))/;
  const regexpMakeLink = (all: string, url: string, h: string, href: string): string => {
    return `<a target="_blank" rel="noopener" href="h${href}">${url}</a>`
  }

  return str.replace(regexpUrl, regexpMakeLink)
}

export default autoLink
