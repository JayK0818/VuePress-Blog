<template><div><h1 id="globalapi" tabindex="-1"><a class="header-anchor" href="#globalapi" aria-hidden="true">#</a> GlobalApi</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// src/core/global-api/index.js</span></span>
<span class="line"><span style="color: #88846F">// 设置Vue的一些全局API和全局配置config操作</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">initGlobalAPI</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">Vue</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">GlobalAPI</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> configDef </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {}</span></span>
<span class="line"><span style="color: #F8F8F2"> configDef.</span><span style="color: #A6E22E">get</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> () </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> config</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (process.env.NODE_ENV </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;production&#39;</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">   configDef.</span><span style="color: #A6E22E">set</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> () </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> { </span><span style="color: #88846F">// 防止改写config对象。</span></span>
<span class="line"><span style="color: #F8F8F2">     </span><span style="color: #A6E22E">warn</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">       </span><span style="color: #E6DB74">&#39;Do not replace the Vue.config object, set individual fields instead.&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">     )</span></span>
<span class="line"><span style="color: #F8F8F2">   }</span></span>
<span class="line"><span style="color: #F8F8F2"> }</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">defineProperty</span><span style="color: #F8F8F2">(Vue, </span><span style="color: #E6DB74">&#39;config&#39;</span><span style="color: #F8F8F2">, configDef)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2"> Vue.set </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> set</span></span>
<span class="line"><span style="color: #F8F8F2"> Vue.delete </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> del</span></span>
<span class="line"><span style="color: #F8F8F2"> Vue.nextTick </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> nextTick</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #88846F">// 将一个对象变为响应式对象</span></span>
<span class="line"><span style="color: #F8F8F2"> Vue.</span><span style="color: #A6E22E">observable</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> &lt;</span><span style="color: #66D9EF; font-style: italic">T</span><span style="color: #F8F8F2">&gt;(obj: T): T =&gt; </span><span style="color: #F92672">{</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #A6E22E">observe</span><span style="color: #F8F8F2">(obj)</span></span>
<span class="line"><span style="color: #F8F8F2">   return obj</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #F92672">}</span></span>
<span class="line"><span style="color: #F8F8F2">/*</span></span>
<span class="line"><span style="color: #F8F8F2">ASSET_TYPES 在shared/constant.js中定义的一个常量数据。</span></span>
<span class="line"><span style="color: #F8F8F2">const ASSET_TYPES = [&#39;component&#39;, &#39;directive&#39;, &#39;filter&#39;]</span></span>
<span class="line"><span style="color: #F8F8F2">在Vue身上设置一个options空对象,此处用来设置全局的components/filters/directives</span></span>
<span class="line"><span style="color: #F8F8F2">*/</span></span>
<span class="line"><span style="color: #F8F8F2"> Vue.options = Object.create(null)</span></span>
<span class="line"><span style="color: #F8F8F2"> ASSET_TYPES.forEach(type =&gt; </span><span style="color: #F92672">{</span></span>
<span class="line"><span style="color: #F8F8F2">   Vue.options[type </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;s&#39;</span><span style="color: #F8F8F2">] </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">create</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #F92672">}</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2"> // 记录当时的Vue构造函数,在后面的extend方法会使用。</span></span>
<span class="line"><span style="color: #F8F8F2"> Vue.options._base = Vue</span></span>
<span class="line"><span style="color: #F8F8F2">/*</span></span>
<span class="line"><span style="color: #F8F8F2">extend方法, 将一个对象的所有属性拷贝到 另一个对象上并返回</span></span>
<span class="line"><span style="color: #F8F8F2">function extend (to: Object, _from: ?Object): Object </span><span style="color: #F92672">{</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">for</span><span style="color: #F8F8F2"> (const key </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> _from) {</span></span>
<span class="line"><span style="color: #F8F8F2">   to[key] = _from[key]</span></span>
<span class="line"><span style="color: #F8F8F2"> }</span></span>
<span class="line"><span style="color: #F8F8F2"> return to</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">*/</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #88846F">//将内置组件(keep-alive) 拷贝到 Vue.options.components 对象上。</span></span>
<span class="line"><span style="color: #F8F8F2"> extend(Vue.options.components, builtInComponents)</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #88846F">// 注册插件</span></span>
<span class="line"><span style="color: #F8F8F2"> initUse(Vue)</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #88846F">// 混入 mixins</span></span>
<span class="line"><span style="color: #F8F8F2"> initMixin(Vue)</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #88846F">// Vue.extend方法</span></span>
<span class="line"><span style="color: #F8F8F2"> initExtend(Vue)</span></span>
<span class="line"><span style="color: #F8F8F2"> initAssetRegisters(Vue)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inituse" tabindex="-1"><a class="header-anchor" href="#inituse" aria-hidden="true">#</a> initUse</h2>
<p>注册插件,通常用来为Vue添加全局功能。 通过调用全局的Vue.use()使用插件。参数可以是一个函数,或者一个对象。
插件应该暴露一个install方法。这个方法的第一个参数是Vue构造器,第二个参数是一个可选的选项对象。</p>
<p>Vue.use会自动阻止多次注册相同插件,即使多次调用也只会注册一次该插件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">Vue.</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2">(MyPlugin)</span></span>
<span class="line"><span style="color: #88846F">// 会调用 MyPlugin.install(Vue)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// toArray方法,将一个array object的对象转化为数组, start参数为可选,表示删除第几个数据。</span></span>
<span class="line"><span style="color: #88846F">//---------注意此时start为1时就是第一项数据,而不是数组中理解的下标为0的数据-----------</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">toArray</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">list</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">start</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">  start </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> start </span><span style="color: #F92672">||</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> i </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> list.length </span><span style="color: #F92672">-</span><span style="color: #F8F8F2"> start</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> ret </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Array</span><span style="color: #F8F8F2">(i)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">while</span><span style="color: #F8F8F2"> (i</span><span style="color: #F92672">--</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    ret[i] </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> list[i </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> start]</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> ret</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">// src/core/global-api/use.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">initUse</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">Vue</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">GlobalAPI</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  Vue.</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> (</span><span style="color: #A6E22E">plugin</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Function</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">|</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Object</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">/* 判断插件是否已经注入, 如果没有注入 则将_installedPlugins 设置为一个空数组,</span></span>
<span class="line"><span style="color: #88846F">    否则,将插件 添加进_installedPlugins数组里,防止重复注册插件。</span></span>
<span class="line"><span style="color: #88846F">    */</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">installedPlugins</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">._installedPlugins </span><span style="color: #F92672">||</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">._installedPlugins </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [])</span></span>
<span class="line"><span style="color: #F8F8F2">    )</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (installedPlugins.</span><span style="color: #A6E22E">indexOf</span><span style="color: #F8F8F2">(plugin) </span><span style="color: #F92672">&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">-</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> args </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">toArray</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">arguments</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    args.</span><span style="color: #A6E22E">unshift</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">    把第一个参数去掉,并且把Vue构造函数添加到参数数组首项,install 方法调用时，</span></span>
<span class="line"><span style="color: #88846F">    会将 Vue 作为参数传入。</span></span>
<span class="line"><span style="color: #88846F">    */</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #F92672">typeof</span><span style="color: #F8F8F2"> plugin.install </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;function&#39;</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">      plugin.install.</span><span style="color: #A6E22E">apply</span><span style="color: #F8F8F2">(plugin, args)</span></span>
<span class="line"><span style="color: #F8F8F2">    } </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #F92672">typeof</span><span style="color: #F8F8F2"> plugin </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;function&#39;</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">      plugin.</span><span style="color: #A6E22E">apply</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">, args)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    installedPlugins.</span><span style="color: #A6E22E">push</span><span style="color: #F8F8F2">(plugin) </span><span style="color: #88846F">// 将插件添加进数组_installedPlugins数组</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cn.vuejs.org/v2/guide/plugins.html" target="_blank" rel="noopener noreferrer">Vue-Plugin<ExternalLinkIcon/></a></p>
<h2 id="initmixin" tabindex="-1"><a class="header-anchor" href="#initmixin" aria-hidden="true">#</a> initMixin</h2>
<p>混入(mixin)提供了一种非常灵活的方式来分发Vue组件中可复用的功能。一个混入对象可以包含任意组件选项。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> mixin </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">data</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">    message:</span><span style="color: #E6DB74">&#39;hello&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">created</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;mixin-created&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> component </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> Vue.</span><span style="color: #A6E22E">component</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;player&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">  template:</span><span style="color: #E6DB74">`&lt;div&gt;{{message}} - {{msg}}&lt;/div&gt;`</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">data</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      message:</span><span style="color: #E6DB74">&#39;world&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      msg:</span><span style="color: #E6DB74">&#39;message&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">created</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;component-mixin&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  mixins:[mixin],</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #88846F">// 先执行mixin的生命周期钩子函数, data选项参数冲突的话,会使用组件的同名参数</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cn.vuejs.org/v2/guide/mixins.html" target="_blank" rel="noopener noreferrer">Vue-Mixin<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// src/core/global-api/mixin.js</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">initMixin</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">Vue</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">GlobalAPI</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  Vue.</span><span style="color: #A6E22E">mixin</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">mixin</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Object</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// 将全局options选项与mixin选项进行合并</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">    数据对象会在内部进行递归合并,并在发生冲突时以组件数组优先,同名钩子函数合并为一个数组</span></span>
<span class="line"><span style="color: #88846F">    */</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.options </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">mergeOptions</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.options, mixin)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="initassetregisters" tabindex="-1"><a class="header-anchor" href="#initassetregisters" aria-hidden="true">#</a> initAssetRegisters</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// core/global-api/assets.js</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 注册或者获取全局定义的组件,过滤器 和 自定义指令</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">initAssetRegisters</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">Vue</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">GlobalAPI</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">遍历 [&#39;filter&#39;,&#39;component&#39;,&#39;directive&#39;]数组,并在Vue上分别添加这几个方法,这三个方法是</span></span>
<span class="line"><span style="color: #88846F">同时注册的,因为三个函数传递的参数类型差不多.</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">Vue.directive(id, [definition]) // id:string, definition:Function/Object </span></span>
<span class="line"><span style="color: #88846F">Vue.filter(id,[definition])     // id:string, definition:Function</span></span>
<span class="line"><span style="color: #88846F">Vue.component(id,[definition])  // id:string, definition:Function/Object</span></span>
<span class="line"><span style="color: #88846F">*/</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">  ASSET_TYPES.</span><span style="color: #A6E22E">forEach</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">type</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    Vue[type] </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> ( </span><span style="color: #FD971F; font-style: italic">id</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">string</span><span style="color: #F8F8F2">, </span><span style="color: #A6E22E">definition</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Function</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">|</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Object</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// 如果没有传递要注册的参数,则返回注册的组件或自定义指令或者过滤器。</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #F92672">!</span><span style="color: #F8F8F2">definition) {  </span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.options[type </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;s&#39;</span><span style="color: #F8F8F2">][id]</span></span>
<span class="line"><span style="color: #F8F8F2">      } </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (process.env.NODE_ENV </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;production&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> type </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;component&#39;</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #A6E22E">validateComponentName</span><span style="color: #F8F8F2">(id) </span><span style="color: #88846F">// 验证组件名称是否合法。</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #88846F">/* 判断组件的参数是否是一个 对象。isPlainObject函数功能比较简单:</span></span>
<span class="line"><span style="color: #88846F">        function isPlainObject(object){</span></span>
<span class="line"><span style="color: #88846F">          return Object.prototype.toString.call(object) === &#39;[object Object]&#39;</span></span>
<span class="line"><span style="color: #88846F">        }</span></span>
<span class="line"><span style="color: #88846F">        */</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (type </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;component&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">isPlainObject</span><span style="color: #F8F8F2">(definition)) {</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #88846F">// 如果传递了 name 则作为组件名, 否则使用id作为组件名</span></span>
<span class="line"><span style="color: #F8F8F2">          definition.name </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> definition.name </span><span style="color: #F92672">||</span><span style="color: #F8F8F2"> id</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #88846F">// 将组件对象转化为组件的构造函数。</span></span>
<span class="line"><span style="color: #F8F8F2">          definition </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.options._base.</span><span style="color: #A6E22E">extend</span><span style="color: #F8F8F2">(definition)</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #88846F">// 如果指令传递的是一个函数,这里将会被 `bind` 和 `update` 调用</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (type </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;directive&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">typeof</span><span style="color: #F8F8F2"> definition </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;function&#39;</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">          definition </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> { bind: definition, update: definition }</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">        将通过Vue.filter()/Vue.component()/Vue.directive()注册的指令,组件和过滤器 </span></span>
<span class="line"><span style="color: #88846F">        添加进Vue.options[directives/components/filters]对象里</span></span>
<span class="line"><span style="color: #88846F">        */</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.options[type </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;s&#39;</span><span style="color: #F8F8F2">][id] </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> definition</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> definition</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">/* validateComponentName function */</span></span>
<span class="line"><span style="color: #88846F">// src/core/util/options</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">validateComponentName</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">name</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">string</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 判断组件名是否合法的标签</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #F92672">!new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">RegExp</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">`^[a-zA-Z][</span><span style="color: #AE81FF">\\</span><span style="color: #E6DB74">-</span><span style="color: #AE81FF">\\</span><span style="color: #E6DB74">.0-9_</span><span style="color: #F92672">${</span><span style="color: #F8F8F2">unicodeRegExp.source</span><span style="color: #F92672">}</span><span style="color: #E6DB74">]*$`</span><span style="color: #F8F8F2">).</span><span style="color: #A6E22E">test</span><span style="color: #F8F8F2">(name)){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// 警告省略...</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 判断组件名是否为内置的组件名或者是否在全局config.js文件里定义过 不能作为组件名称注册</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/* const isBuiltInTag = makeMap(&#39;slot,component&#39;, true)</span></span>
<span class="line"><span style="color: #88846F">    内置组件名 slot component, 第二个参数为true,将组件名转化为小写字母.</span></span>
<span class="line"><span style="color: #88846F">  */</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #A6E22E">isBuiltInTag</span><span style="color: #F8F8F2">(name) </span><span style="color: #F92672">||</span><span style="color: #F8F8F2"> config.</span><span style="color: #A6E22E">isReservedTag</span><span style="color: #F8F8F2">(name)) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// 警告省略...</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/*vue.config.js文件里 关于isReservedTag的注释*/</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/* Check if a tag is reserved so that it cannot be registered as a</span></span>
<span class="line"><span style="color: #88846F">  component. This is platform-dependent and may be overwritten.</span></span>
<span class="line"><span style="color: #88846F">  */</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80-API" target="_blank" rel="noopener noreferrer">Vue-全局API<ExternalLinkIcon/></a></p>
<h3 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h3>
<p>从上面对组件对处理过程可以看出,Vue.component()注册组件 返回的是一个构造函数,跟使用Vue.extend()创建一个
'子类'是一样的,因为 Vue.component(id, definition) 第二个参数传递的是一个对象的话, 会使用Vue.extend()
方法处理为一个构造函数返回。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 使用Vue.extend()</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> Dialog </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> Vue.</span><span style="color: #A6E22E">extend</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  template:</span><span style="color: #E6DB74">`&lt;div class=&#39;dialog&#39;&gt;&lt;/div&gt;`</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">data</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      message:</span><span style="color: #E6DB74">&#39;登陆&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Dialog</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  el:</span><span style="color: #E6DB74">&#39;#app&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 使用Vue.component()</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> Dialog </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> Vue.</span><span style="color: #A6E22E">component</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;dialog-component&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">  template:</span><span style="color: #E6DB74">`&lt;div class=&#39;dialog&#39;&gt;{{message}}&lt;/div&gt;`</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">data</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      message:</span><span style="color: #E6DB74">&#39;登陆&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Dialog</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  el:</span><span style="color: #E6DB74">&#39;#dialog&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上两种方式创建的组件使用方式一样,效果相同。</p>
</div></template>
