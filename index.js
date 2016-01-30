module.exports = function (source) {
  console.log('====== TEE =====')
  console.log(this.resourcePath)
  console.log('----------------')
  console.log(source)

  return source
}
