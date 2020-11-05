/**
 * NodeListの判定
 * @param {NodeList, array} val - 判定する要素
 * @return {Boolean}
 */

const isNodeList = val => {
  if (val instanceof Array || (val.item !== void 0 && val.length !== void 0)) {
    return true
  }
  return false
}

export default isNodeList
