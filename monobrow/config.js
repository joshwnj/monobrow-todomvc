module.exports = {
  entry: 'src/index.js',
  output: {
    dir: 'build',
    vendor: '_vendor.js'
  },
  packs: [
    require('monobrow-react-pack')
  ]
}
