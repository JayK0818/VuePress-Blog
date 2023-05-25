# 开发环境

```js
// webpack.config.js
module.exports = {
  devServer: {
    allowHosts: [ // 允许访问开发服务器的白名单
      'host.com'
    ],
    client: { // 出现编译错误或者警告时, 在浏览器中显示全屏覆盖
      overlay: true,
      progress: true,  //在浏览器中以百分比显示编译进度
      reconnect: false,  // 应该尝试重新连接客户端的次数
    },
    compress: true,  // 启用gzip 压缩
    historyApiFallback: true,
    // When using the HTML5 History API, the index.html page will likely have to be
    // served in place of any 404 responses.
    host: '0.0.0.0',  // 主机
    hot: true, // 启用热模块替换
    open: true,  // 在服务器启动后打开浏览器
    port: 8080,  // 服务启动的端口
    proxy: {
      // '/api': 'http://example.com'
      // 如果需要重写路径
      '/api': {
        target: 'http://example.com',
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    proxy: [
      {
        context: ['/api', '/auth'],
        target: 'http://example.com'  // 将多个特定路径代理到同一个目标
      }
    ],
    // 提供自定义函数和中间件能力
    setupMiddlewares: (middleware, devServer) => {
      // js文件可以 通过请求这个接口 获取数据
      devServer.app.get('/api/players', (_, response) => {
        response.send([
          {
            firstName: 'kyrie',
            lastName: 'irving'
          }
        ])
      })
      return middlewares
    },
    static: path.resolve(__dirname, 'dist') // 从目录提供静态文件
  }
}
```

## 开发环境和生产环境

  开发环境和生产环境下的构建目标不同, 可以将某些在production和development环境下的通用配置提取出来,
  然后分别为不同环境下写彼此独立的webpack配置. 使用webpack-merge工具 将不同环境下的配置合并。

  以下配置是针对上述知识点做的一个demo
  
```js
// webpack.common.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|webp|jpeg|jpg)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'webpack-merge'
    })
  ]
}


// webpack.development.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    port: '9008',
    host: '0.0.0.0',
    static: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      }
    ]
  }
})

// webpack.production.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].css'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    usedExports: true,
    minimizer:[new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})
```
```js
// package.json
{
  // ...
  "scripts": {
    "serve": "webpack serve --config webpack.development.js",
    "build": "webpack --config webpack.production.js"
  }
}
```