/**
 * unixタイムスタンプを返す
 * @param {string} - ISO8601の時間
 * @return {number} - UnixTimeStamp
 */

const getUnixTimeStamp = (time?: string): number => {
  if (!time) {
    return new Date().getTime();
  }
  return new Date(time).getTime();
};

export default getUnixTimeStamp;
