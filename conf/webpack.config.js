var webpack = require('webpack'),
  nib = require('nib'),
  path = require('path');

module.exports = {
  context: path.join(__dirname, '../'),
  entry: {
    'main' : './lib/client/main.js'
  },
  output: {
    path: path.join(__dirname, '../', 'public', 'js'),
    filename: "[name].pack.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      Promise: 'lie',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  stylus: {
    use: [nib()],
    import: ['~nib/lib/nib/index.styl']
  },
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.styl$/, exclude: /node_modules/, loader: 'style-loader!css-loader!stylus-loader'},
      { test: /\.(js|tag)$/, exclude: /node_modules/, loader: 'babel', presets: ['es2015', 'stage-0'] }
    ]
  }
}
