const path = require('path');
const environment = process.env.NODE_ENV;
const config = require(`./config/${environment}.js`);
const { buildRoot } = config;
const rootDir = process.cwd();
const pr = (str) => {
  return path.resolve(str);
};
const paths = {
  src: {
    root: pr(`${rootDir}/src`),
    assets: pr(`${rootDir}/src/-assets`),
    js: pr(`${rootDir}/src/-assets/js`),
    css: pr(`${rootDir}/src/-assets/scss`),
    img: pr(`${rootDir}/src/-assets/img`),
    json: pr(`${rootDir}/src/-assets/json`),
    font: pr(`${rootDir}/src/-assets/fonts`),
    movie: pr(`${rootDir}/src/-assets/movie`),
  },
  dist: {
    root: pr(`${rootDir}/${buildRoot}`),
    assets: pr(`${rootDir}/${buildRoot}/-assets`),
    js: pr(`${rootDir}/${buildRoot}/-assets/js`),
    css: pr(`${rootDir}/${buildRoot}/-assets/css`),
    img: pr(`${rootDir}/${buildRoot}/-assets/img`),
    json: pr(`${rootDir}/${buildRoot}/-assets/json`),
    font: pr(`${rootDir}/${buildRoot}/-assets/fonts`),
    movie: pr(`${rootDir}/${buildRoot}/-assets/movie`),
  },
};

module.exports = paths;
