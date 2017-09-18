module.exports = {
  entry: __dirname + "/app/main.js",//note: __dirname is a global var, ref current file directory
  output: {
    path: __dirname + "/public",//save bundled files path
    filename: "bundle.js"//bundled file name
  }
}