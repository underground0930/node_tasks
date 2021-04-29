const glob = require('glob'); // ファイル名のパターンマッチング
const yaml = require('js-yaml'); // yamlをjsに変換
const fs = require('fs');

const getFileData = (src) => {
  const paths = glob.sync(src, {});
  let data = {};
  paths.forEach((file) => {
    const result = yaml.load(fs.readFileSync(file, 'utf8'));
    data = { ...data, ...result };
  });
  return data;
};

module.exports = getFileData;
