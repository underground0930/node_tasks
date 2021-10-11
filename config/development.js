const environment = process.env.NODE_ENV;
const param1 = process.env.PARAM1;
const param2 = process.env.PARAM2;
const param3 = process.env.PARAM3;
module.exports = {
  buildRoot: 'htdocs_dev',
  mode: environment,
  watch: true,
  devtool: 'source-map',
  pluginParams: {
    param1,
    param2,
    param3,
  },
};
