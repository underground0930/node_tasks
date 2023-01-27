const path = require('path')

const rootDir = process.cwd()
const environment = process.env.NODE_ENV

const pathResolve = (str) => path.resolve(rootDir + str)
const buildRoot = environment === 'development' ? 'htdocs_dev' : 'htdocs'

const paths = {
  src: {
    root: pathResolve(`/src`),
    assets: pathResolve(`/src/-assets`),
    js: pathResolve(`/src/-assets/js`),
    css: pathResolve(`/src/-assets/scss`),
    img: pathResolve(`/src/-assets/img`),
    json: pathResolve(`/src/-assets/json`),
    font: pathResolve(`/src/-assets/fonts`),
    movie: pathResolve(`/src/-assets/movie`),
  },
  dist: {
    root: pathResolve(`/${buildRoot}`),
    assets: pathResolve(`/${buildRoot}/-assets`),
    js: pathResolve(`/${buildRoot}/-assets/js`),
    css: pathResolve(`/${buildRoot}/-assets/css`),
    img: pathResolve(`/${buildRoot}/-assets/img`),
    json: pathResolve(`/${buildRoot}/-assets/json`),
    font: pathResolve(`/${buildRoot}/-assets/fonts`),
    movie: pathResolve(`/${buildRoot}/-assets/movie`),
  },
}

module.exports = paths
