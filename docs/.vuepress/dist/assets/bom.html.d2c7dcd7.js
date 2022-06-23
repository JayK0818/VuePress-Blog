import{_ as o,r as s,o as p,c,a as n,w as i,b as a}from"./app.02e89851.js";const t={},r=a(`<h1 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h1><p>\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B(Browser Object Model)\u3002</p><h2 id="window\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#window\u5BF9\u8C61" aria-hidden="true">#</a> window\u5BF9\u8C61</h2><p>\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301window\u5BF9\u8C61\u3002\u5B83\u8868\u793A\u6D4F\u89C8\u5668\u7A97\u53E3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">window.innerWidth </span><span style="color:#88846F;">// \u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5185\u90E8\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#F8F8F2;">window.innerHeight </span><span style="color:#88846F;">// \u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5185\u90E8\u9AD8\u5EA6</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8EIE 8 7 6 5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">document.documentElement.clientWidth</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#F8F8F2;">document.body.clientWidth </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> document.body.clientHeight</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6253\u5F00\u4E00\u4E2A\u5F39\u7A97" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u4E00\u4E2A\u5F39\u7A97" aria-hidden="true">#</a> \u6253\u5F00\u4E00\u4E2A\u5F39\u7A97</h3><p>\u7ECF\u5E38\u4F1A\u6709\u5728\u5F53\u524D\u9875\u9762\u6253\u5F00\u5F39\u7A97\u67E5\u770B\u67D0\u4E9B\u4FE1\u606F\u7684\u9700\u6C42\u3002 \u6709\u65F6\uFF0C\u5728\u6253\u5F00\u5F39\u7A97\u7684\u60C5\u51B5\u4E0B, \u9875\u9762\u5185\u5BB9\u4F9D\u7136\u53EF\u4EE5\u6EDA\u52A8,\u8FD9\u65F6\u9700\u8981\u505A\u4E00\u4E2A\u5224\u65AD, \u5728\u6709\u6EDA\u52A8\u6761\u7684\u65F6\u5019\u9690\u85CF\u6EDA\u52A8\u6761,\u5E76\u4E14\u9632\u6B62\u9690\u85CF\u6EDA\u52A8\u6761\u65F6\u9875\u9762\u5185\u5BB9\u6296\u52A8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// --------- \u5224\u65AD\u9875\u9762\u662F\u5426\u6709\u6EDA\u52A8\u6761 -------</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">hasScrollbar</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">  document.body.scrollHeight </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> (</span></span>
<span class="line"><span style="color:#F8F8F2;">    window.innerHeight </span><span style="color:#F92672;">||</span><span style="color:#F8F8F2;"> document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#F8F8F2;">  )</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// --------\u83B7\u53D6\u6EDA\u52A8\u6761\u7684\u5BBD\u5EA6 --------</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">getScrollBarWidth</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> div </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;div&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  div.style.cssText </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;position:absolute;top:-9999px;&#39;</span><span style="color:#F92672;">+</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&#39;width:100px;height:100px;overflow:scroll;&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  document.body.</span><span style="color:#A6E22E;">appendChild</span><span style="color:#F8F8F2;">(div)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> scrollBarWidth </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> div.offsetWidth </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> div.clientWidth;</span></span>
<span class="line"><span style="color:#F8F8F2;">  document.body.</span><span style="color:#A6E22E;">removeChild</span><span style="color:#F8F8F2;">(div)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> scrollBarWidth;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),F=a(`<h3 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h3><p>\u901A\u8FC7var\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF\u4E0D\u80FD\u901A\u8FC7delete\u64CD\u4F5C\u7B26\u5220\u9664,\u800Cwindow\u5C5E\u6027\u4E0A\u5B9A\u4E49\u7684\u53D8\u91CF\u53EF\u4EE5\u5220\u9664\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> firstName </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">window.lastName </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;irving&#39;</span></span>
<span class="line"><span style="color:#F92672;">delete</span><span style="color:#F8F8F2;"> firstName;</span></span>
<span class="line"><span style="color:#F92672;">delete</span><span style="color:#F8F8F2;"> lastName;</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(firstName, window.lastName)  </span><span style="color:#88846F;">// kyrie undefined</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u901A\u8FC7Object.getOwnPropertyDescriptor()\u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u6807\u8BC6\u7B26\u3002\u901A\u8FC7var\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF \u7684\u914D\u7F6Econfigure\u4E3Afalse,\u800C\u624B\u52A8\u5728window\u4E0A\u6DFB\u52A0\u7684\u5C5E\u6027configure\u4E3Atrue.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">Object</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">getOwnPropertyDescriptor</span><span style="color:#F8F8F2;">(window,</span><span style="color:#E6DB74;">&#39;firstName&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">configurable: false</span></span>
<span class="line"><span style="color:#88846F;">enumerable: true</span></span>
<span class="line"><span style="color:#88846F;">value: &quot;kyrie&quot;</span></span>
<span class="line"><span style="color:#88846F;">writable: true</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">Object</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">getOwnPropertyDescriptor</span><span style="color:#F8F8F2;">(window,</span><span style="color:#E6DB74;">&#39;lastName&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">configurable: true</span></span>
<span class="line"><span style="color:#88846F;">enumerable: true</span></span>
<span class="line"><span style="color:#88846F;">value: &quot;irving&quot;</span></span>
<span class="line"><span style="color:#88846F;">writable: true</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> Location</h3><p>window.location \u5BF9\u8C61\u7528\u4E8E\u83B7\u5F97\u5F53\u524D\u9875\u9762\u7684\u5730\u5740 (URL) Location\u5BF9\u8C61\u7684href\u5C5E\u6027\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32,\u5305\u542BURL\u7684\u5B8C\u6574\u6587\u672C\u3002Location\u5BF9\u8C61\u7684toString()\u65B9\u6CD5\u8FD4\u56DEhref\u7684\u5C5E\u6027\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">parseUrl</span><span style="color:#F8F8F2;">(){</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> args </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {}</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> query </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> window.location.search.</span><span style="color:#A6E22E;">substring</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> paris </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> query.</span><span style="color:#A6E22E;">split</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;&amp;&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> paris.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">){</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> pos </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> paris[i].</span><span style="color:#A6E22E;">indexOf</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;=&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(pos </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">continue</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> name </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> paris.</span><span style="color:#A6E22E;">substring</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,pos);</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> value </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> paris.</span><span style="color:#A6E22E;">substring</span><span style="color:#F8F8F2;">(pos</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    args[name] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">decodeURIComponent</span><span style="color:#F8F8F2;">(value)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> args</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668" aria-hidden="true">#</a> \u5B9A\u65F6\u5668</h2><p>window.setTimeout() \u5B9A\u65F6\u5668\u5230\u671F\u540E\u6267\u884C\u4E00\u4E2A\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> timeoutID </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> scope.</span><span style="color:#A6E22E;">setTimeout</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">[, </span><span style="color:#A6E22E;">delay</span><span style="color:#F8F8F2;">, </span><span style="color:#A6E22E;">arg1</span><span style="color:#F8F8F2;">, </span><span style="color:#A6E22E;">arg2</span><span style="color:#F8F8F2;">, ...]);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u503CtimeoutID\u662F\u4E00\u4E2A\u6B63\u6574\u6570,\u8868\u793A\u5B9A\u65F6\u5668\u7684\u7F16\u53F7\u3002 \u8FD9\u4E2A\u503C\u53EF\u4EE5\u4F20\u9012\u7ED9clearTimeout()\u6765\u53D6\u6D88\u5B9A\u65F6\u5668\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>setTimeout()\u548CsetInterval()\u5171\u7528\u4E00\u4E2A\u7F16\u53F7\u6C60, \u6280\u672F\u4E0A,clearTimeout()\u548CclearInterval()\u53EF\u4EE5\u4E92\u6362, \u4F46\u662F\u4E3A\u4E86\u907F\u514D\u6DF7\u6DC6, \u4E0D\u8981\u6DF7\u7528\u53D6\u6D88\u5B9A\u65F6\u51FD\u6570\u3002</p></div>`,13);function d(y,v){const l=s("JavaScript-ModalButton"),e=s("ClientOnly");return p(),c("div",null,[r,n(e,null,{default:i(()=>[n(l)]),_:1}),F])}var m=o(t,[["render",d],["__file","bom.html.vue"]]);export{m as default};
