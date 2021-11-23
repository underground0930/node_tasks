const environment = process.env.NODE_ENV;

module.exports = {
  buildRoot: 'htdocs_dev',
  mode: environment,
  watch: true,
  devtool: 'source-map',
  pluginParams: {
    apiPath: 'https://dev.jp/api/',
    param1: process.env.PARAM1 ?? null,
    param2: process.env.PARAM2 ?? null,
    param3: process.env.PARAM3 ?? null,
  },
};
