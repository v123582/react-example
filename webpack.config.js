module.exports = {
  context: __dirname + "/src",

  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
      __dirname + "/src"
      ],
      exclude: /node_modules/,
      loader: "babel"
    }, {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }]
  }

}