const path = require('path')

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './server.js',
    db: ['sqlite3', 'pg']
  },
  resolve: { extensions: ['*', '.js'] },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build')
  },
  target: 'node'
}
