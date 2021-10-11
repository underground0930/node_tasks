/**
 * NodeListの判定
 * @param {NodeList, Array} val - 判定する要素
 * @return {Boolean}
 */

const isNodeList = (val: NodeList): boolean => {
  if (val instanceof Array || (val.item !== void 0 && val.length !== void 0)) {
    return true;
  }
  return false;
};

export default isNodeList;
