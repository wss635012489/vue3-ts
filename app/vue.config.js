const { defineConfig } = require('@vue/cli-service')
//支持ts按需引入
const {merge} = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {//处理按需引入组件
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  },
  devServer: {
    proxy: {
        '/api':{//base Url
            target: 'http://localhost:9000',//需要代理的网址路由
            changeOrigin:true,
            pathRewrite:{
                '^/api':''//将请求地址中的'/api'替换掉
            }
        }
    }
},
  configureWebpack: {
    resolve: {
      alias: {
        '@v': '@/views',
      }
    }
  }
})
