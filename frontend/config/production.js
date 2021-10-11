const environment = process.env.NODE_ENV;
module.exports = {
  buildRoot: 'htdocs',
  mode: environment,
  watch: false,
  pluginParams: {
    apiPath: 'https://abcde.jp/api/',
  },
};
