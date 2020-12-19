const through2 = require('through2').obj
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

module.exports = function(opts = {}) {
  return through2(function(file, encoding, callback) {
    file.contents = Buffer.from(file.contents.toString().replace(/(?<=<style>)([^]+?)(?=<\/style>)/g,
      (match, fixing) => postcss([autoprefixer(opts)]).process(fixing).css)
    )
    callback(null, file)
  })
}