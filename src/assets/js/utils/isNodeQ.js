/**
 *  DOM要素の判定
 * @param {Object} obj - 判定する要素
 * @param {Boolean};
 */

const isNodeQ = obj => {
  return obj && obj.nodeType && obj.nodeType === 1
}

export default isNodeQ
