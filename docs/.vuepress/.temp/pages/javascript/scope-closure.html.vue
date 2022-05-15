<template><h1 id="作用域和闭包" tabindex="-1"><a class="header-anchor" href="#作用域和闭包" aria-hidden="true">#</a> 作用域和闭包</h1>
<ul>
<li>引擎：  负责整个JavaScript程序的编译以及执行过程</li>
<li>编译器: 负责语法分析及代码生成</li>
<li>作用域: 负责收集并维护由所有声明的标识符组成的一系列查询,并实施一套非常严格的规则,确定当前执行的代码
对这些标识符的访问权限。(LHS查询和RHS查询)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #88846F">// 定义声明是在编译阶段进行的, 赋值声明会被留在原地等待执行阶段。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量查询" tabindex="-1"><a class="header-anchor" href="#变量查询" aria-hidden="true">#</a> 变量查询</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">a</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">最后1行foo()函数意味着调用需要对foo进行RHS引用, 代码中隐式的 a = 2 需要进行一次LHS查询。</span></span>
<span class="line"><span style="color: #88846F">还有对a进行的RHS引用, 并且将得到的值传递给了 console.log()。</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// demo</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">a</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> b </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> a;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> b</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">LHS查询和RHS查询</span></span>
<span class="line"><span style="color: #88846F">c = ... , a = 2, b =..</span></span>
<span class="line"><span style="color: #88846F">foo(2... ,=a, a, b)</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域嵌套" tabindex="-1"><a class="header-anchor" href="#作用域嵌套" aria-hidden="true">#</a> 作用域嵌套</h2>
<p>当一个块或者函数在另一个块或者函数中时,就发生了作用域的嵌套。因此,在当前作用域中无法找到某个变量时,
引擎就会在外层嵌套的作用域链中继续查找,直到找到该变量为止。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">a</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> b</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> b </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">)  </span><span style="color: #88846F">// 4</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区分RHS和LHS查询的原因:
如果使用RHS查询在所有嵌套的作用域中遍寻不到所需要的变量,引擎就会抛出ReferenceError异常,如果RHS查询到一个变量,
但是试图对这个变量进行不合理的操作,那么引擎会抛出另一个类型的异常,TypeError.</p>
<p>如果使用LHS查询时,如果在顶层中也无法找到目标变量, 全局作用域中就会创建一个具有该名称的变量,并将其返还给引擎。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>ReferenceError同作用域判断失败相关,而TypeError则代表了作用域判断成功,但是对结果的操作是非法的。</p>
<p>由Function 构造的函数 [[scope]] 里只有全局的变量对象</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">10</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> b </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">20</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">f1</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a, b)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">f2</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a, b)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> f3 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Function</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;console.log(a, b)&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">f1</span><span style="color: #F8F8F2">()  </span><span style="color: #88846F">// 10 20</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">f2</span><span style="color: #F8F8F2">()  </span><span style="color: #88846F">// 10 20</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">f3</span><span style="color: #F8F8F2">()  </span><span style="color: #88846F">// 10 b is not defined</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域" aria-hidden="true">#</a> 函数作用域</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">doSomething</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">a</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">doSomethingElse</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">a</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">-</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  b </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">doSomethingElse</span><span style="color: #F8F8F2">(a </span><span style="color: #F92672">*</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(b </span><span style="color: #F92672">*</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #A6E22E">doSomething</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">)  </span><span style="color: #88846F">// 15</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>'隐藏' 作用域中的变量和函数 可以避免同名标识符之间的冲突。</p>
<h3 id="匿名和具名" tabindex="-1"><a class="header-anchor" href="#匿名和具名" aria-hidden="true">#</a> 匿名和具名</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF">setTimeout</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;I waited 1 second&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数表达式可以是匿名的, 函数声明不可以省略函数名 - 在JavaScript的语法中是非法的。</p>
<h3 id="立即执行函数表达式-iife" tabindex="-1"><a class="header-anchor" href="#立即执行函数表达式-iife" aria-hidden="true">#</a> 立即执行函数表达式(IIFE)</h3>
<p>Immediately Invoked Function Expression.</p>
<p>IIFE最常见的用法是使用一个匿名函数表达式.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)</span></span>
<span class="line"><span style="color: #F8F8F2">})()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)  </span><span style="color: #88846F">// 2</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 把IIFE当作函数调用并传递参数</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">global</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)  </span><span style="color: #88846F">// 3</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(global.a) </span><span style="color: #88846F">// 2</span></span>
<span class="line"><span style="color: #F8F8F2">})(window)</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)  </span><span style="color: #88846F">// 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提升" tabindex="-1"><a class="header-anchor" href="#提升" aria-hidden="true">#</a> 提升</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a;</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)    </span><span style="color: #88846F">// 2</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// -------- </span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)  </span><span style="color: #88846F">// undefined</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// -------</span></span>
<span class="line"><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)  </span><span style="color: #88846F">// undefined</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>只有声明本身会被提升, 而赋值或其他运行逻辑会留在原地。</p>
</div>
<h3 id="函数优先" tabindex="-1"><a class="header-anchor" href="#函数优先" aria-hidden="true">#</a> 函数优先</h3>
<p>函数声明和变量声明都会被提升, 但是函数会首先被提升, 然后才是变量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> foo</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">// 以上代码输出1</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// ---------</span></span>
<span class="line"><span style="color: #A6E22E">baz</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">baz</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">baz</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">baz</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">// 以上代码输出3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2>
<p>一个函数和对其周围状态的引用捆绑在一起 这样的组合就是闭包。闭包可以让你可以在一个内层函数中访问到其外层函数的作用域。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">bar</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">bar</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// bar()对a的引用的方法是词法作用域的查找规则,这些规则只是闭包一部分。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 下面的代码展示了闭包:</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">bar</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 将bar所引用的函数对象本身当作返回值。</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> bar;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> baz </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #A6E22E">baz</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #88846F">// foo()执行后, 其返回值赋值给变量baz并调用baz(),实际上只是通过不同的标识符引用</span></span>
<span class="line"><span style="color: #88846F">// 调用了函数的内部bar(). 调用baz()后依然持有对该作用域的引用, </span></span>
<span class="line"><span style="color: #88846F">//而这个引用就叫做闭包。闭包使得函数可以继续访问,定义时的词法作用域。</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// --------- 直接传递函数 --------</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">baz</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">bar</span><span style="color: #F8F8F2">(baz)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">bar</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">fn</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">fn</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 传递函数也可以是间接的 。</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> fn</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> a </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">baz</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(a)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  fn </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> baz;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">bar</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">fn</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #A6E22E">foo</span><span style="color: #F8F8F2">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 下面是一个mdn的demo</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">makeSizer</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">size</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    document.body.style.fontSize </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> size </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;px&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> size12 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">makeSizer</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">12</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> size14 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">makeSizer</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">14</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> size16 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">makeSizer</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">16</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// ---------- 用闭包模拟私有方法 ---------</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> Counter </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> privateCounter </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">changeBy</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">value</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    privateCounter </span><span style="color: #F92672">+=</span><span style="color: #F8F8F2"> value;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">increment</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">changeBy</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">decrement</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">changeBy</span><span style="color: #F8F8F2">(</span><span style="color: #F92672">-</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">value</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> privateCounter</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在定时器, 事件监听器, Ajax请求或者任何其他的异步(或者同步)任务中, 只要使用了回调函数, 实际上就是在使用
闭包</p>
</div>
</template>
