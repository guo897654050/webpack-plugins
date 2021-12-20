class WatchPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.watchRun.taAsync(('Watch Plugin'), (compilation, cb) => {
      console.log('我可是时刻监听着的 🚀🚀🚀')
      console.log(compiler)
      cb()
    })
    compiler.hooks.watchClose.tap('WatcherPlugin', () => {
      console.log('本次监听停止了哟～👋👋👋')
    })
  }
}

module.exports = WatchPlugin;