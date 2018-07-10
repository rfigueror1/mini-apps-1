var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js', //file produced
    path: DIST_DIR // the target directory
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,// check every single file, regular expression syntax
        include : SRC_DIR, //only source directory will run through babel
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  }
};
