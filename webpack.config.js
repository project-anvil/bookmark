const path = require('path')

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'src'),
  entry: './server.js',
  resolve: { extensions: ['*', '.js'] },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  target: 'node'
}
