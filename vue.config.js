module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
  }
  // devServer: {
  //   proxy: {
  //     '/api':{
  //       target:'http://jsonplaceholder.typicode.com',
  //       changeOrigin:true,
  //       pathRewrite:{
  //         '/api': ''
  //       }
  //     }
  //   }
  // }
}