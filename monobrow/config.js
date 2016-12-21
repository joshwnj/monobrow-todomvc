const babelify = require('babelify')

const browserDeps = [
  'classnames',
  'react',
  'react-dom',
  'redux',
  'react-redux'
]

function build () {
  var browserify = require('browserify')
  var b = browserify()

  browserDeps.forEach(b.require.bind(b))
  return b.bundle()
}

function setup (b, opts) {
  browserDeps.forEach(b.external.bind(b))

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
