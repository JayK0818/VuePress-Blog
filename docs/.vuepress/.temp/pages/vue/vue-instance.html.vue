<template><h1 id="vue-instance" tabindex="-1"><a class="header-anchor" href="#vue-instance" aria-hidden="true">#</a> Vue Instance</h1>
<h2 id="vue构造函数" tabindex="-1"><a class="header-anchor" href="#vue构造函数" aria-hidden="true">#</a> Vue构造函数</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">//  /src/core/instance/index.js</span></span>
<span class="line"><span style="color: #88846F">// Vue定义构造函数的地方.</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Vue</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">options</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// instanceof 用来检测构造函数的prototype是否出现在实例对象的原型链上</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (process.env.NODE_ENV </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;production&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">!</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">instanceof</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Vue</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  ) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">warn</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;Vue is a constructor and should be called with the `new` keyword&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">//初始化传递给Vue构造函数的所有选项。</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">_init</span><span style="color: #F8F8F2">(options)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">// 注册Vue._init方法, 初始化vm</span></span>
<span class="line"><span style="color: #A6E22E">initMixin</span><span style="color: #F8F8F2">(Vue)</span></span>
<span class="line"><span style="color: #88846F">// 注册vm的$data/$props/$set/$delete/$watch</span></span>
<span class="line"><span style="color: #A6E22E">stateMixin</span><span style="color: #F8F8F2">(Vue)</span></span>
<span class="line"><span style="color: #88846F">// 注册$on/$once/$emit/$off</span></span>
<span class="line"><span style="color: #A6E22E">eventsMixin</span><span style="color: #F8F8F2">(Vue)</span></span>
<span class="line"><span style="color: #88846F">// 注册生命周期函数_update/$forceUpdate/$destroy</span></span>
<span class="line"><span style="color: #A6E22E">lifecycleMixin</span><span style="color: #F8F8F2">(Vue)</span></span>
<span class="line"><span style="color: #88846F">// 渲染相关的方法以及$nextTick / _render方法</span></span>
<span class="line"><span style="color: #A6E22E">renderMixin</span><span style="color: #F8F8F2">(Vue)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof" target="_blank" rel="noopener noreferrer">MDN-instanceof<ExternalLinkIcon/></a></p>
<h2 id="initmixin-vm" tabindex="-1"><a class="header-anchor" href="#initmixin-vm" aria-hidden="true">#</a> initMixin(vm)</h2>
<p>在initMixin内部, 给Vue构造函数的原型上注册了一个_init方法.
然后给设置了一个 vm._isVue = true, 防止后续设置对象为响应式对象时将其也设置为响应式对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// core/instance/init.js</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">Vue</span><span style="color: #F8F8F2">.prototype.</span><span style="color: #A6E22E">_init</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">options</span><span style="color: #F8F8F2">) { </span><span style="color: #88846F">// 用户传递的options选项</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 标识当前是一个实例</span></span>
<span class="line"><span style="color: #F8F8F2">  vm._isVue </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/* 合并options, 判断是组件还是Vue实例, 将合并后的选项作为vm.$options的值</span></span>
<span class="line"><span style="color: #88846F">    此处先跳过。。。 </span></span>
<span class="line"><span style="color: #88846F">  */</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (options </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> options._isComponent) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">initInternalComponent</span><span style="color: #F8F8F2">(vm, options)</span></span>
<span class="line"><span style="color: #F8F8F2">  } </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    vm.$options </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">mergeOptions</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">resolveConstructorOptions</span><span style="color: #F8F8F2">(vm.constructor),  </span><span style="color: #88846F">// parent</span></span>
<span class="line"><span style="color: #F8F8F2">      options </span><span style="color: #F92672">||</span><span style="color: #F8F8F2"> {},  </span><span style="color: #88846F">// child</span></span>
<span class="line"><span style="color: #F8F8F2">      vm  </span><span style="color: #88846F">// instance</span></span>
<span class="line"><span style="color: #F8F8F2">    )</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 给vm._renderProxy 赋值为当前vm实例</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (process.env.NODE_ENV </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;production&#39;</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">initProxy</span><span style="color: #F8F8F2">(vm)</span></span>
<span class="line"><span style="color: #F8F8F2">  } </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    vm._renderProxy </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> vm</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// initProxy 方法</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> initProxy</span></span>
<span class="line"><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (process.env.NODE_ENV </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;production&#39;</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 定义一个白名单,允许在模版中直接使用而不用在data中 或者 methods中定义的数据或方法</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/*下面的变量在js全局环境中 可以直接使用的,所以可不在data,或者methods computed中定义*/</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> allowedGlobals </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">makeMap</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&#39;Infinity,undefined,NaN,isFinite,isNaN,&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">+</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&#39;parseFloat,parseInt,decodeURI,decodeURIComponent,&#39;</span><span style="color: #F92672">+</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&#39;encodeURI,encodeURIComponent,&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">+</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&#39;Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,&#39;</span><span style="color: #F92672">+</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&#39;Set,JSON,Intl,BigInt,&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">+</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&#39;require&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  )</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">warnNonPresent</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">target</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">key</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// 属性或者方法 没有设置但是在 模版中中使用了。</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">warnReservedPrefix</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">target</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">key</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// ... 省略</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 判断浏览器是否支持 Proxy</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> hasProxy </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">typeof</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Proxy</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;undefined&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">isNative</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">Proxy</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (hasProxy) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// 内置的事件标识符,判断是否是Vue内置提供的事件修饰符,如果是的话禁止</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> isBuiltInModifier</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">makeMap</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;stop,prevent,self,ctrl,shift,alt,meta,exact&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    config.keyCodes </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Proxy</span><span style="color: #F8F8F2">(config.keyCodes, {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">set</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">target</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">key</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">value</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #A6E22E">isBuiltInModifier</span><span style="color: #F8F8F2">(key)) { </span><span style="color: #88846F">// 如果是内置的事件修饰符,则不允许修改</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #A6E22E">warn</span><span style="color: #F8F8F2">(</span><span style="color: #88846F">//...)</span></span>
<span class="line"><span style="color: #F8F8F2">          return </span><span style="color: #AE81FF">false</span></span>
<span class="line"><span style="color: #F8F8F2">        } else {</span></span>
<span class="line"><span style="color: #F8F8F2">          target[key] = value</span></span>
<span class="line"><span style="color: #F8F8F2">          return true</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  const hasHandler = {  </span><span style="color: #88846F">// 对象 in 操作符进行代理</span></span>
<span class="line"><span style="color: #F8F8F2">    has (target, key) {</span></span>
<span class="line"><span style="color: #F8F8F2">      const has = key in target </span><span style="color: #88846F">//判断属性是属于vm实例上的属性</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">      如果属性是在白名单里 或者 是以下划线开头的字符串并且不在$data里 </span></span>
<span class="line"><span style="color: #88846F">      ,在编译时是可以访问到的属性(渲染函数_c _v等)</span></span>
<span class="line"><span style="color: #88846F">      */</span></span>
<span class="line"><span style="color: #F8F8F2">      const isAllowed = </span></span>
<span class="line"><span style="color: #F8F8F2">        allowedGlobals(key) || </span></span>
<span class="line"><span style="color: #F8F8F2">        (typeof key === &#39;string&#39; &amp;&amp; </span></span>
<span class="line"><span style="color: #F8F8F2">        key.charAt(0) === &#39;_&#39; &amp;&amp; !(key in target.$data))</span></span>
<span class="line"><span style="color: #F8F8F2">      if (!has &amp;&amp; !isAllowed) {</span></span>
<span class="line"><span style="color: #F8F8F2">        if (key in target.$data) warnReservedPrefix(target, key)</span></span>
<span class="line"><span style="color: #F8F8F2">        else warnNonPresent(target, key)</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">      return has || !isAllowed</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  const getHandler = {  </span><span style="color: #88846F">// 拦截对象的属性读取操作</span></span>
<span class="line"><span style="color: #F8F8F2">    get (target, key) {</span></span>
<span class="line"><span style="color: #F8F8F2">      if (typeof key === &#39;string&#39; &amp;&amp; !(key in target)) {</span></span>
<span class="line"><span style="color: #F8F8F2">        if (key in target.$data) warnReservedPrefix(target, key)</span></span>
<span class="line"><span style="color: #F8F8F2">        else warnNonPresent(target, key)</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">      return target[key]</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  initProxy = function initProxy (vm) {</span></span>
<span class="line"><span style="color: #F8F8F2">    if (hasProxy) {</span></span>
<span class="line"><span style="color: #F8F8F2">      const options = vm.$options </span><span style="color: #88846F">// 传递给Vue构造函数的初始化选项 options。</span></span>
<span class="line"><span style="color: #F8F8F2">      const handlers = options.render &amp;&amp; options.render._withStripped</span></span>
<span class="line"><span style="color: #F8F8F2">        ? getHandler</span></span>
<span class="line"><span style="color: #F8F8F2">        : hasHandler</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #88846F">// 将代理对象赋值给vm._renderProxy,对vm实例对象的属性访问会被拦截。</span></span>
<span class="line"><span style="color: #F8F8F2">      vm._renderProxy </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Proxy</span><span style="color: #F8F8F2">(vm, handlers)</span></span>
<span class="line"><span style="color: #F8F8F2">    } else {</span></span>
<span class="line"><span style="color: #F8F8F2">      vm._renderProxy </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> vm</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">vm.$options.render = function(){</span></span>
<span class="line"><span style="color: #88846F">  with(this){ this指向vm._renderProxy</span></span>
<span class="line"><span style="color: #88846F">    return _c(&#39;div&#39;,[_v(_s(a))])</span></span>
<span class="line"><span style="color: #88846F">  }</span></span>
<span class="line"><span style="color: #88846F">}</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">在with语句块内访问a 就相当于访问vm._renderProxy的a属性。</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"><span style="color: #F8F8F2">export { initProxy }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// $options</span></span>
<span class="line"><span style="color: #88846F">/*用于将当前Vue实例的初始化选项。需要在选项中包含自定义property时会有用处*/</span></span>
<span class="line"><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Vue</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  el:</span><span style="color: #E6DB74">&#39;#proxy-instance&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  name: </span><span style="color: #E6DB74">&#39;hello&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  foo: </span><span style="color: #E6DB74">&#39;123&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">created</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.$options.name) </span><span style="color: #88846F">// hello</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// optionMergeStrategies</span></span>
<span class="line"><span style="color: #F8F8F2">Vue.config.optionMergeStrategies.</span><span style="color: #A6E22E">_my_option</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">parent</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">child</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">vm</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> child </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> Profile </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> Vue.</span><span style="color: #A6E22E">extend</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  _my_option: </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #88846F">// Profile.options._my_option = 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/vue/images/$options.jpeg" alt="$options"></p>
<p><a href="https://cn.vuejs.org/v2/api/#vm-options" target="_blank" rel="noopener noreferrer">Vue-$options-api文档<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/nicexibeidage/article/details/82112055" target="_blank" rel="noopener noreferrer">instance-proxy参考<ExternalLinkIcon/></a></p>
</template>
