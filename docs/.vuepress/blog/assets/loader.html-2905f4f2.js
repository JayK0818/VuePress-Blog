import{_ as s}from"./framework-c27b6911.js";import{o as n,c as a,b as l}from"./app-ec006255.js";const e={},p=l(`<h1 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h1><h2 id="babel-loader" tabindex="-1"><a class="header-anchor" href="#babel-loader" aria-hidden="true">#</a> babel-loader</h2><p>此loader 允许你使用 Babel 和 webpack 转译JavaScript文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// install</span></span>
<span class="line"><span style="color:#F8F8F2;">npm install </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">D babel</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">loader @babel</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">core @babel</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">preset</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// webpack.config.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  module: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">m</span><span style="color:#F92672;">?</span><span style="color:#E6DB74;">js</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        exclude:</span><span style="color:#E6DB74;"> /(node_modules)/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        use: {</span></span>
<span class="line"><span style="color:#F8F8F2;">          loader: </span><span style="color:#E6DB74;">&#39;babel-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">            presets: [</span><span style="color:#E6DB74;">&#39;@babel/preset-env&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">          }</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// math.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">square</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">x</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">pow</span><span style="color:#F8F8F2;">(x, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">cube</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">x</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">pow</span><span style="color:#F8F8F2;">(x, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Player</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">constructor</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">name</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.name </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> name;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">add</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">x</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">cube</span><span style="color:#F8F8F2;">(x)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">export</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  square,</span></span>
<span class="line"><span style="color:#F8F8F2;">  cube,</span></span>
<span class="line"><span style="color:#F8F8F2;">  Player</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 上面三个方法经过babel转译后，变成了下面的代码</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">square</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">square</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">x</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">pow</span><span style="color:#F8F8F2;">(x, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">cube</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">cube</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">x</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">pow</span><span style="color:#F8F8F2;">(x, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> Player </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;">/*#__PURE__*/</span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Player</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">name</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">_classCallCheck</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">, Player);</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.name </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> name;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">_createClass</span><span style="color:#F8F8F2;">(Player, [{</span></span>
<span class="line"><span style="color:#F8F8F2;">    key: </span><span style="color:#E6DB74;">&quot;add&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">value</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">add</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">x</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">cube</span><span style="color:#F8F8F2;">(x);</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }]);</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> Player;</span></span>
<span class="line"><span style="color:#F8F8F2;">}();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="style-loader" tabindex="-1"><a class="header-anchor" href="#style-loader" aria-hidden="true">#</a> style-loader</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// injectType: allows to setup how styles will be injected into the DOM</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">default: styleTag</span></span>
<span class="line"><span style="color:#88846F;">singletonStyleTag: Automatically injects styles into the DOM using one &lt;style&gt;</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// lazyStyleTag:</span></span>
<span class="line"><span style="color:#88846F;">// injects styles into the DOM using multiple &lt;style&gt;&lt;/style&gt; on demand.</span></span>
<span class="line"><span style="color:#88846F;">// webpack.config.js</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// ...</span></span>
<span class="line"><span style="color:#F8F8F2;">  module: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        exclude:</span><span style="color:#E6DB74;">/</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">lazy</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        use:[</span><span style="color:#E6DB74;">&#39;style-loader&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&#39;css-loader&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">lazy</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        use:[</span></span>
<span class="line"><span style="color:#F8F8F2;">          {</span></span>
<span class="line"><span style="color:#F8F8F2;">            loader: </span><span style="color:#E6DB74;">&#39;style-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">              injectType: </span><span style="color:#E6DB74;">&#39;lazyStyleTag&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">            }</span></span>
<span class="line"><span style="color:#F8F8F2;">          },</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#E6DB74;">&#39;css-loader&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">        ]</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>attributes: the style-loader will attach given attributes with their values on style element.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// ... </span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  use: [{</span></span>
<span class="line"><span style="color:#F8F8F2;">    loader: </span><span style="color:#E6DB74;">&#39;style-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      attributes: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        id: </span><span style="color:#AE81FF;">123</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }, </span><span style="color:#E6DB74;">&#39;css-loader&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>insert: default: head 指定style标签插入的位置.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// webpack.config.js</span></span>
<span class="line"><span style="color:#88846F;">// ...</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  use:[{</span></span>
<span class="line"><span style="color:#F8F8F2;">    loader:</span><span style="color:#E6DB74;">&#39;style-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      insert: </span><span style="color:#E6DB74;">&#39;body&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span><span style="color:#E6DB74;">&#39;css-loader&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Source maps</p><p>The loader automatically inject source maps when previous loader emit them. Therefore,to generate source maps, set the sourceMap option to true for the previous loader</p></li></ul><h2 id="css-loader" tabindex="-1"><a class="header-anchor" href="#css-loader" aria-hidden="true">#</a> css-loader</h2><p>The css-loader interprets @import and url() and will resolve them.</p><h3 id="url-boolean-object" tabindex="-1"><a class="header-anchor" href="#url-boolean-object" aria-hidden="true">#</a> url: Boolean / Object</h3><p>Enable/disable url() resolving</p><h3 id="import-boolean-object" tabindex="-1"><a class="header-anchor" href="#import-boolean-object" aria-hidden="true">#</a> import: Boolean / Object</h3><p>allows to enables/disables @import at-rules handing.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// webpack.config.js</span></span>
<span class="line"><span style="color:#88846F;">// ...</span></span>
<span class="line"><span style="color:#F8F8F2;">rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F92672;">i</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    loader: </span><span style="color:#E6DB74;">&quot;css-loader&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      url: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// boolean  设置为false 无法解析背景图片url地址 (本地资源路径)</span></span>
<span class="line"><span style="color:#F8F8F2;">      url: { </span><span style="color:#88846F;">// object</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#A6E22E;">filter</span><span style="color:#F8F8F2;">: (</span><span style="color:#FD971F;font-style:italic;">url</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">resourcePath</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(url.</span><span style="color:#A6E22E;">includes</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;webp&#39;</span><span style="color:#F8F8F2;">)) { </span><span style="color:#88846F;">// 不会处理webp文件 （本地资源路径）</span></span>
<span class="line"><span style="color:#F8F8F2;">            </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">          }</span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">            </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">          }</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      import: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// default: false</span></span>
<span class="line"><span style="color:#F8F8F2;">      import: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#A6E22E;">filter</span><span style="color:#F8F8F2;">: (</span><span style="color:#FD971F;font-style:italic;">url</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">media</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">resourcePath</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(url.</span><span style="color:#A6E22E;">includes</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;style.css&#39;</span><span style="color:#F8F8F2;">)) {</span></span>
<span class="line"><span style="color:#F8F8F2;">            </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">          }</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>import设置为false时, 浏览器会报警告。</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Refused to apply style from &#39;http://localhost:9008/index.css&#39; because its MIME type (&#39;text/html&#39;) is not a supported stylesheet MIME type, and strict MIME checking is enabled.</p></div><h3 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> modules</h3><p>Allows to enable/disable CSS Modules</p><p>default: undefined</p><ol><li><p>undefined: enable CSS modules for all files matching /.module.\\w+$/i.test(filename)</p></li><li><p>true: enable CSS modules for all files</p></li><li><p>false: disable CSS modules for all files</p></li><li><p>string: disables CSS modules for all files and set the mode option.</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// index.js  入口</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;./css/index.module.css&#39;</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;./css/index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// webpack.config.js</span></span>
<span class="line"><span style="color:#88846F;">// ...</span></span>
<span class="line"><span style="color:#F8F8F2;">module: {</span></span>
<span class="line"><span style="color:#F8F8F2;">  rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">    {</span></span>
<span class="line"><span style="color:#F8F8F2;">      test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      use: [</span><span style="color:#E6DB74;">&#39;style-loader&#39;</span><span style="color:#F8F8F2;">,{</span></span>
<span class="line"><span style="color:#F8F8F2;">        loader: </span><span style="color:#E6DB74;">&#39;css-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">          modules: </span><span style="color:#AE81FF;">undefined</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// defualt</span></span>
<span class="line"><span style="color:#F8F8F2;">          modules: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          modules: {</span></span>
<span class="line"><span style="color:#F8F8F2;">            auto: </span><span style="color:#AE81FF;">undefined</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">//enable CSS modules for all files</span></span>
<span class="line"><span style="color:#F8F8F2;">            auto: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// 匹配 module.css的文件</span></span>
<span class="line"><span style="color:#F8F8F2;">            auto: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// disable CSS modules</span></span>
<span class="line"><span style="color:#F8F8F2;">            auto:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">module</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css/</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// enable CSS modules for all files matching </span></span>
<span class="line"><span style="color:#F8F8F2;">            </span><span style="color:#A6E22E;">auto</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">resourcePath</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">              </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(resourcePath.</span><span style="color:#A6E22E;">includes</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;index&#39;</span><span style="color:#F8F8F2;">)) { </span><span style="color:#88846F;">// 过滤掉所有文件名包含index的文件</span></span>
<span class="line"><span style="color:#F8F8F2;">                </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">              }</span></span>
<span class="line"><span style="color:#F8F8F2;">              </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">            },</span></span>
<span class="line"><span style="color:#F8F8F2;">          }</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }]</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  ]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> mode</h3><p>CSS modules 允许使用:global(.className)的语法, 声明一个全局规则。凡是这样声明的class, 都不会被编译成哈希字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// webpack.config.js</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  use:[</span><span style="color:#E6DB74;">&#39;style-loader&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">    loader: </span><span style="color:#E6DB74;">&#39;css-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// Using \`local\` value has same effect like using &#39;modules:true&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// 所有文件类名都不会被编译为哈希字符串 使用:local 的css 会会编译为 哈希类名</span></span>
<span class="line"><span style="color:#F8F8F2;">      modules: </span><span style="color:#E6DB74;">&#39;global&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      modules: </span><span style="color:#E6DB74;">&#39;local&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;">// 所有文件类名都会被编译为哈希字符串 但是使用:global 的 css 除外</span></span>
<span class="line"><span style="color:#F8F8F2;">      modules: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        localIdentName: </span><span style="color:#E6DB74;">&#39;[hash:base64:8]&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">//hash class 生成的规则</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// name: 文件名</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// folder 文件夹名称</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// path 文件夹的相对路径</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// file filename and path</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// hash hash字符串</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// local : original class 转换前的类名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// Allows to redefine basic loader context for local ident name</span></span>
<span class="line"><span style="color:#F8F8F2;">        localIdentContext: path.</span><span style="color:#A6E22E;">resolve</span><span style="color:#F8F8F2;">(__dirname, </span><span style="color:#E6DB74;">&#39;src/css&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// Allows to specify hash function to generate classes. </span></span>
<span class="line"><span style="color:#F8F8F2;">        localIdentHashFunction: </span><span style="color:#E6DB74;">&#39;md4&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// Allows to specify hash digest length to generate class</span></span>
<span class="line"><span style="color:#F8F8F2;">        localIdentHashDigestLength: </span><span style="color:#AE81FF;">28</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        hashStrategy: </span><span style="color:#E6DB74;">&#39;resource-path-and-local-name&#39;</span><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 生成has的策略</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }]</span></span>
<span class="line"><span style="color:#F8F8F2;">  }]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="importloaders" tabindex="-1"><a class="header-anchor" href="#importloaders" aria-hidden="true">#</a> importLoaders</h3><p>The options importLoaders allows you to configure how many loaders before css-loader shoule be applied to @import ed resources and CSS modules imports</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// webpack.config.js</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  module: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        use:[</span><span style="color:#E6DB74;">&#39;style-loader&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">          loader: </span><span style="color:#E6DB74;">&#39;css-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">            importLoaders: </span><span style="color:#AE81FF;">2</span></span>
<span class="line"><span style="color:#F8F8F2;">            </span><span style="color:#88846F;">// 0 =&gt; no loaders (default);</span></span>
<span class="line"><span style="color:#F8F8F2;">            </span><span style="color:#88846F;">// 1 =&gt; postcss-loader;</span></span>
<span class="line"><span style="color:#F8F8F2;">            </span><span style="color:#88846F;">// 2 =&gt; postcss-loader, sass-loader</span></span>
<span class="line"><span style="color:#F8F8F2;">          }</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span><span style="color:#E6DB74;">&#39;postcss-loader&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;sass-loader&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sass-loader" tabindex="-1"><a class="header-anchor" href="#sass-loader" aria-hidden="true">#</a> sass-loader</h3><p>加载sass/scss文件并编译为css.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// install</span></span>
<span class="line"><span style="color:#F8F8F2;">npm install sass</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">loader sass </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">save</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  module: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">(scss</span><span style="color:#F92672;">|</span><span style="color:#E6DB74;">css)</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F92672;">i</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        use: [</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#E6DB74;">&#39;style-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#E6DB74;">&#39;css-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#88846F;">// 将 Sass 编译成 CSS</span></span>
<span class="line"><span style="color:#F8F8F2;">          {</span></span>
<span class="line"><span style="color:#F8F8F2;">            loader: </span><span style="color:#E6DB74;">&#39;sass-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">              sourceMap: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// enable/disable source map</span></span>
<span class="line"><span style="color:#F8F8F2;">              sassOptions: {</span></span>
<span class="line"><span style="color:#F8F8F2;">                indentWidth: </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 空格数量</span></span>
<span class="line"><span style="color:#F8F8F2;">              }</span></span>
<span class="line"><span style="color:#F8F8F2;">            }</span></span>
<span class="line"><span style="color:#F8F8F2;">          }</span></span>
<span class="line"><span style="color:#F8F8F2;">        ]</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[p];function c(i,F){return n(),a("div",null,o)}const d=s(e,[["render",c],["__file","loader.html.vue"]]);export{d as default};
