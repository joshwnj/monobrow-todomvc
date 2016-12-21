const babelify = require('babelify')
const deps =   [
  'classnames',
  'react',
  'react-dom',
  'redux',
  'react-redux'
]

module.exports.build = function () {
  var browserify = require('browserify')
  var b = browserify()

  deps.forEach(b.require.bind(b))
  return b.bundle()
}

module.exports.setup = function (b, opts) {
  deps.forEach(b.external.bind(b))

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

