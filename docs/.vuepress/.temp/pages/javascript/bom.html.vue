<template><div><h1 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h1>
<p>浏览器对象模型(Browser Object Model)。</p>
<h2 id="window对象" tabindex="-1"><a class="header-anchor" href="#window对象" aria-hidden="true">#</a> window对象</h2>
<p>所有浏览器都支持window对象。它表示浏览器窗口。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">window.innerWidth </span><span style="color: #88846F">// 浏览器窗口的内部宽度</span></span>
<span class="line"><span style="color: #F8F8F2">window.innerHeight </span><span style="color: #88846F">// 浏览器窗口的内部高度</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于IE 8 7 6 5:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">document.documentElement.clientWidth</span><span style="color: #F92672">/</span><span style="color: #F8F8F2">document.documentElement.clientHeight</span></span>
<span class="line"><span style="color: #F8F8F2">document.body.clientWidth </span><span style="color: #F92672">/</span><span style="color: #F8F8F2"> document.body.clientHeight</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开一个弹窗" tabindex="-1"><a class="header-anchor" href="#打开一个弹窗" aria-hidden="true">#</a> 打开一个弹窗</h3>
<p>经常会有在当前页面打开弹窗查看某些信息的需求。 有时，在打开弹窗的情况下, 页面内容依然可以滚动,这时需要做一个判断,
在有滚动条的时候隐藏滚动条,并且防止隐藏滚动条时页面内容抖动。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// --------- 判断页面是否有滚动条 -------</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">hasScrollbar</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  document.body.scrollHeight </span><span style="color: #F92672">&gt;</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">    window.innerHeight </span><span style="color: #F92672">||</span><span style="color: #F8F8F2"> document.documentElement.clientHeight</span></span>
<span class="line"><span style="color: #F8F8F2">  )</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// --------获取滚动条的宽度 --------</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">getScrollBarWidth</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> div </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;div&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  div.style.cssText </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;position:absolute;top:-9999px;&#39;</span><span style="color: #F92672">+</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&#39;width:100px;height:100px;overflow:scroll;&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  document.body.</span><span style="color: #A6E22E">appendChild</span><span style="color: #F8F8F2">(div)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> scrollBarWidth </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> div.offsetWidth </span><span style="color: #F92672">-</span><span style="color: #F8F8F2"> div.clientWidth;</span></span>
<span class="line"><span style="color: #F8F8F2">  document.body.</span><span style="color: #A6E22E">removeChild</span><span style="color: #F8F8F2">(div)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> scrollBarWidth;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><JavaScript-ModalButton/>
<h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h3>
<p>通过var定义的全局变量不能通过delete操作符删除,而window属性上定义的变量可以删除。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> firstName </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;kyrie&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">window.lastName </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;irving&#39;</span></span>
<span class="line"><span style="color: #F92672">delete</span><span style="color: #F8F8F2"> firstName;</span></span>
<span class="line"><span style="color: #F92672">delete</span><span style="color: #F8F8F2"> lastName;</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(firstName, window.lastName)  </span><span style="color: #88846F">// kyrie undefined</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过Object.getOwnPropertyDescriptor()获取一个对象的属性标识符。通过var定义的全局变量
的配置configure为false,而手动在window上添加的属性configure为true.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">getOwnPropertyDescriptor</span><span style="color: #F8F8F2">(window,</span><span style="color: #E6DB74">&#39;firstName&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">configurable: false</span></span>
<span class="line"><span style="color: #88846F">enumerable: true</span></span>
<span class="line"><span style="color: #88846F">value: &quot;kyrie&quot;</span></span>
<span class="line"><span style="color: #88846F">writable: true</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">getOwnPropertyDescriptor</span><span style="color: #F8F8F2">(window,</span><span style="color: #E6DB74">&#39;lastName&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">configurable: true</span></span>
<span class="line"><span style="color: #88846F">enumerable: true</span></span>
<span class="line"><span style="color: #88846F">value: &quot;irving&quot;</span></span>
<span class="line"><span style="color: #88846F">writable: true</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> Location</h3>
<p>window.location 对象用于获得当前页面的地址 (URL)
Location对象的href属性是一个字符串,包含URL的完整文本。Location对象的toString()方法返回href的属性值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">parseUrl</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> args </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {}</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> query </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> window.location.search.</span><span style="color: #A6E22E">substring</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> paris </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> query.</span><span style="color: #A6E22E">split</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;&amp;&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> i </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">, length </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> paris.length; i </span><span style="color: #F92672">&lt;</span><span style="color: #F8F8F2">length; i</span><span style="color: #F92672">++</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> pos </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> paris[i].</span><span style="color: #A6E22E">indexOf</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;=&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(pos </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">-</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">) </span><span style="color: #F92672">continue</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> name </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> paris.</span><span style="color: #A6E22E">substring</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">,pos);</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> value </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> paris.</span><span style="color: #A6E22E">substring</span><span style="color: #F8F8F2">(pos</span><span style="color: #F92672">+</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    args[name] </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">decodeURIComponent</span><span style="color: #F8F8F2">(value)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> args</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h2>
<p>window.setTimeout() 定时器到期后执行一个函数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> timeoutID </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> scope.</span><span style="color: #A6E22E">setTimeout</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">[, </span><span style="color: #A6E22E">delay</span><span style="color: #F8F8F2">, </span><span style="color: #A6E22E">arg1</span><span style="color: #F8F8F2">, </span><span style="color: #A6E22E">arg2</span><span style="color: #F8F8F2">, ...]);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值timeoutID是一个正整数,表示定时器的编号。 这个值可以传递给clearTimeout()来取消定时器。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>setTimeout()和setInterval()共用一个编号池, 技术上,clearTimeout()和clearInterval()可以互换, 但是为了避免混淆,
不要混用取消定时函数。</p>
</div>
</div></template>
