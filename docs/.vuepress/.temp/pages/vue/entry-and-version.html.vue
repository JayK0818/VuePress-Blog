<template><h1 id="vue构建版本和打包入口" tabindex="-1"><a class="header-anchor" href="#vue构建版本和打包入口" aria-hidden="true">#</a> Vue构建版本和打包入口</h1>
<h2 id="vue不同构建版本" tabindex="-1"><a class="header-anchor" href="#vue不同构建版本" aria-hidden="true">#</a> Vue不同构建版本</h2>
<p>将vue.js源码clone到本地执行 npm run build 打包时, 会生成不同构建版本到vue.js文件,比如vue.common.dev.js,
vue.esm.js 和 vue.runtime.js。 在vue.js官网上介绍了不同构建版本的区别</p>
<p><a href="https://cn.vuejs.org/v2/guide/installation.html" target="_blank" rel="noopener noreferrer">Vue.js构建版本<ExternalLinkIcon/></a></p>
<p>完整版: 同时包含编译器和运行时的版本
编辑器: 用来将模版字符串编译成为JavaScript渲染函数的代码
运行时: 用来创建Vue实例,渲染并处理虚拟DOM等代码。</p>
<p>下面的代码 分别在分别引入 完整版和运行版本时的差别:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 引入vue.runtime.js 版本</span></span>
<span class="line"><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Vue</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  el:</span><span style="color: #E6DB74">&#39;#app&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  template:</span><span style="color: #E6DB74">`&lt;h1&gt;{{msg}}&lt;/h1&gt;`</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">data</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      msg: </span><span style="color: #E6DB74">&#39;hello world&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">You are using the runtime-only build of Vue where the template compiler is not</span></span>
<span class="line"><span style="color: #88846F">available. Either pre-compile the templates into render functions, or use the </span></span>
<span class="line"><span style="color: #88846F">compiler-included build.</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">上面的代码运行时会报错, 因为使用的运行时版本的vue,没办法把template模版字符串编译为</span></span>
<span class="line"><span style="color: #88846F">JavaScript渲染函数代码,此时在不修改引入vue为完整版文件时,可以删除template选项,</span></span>
<span class="line"><span style="color: #88846F">直接使用render渲染函数。 </span></span>
<span class="line"><span style="color: #88846F">*/</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Vue</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  el:</span><span style="color: #E6DB74">&#39;#app&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">render</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">h</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">h</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;div&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.msg)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">data</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      msg: </span><span style="color: #E6DB74">&#39;hello world&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用 vue-loader 时，*.vue 文件中的模板会在构建时预编译为 JavaScript，在最终的捆绑包中并不需要编译器，因此可以只使用
运行时构建版本。</p>
<h2 id="打包入口" tabindex="-1"><a class="header-anchor" href="#打包入口" aria-hidden="true">#</a> 打包入口</h2>
<p>要想知道vue.js生成不同版本是怎么构建的,需要查看执行每条命令执行的是什么逻辑。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// package.json </span></span>
<span class="line"><span style="color: #E6DB74">&quot;scripts&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;dev&quot;</span><span style="color: #F8F8F2">:</span><span style="color: #E6DB74">&quot;rollup -w -c scripts/config.js --environment TARGET:web-full-dev&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;dev:cjs&quot;</span><span style="color: #F8F8F2">:</span><span style="color: #E6DB74">&quot;rollup -w -c scripts/config.js --environment TARGET:web-runtime-cjs-dev&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;dev:esm&quot;</span><span style="color: #F8F8F2">:</span><span style="color: #E6DB74">&quot;rollup -w -c scripts/config.js --environment TARGET:web-runtime-esm&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #88846F">//...</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的命令可以看到它的配置文件都在文件scripts的config.js文件下。 以npm run dev 这条命令为例,
找到scripts文件夹下的config.js文件, 在 末尾 导出了一个 对象,此时导出的对象就是打包时的配置。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">//下面的分析 都以 npm run dev 命令为例:</span></span>
<span class="line"><span style="color: #88846F">//scripts/config.js</span></span>
<span class="line"><span style="color: #88846F">//判断是否设置了打包时的参数 TARGET, 如果有的话,将参数传入genConfig,生成打包时的配置对象。</span></span>
<span class="line"><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (process.env.TARGET) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">genConfig</span><span style="color: #F8F8F2">(process.env.TARGET)</span></span>
<span class="line"><span style="color: #F8F8F2">} </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 此处代码先忽略...</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// genConfig 函数</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">genConfig</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">name</span><span style="color: #F8F8F2">) { </span><span style="color: #88846F">// 解析target,此时name为 web-full-dev</span></span>
<span class="line"><span style="color: #88846F">// 这里又使用了builds 对象,查看builds对象 </span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> opts </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> builds[name] </span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> config </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    input: opts.entry,</span></span>
<span class="line"><span style="color: #F8F8F2">    external: opts.external,</span></span>
<span class="line"><span style="color: #F8F8F2">    output: {</span></span>
<span class="line"><span style="color: #F8F8F2">      file: opts.dest,</span></span>
<span class="line"><span style="color: #F8F8F2">      format: opts.format,</span></span>
<span class="line"><span style="color: #F8F8F2">      banner: opts.banner,</span></span>
<span class="line"><span style="color: #F8F8F2">      name: opts.moduleName </span><span style="color: #F92672">||</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;Vue&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">/* builds为一个对象, 键名为传递的TARGET,键值为构建该版本的vue时所对应的配置对象*/</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> builds </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// Runtime+compiler development build (Browser)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&#39;web-full-dev&#39;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// 此处就是 打包时的入口文件,(参数格式为文件夹名/文件名)接着往下走...</span></span>
<span class="line"><span style="color: #F8F8F2">    entry: </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;web/entry-runtime-with-compiler.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    dest: </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;dist/vue.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    format: </span><span style="color: #E6DB74">&#39;umd&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    env: </span><span style="color: #E6DB74">&#39;development&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    alias: { he: </span><span style="color: #E6DB74">&#39;./entity-decoder&#39;</span><span style="color: #F8F8F2"> },</span></span>
<span class="line"><span style="color: #F8F8F2">    banner</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// Weex runtime framework (CommonJS).</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&#39;weex-framework&#39;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">    weex: </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    entry: </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;weex/entry-framework.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    dest: </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;packages/weex-vue-framework/index.js&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">    format: </span><span style="color: #E6DB74">&#39;cjs&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">/*再来分析 &#39;web-full-dev&#39;的入口文件, 使用了一个 封装的resolve()函数,传递的参数为 </span></span>
<span class="line"><span style="color: #88846F">web/entry-runtime-with-compiler.js*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// resolve(&#39;web/entry-runtime-with-compiler.js&#39;) 查看resolve函数</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F; font-style: italic">p</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 此时p 为web/entry-runtime-with-compiler.js, base为web,也就是文件夹名</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> base </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> p.</span><span style="color: #A6E22E">split</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/&#39;</span><span style="color: #F8F8F2">)[</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">  此时又用到了 aliases对象, 它是外部引入的一个文件, 在分析了下面的aliases.js文件后,</span></span>
<span class="line"><span style="color: #88846F">  aliases[base]有值,并且值为一个文件夹的绝对路径, 再拼接上文件路径</span></span>
<span class="line"><span style="color: #88846F">  截取完整字符串后的一段,(p.slice(base.length+1))</span></span>
<span class="line"><span style="color: #88846F">  就是打包的入口文件。</span></span>
<span class="line"><span style="color: #88846F">  */</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (aliases[base]) { </span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(aliases[base], p.</span><span style="color: #A6E22E">slice</span><span style="color: #F8F8F2">(base.length </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">))</span></span>
<span class="line"><span style="color: #F8F8F2">  } </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// dist/vue.js 在alias配置中没有找到别名,</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(__dirname)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;../&#39;</span><span style="color: #F8F8F2">, p)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// aliases.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F; font-style: italic">p</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> path.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(__dirname, </span><span style="color: #E6DB74">&#39;../&#39;</span><span style="color: #F8F8F2">, p)  </span><span style="color: #88846F">// 根目录</span></span>
<span class="line"><span style="color: #88846F">// 实际上该文件的作用就是为web weex配置一个别名,</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  vue: </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;src/platforms/web/entry-runtime-with-compiler&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">  compiler: </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;src/compiler&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">  web: </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;src/platforms/web&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">  weex: </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;src/platforms/weex&#39;</span><span style="color: #F8F8F2">),</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="entryruntime-with-compiler" tabindex="-1"><a class="header-anchor" href="#entryruntime-with-compiler" aria-hidden="true">#</a> EntryRuntime with Compiler</h2>
<p>在阅读在该文件下的代码前,先提一个问题,如果在引入了包含编译器和运行时版本的vue.js文件时,在new Vue()的时候
同时提供了render函数和template选项,Vue会怎么渲染呢?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// demo</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> instance </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Vue</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  el:</span><span style="color: #E6DB74">&#39;#app&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  template:</span><span style="color: #E6DB74">`&lt;div&gt;我是template&lt;/div&gt;`</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">render</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">h</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">h</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;div&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;我是render函数&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #88846F">// answer: 会忽略template选项,渲染render函数返回的内容。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// platforms/web/entry-runtime-with-compiler.js</span></span>
<span class="line"><span style="color: #88846F">// 相比entry-runtime.js, 重新改写了$mount方法.</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">如果是选择器, 则找到选择器对应的dom元素返回, 如果不是选择器,直接返回该dom元素</span></span>
<span class="line"><span style="color: #88846F">在开发环境下没有找到对应的选择器,会报错,在生成环境下会返回一个div.</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> Vue </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./runtime/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">query</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">el</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">|</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Element</span><span style="color: #F8F8F2">)</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Element</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #F92672">typeof</span><span style="color: #F8F8F2"> el </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;string&#39;</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> selected </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(el)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #F92672">!</span><span style="color: #F8F8F2">selected) {</span></span>
<span class="line"><span style="color: #F8F8F2">      process.env.NODE_ENV </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;production&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">warn</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #E6DB74">&#39;Cannot find element: &#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> el</span></span>
<span class="line"><span style="color: #F8F8F2">      )</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;div&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> selected</span></span>
<span class="line"><span style="color: #F8F8F2">  } </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> el</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">// $mount方法将vue挂载到dom元素,el可以是一个选择器或者 dom 元素 </span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> mount </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Vue</span><span style="color: #F8F8F2">.prototype.$mount;</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">Vue</span><span style="color: #F8F8F2">.prototype.</span><span style="color: #A6E22E">$mount</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">el</span><span style="color: #F92672">?:</span><span style="color: #66D9EF; font-style: italic">string</span><span style="color: #F92672">|</span><span style="color: #A6E22E; text-decoration: underline">Element</span><span style="color: #F8F8F2">,</span><span style="color: #FD971F; font-style: italic">hydrating</span><span style="color: #F92672">?:</span><span style="color: #66D9EF; font-style: italic">boolean</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">  el </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> el </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">query</span><span style="color: #F8F8F2">(el)  </span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/*获取到dom节点后,判断是否挂载的元素为 body 或者 html,禁止挂载到 </span></span>
<span class="line"><span style="color: #88846F">  body 或者 html元素上*/</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (el </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> document.body </span><span style="color: #F92672">||</span><span style="color: #F8F8F2"> el </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> document.documentElement) {</span></span>
<span class="line"><span style="color: #F8F8F2">    process.env.NODE_ENV </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;production&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">warn</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">`Do not mount Vue to &lt;html&gt; or &lt;body&gt; - mount to normal elements instead`</span></span>
<span class="line"><span style="color: #F8F8F2">    )</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> options </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.$options</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #F92672">!</span><span style="color: #F8F8F2">options.render) {  </span><span style="color: #88846F">// 在没有传入render函数时,才会使用template选项</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> template </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> options.template</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (template) {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// ...</span></span>
<span class="line"><span style="color: #F8F8F2">    } </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (el) {</span></span>
<span class="line"><span style="color: #F8F8F2">      template </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">getOuterHTML</span><span style="color: #F8F8F2">(el)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> mount.</span><span style="color: #A6E22E">call</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">, el, hydrating)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// platforms/web/entry-runtime.js</span></span>
<span class="line"><span style="color: #88846F">// 没有编译器的版本</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> Vue </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./runtime/index&#39;</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> Vue</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
