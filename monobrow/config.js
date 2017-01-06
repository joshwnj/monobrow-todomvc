module.exports = {
  entry: 'src/index.js',
  output: {
    dir: 'build'
  },
  packs: [
    require('monobrow-react-pack')
  ]
}
