const deps = require('./monobrow-deps')

module.exports = {
  entry: 'src/index.js',
  outDir: 'build',
  setup: deps.setup
}
