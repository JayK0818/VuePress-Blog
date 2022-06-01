<template><h1 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h1>
<h2 id="对象初始化" tabindex="-1"><a class="header-anchor" href="#对象初始化" aria-hidden="true">#</a> 对象初始化</h2>
<p>可以通过new Object() / Object.create()方法，或者使用字面量标记 初始化对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> player </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  name:</span><span style="color: #E6DB74">&#39;kyrie&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> player </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">create</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> player </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">({})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-isextensible" tabindex="-1"><a class="header-anchor" href="#object-isextensible" aria-hidden="true">#</a> Object.isExtensible()</h2>
<p>判断一个对象是否是可扩展的( 是否可以在 上面添加 <strong>新</strong> 的属性 ), 返回一个布尔值.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> object_1 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  player:</span><span style="color: #E6DB74">&#39;kyrie&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> object_2 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">defineProperty</span><span style="color: #F8F8F2">({}, </span><span style="color: #E6DB74">&#39;player&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">  value:</span><span style="color: #E6DB74">&#39;kyrie&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> object3 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">defineProperty</span><span style="color: #F8F8F2">({}, </span><span style="color: #E6DB74">&#39;player&#39;</span><span style="color: #F8F8F2">, {</span></span>
<span class="line"><span style="color: #F8F8F2">  value:</span><span style="color: #E6DB74">&#39;lebron&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  configurable:</span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> object_4 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">freeze</span><span style="color: #F8F8F2">({player:</span><span style="color: #E6DB74">&#39;durant&#39;</span><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> object_5 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">seal</span><span style="color: #F8F8F2">({player:</span><span style="color: #E6DB74">&#39;curry&#39;</span><span style="color: #F8F8F2">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以分别点击下列按钮,查看创建的对象是否是可以扩展的。</p>
<JavaScript-Object/>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在 ES5 中,如果参数不是一个对象类型,将抛出一个 TypeError 异常。在 ES6 中, non-object 参数将被视为一个不可扩展的普通对象,因此会返回 false。</p>
</div>
<h2 id="object-freeze" tabindex="-1"><a class="header-anchor" href="#object-freeze" aria-hidden="true">#</a> Object.freeze()</h2>
<p>Object.freeze()可以冻结一个对象。一个被冻结的对象再也不能被修改。不能添加新的属性,不能删除已有属性。不能修改
对象已有属性的可枚举性,可配置性,可写性以及不能修改已有属性的值。
此外,冻结一个对象后该对象的原型也不能修改。 freeze()返回和传入的参数相同的对象。</p>
<p><a href="'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible'">Object.isExtensible</a></p>
<p><a href="'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze'">Object.freeze()</a></p>
</template>
