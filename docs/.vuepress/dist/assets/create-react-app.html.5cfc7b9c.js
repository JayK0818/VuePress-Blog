import{_ as p,r as o,o as c,c as r,d as s,a as e,b as n,e as a}from"./app.02e89851.js";const i={},t=n(`<h1 id="create-react-app" tabindex="-1"><a class="header-anchor" href="#create-react-app" aria-hidden="true">#</a> create-react-app</h1><ol><li>\u5728\u4F7F\u7528 npx create-react-app \u811A\u624B\u67B6\u521B\u5EFA\u9879\u76EE\u65F6\u4E00\u76F4\u63D0\u793A\u8D85\u65F6\u5B89\u88C5\u4E0D\u4E86\u3002 \u62A5\u9519\u4FE1\u606F\u4E3A: An unexpected error occurred: &quot;https://registry.yarnpkg.com/react</li></ol><p>\u89E3\u51B3\u65B9\u5F0F\uFF1A \u6362\u6E90 npm config set registry https://registry.npm.taobao.org</p><h2 id="\u914D\u7F6E\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u522B\u540D" aria-hidden="true">#</a> \u914D\u7F6E\u522B\u540D</h2><p>\u4E3A\u4E86\u7B80\u5316\u6587\u4EF6\u5F15\u5165\u8DEF\u5F84\u914D\u7F6Ereact\u522B\u540D,\u5728vue\u811A\u624B\u67B6\u4E2D\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86webpack,\u901A\u8FC7 @ \u5F15\u5165src\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6,\u6216\u8005\u7528webpack\u81EA\u884C\u642D\u5EFA\u9879\u76EE\u65F6\u53EF\u4EE5 \u5728 resolve\u9009\u9879\u8BBE\u7F6E alias \u914D\u7F6E\u522B\u540D:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// webpack.config.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  resolve:{</span></span>
<span class="line"><span style="color:#F8F8F2;">    alias: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&#39;@&#39;</span><span style="color:#F8F8F2;">: path.</span><span style="color:#A6E22E;">resolve</span><span style="color:#F8F8F2;">(__dirname,</span><span style="color:#E6DB74;">&#39;src&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728ts\u73AF\u5883\u4E0B\u4EE5\u4E0A\u914D\u7F6E\u4F1A\u62A5\u8B66\u544A, \u5728tsconfig.json\u6587\u4EF6\u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// tsconfig.json</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&quot;compilerOptions&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#E6DB74;">&quot;paths&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;@/*&quot;</span><span style="color:#F8F8F2;">: [</span><span style="color:#E6DB74;">&quot;./src/*&quot;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),F={href:"https://webpack.docschina.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer"},d=a("webpack-alias"),y=n(`<p>\u5728react \u4E2D\u8BBE\u7F6E\u522B\u540D\u7684\u65B9\u5F0F\u9700\u5F15\u5165\u7B2C\u4E09\u65B9\u5E93</p><p>\u7B2C\u4E00\u6B65,\u5148\u4E0B\u8F7D\u9700\u8981\u7684\u5305</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm install react</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">app</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">rewired </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">save</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">dev</span></span>
<span class="line"><span style="color:#F8F8F2;">npm install customize</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">cra </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">save</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B65\u4FEE\u6539package.json\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// package.json</span></span>
<span class="line"><span style="color:#E6DB74;">&quot;scripts&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&quot;start&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;react-app-rewired start&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&quot;build&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;react-app-rewired build&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&quot;test&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;react-app-rewired test&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u6B65 \u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA config.overrides.js\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// config.overrides.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> path </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;path&quot;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> {override,addWebpackAlias} </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;customize-cra&quot;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// \u7B2C\u4E00\u79CD\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">override</span><span style="color:#F8F8F2;">(</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#FD971F;font-style:italic;">config</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    config.resolve.alias </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;@&quot;</span><span style="color:#F8F8F2;">:path.</span><span style="color:#A6E22E;">resolve</span><span style="color:#F8F8F2;">(__dirname,</span><span style="color:#E6DB74;">&#39;@&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> config</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// \u7B2C\u4E8C\u79CD\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">override</span><span style="color:#F8F8F2;">(</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">addWebpackAlias</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#E6DB74;">&quot;@&quot;</span><span style="color:#F8F8F2;">:path.</span><span style="color:#A6E22E;">resolve</span><span style="color:#F8F8F2;">(__dirname,</span><span style="color:#E6DB74;">&quot;src&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F00\u53D1\u73AF\u5883\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u4EE3\u7406" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883\u4EE3\u7406</h2><h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h3><p>\u5F53\u524D\u7AEF\u670D\u52A1\u4E0E\u540E\u7AEFapi\u63A5\u53E3\u8BF7\u6C42\u51FA\u73B0\u8DE8\u57DF\u65F6\u8BBE\u7F6E\u4EE3\u7406.\u5728\u9879\u76EE\u6839\u76EE\u5F55\u7684package.json\u6587\u4EF6\u91CC \u6DFB\u52A0 proxy \u5B57\u6BB5, \u5730\u5740\u4E3A\u540E\u53F0\u6570\u636E\u63A5\u53E3\u5730\u5740</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// app.js \u4F7F\u7528koa\u642D\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u6570\u636E\u63A5\u53E3</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> Koa </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;koa&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> app </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Koa</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> router </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;koa-router&#39;</span><span style="color:#F8F8F2;">)()</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> player </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;durant&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;james&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;kobe&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">router.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;/api/player&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#F92672;">async</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">ctx</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  ctx.body </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    player</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">app.</span><span style="color:#A6E22E;">use</span><span style="color:#F8F8F2;">(router.</span><span style="color:#A6E22E;">routes</span><span style="color:#F8F8F2;">()).</span><span style="color:#A6E22E;">use</span><span style="color:#F8F8F2;">(router.</span><span style="color:#A6E22E;">allowedMethods</span><span style="color:#F8F8F2;">())</span></span>
<span class="line"><span style="color:#F8F8F2;">app.</span><span style="color:#A6E22E;">listen</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">5000</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728\u8BBE\u7F6E\u4EE3\u7406\u524D,\u8BF7\u6C42\u8DE8\u57DF\u62A5\u9519: Access to XMLHttpRequest at &#39;http://192.168.31.206:5000/api/player&#39; from origin &#39;http://192.168.31.206:3000&#39; has been blocked by CORS policy: No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource.</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// package.json \u914D\u7F6E\u4EE3\u7406\u540E\u518D\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// ...</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&quot;proxy&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#E6DB74;">&quot;http://192.168.31.206:5000&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;">// \u5728\u672C\u5730\u6D4B\u8BD5\u65F6,\u540E\u7AEF\u6570\u636E\u90E8\u7F72\u57285000\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// ...</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> {useEffect} </span><span style="color:#F92672;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;react&#39;</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> axios </span><span style="color:#F92672;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;axios&#39;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">App</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">useEffect</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">axios</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">      url:</span><span style="color:#E6DB74;">&#39;/api/player&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      method:</span><span style="color:#E6DB74;">&#39;get&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">list</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;list:&#39;</span><span style="color:#F8F8F2;">,list)</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">/*{</span></span>
<span class="line"><span style="color:#88846F;">        config:{},</span></span>
<span class="line"><span style="color:#88846F;">        data:{</span></span>
<span class="line"><span style="color:#88846F;">          player:[&#39;kyrie&#39;, &#39;durant&#39;, &#39;james&#39;, &#39;kobe&#39;]</span></span>
<span class="line"><span style="color:#88846F;">        },</span></span>
<span class="line"><span style="color:#88846F;">        headers:{},</span></span>
<span class="line"><span style="color:#88846F;">        request:{},</span></span>
<span class="line"><span style="color:#88846F;">        status:200,</span></span>
<span class="line"><span style="color:#88846F;">        statusText:&#39;OK&#39;</span></span>
<span class="line"><span style="color:#88846F;">      }*/</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">    })</span></span>
<span class="line"><span style="color:#F8F8F2;">  },[])</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> (</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">className</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;App&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  );</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http-proxy-middleware" tabindex="-1"><a class="header-anchor" href="#http-proxy-middleware" aria-hidden="true">#</a> http-proxy-middleware</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// Install</span></span>
<span class="line"><span style="color:#F8F8F2;">$ npm install http</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">proxy</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">middleware </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">save</span></span>
<span class="line"><span style="color:#F8F8F2;">$ # or</span></span>
<span class="line"><span style="color:#F8F8F2;">$ yarn add http</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">proxy</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">middleware</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// src/setupProxy.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> { createProxyMiddleware } </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;http-proxy-middleware&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">app</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  app.</span><span style="color:#A6E22E;">use</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;/api&#39;</span><span style="color:#F8F8F2;">, </span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">createProxyMiddleware</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">      target:</span><span style="color:#E6DB74;">&#39;http://192.168.31.206:5000&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      changeOrigin:</span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">    })</span></span>
<span class="line"><span style="color:#F8F8F2;">  )</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// shorthand syntax</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">app</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  app.</span><span style="color:#A6E22E;">use</span><span style="color:#F8F8F2;">(</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">createProxyMiddleware</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;http://192.168.31.206:5000/api&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  )</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u65B0\u542F\u52A8\u9879\u76EE\u5C31\u53EF\u4EE5\u8DE8\u57DF\u8BF7\u6C42\u6570\u636E\u4E86\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This feature is available with react-scripts@2.0.0 and higher</p></div>`,19),v=a("npm\u6587\u6863 "),u={href:"https://www.npmjs.com/package/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer"},m=a("http-proxy-middleware"),b=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// \u5176\u4ED6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> options </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;"> target:</span><span style="color:#E6DB74;">&#39;http://www.example.com&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;"> changeOrigin:</span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// needed for virtual hosted sites</span></span>
<span class="line"><span style="color:#F8F8F2;"> ws:</span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// proxy websockets</span></span>
<span class="line"><span style="color:#F8F8F2;"> pathRewrite:{</span></span>
<span class="line"><span style="color:#F8F8F2;">   </span><span style="color:#E6DB74;">&#39;^api/old-path&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;/api/new-path&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;">// rewrite path</span></span>
<span class="line"><span style="color:#F8F8F2;"> }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(h,D){const l=o("ExternalLinkIcon");return c(),r("div",null,[t,s("p",null,[s("a",F,[d,e(l)])]),y,s("p",null,[v,s("a",u,[m,e(l)])]),b])}var f=p(i,[["render",E],["__file","create-react-app.html.vue"]]);export{f as default};
