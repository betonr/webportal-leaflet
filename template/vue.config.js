const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  css: undefined,
  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: 'static',
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  lintOnSave: undefined,
  // config to copy public files to /dist/static
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(args => {
        args[0][0].to = path.join(__dirname, '/deploy/dist/static')
        return args
      })
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, '/deploy/dist'),
        routes: [ 
          '/', 
          '/404' 
        ],
      })
    ]
   }
}
