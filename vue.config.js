const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/vue3',
  outputDir: 'dist',
  assetsDir: 'static',

  chainWebpack: config => {
    // 配置网页title
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '学习VUE3'
        return args
      })

    // 配置svg
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    // 配置svg的加载工具svg-sprite-loader
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
