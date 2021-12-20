// compiler hooks 例子
class No2WebpackPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    compiler.hooks.compile.tap('No2', (compilation) => {
      console.log('compile')
    })
    compiler.hooks.compilation.tap('No2', (compilation) => {
      console.log('compilation')
      compilation.hooks.chunkAsset.tap('No2', (chunk, filename) => {
        console.log(chunk)
        console.log(filename)
      })
    })
  }
}
module.exports = No2WebpackPlugin;
