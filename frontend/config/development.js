const environment = process.env.NODE_ENV;
const { param1, param2, param3 } = process.env;
module.exports = {
  buildRoot: 'htdocs_dev',
  mode: environment,
  watch: true,
  devtool: 'source-map',
  pluginParams: {
    apiPath: 'https://dev.abcde.jp/api/',
    param1,
    param2,
    param3,
  },
};
