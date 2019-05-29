module.exports = {
  mode: 'production',
  entry: './polylabel.js',
  output: {
    path: __dirname,
    filename: 'polylabel.bundle.js',
    library: 'polylabel',
    libraryTarget: 'umd'
  }
};
