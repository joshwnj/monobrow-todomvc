module.exports = {
  entry: 'src/index.js',
  output: {
    dir: 'build'
  },
  packs: [ require('./pack') ]
}
