<template><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  mode:</span><span style="color: #E6DB74">&#39;development&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  entry: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/index.js&#39;</span><span style="color: #F8F8F2">), </span><span style="color: #88846F">// 入口</span></span>
<span class="line"><span style="color: #F8F8F2">  output: { </span><span style="color: #88846F">// 出口</span></span>
<span class="line"><span style="color: #F8F8F2">    path: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/dist&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    filename: </span><span style="color: #E6DB74">&#39;bundle.js&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理资源" tabindex="-1"><a class="header-anchor" href="#管理资源" aria-hidden="true">#</a> 管理资源</h2>
<p>style-loader/css-loader</p>
<p>模块loader可以链式调用。链中的每个loader都将对资源进行转换。链会逆序执行。第一个loader将其结果传递给
下一个loader,依此类推。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// style-loader  Inject CSS into the DOM</span></span>
<span class="line"><span style="color: #88846F">//在背后使用了module.hot.accpet,在css依赖模块更新之后,会将其patch到&lt;style&gt;标签中</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// src/index.js</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./style.css&#39;</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> div </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;div&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  div.classList.</span><span style="color: #A6E22E">add</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;item&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  div.textContent </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;你好生活&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> div</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">document.body.</span><span style="color: #A6E22E">appendChild</span><span style="color: #F8F8F2">(</span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">())</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">  entry: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/index.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">  output: {</span></span>
<span class="line"><span style="color: #F8F8F2">    path: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;dist&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    filename: </span><span style="color: #E6DB74">&#39;bundle.js&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  module: {</span></span>
<span class="line"><span style="color: #F8F8F2">    rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        use:[</span><span style="color: #E6DB74">&#39;style-loader&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;css-loader&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    ]</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码分离" tabindex="-1"><a class="header-anchor" href="#代码分离" aria-hidden="true">#</a> 代码分离</h2>
<p>代码分离是把代码分离到不同的bundle中, 然后可以按需加载或并行加载这些文件。代码分离可以获取更小的bundle.</p>
<p>常用的代码分离方法有三种:</p>
<ol>
<li>入口起点: 使用entry 配置手动的分离代码</li>
<li>防止重复: 使用SplitChunksPlugin 去重和分离chunk</li>
<li>动态导入: 通过模块的内联函数调用分离代码</li>
</ol>
<h3 id="配置多个入口" tabindex="-1"><a class="header-anchor" href="#配置多个入口" aria-hidden="true">#</a> 配置多个入口</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #88846F">// - 多个入口</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  mode: </span><span style="color: #E6DB74">&#39;development&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  entry: {</span></span>
<span class="line"><span style="color: #F8F8F2">    app: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/index.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    main: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/main.js&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  output: {</span></span>
<span class="line"><span style="color: #F8F8F2">    filename: </span><span style="color: #E6DB74">&#39;[name].bundle.js&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    path: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;dist&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    clean: </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置会将bundle打包成 app.bundle.js 和 main.bundle.js, 但是会有一个问题, 两个入口文件中都引入了lodash,
这样配置会在两个bundle中造成重复引用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  entry: {</span></span>
<span class="line"><span style="color: #F8F8F2">    app: {</span></span>
<span class="line"><span style="color: #F8F8F2">      import: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/index.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">      dependOn: </span><span style="color: #E6DB74">&#39;shared&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    main: {</span></span>
<span class="line"><span style="color: #F8F8F2">      import:  path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/main.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">      dependOn: </span><span style="color: #E6DB74">&#39;shared&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    shared: </span><span style="color: #E6DB74">&#39;lodash&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  optimization: {</span></span>
<span class="line"><span style="color: #F8F8F2">    runtimeChunk: </span><span style="color: #E6DB74">&#39;single&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="splitchunksplugin" tabindex="-1"><a class="header-anchor" href="#splitchunksplugin" aria-hidden="true">#</a> SplitChunksPlugin</h3>
<p>可以将公共的依赖模块提取到已有的入口chunk中。或者提取到一个新生成的chunk.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  mode: </span><span style="color: #E6DB74">&#39;development&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ... </span></span>
<span class="line"><span style="color: #F8F8F2">  entry: {</span></span>
<span class="line"><span style="color: #F8F8F2">    app: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/index.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    main: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/main.js&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  output: {</span></span>
<span class="line"><span style="color: #F8F8F2">    filename: </span><span style="color: #E6DB74">&#39;[name].bundle.js&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    path: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;dist&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    clean: </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  optimization: {</span></span>
<span class="line"><span style="color: #F8F8F2">    runtimeChunk: </span><span style="color: #E6DB74">&#39;single&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    splitChunks: {</span></span>
<span class="line"><span style="color: #F8F8F2">      chunks: </span><span style="color: #E6DB74">&#39;all&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态导入" tabindex="-1"><a class="header-anchor" href="#动态导入" aria-hidden="true">#</a> 动态导入</h3>
<p>使用import()语法来实现动态导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// main.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">print</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">message</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(message)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> print</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// index.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> button </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;button&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">button.textContent </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;click&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">button.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;click&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">import</span><span style="color: #F8F8F2">(</span><span style="color: #88846F">/*webpackChunkName: &#39;print&#39;*/</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./main.js&#39;</span><span style="color: #F8F8F2">).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">fn</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(fn)</span></span>
<span class="line"><span style="color: #F8F8F2">    fn.</span><span style="color: #A6E22E">default</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;hello&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">}, </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">document.body.</span><span style="color: #A6E22E">appendChild</span><span style="color: #F8F8F2">(button)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">  entry: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/index.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">  optimization: {</span></span>
<span class="line"><span style="color: #F8F8F2">    runtimeChunk: </span><span style="color: #E6DB74">&#39;single&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    splitChunks: {</span></span>
<span class="line"><span style="color: #F8F8F2">      chunks: </span><span style="color: #E6DB74">&#39;all&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当点击button按钮的时候, 会异步加载 print.bundle.js 文件, 默认导出的函数 挂载 在 对象的default 属性上</p>
<p><img src="@source/vue/images/code-spliting.png" alt="code-spliting"></p>
<h3 id="prefetch-preload" tabindex="-1"><a class="header-anchor" href="#prefetch-preload" aria-hidden="true">#</a> prefetch / preload</h3>
<p>prefetch(预获取) / preload (预加载)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #A6E22E">import</span><span style="color: #F8F8F2">(</span><span style="color: #88846F">/*webpackPrefetch: true*/</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./util/index.js&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>prefetch: 只要父chunk完成加载, webpack就会添加prefetch hint(预取指示)</p>
<p>preload:</p>
<ol>
<li>preload chunk 会在父chunk加载时, 以并行方式开始加载. 而prefetch chunk会在父chunk加载结束后开始加载</li>
<li>preload chunk 具有中等优先级, 并立即下载。 prefetch chunk会在浏览器闲置时下载</li>
<li>preload chunk会在父chunk中立即请求,用于当下时刻, prefetch chunk会用于未来的某个时刻。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// src/index.js </span></span>
<span class="line"><span style="color: #88846F">// 改造一下上面的例子</span></span>
<span class="line"><span style="color: #A6E22E">import</span><span style="color: #F8F8F2">(</span><span style="color: #88846F">/*webpackPrefetch: true*/</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./main.js&#39;</span><span style="color: #F8F8F2">).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">fn</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  fn.</span><span style="color: #A6E22E">default</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;hello&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">//会在html 生成下面的 引用</span></span>
<span class="line"><span style="color: #88846F">//&lt;link rel=&quot;prefetch&quot; as=&quot;script&quot; href=&quot;http://localhost:9098/src_main_js.bundle.js&quot;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h2>
<p>命中缓存可以降低网络流量, 使网站加载速度更快。</p>
<p>webapck提供了一种称为 substitution(可替换模板字符串)的方式, 通过带括号字符串来模板化文件名。
其中, [contenthash] substitution将根据资源内容创建出唯一hash. 当资源内容发生变化时,[contenthash]也会发生改变。</p>
<p>在介绍 hash 之前先介绍一下 contenthash fullhash 和 chunkhash 之间的区别</p>
<h3 id="fullhash" tabindex="-1"><a class="header-anchor" href="#fullhash" aria-hidden="true">#</a> fullhash</h3>
<p>之前是hash --&gt; 现在值改为了fullhash</p>
<p>如果使用hash的话, 每次修改任何一个文件, 所有打包生成的文件名hash都会改变, 所以一旦修改了任何一个文件, 整个项目的缓存都将失效。</p>
<p><img src="@source/vue/images/full-hash.png" alt="full-hash">
上图 是 打包后的结果,可以看到 bundle.js 和分离出来的 css文件 hash值都是一致的, 修改其中一个文件的内容再次打包 :</p>
<p><img src="@source/vue/images/full-hash-change.png" alt="full-hash-change"></p>
<p>上图可以看到 仅更改一个文件, 所有的文件名hash值都已发生改变。</p>
<h3 id="chunkhash" tabindex="-1"><a class="header-anchor" href="#chunkhash" aria-hidden="true">#</a> chunkhash</h3>
<p>chunkhash是根据不同的入口文件进行依赖文件解析,构建对应的chunk。生成对应的hash值。将上面的demo文件名改为 chunkhash 再次打包:</p>
<p><img src="@source/vue/images/chunk-hash.png" alt="chunkhash"></p>
<p>不同的bundle 的hash值不一致, 但是css文件是作为模块引入到Javascript中的, 所以对应的css文件hash 和 bundle.js hash值一致。</p>
<p>这样就产生了一个问题：如果仅修改js文件 但是不修改css文件, 或者只修改css文件 不修改 js文件, 会导致两者的 hash值都发生改变。</p>
<p>下图 左 和 图右 分别是 修改了 main.js 和 main.css文件后打包后的结果
可以发现 app.js 和 app.css文件hash值没有发生改变, 但是 main.js 和main.css 文件hash 都 发生改变了.</p>
<p><img src="@source/vue/images/chunkhash-change.png" alt="chunkhash-change"></p>
<h3 id="contenthash" tabindex="-1"><a class="header-anchor" href="#contenthash" aria-hidden="true">#</a> contenthash</h3>
<p>contenthash 将根据资源内容创建出唯一 hash。当资源内容发生变化时,contenthash 也会发生变化。</p>
<p><img src="@source/vue/images/contenthash.png" alt="contenthash"></p>
<p>上图只更改了main.js文件, 打包前后只有main.bundle.js hash值发生了改变。</p>
<p>webpack还提供了一个优化功能,可以使用optimization.runtimeChunk 选项将runtime代码拆分为一个单独的chunk. 将其设置为
single为所有chunk创建一个runtime bundle.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">  optimization:{</span></span>
<span class="line"><span style="color: #F8F8F2">    runtimeChunk: </span><span style="color: #E6DB74">&#39;single&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>runtimeChunk 指的是webpack的运行环境和模块信息清单, 模块信息清单在每次有模块变更hash时 都会变。将这部分内容单独打包出来,
就不会因为某个模块的变更导致模块信息的模块缓存失效.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  mode: </span><span style="color: #E6DB74">&#39;development&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  entry: {</span></span>
<span class="line"><span style="color: #F8F8F2">    app: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/index.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// index.js中异步导入了一个js文件 print.js</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  output: {</span></span>
<span class="line"><span style="color: #F8F8F2">    filename: </span><span style="color: #E6DB74">&#39;[name].[contenthash:8].bundle.js&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    path: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;dist&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    clean: </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  optimization: {</span></span>
<span class="line"><span style="color: #F8F8F2">    runtimeChunk: </span><span style="color: #E6DB74">&#39;single&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时, 更新index.js文件, 只有app.js的hash值会改变, 而如果更改 print.js 则 print.bundle.js和 runtime.bundle.js
hash值都将更改。</p>
<ol>
<li>
<p>第一次打包的结果
<img src="@source/vue/images/cache-1.png" alt="cache-1"></p>
</li>
<li>
<p>更改index.js后打包结果
<img src="@source/vue/images/cache-2.png" alt="cache-2"></p>
</li>
<li>
<p>更改print.js后打包结果
<img src="@source/vue/images/cache-3.png" alt="cache-3"></p>
</li>
</ol>
<h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h2>
<h3 id="style-loader" tabindex="-1"><a class="header-anchor" href="#style-loader" aria-hidden="true">#</a> Style-loader</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// injectType: allows to setup how styles will be injected into the DOM</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">default: styleTag</span></span>
<span class="line"><span style="color: #88846F">singletonStyleTag: Automatically injects styles into the DOM using one &lt;style&gt;</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// lazyStyleTag:</span></span>
<span class="line"><span style="color: #88846F">// injects styles into the DOM using multiple &lt;style&gt;&lt;/style&gt; on demand.</span></span>
<span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">  module: {</span></span>
<span class="line"><span style="color: #F8F8F2">    rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        exclude:</span><span style="color: #E6DB74">/</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">lazy</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        use:[</span><span style="color: #E6DB74">&#39;style-loader&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;css-loader&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">      },</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">lazy</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        use:[</span></span>
<span class="line"><span style="color: #F8F8F2">          {</span></span>
<span class="line"><span style="color: #F8F8F2">            loader: </span><span style="color: #E6DB74">&#39;style-loader&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            options: {</span></span>
<span class="line"><span style="color: #F8F8F2">              injectType: </span><span style="color: #E6DB74">&#39;lazyStyleTag&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">            }</span></span>
<span class="line"><span style="color: #F8F8F2">          },</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #E6DB74">&#39;css-loader&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">        ]</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    ]</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>attributes: the style-loader will attach given attributes with their values on style element</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// ... </span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  use: [{</span></span>
<span class="line"><span style="color: #F8F8F2">    loader: </span><span style="color: #E6DB74">&#39;style-loader&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    options: {</span></span>
<span class="line"><span style="color: #F8F8F2">      attributes: {</span></span>
<span class="line"><span style="color: #F8F8F2">        id: </span><span style="color: #AE81FF">123</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }, </span><span style="color: #E6DB74">&#39;css-loader&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/vue/images/style-loader-attributes.png" alt="attributes"></p>
<ul>
<li>insert: default: head  指定style标签插入的位置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  use:[{</span></span>
<span class="line"><span style="color: #F8F8F2">    loader:</span><span style="color: #E6DB74">&#39;style-loader&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    options: {</span></span>
<span class="line"><span style="color: #F8F8F2">      insert: </span><span style="color: #E6DB74">&#39;body&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span><span style="color: #E6DB74">&#39;css-loader&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/vue/images/style-loader-insert.png" alt="insert"></p>
<ul>
<li>Source maps</li>
</ul>
<p>The loader automatically inject source maps when previous loader emit them. Therefore,to generate source maps,
set the sourceMap option to true for the previous loader</p>
<h3 id="css-loader" tabindex="-1"><a class="header-anchor" href="#css-loader" aria-hidden="true">#</a> CSS-loader</h3>
<p>The css-loader interprets @import and url() and will resolve them.</p>
<h3 id="url-boolean-object" tabindex="-1"><a class="header-anchor" href="#url-boolean-object" aria-hidden="true">#</a> url: Boolean / Object</h3>
<p>Enable/disable url() resolving</p>
<h4 id="import-boolean-object" tabindex="-1"><a class="header-anchor" href="#import-boolean-object" aria-hidden="true">#</a> import:  Boolean / Object</h4>
<p>allows to enables/disables @import at-rules handing.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">  {</span></span>
<span class="line"><span style="color: #F8F8F2">    test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F92672">i</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    loader: </span><span style="color: #E6DB74">&quot;css-loader&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    options: {</span></span>
<span class="line"><span style="color: #F8F8F2">      url: </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">  </span><span style="color: #88846F">// boolean  设置为false 无法解析背景图片url地址 (本地资源路径)</span></span>
<span class="line"><span style="color: #F8F8F2">      url: { </span><span style="color: #88846F">// object</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #A6E22E">filter</span><span style="color: #F8F8F2">: (</span><span style="color: #FD971F; font-style: italic">url</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">resourcePath</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(url.</span><span style="color: #A6E22E">includes</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;webp&#39;</span><span style="color: #F8F8F2">)) { </span><span style="color: #88846F">// 不会处理webp文件 （本地资源路径）</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">          }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">false</span></span>
<span class="line"><span style="color: #F8F8F2">          }</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      },</span></span>
<span class="line"><span style="color: #F8F8F2">      import: </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">  </span><span style="color: #88846F">// default: false</span></span>
<span class="line"><span style="color: #F8F8F2">      import: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #A6E22E">filter</span><span style="color: #F8F8F2">: (</span><span style="color: #FD971F; font-style: italic">url</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">media</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">resourcePath</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(url.</span><span style="color: #A6E22E">includes</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;style.css&#39;</span><span style="color: #F8F8F2">)) {</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">false</span></span>
<span class="line"><span style="color: #F8F8F2">          }</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>import设置为false时, 浏览器会报警告。</p>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>Refused to apply style from 'http://localhost:9008/index.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.</p>
</div>
<h4 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> modules</h4>
<p>Allows to enable/disable CSS Modules</p>
<p>default: undefined</p>
<ol>
<li>
<p>undefined:
enable CSS modules for all files matching /.module.\w+$/i.test(filename)</p>
</li>
<li>
<p>true:
enable CSS modules for all files</p>
</li>
<li>
<p>false:
disable CSS modules for all files</p>
</li>
<li>
<p>string: disables CSS modules for all files and set the mode option.</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// index.js  入口</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./css/index.module.css&#39;</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./css/index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">module: {</span></span>
<span class="line"><span style="color: #F8F8F2">  rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">    {</span></span>
<span class="line"><span style="color: #F8F8F2">      test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      use: [</span><span style="color: #E6DB74">&#39;style-loader&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">        loader: </span><span style="color: #E6DB74">&#39;css-loader&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        options: {</span></span>
<span class="line"><span style="color: #F8F8F2">          modules: </span><span style="color: #AE81FF">undefined</span><span style="color: #F8F8F2">, </span><span style="color: #88846F">// defualt</span></span>
<span class="line"><span style="color: #F8F8F2">          modules: </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">          modules: {</span></span>
<span class="line"><span style="color: #F8F8F2">            auto: </span><span style="color: #AE81FF">undefined</span><span style="color: #F8F8F2">,  </span><span style="color: #88846F">//enable CSS modules for all files</span></span>
<span class="line"><span style="color: #F8F8F2">            auto: </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">,  </span><span style="color: #88846F">// 匹配 module.css的文件</span></span>
<span class="line"><span style="color: #F8F8F2">            auto: </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">, </span><span style="color: #88846F">// disable CSS modules</span></span>
<span class="line"><span style="color: #F8F8F2">            auto:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">module</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css/</span><span style="color: #F8F8F2">, </span><span style="color: #88846F">// enable CSS modules for all files matching </span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #A6E22E">auto</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">resourcePath</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(resourcePath.</span><span style="color: #A6E22E">includes</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;index&#39;</span><span style="color: #F8F8F2">)) { </span><span style="color: #88846F">// 过滤掉所有文件名包含index的文件</span></span>
<span class="line"><span style="color: #F8F8F2">                </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">false</span></span>
<span class="line"><span style="color: #F8F8F2">              }</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">            },</span></span>
<span class="line"><span style="color: #F8F8F2">          }</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      }]</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  ]</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下(undefined), 只会处理 结尾为module.css结尾的文件
<img src="@source/vue/images/css-loader-modules-undefined.png" alt="css-loader-modules-undefined"></p>
<p>设置为true时, 处理所有的CSS文件
<img src="@source/vue/images/css-loader-modules-true.png" alt="css-loader-modules-true"></p>
<h4 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> mode</h4>
<p>CSS modules 允许使用:global(.className)的语法, 声明一个全局规则。凡是这样声明的class, 都不会被编译成哈希字符串。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  use:[</span><span style="color: #E6DB74">&#39;style-loader&#39;</span><span style="color: #F8F8F2">, {</span></span>
<span class="line"><span style="color: #F8F8F2">    loader: </span><span style="color: #E6DB74">&#39;css-loader&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    options: {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// Using `local` value has same effect like using &#39;modules:true&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// 所有文件类名都不会被编译为哈希字符串 使用:local 的css 会会编译为 哈希类名</span></span>
<span class="line"><span style="color: #F8F8F2">      modules: </span><span style="color: #E6DB74">&#39;global&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      modules: </span><span style="color: #E6DB74">&#39;local&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #88846F">// 所有文件类名都会被编译为哈希字符串 但是使用:global 的 css 除外</span></span>
<span class="line"><span style="color: #F8F8F2">      localIdentName: </span><span style="color: #E6DB74">&#39;[hash:base64:8]&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #88846F">//hash clss 生成的规则</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// name: 文件名</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// folder 文件夹名称</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// path 文件夹的相对路径</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// file filename and path</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// hash hash字符串</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// local : original class 转换前的类名</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// Allows to redefine basic loader context for local ident name</span></span>
<span class="line"><span style="color: #F8F8F2">      localIdentContext: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/css&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// Allows to specify hash function to generate classes. </span></span>
<span class="line"><span style="color: #F8F8F2">      localIdentHashFunction: </span><span style="color: #E6DB74">&#39;md4&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// Allows to specify hash digest length to generate class</span></span>
<span class="line"><span style="color: #F8F8F2">      localIdentHashDigestLength: </span><span style="color: #AE81FF">28</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">      hashStrategy: </span><span style="color: #E6DB74">&#39;resource-path-and-local-name&#39;</span><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 生成has的策略</span></span>
<span class="line"><span style="color: #F8F8F2">    }]</span></span>
<span class="line"><span style="color: #F8F8F2">  }]</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="importloaders" tabindex="-1"><a class="header-anchor" href="#importloaders" aria-hidden="true">#</a> importLoaders</h4>
<p>The options importLoaders allows you to configure how many loaders before css-loader shoule be applied
to @import ed resources and CSS modules imports</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  module: {</span></span>
<span class="line"><span style="color: #F8F8F2">    rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        use:[</span><span style="color: #E6DB74">&#39;style-loader&#39;</span><span style="color: #F8F8F2">, {</span></span>
<span class="line"><span style="color: #F8F8F2">          loader: </span><span style="color: #E6DB74">&#39;css-loader&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">          options: {</span></span>
<span class="line"><span style="color: #F8F8F2">            importLoaders: </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #88846F">// 0 =&gt; no loaders (default);</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #88846F">// 1 =&gt; postcss-loader;</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #88846F">// 2 =&gt; postcss-loader, sass-loader</span></span>
<span class="line"><span style="color: #F8F8F2">          }</span></span>
<span class="line"><span style="color: #F8F8F2">        },</span><span style="color: #E6DB74">&#39;postcss-loader&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;sass-loader&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    ]</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/vue/images/css-loader-modules-hash.png" alt="css-loader-modules-hash"></p>
<h2 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h2>
<h3 id="html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#html-webpack-plugin" aria-hidden="true">#</a> html-webpack-plugin</h3>
<p>This is a webpack plugin thatsimplifies creation of HTML files to serve your webpack bundles.
This is especially useful for webpack bundles that includes a hash in the filename which changes every compilation.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> HtmlWebpackPlugin </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;html-webpack-plugin&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">  plugins: [</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">HtmlWebpackPlugin</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">      title: </span><span style="color: #E6DB74">&#39;html-webpack-plugin&#39;</span><span style="color: #F8F8F2">,  </span><span style="color: #88846F">// document.title   default: Webpack App</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// filename: &#39;about.html&#39;,  //     default: index.html</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// filename: &#39;[name].html&#39;,  // 根据入口名字生成</span></span>
<span class="line"><span style="color: #F8F8F2">      template: path.</span><span style="color: #A6E22E">join</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/template.html&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">      inject: </span><span style="color: #E6DB74">&#39;body&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #88846F">// true | head | body | false</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">        inject all assets into the given template or templateContent.</span></span>
<span class="line"><span style="color: #88846F">        body: all javascript resources will be placed at the bottom of the body element</span></span>
<span class="line"><span style="color: #88846F">        head: will place the scripts in the head element</span></span>
<span class="line"><span style="color: #88846F">        true: will add it to the head/body depending on the scriptLoading option.</span></span>
<span class="line"><span style="color: #88846F">        false: will disable automatic injections</span></span>
<span class="line"><span style="color: #88846F">      */</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// publicPath: &#39;/assets/&#39;,  // index.html 引用的资源路径 used for script and link tags</span></span>
<span class="line"><span style="color: #F8F8F2">      scriptLoading: </span><span style="color: #E6DB74">&#39;blocking&#39;</span><span style="color: #F8F8F2">,   </span><span style="color: #88846F">// blocking defer module</span></span>
<span class="line"><span style="color: #F8F8F2">      favicon: path.</span><span style="color: #A6E22E">join</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/icon.svg&#39;</span><span style="color: #F8F8F2">),  </span><span style="color: #88846F">// icon图标</span></span>
<span class="line"><span style="color: #F8F8F2">      minify: </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">,  </span><span style="color: #88846F">// true if mode is &#39;production&#39; otherwise false</span></span>
<span class="line"><span style="color: #F8F8F2">      hash: </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">, </span><span style="color: #88846F">// 引入的 js css文件名后带hash值  </span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// if true then append a unique webpack compilation hash to all included scripts and css files</span></span>
<span class="line"><span style="color: #F8F8F2">      cache: </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      chunks: [</span><span style="color: #E6DB74">&#39;app&#39;</span><span style="color: #F8F8F2">], </span><span style="color: #88846F">// Allows you to add only some chunks</span></span>
<span class="line"><span style="color: #F8F8F2">      meta: {     </span><span style="color: #88846F">// allows to inject meta tags</span></span>
<span class="line"><span style="color: #F8F8F2">        viewport: </span><span style="color: #E6DB74">&#39;width=device-width,initial-scale=1&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        content: </span><span style="color: #E6DB74">&#39;webpack,html-webpack-plugin&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        keywords: </span><span style="color: #E6DB74">&#39;webpack&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #E6DB74">&#39;theme-color&#39;</span><span style="color: #F8F8F2">: </span><span style="color: #E6DB74">&#39;#4285f4&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">      },</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// base: &#39;http://192.168.0.141:8080&#39;, will inject a base tag </span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  ]</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/vue/images/html-webpack-plugin.png" alt="html-webpack-plugin"></p>
<h3 id="mini-css-extract-plugin" tabindex="-1"><a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a> mini-css-extract-plugin</h3>
<p>This plugin extract CSS into separate files. It creates a CSS file per JS file which contains CSS.
It supports On-Demand-Loading of CSS and SourceMaps;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> MiniCssExtractPlugin </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&quot;mini-css-extract-plugin&quot;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  plugins: [</span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">MiniCssExtractPlugin</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">    filename: </span><span style="color: #E6DB74">&#39;[name].[contenthash:8].css&#39;</span><span style="color: #F8F8F2">,  </span><span style="color: #88846F">//文件名  default: [name].css</span></span>
<span class="line"><span style="color: #F8F8F2">    chunkFilename: </span><span style="color: #E6DB74">&#39;&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #88846F">// determines the name of non-entry chunks files</span></span>
<span class="line"><span style="color: #F8F8F2">    attributes: { </span></span>
<span class="line"><span style="color: #88846F">//if defined, mini-css-extract-plugin will attach given attributes </span></span>
<span class="line"><span style="color: #88846F">//with their values on &lt;link&gt; element.It only applied to dynamically loaded css chunks</span></span>
<span class="line"><span style="color: #F8F8F2">      id: </span><span style="color: #E6DB74">&#39;hello&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  })],</span></span>
<span class="line"><span style="color: #F8F8F2">  module: {</span></span>
<span class="line"><span style="color: #F8F8F2">    rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F92672">i</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        use: [MiniCssExtractPlugin.loader, </span><span style="color: #E6DB74">&quot;css-loader&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    ]</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// index.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> button </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;button&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">button.textContent </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;点击&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">button.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;click&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">import</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;./print.js&#39;</span><span style="color: #F8F8F2">).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">d</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    d.</span><span style="color: #A6E22E">default</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;hello world&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// print.js</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./css/print.css&#39;</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">print</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">message</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(message)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图是在点击按钮时 异步加载print.js文件 以及 在print.js中引入的css。</p>
<p><img src="@source/vue/images/lazy-load.png" alt="extract-plugin"></p>
<h4 id="minimizing-for-production" tabindex="-1"><a class="header-anchor" href="#minimizing-for-production" aria-hidden="true">#</a> Minimizing For Production</h4>
<p>To minify the output, use a plugin like css-minimizer-webpack-plugin</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> MiniCssExtractPlugin </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;mini-css-extract-plugin&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> CssMinimizerPlugin </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  module: {</span></span>
<span class="line"><span style="color: #F8F8F2">    rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        use: []</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    ]</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  plugins: [</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">MiniCssExtractPlugin</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">      filename: </span><span style="color: #E6DB74">&#39;[name].[contenthash:8].css&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      chunkFilename: </span><span style="color: #E6DB74">&#39;[name].css&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  ],</span></span>
<span class="line"><span style="color: #F8F8F2">  optimization: {</span></span>
<span class="line"><span style="color: #F8F8F2">    minimize: </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 开发环境压缩css代码</span></span>
<span class="line"><span style="color: #F8F8F2">    minimizer: [</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">CssMinimizerPlugin</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">    ]</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置在 mode 为 production时 会压缩css. 如果想在开发环境下也压缩, 可以设置optimization.minimize 为true</p>
<h4 id="extracting-all-css-in-a-single-file" tabindex="-1"><a class="header-anchor" href="#extracting-all-css-in-a-single-file" aria-hidden="true">#</a> Extracting all CSS in a single file</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.config.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  optimization: {</span></span>
<span class="line"><span style="color: #F8F8F2">    splitChunks: {</span></span>
<span class="line"><span style="color: #F8F8F2">      cacheGroups: {</span></span>
<span class="line"><span style="color: #F8F8F2">        styles: {</span></span>
<span class="line"><span style="color: #F8F8F2">          name: </span><span style="color: #E6DB74">&#39;styles&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">          type: </span><span style="color: #E6DB74">&#39;css/mini-extract&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">          chunks: </span><span style="color: #E6DB74">&#39;all&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">          enforce: </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发环境和生产环境" tabindex="-1"><a class="header-anchor" href="#开发环境和生产环境" aria-hidden="true">#</a> 开发环境和生产环境</h2>
<p>开发环境和生产环境下的构建目标不同, 可以将某些在production和development环境下的通用配置提取出来,
然后分别为不同环境下写彼此独立的webpack配置. 使用webpack-merge工具 将不同环境下的配置合并。</p>
<p>以下配置是针对上述知识点做的一个demo</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// webpack.common.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> path </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;path&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> HtmlWebpackPlugin </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;html-webpack-plugin&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  entry: {</span></span>
<span class="line"><span style="color: #F8F8F2">    app: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;src/index.js&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  output: {</span></span>
<span class="line"><span style="color: #F8F8F2">    clean: </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    path: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;dist&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  module: {</span></span>
<span class="line"><span style="color: #F8F8F2">    rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">(png</span><span style="color: #F92672">|</span><span style="color: #E6DB74">webp</span><span style="color: #F92672">|</span><span style="color: #E6DB74">jpeg</span><span style="color: #F92672">|</span><span style="color: #E6DB74">jpg)</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        type: </span><span style="color: #E6DB74">&#39;asset/resource&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    ]</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  plugins:[</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">HtmlWebpackPlugin</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">      title: </span><span style="color: #E6DB74">&#39;webpack-merge&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  ]</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// webpack.development.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> { merge } </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;webpack-merge&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> common </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;./webpack.common.js&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> path </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;path&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">merge</span><span style="color: #F8F8F2">(common, {</span></span>
<span class="line"><span style="color: #F8F8F2">  mode: </span><span style="color: #E6DB74">&#39;development&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  devtool: </span><span style="color: #E6DB74">&#39;inline-source-map&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  output: {</span></span>
<span class="line"><span style="color: #F8F8F2">    filename: </span><span style="color: #E6DB74">&#39;[name].bundle.js&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  devServer: {</span></span>
<span class="line"><span style="color: #F8F8F2">    port: </span><span style="color: #E6DB74">&#39;9008&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    host: </span><span style="color: #E6DB74">&#39;0.0.0.0&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    static: path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;dist&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  module: {</span></span>
<span class="line"><span style="color: #F8F8F2">    rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        use:[</span><span style="color: #E6DB74">&#39;style-loader&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;css-loader&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    ]</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// webpack.production.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> { merge } </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;webpack-merge&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> common </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;./webpack.common.js&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> MiniCssExtractPlugin </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;mini-css-extract-plugin&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> CssMinimizerPlugin </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">merge</span><span style="color: #F8F8F2">(common, {</span></span>
<span class="line"><span style="color: #F8F8F2">  mode: </span><span style="color: #E6DB74">&#39;production&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  output: {</span></span>
<span class="line"><span style="color: #F8F8F2">    filename: </span><span style="color: #E6DB74">&#39;[name].[contenthash].js&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  module: {</span></span>
<span class="line"><span style="color: #F8F8F2">    rules: [</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">\.</span><span style="color: #E6DB74">css</span><span style="color: #F92672">$</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        use: [MiniCssExtractPlugin.loader, </span><span style="color: #E6DB74">&#39;css-loader&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    ]</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  plugins:[</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">MiniCssExtractPlugin</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">      filename: </span><span style="color: #E6DB74">&#39;[name].[contenthash].css&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      chunkFilename: </span><span style="color: #E6DB74">&#39;[name].css&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  ],</span></span>
<span class="line"><span style="color: #F8F8F2">  optimization: {</span></span>
<span class="line"><span style="color: #F8F8F2">    runtimeChunk: </span><span style="color: #E6DB74">&#39;single&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    usedExports: </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    minimizer:[</span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">CssMinimizerPlugin</span><span style="color: #F8F8F2">()],</span></span>
<span class="line"><span style="color: #F8F8F2">    splitChunks: {</span></span>
<span class="line"><span style="color: #F8F8F2">      cacheGroups: {</span></span>
<span class="line"><span style="color: #F8F8F2">        vendor: {</span></span>
<span class="line"><span style="color: #F8F8F2">          test:</span><span style="color: #E6DB74"> /</span><span style="color: #AE81FF">[\\/]</span><span style="color: #E6DB74">node_modules</span><span style="color: #AE81FF">[\\/]</span><span style="color: #E6DB74">/</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">          name: </span><span style="color: #E6DB74">&#39;vendors&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">          chunks: </span><span style="color: #E6DB74">&#39;all&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// package.json</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;scripts&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&quot;serve&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #E6DB74">&quot;webpack serve --config webpack.development.js&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&quot;build&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #E6DB74">&quot;webpack --config webpack.production.js&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
