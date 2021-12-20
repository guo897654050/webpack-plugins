class No1Webpackplugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.done.tap('no1', () => {
      console.log('customer plugins 1 -->', this.options.msg)
    })
  }
}

module.exports = No1Webpackplugin;