const path = require('path')

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './dist/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lsdis.min.js',
    libraryTarget: 'umd',
  },
}
