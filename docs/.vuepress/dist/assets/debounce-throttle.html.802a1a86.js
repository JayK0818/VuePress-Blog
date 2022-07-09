import{_ as t,r as n,o as c,c as r,a as s,w as a,e}from"./app.084d5aed.js";const i={},y=e(`<h1 id="\u51FD\u6570\u9632\u6296\u4E0E\u51FD\u6570\u622A\u6D41" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u9632\u6296\u4E0E\u51FD\u6570\u622A\u6D41" aria-hidden="true">#</a> \u51FD\u6570\u9632\u6296\u4E0E\u51FD\u6570\u622A\u6D41</h1><h2 id="debounce" tabindex="-1"><a class="header-anchor" href="#debounce" aria-hidden="true">#</a> Debounce</h2><p>\u5F53\u6301\u7EED\u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u4E00\u5B9A\u65F6\u95F4\u6BB5\u5185\u6CA1\u6709\u518D\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u624D\u4F1A\u6267\u884C\u4E00\u6B21</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// \u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u9632\u6296 debounce</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">debounce</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">fun</span><span style="color:#F8F8F2;">,</span><span style="color:#FD971F;font-style:italic;">interval</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">300</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> timer </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">null</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(timer) </span><span style="color:#66D9EF;">clearTimeout</span><span style="color:#F8F8F2;">(timer)</span></span>
<span class="line"><span style="color:#F8F8F2;">    timer </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">setTimeout</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      fun.</span><span style="color:#A6E22E;">apply</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">,</span><span style="color:#FD971F;">arguments</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">    },interval)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// \u5728react\u4E2D \u5F53\u641C\u7D22\u6846\u8F93\u5165\u5B57\u7B26\u8FDB\u884C\u641C\u7D22\u6570\u636E\u65F6\u4F7F\u7528\u51FD\u6570\u9632\u6296\u63A7\u5236\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> React </span><span style="color:#F92672;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;react&#39;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">App</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">extends</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">React</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;font-style:italic;text-decoration:underline;">Component</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">constructor</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">props</span><span style="color:#F8F8F2;">){</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">super</span><span style="color:#F8F8F2;">(props)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.state </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      result:[]</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.handleInputDebounce </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">debounce</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.handleInput,</span><span style="color:#AE81FF;">3000</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">handleInput</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">event</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> keyword </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> event.target.value.</span><span style="color:#A6E22E;">trim</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">keyword) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">fetch</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;/api/xxxx&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> res.</span><span style="color:#A6E22E;">json</span><span style="color:#F8F8F2;">())</span></span>
<span class="line"><span style="color:#F8F8F2;">      .</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">setState</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">          result:res</span></span>
<span class="line"><span style="color:#F8F8F2;">        })</span></span>
<span class="line"><span style="color:#F8F8F2;">      })</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">render</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> (</span></span>
<span class="line"><span style="color:#F8F8F2;">      &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">input</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">type</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;text&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">onChange</span><span style="color:#F92672;">={</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.handleInputDebounce</span><span style="color:#F92672;">}</span><span style="color:#F8F8F2;">/&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">      &lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    )</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762input\u6846\u8BBE\u7F6E\u7684\u9632\u6296\u95F4\u9694\u4E3A500ms, \u6700\u540E\u4E00\u6B21\u8F93\u5165\u7ED3\u675F\u540E500ms, input\u6846\u7684\u5185\u5BB9\u4F1A\u663E\u793A\u5728\u4E0B\u65B9\u3002</p>`,6),d=e(`<h2 id="throttle" tabindex="-1"><a class="header-anchor" href="#throttle" aria-hidden="true">#</a> Throttle</h2><p>\u51FD\u6570\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u5185\u6267\u884C \u5BF9\u4E8E\u51FD\u6570\u8282\u6D41,\u540C\u6837\u5B9E\u73B0\u4E00\u4E2A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// \u7B2C\u4E00\u6B21\u89E6\u53D1\u7684\u65F6\u5019\u9A6C\u4E0A\u6267\u884C</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">throttle_immediate</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">fn</span><span style="color:#F8F8F2;">,</span><span style="color:#FD971F;font-style:italic;">delay</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">500</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> prevTime </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">Date</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">now</span><span style="color:#F8F8F2;">() </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> prevTime </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> delay) </span><span style="color:#F92672;">return</span></span>
<span class="line"><span style="color:#F8F8F2;">    fn.</span><span style="color:#A6E22E;">apply</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;">arguments</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    prevTime </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">Date</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">now</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// \u76D1\u542C\u7A97\u53E3\u6539\u53D8\u65F6 \u663E\u793A\u5F53\u524D\u7A97\u53E3\u5C3A\u5BF8\u5927\u5C0F</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> {React} </span><span style="color:#F92672;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;react&#39;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">App</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">extends</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;font-style:italic;text-decoration:underline;">Component</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">constructor</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">props</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">super</span><span style="color:#F8F8F2;">(props)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.state </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      width: document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#F8F8F2;">      height: document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.onResizeThrottle </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">throttle_immediate</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.onResize,</span><span style="color:#AE81FF;">500</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">componentDidMount</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    window.</span><span style="color:#A6E22E;">addEventListener</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;resize&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.onResizeThrottle,</span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">componentWillUnmount</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    window.</span><span style="color:#A6E22E;">removeEventListener</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;resize&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.onResizeThrottle,</span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">onResize</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> width </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#F8F8F2;">        height </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">setState</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">      width,</span></span>
<span class="line"><span style="color:#F8F8F2;">      height</span></span>
<span class="line"><span style="color:#F8F8F2;">    })</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">render</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> {width, height} </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.state;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> (</span></span>
<span class="line"><span style="color:#F8F8F2;">      &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span><span style="color:#F92672;">{</span><span style="color:#F8F8F2;">width</span><span style="color:#F92672;">}</span><span style="color:#F8F8F2;"> X </span><span style="color:#F92672;">{</span><span style="color:#F8F8F2;">height</span><span style="color:#F92672;">}</span><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    )</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u4E0A\u9762\u7684\u51FD\u6570\u8282\u6D41 \u5BF9\u76D1\u542C\u5F53\u524D\u7A97\u53E3\u5C3A\u5BF8\u6709\u70B9\u95EE\u9898,\u5982\u679C\u7ACB\u9A6C\u89E6\u53D1 resize \u4E8B\u4EF6\u9A6C\u4E0A\u5C31\u505C\u6B62\u4E86(&lt;500ms), \u6B64\u65F6\u9875\u9762\u4E0A\u663E\u793A\u7684 \u7B2C\u4E00\u6B21\u89E6\u53D1 resize \u4E8B\u4EF6\u65F6 \u8BB0\u5F55\u5230\u7684\u6587\u6863\u5C3A\u5BF8\u5927\u5C0F\u3002\u800C\u4E0D\u662Fresize\u505C\u6B62\u65F6\u7684\u6587\u6863\u5927\u5C0F\u3002</p>`,5),v=e(`<p>\u5BF9\u4E0A\u9762\u7684 throttle_immediate() \u53E6\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F, \u5EF6\u540E\u6307\u5B9A\u7684\u65F6\u95F4\u518D\u6267\u884C,\u9996\u6B21\u4E0D\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">throttle_delay</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">fn</span><span style="color:#F8F8F2;">,</span><span style="color:#FD971F;font-style:italic;">delay</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">300</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> timer </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> _this </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">, args </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;">arguments</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(timer) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">    timer </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">setTimeout</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">      fn.</span><span style="color:#A6E22E;">apply</span><span style="color:#F8F8F2;">(_this,args)</span></span>
<span class="line"><span style="color:#F8F8F2;">      timer </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;">clearTimeout</span><span style="color:#F8F8F2;">(timer)</span></span>
<span class="line"><span style="color:#F8F8F2;">    },delay)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u4E5F\u662F\u4E00\u4E2A\u4F8B\u5B50, \u8BD5\u7740\u8C03\u8282\u7A97\u53E3\u5927\u5C0F</p>`,3);function u(m,b){const p=n("JavaScript-Debounce"),l=n("ClientOnly"),o=n("React-Throttle-Immediate"),F=n("React-Throttle-Delay");return c(),r("div",null,[y,s(l,null,{default:a(()=>[s(p)]),_:1}),d,s(l,null,{default:a(()=>[s(o)]),_:1}),v,s(l,null,{default:a(()=>[s(F)]),_:1})])}var h=t(i,[["render",u],["__file","debounce-throttle.html.vue"]]);export{h as default};
