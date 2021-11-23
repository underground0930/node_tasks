const environment = process.env.NODE_ENV;

module.exports = {
  buildRoot: 'htdocs',
  mode: environment,
  watch: false,
  pluginParams: {
    apiPath: 'https://prod.jp/api/',
    param1: null,
    param2: null,
    param3: null,
  },
};
