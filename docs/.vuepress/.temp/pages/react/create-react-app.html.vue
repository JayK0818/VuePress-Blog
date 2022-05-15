<template><h1 id="create-react-app" tabindex="-1"><a class="header-anchor" href="#create-react-app" aria-hidden="true">#</a> create-react-app</h1>
<ol>
<li>在使用 npx create-react-app 脚手架创建项目时一直提示超时安装不了。
报错信息为: An unexpected error occurred: &quot;https://registry.yarnpkg.com/react</li>
</ol>
<p>解决方式： 换源
npm config set registry https://registry.npm.taobao.org</p>
<h2 id="配置别名" tabindex="-1"><a class="header-anchor" href="#配置别名" aria-hidden="true">#</a> 配置别名</h2>
<p>为了简化文件引入路径配置react别名,在vue脚手架中已经配置好了webpack,通过 @ 引入src目录下的文件,或者用webpack自行搭建项目时可以
在 resolve选项设置 alias 配置别名:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  resolve:{</span></span>
<span class="line"><span style="color: #F8F8F2">    alias: {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #E6DB74">&#39;@&#39;</span><span style="color: #F8F8F2">: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname,</span><span style="color: #E6DB74">&#39;src&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ts环境下以上配置会报警告, 在tsconfig.json文件中添加如下配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// tsconfig.json</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;compilerOptions&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&quot;paths&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #E6DB74">&quot;@/*&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #E6DB74">&quot;./src/*&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://webpack.docschina.org/configuration/resolve/#resolvealias" target="_blank" rel="noopener noreferrer">webpack-alias<ExternalLinkIcon/></a></p>
<p>在react 中设置别名的方式需引入第三方库</p>
<p>第一步,先下载需要的包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">npm install react</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">app</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">rewired </span><span style="color: #F92672">--</span><span style="color: #F8F8F2">save</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">dev</span></span>
<span class="line"><span style="color: #F8F8F2">npm install customize</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">cra </span><span style="color: #F92672">--</span><span style="color: #F8F8F2">save</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步修改package.json文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// package.json</span></span>
<span class="line"><span style="color: #E6DB74">&quot;scripts&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;start&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #E6DB74">&quot;react-app-rewired start&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;build&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #E6DB74">&quot;react-app-rewired build&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;test&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #E6DB74">&quot;react-app-rewired test&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步 在项目根目录下创建 config.overrides.js文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// config.overrides.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> path </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&quot;path&quot;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> {override,addWebpackAlias} </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&quot;customize-cra&quot;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 第一种方式</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">override</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FD971F; font-style: italic">config</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    config.resolve.alias </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #E6DB74">&quot;@&quot;</span><span style="color: #F8F8F2">:path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname,</span><span style="color: #E6DB74">&#39;@&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> config</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 第二种方式</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">override</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">addWebpackAlias</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&quot;@&quot;</span><span style="color: #F8F8F2">:path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname,</span><span style="color: #E6DB74">&quot;src&quot;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发环境代理" tabindex="-1"><a class="header-anchor" href="#开发环境代理" aria-hidden="true">#</a> 开发环境代理</h2>
<h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h3>
<p>当前端服务与后端api接口请求出现跨域时设置代理.在项目根目录的package.json文件里 添加 proxy 字段, 地址为后台数据接口地址</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// app.js 使用koa搭建一个简单的数据接口</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> Koa </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;koa&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> app </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Koa</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> router </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;koa-router&#39;</span><span style="color: #F8F8F2">)()</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> player </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&#39;kyrie&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;durant&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;james&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;kobe&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">router.</span><span style="color: #A6E22E">get</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/api/player&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #F92672">async</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F; font-style: italic">ctx</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  ctx.body </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    player</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F8F8F2">app.</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2">(router.</span><span style="color: #A6E22E">routes</span><span style="color: #F8F8F2">()).</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2">(router.</span><span style="color: #A6E22E">allowedMethods</span><span style="color: #F8F8F2">())</span></span>
<span class="line"><span style="color: #F8F8F2">app.</span><span style="color: #A6E22E">listen</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">5000</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在设置代理前,请求跨域报错:
Access to XMLHttpRequest at 'http://192.168.31.206:5000/api/player' from origin 'http://192.168.31.206:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// package.json 配置代理后再请求</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;proxy&quot;</span><span style="color: #F8F8F2">:</span><span style="color: #E6DB74">&quot;http://192.168.31.206:5000&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #88846F">// 在本地测试时,后端数据部署在5000端口</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> {useEffect} </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;react&#39;</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> axios </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;axios&#39;</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">App</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">useEffect</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">axios</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">      url:</span><span style="color: #E6DB74">&#39;/api/player&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      method:</span><span style="color: #E6DB74">&#39;get&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">list</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;list:&#39;</span><span style="color: #F8F8F2">,list)</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">/*{</span></span>
<span class="line"><span style="color: #88846F">        config:{},</span></span>
<span class="line"><span style="color: #88846F">        data:{</span></span>
<span class="line"><span style="color: #88846F">          player:[&#39;kyrie&#39;, &#39;durant&#39;, &#39;james&#39;, &#39;kobe&#39;]</span></span>
<span class="line"><span style="color: #88846F">        },</span></span>
<span class="line"><span style="color: #88846F">        headers:{},</span></span>
<span class="line"><span style="color: #88846F">        request:{},</span></span>
<span class="line"><span style="color: #88846F">        status:200,</span></span>
<span class="line"><span style="color: #88846F">        statusText:&#39;OK&#39;</span></span>
<span class="line"><span style="color: #88846F">      }*/</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  },[])</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">className</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&quot;App&quot;</span><span style="color: #F8F8F2">&gt;&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  );</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http-proxy-middleware" tabindex="-1"><a class="header-anchor" href="#http-proxy-middleware" aria-hidden="true">#</a> http-proxy-middleware</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// Install</span></span>
<span class="line"><span style="color: #F8F8F2">$ npm install http</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">proxy</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">middleware </span><span style="color: #F92672">--</span><span style="color: #F8F8F2">save</span></span>
<span class="line"><span style="color: #F8F8F2">$ # or</span></span>
<span class="line"><span style="color: #F8F8F2">$ yarn add http</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">proxy</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">middleware</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// src/setupProxy.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> { createProxyMiddleware } </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;http-proxy-middleware&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">app</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  app.</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/api&#39;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">createProxyMiddleware</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">      target:</span><span style="color: #E6DB74">&#39;http://192.168.31.206:5000&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      changeOrigin:</span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  )</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// shorthand syntax</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">app</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  app.</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">createProxyMiddleware</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;http://192.168.31.206:5000/api&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  )</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新启动项目就可以跨域请求数据了。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This feature is available with react-scripts@2.0.0 and higher</p>
</div>
<p>npm文档 <a href="https://www.npmjs.com/package/http-proxy-middleware" target="_blank" rel="noopener noreferrer">http-proxy-middleware<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 其他配置</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> options </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> target:</span><span style="color: #E6DB74">&#39;http://www.example.com&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2"> changeOrigin:</span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">,  </span><span style="color: #88846F">// needed for virtual hosted sites</span></span>
<span class="line"><span style="color: #F8F8F2"> ws:</span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">,  </span><span style="color: #88846F">// proxy websockets</span></span>
<span class="line"><span style="color: #F8F8F2"> pathRewrite:{</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #E6DB74">&#39;^api/old-path&#39;</span><span style="color: #F8F8F2">: </span><span style="color: #E6DB74">&#39;/api/new-path&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #88846F">// rewrite path</span></span>
<span class="line"><span style="color: #F8F8F2"> }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
