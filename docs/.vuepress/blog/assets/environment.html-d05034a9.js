import{_ as s}from"./framework-c27b6911.js";import{o as n,c as a,b as l}from"./app-ec006255.js";const p={},e=l(`<h1 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// webpack.config.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  devServer: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    allowHosts: [ </span><span style="color:#88846F;">// 允许访问开发服务器的白名单</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&#39;host.com&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    ],</span></span>
<span class="line"><span style="color:#F8F8F2;">    client: { </span><span style="color:#88846F;">// 出现编译错误或者警告时, 在浏览器中显示全屏覆盖</span></span>
<span class="line"><span style="color:#F8F8F2;">      overlay: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      progress: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">//在浏览器中以百分比显示编译进度</span></span>
<span class="line"><span style="color:#F8F8F2;">      reconnect: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// 应该尝试重新连接客户端的次数</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    compress: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// 启用gzip 压缩</span></span>
<span class="line"><span style="color:#F8F8F2;">    historyApiFallback: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// When using the HTML5 History API, the index.html page will likely have to be</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// served in place of any 404 responses.</span></span>
<span class="line"><span style="color:#F8F8F2;">    host: </span><span style="color:#E6DB74;">&#39;0.0.0.0&#39;</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// 主机</span></span>
<span class="line"><span style="color:#F8F8F2;">    hot: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 启用热模块替换</span></span>
<span class="line"><span style="color:#F8F8F2;">    open: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// 在服务器启动后打开浏览器</span></span>
<span class="line"><span style="color:#F8F8F2;">    port: </span><span style="color:#AE81FF;">8080</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// 服务启动的端口</span></span>
<span class="line"><span style="color:#F8F8F2;">    proxy: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// &#39;/api&#39;: &#39;http://example.com&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// 如果需要重写路径</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&#39;/api&#39;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        target: </span><span style="color:#E6DB74;">&#39;http://example.com&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        pathRewrite: {</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#E6DB74;">&#39;^/api&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    proxy: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        context: [</span><span style="color:#E6DB74;">&#39;/api&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;/auth&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">        target: </span><span style="color:#E6DB74;">&#39;http://example.com&#39;</span><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 将多个特定路径代理到同一个目标</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ],</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// 提供自定义函数和中间件能力</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">setupMiddlewares</span><span style="color:#F8F8F2;">: (</span><span style="color:#FD971F;font-style:italic;">middleware</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">devServer</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// js文件可以 通过请求这个接口 获取数据</span></span>
<span class="line"><span style="color:#F8F8F2;">      devServer.app.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;/api/players&#39;</span><span style="color:#F8F8F2;">, (</span><span style="color:#FD971F;font-style:italic;">_</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">response</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        response.</span><span style="color:#A6E22E;">send</span><span style="color:#F8F8F2;">([</span></span>
<span class="line"><span style="color:#F8F8F2;">          {</span></span>
<span class="line"><span style="color:#F8F8F2;">            firstName: </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            lastName: </span><span style="color:#E6DB74;">&#39;irving&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">          }</span></span>
<span class="line"><span style="color:#F8F8F2;">        ])</span></span>
<span class="line"><span style="color:#F8F8F2;">      })</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> middlewares</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    static: path.</span><span style="color:#A6E22E;">resolve</span><span style="color:#F8F8F2;">(__dirname, </span><span style="color:#E6DB74;">&#39;dist&#39;</span><span style="color:#F8F8F2;">) </span><span style="color:#88846F;">// 从目录提供静态文件</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发环境和生产环境" tabindex="-1"><a class="header-anchor" href="#开发环境和生产环境" aria-hidden="true">#</a> 开发环境和生产环境</h2><p>开发环境和生产环境下的构建目标不同, 可以将某些在production和development环境下的通用配置提取出来, 然后分别为不同环境下写彼此独立的webpack配置. 使用webpack-merge工具 将不同环境下的配置合并。</p><p>以下配置是针对上述知识点做的一个demo</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// webpack.common.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> path </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;path&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> HtmlWebpackPlugin </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;html-webpack-plugin&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  entry: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    app: path.</span><span style="color:#A6E22E;">resolve</span><span style="color:#F8F8F2;">(__dirname, </span><span style="color:#E6DB74;">&#39;src/index.js&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  output: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    clean: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    path: path.</span><span style="color:#A6E22E;">resolve</span><span style="color:#F8F8F2;">(__dirname, </span><span style="color:#E6DB74;">&#39;dist&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  module: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">(png</span><span style="color:#F92672;">|</span><span style="color:#E6DB74;">webp</span><span style="color:#F92672;">|</span><span style="color:#E6DB74;">jpeg</span><span style="color:#F92672;">|</span><span style="color:#E6DB74;">jpg)</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        type: </span><span style="color:#E6DB74;">&#39;asset/resource&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  plugins:[</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">HtmlWebpackPlugin</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">      title: </span><span style="color:#E6DB74;">&#39;webpack-merge&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    })</span></span>
<span class="line"><span style="color:#F8F8F2;">  ]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// webpack.development.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> { merge } </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;webpack-merge&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> common </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;./webpack.common.js&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> path </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;path&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">merge</span><span style="color:#F8F8F2;">(common, {</span></span>
<span class="line"><span style="color:#F8F8F2;">  mode: </span><span style="color:#E6DB74;">&#39;development&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  devtool: </span><span style="color:#E6DB74;">&#39;inline-source-map&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  output: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    filename: </span><span style="color:#E6DB74;">&#39;[name].bundle.js&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  devServer: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    port: </span><span style="color:#E6DB74;">&#39;9008&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    host: </span><span style="color:#E6DB74;">&#39;0.0.0.0&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    static: path.</span><span style="color:#A6E22E;">resolve</span><span style="color:#F8F8F2;">(__dirname, </span><span style="color:#E6DB74;">&#39;dist&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  module: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        use:[</span><span style="color:#E6DB74;">&#39;style-loader&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;css-loader&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// webpack.production.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> { merge } </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;webpack-merge&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> common </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;./webpack.common.js&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> MiniCssExtractPlugin </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;mini-css-extract-plugin&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> CssMinimizerPlugin </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">merge</span><span style="color:#F8F8F2;">(common, {</span></span>
<span class="line"><span style="color:#F8F8F2;">  mode: </span><span style="color:#E6DB74;">&#39;production&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  output: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    filename: </span><span style="color:#E6DB74;">&#39;[name].[contenthash].js&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  module: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        use: [MiniCssExtractPlugin.loader, </span><span style="color:#E6DB74;">&#39;css-loader&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  plugins:[</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">MiniCssExtractPlugin</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">      filename: </span><span style="color:#E6DB74;">&#39;[name].[contenthash].css&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      chunkFilename: </span><span style="color:#E6DB74;">&#39;[name].css&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    })</span></span>
<span class="line"><span style="color:#F8F8F2;">  ],</span></span>
<span class="line"><span style="color:#F8F8F2;">  optimization: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    runtimeChunk: </span><span style="color:#E6DB74;">&#39;single&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    usedExports: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    minimizer:[</span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">CssMinimizerPlugin</span><span style="color:#F8F8F2;">()],</span></span>
<span class="line"><span style="color:#F8F8F2;">    splitChunks: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      cacheGroups: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        vendor: {</span></span>
<span class="line"><span style="color:#F8F8F2;">          test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">[\\\\/]</span><span style="color:#E6DB74;">node_modules</span><span style="color:#AE81FF;">[\\\\/]</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          name: </span><span style="color:#E6DB74;">&#39;vendors&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          chunks: </span><span style="color:#E6DB74;">&#39;all&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// package.json</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// ...</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&quot;scripts&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#E6DB74;">&quot;serve&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;webpack serve --config webpack.development.js&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#E6DB74;">&quot;build&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;webpack --config webpack.production.js&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(F,i){return n(),a("div",null,o)}const y=s(p,[["render",c],["__file","environment.html.vue"]]);export{y as default};
