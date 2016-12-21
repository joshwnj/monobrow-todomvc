const babelify = require('babelify')
const path = require('path')

const browserDeps = require('./deps').modules

function setup (b, opts) {
  b.external(browserDeps)

  b.transform(babelify, {
    plugins: [
      require('babel-plugin-transform-class-properties'),
      require('babel-plugin-transform-object-rest-spread')
    ],

    presets: [
      require('babel-preset-latest'),
      require('babel-preset-react')
    ]
  })
}

module.exports = {
  entry: 'src/index.js',
  outDir: 'build',
  setup: setup
}
