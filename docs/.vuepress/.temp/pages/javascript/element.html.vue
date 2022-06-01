<template><h1 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> Element</h1>
<h2 id="element-attributes" tabindex="-1"><a class="header-anchor" href="#element-attributes" aria-hidden="true">#</a> Element.attributes</h2>
<p>Element.attributes 属性返回该元素所有属性节点的一个实时集合.该集合是一个NamedNodeMap对象。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">class</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;name&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">id</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;hello&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">data-id</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;123&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">style</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;color:red;&#39;</span><span style="color: #F8F8F2">&gt;&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> oDiv </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;.name&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">  oDiv.attributes </span><span style="color: #88846F">// 返回</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">  {</span></span>
<span class="line"><span style="color: #88846F">    0: class=&#39;name&#39;,</span></span>
<span class="line"><span style="color: #88846F">    1: id=&#39;hello&#39;,</span></span>
<span class="line"><span style="color: #88846F">    2: data-id=&#39;123&#39;,</span></span>
<span class="line"><span style="color: #88846F">    3: style=&#39;color:red;&#39;</span></span>
<span class="line"><span style="color: #88846F">  }</span></span>
<span class="line"><span style="color: #88846F">  */</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><JavaScript-Attribute/>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>遍历attributes对象,每个attribute也是一个对象, 可以通过attribute.name 和 attribute.value 属性获取属性名和值.</p>
</div>
<h2 id="element-hasattribute" tabindex="-1"><a class="header-anchor" href="#element-hasattribute" aria-hidden="true">#</a> Element.hasAttribute()</h2>
<p>hasAttribute 返回一个布尔值，指示该元素是否包含有指定的属性（attribute）。</p>
<h2 id="element-clientwidth-element-clientheight" tabindex="-1"><a class="header-anchor" href="#element-clientwidth-element-clientheight" aria-hidden="true">#</a> Element.clientWidth/Element.clientHeight</h2>
<p>内联元素以及没有CSS样式的元素的clientWidth属性值为0. Element.clientWidth属性表示元素的内部宽度。该属性包括
内边距padding,但不包括边框border,外边距margin和垂直滚动条.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>该属性值会被四舍五入为一个整数。如果你需要一个小数值，可使用 element.getBoundingClientRect()。</p>
</div>
<p>Element.clientWidth是一个只读属性。</p>
<p>如果包含滚动条, clientHeight可以通过CSS height + CSS padding - 水平滚动条的高度来计算。</p>
<h2 id="element-offsetparent" tabindex="-1"><a class="header-anchor" href="#element-offsetparent" aria-hidden="true">#</a> Element.offsetParent</h2>
<p>该属性是一个只读属性,返回一个指向最近的(closest,指包含层级上的最近)包含该元素的定位元素。如果没有定位的元素,则
offsetParent为最近的table table cell 或根元素。当元素的display设置为none,offsetParent返回Null。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>在weibkit中,如果元素为隐藏的 或者该元素的style.position被设置为fixed,则该属性返回null</li>
<li>在IE9中,如果该元素的style.position被设置为fixed,则该属性返回Null,(display:none)无影响。</li>
</ol>
</div>
<h2 id="element-offsetwidth" tabindex="-1"><a class="header-anchor" href="#element-offsetwidth" aria-hidden="true">#</a> Element.offsetWidth</h2>
<p>HTMLElement.offsetWidth是一个只读属性,返回一个元素的布局宽度。 offsetWidth是测量包含元素的边框(border)
水平线上的内边距(padding) 垂直方向滚动条(scrollbar)(如果存在的话),以及CSS设置的宽度(width)的值。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这个属性将会四舍五入为一个整数, 如果想要获取一个小数值, 可以使用element.getBoundingClientRect()。</p>
</div>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth" target="_blank" rel="noopener noreferrer">MDN-Element.offsetHeight<ExternalLinkIcon/></a></p>
<h2 id="element-scrollheight" tabindex="-1"><a class="header-anchor" href="#element-scrollheight" aria-hidden="true">#</a> Element.scrollHeight</h2>
<p>Element.scrollHeight 是一个只读属性, 返回一个元素内容高度的度量。包含由于溢出导致的视图中不可见的内容。
(包含元素的padding,但不包含元素的border和margin)。
同样, 该属性也会对值进行取整。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>该属性值会被四舍五入为一个整数。如果你需要一个小数值，可使用 element.getBoundingClientRect()。</p>
</div>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight" target="_blank" rel="noopener noreferrer">MDN-Element.scrollHeight<ExternalLinkIcon/></a></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #A6E22E">.box</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">width</span><span style="color: #F8F8F2">:</span><span style="color: #AE81FF">100</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">height</span><span style="color: #F8F8F2">:</span><span style="color: #AE81FF">100</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">padding</span><span style="color: #F8F8F2">:</span><span style="color: #AE81FF">10</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">margin</span><span style="color: #F8F8F2">:</span><span style="color: #AE81FF">5</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">border</span><span style="color: #F8F8F2">:</span><span style="color: #AE81FF">5</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">box-sizing</span><span style="color: #F8F8F2">:</span><span style="color: #66D9EF">border-box</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">overflow</span><span style="color: #F8F8F2">:</span><span style="color: #66D9EF">auto</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #A6E22E">.inner</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">background-color</span><span style="color: #F8F8F2">:</span><span style="color: #AE81FF">#98c379</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">width</span><span style="color: #F8F8F2">:</span><span style="color: #AE81FF">400</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">height</span><span style="color: #F8F8F2">:</span><span style="color: #AE81FF">400</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><JavaScript-BoxSize/>
<p>上面是一个div, 里面包含一个更大的div, 可以分别点击 不同按钮 获取它的尺寸数据。</p>
<h3 id="判断元素是否滚动到底" tabindex="-1"><a class="header-anchor" href="#判断元素是否滚动到底" aria-hidden="true">#</a> 判断元素是否滚动到底</h3>
<p>scrollTop是一个非整数, 而scrollHeight 和 clientHeight 是四舍五入的, 因此确认滚动区域是否滚动到底的
唯一方法是查看滚动量是否接近某个阀值。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在使用显示比例缩放的系统上, scrollTop可能会提供一个小数。</p>
</div>
<JavaScript-ScrollBottom/>
</template>
