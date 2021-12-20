// 生成文件的md, 打包之前处理完成，可以使用emit钩子
class FileListPlugin {
  constructor(options) {
    this.options = options || {};
    this.filename = this.options.filename || 'fileList.md';
  }
  apply(compiler) {
    // asset是dist的输出的文件
    compiler.hooks.emit.tapAsync('fileListPlugin', (compilation, cb) => {
      const fileListName = this.filename;
      let len = Object.keys(compilation.assets).length;
      let content = `## 共有${len}个文件\n`;
      for (let filename in compilation.assets) {
        content += `- ${filename}\n`
      }
      // 向输出文件写入文件
      compilation.assets[fileListName] = {
        source: () => {
          return content;
        },
        size: () => {
          return content.length;
        }
      }
      cb();
    })
  }
}

module.exports = FileListPlugin;