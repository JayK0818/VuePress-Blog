<template><h1 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h1>
<h2 id="node-textcontent" tabindex="-1"><a class="header-anchor" href="#node-textcontent" aria-hidden="true">#</a> Node.textContent</h2>
<p>Node 接口的 textContent 属性表示一个节点及其后代的文本内容
返回一个字符串或者 null
在节点上设置 textContent属性的话,会删除它的所有的子节点,并替换为一个具有给定值的文本节点。</p>
<ol>
<li>如果节点是一个document,则textContent返回null, 如果想获取整个文档的文本,可以使用document.documentElement.textContent</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F92672">&lt;!</span><span style="color: #F8F8F2">DOCTYPE html</span><span style="color: #F92672">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">html</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">lang</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&quot;en&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">head</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">meta</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">charset</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&quot;UTF-8&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">meta</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">name</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&quot;viewport&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">content</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">title</span><span style="color: #F8F8F2">&gt;Node&lt;/</span><span style="color: #F92672">title</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">style</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    body</span><span style="color: #F92672">{</span><span style="color: #F8F8F2">padding: </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">;margin: </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">;</span><span style="color: #F92672">}</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">style</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">head</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">body</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;hello world&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">src</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&#39;./src/text-content.js&#39;</span><span style="color: #F8F8F2">&gt;&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    function print(message)</span><span style="color: #F92672">{</span></span>
<span class="line"><span style="color: #F8F8F2">      console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(message)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">}</span></span>
<span class="line"><span style="color: #F8F8F2">    print(&#39;hello world&#39;)</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">body</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">html</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">document.textContent  </span><span style="color: #88846F">// null</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 在一段html代码获取的文本为, 包括style和script之间的文本</span></span>
<span class="line"><span style="color: #F8F8F2">document.documentElement.textContent</span></span>
<span class="line"><span style="color: #88846F">// Node</span></span>
<span class="line"><span style="color: #88846F">// body{padding: 0;margin: 0;}</span></span>
<span class="line"><span style="color: #88846F">// hello world</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在节点设置textContent属性的话,会删除它的所有子节点,并替换为一个具有给定值的文本节点。</li>
</ol>
<h3 id="与innertext的区别" tabindex="-1"><a class="header-anchor" href="#与innertext的区别" aria-hidden="true">#</a> 与innerText的区别</h3>
<ol>
<li>textContent会获取所有元素的内容,包括 script 和 style 元素, 而innerText只展示给人看的元素。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">class</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&#39;wrapper&#39;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">style</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&#39;opacity:0&#39;</span><span style="color: #F8F8F2">&gt;opacity:0&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;now you can see me&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">style</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&#39;visibility:none;&#39;</span><span style="color: #F8F8F2">&gt;visibility&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">style</span><span style="color: #F92672">=</span><span style="color: #E6DB74">&#39;display:none;&#39;</span><span style="color: #F8F8F2">&gt;display:none&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面类名为wrapper的div的子元素, 使用textContent和innerText的区别为 innerText无法获取display:none的文本</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;.wrapper&#39;</span><span style="color: #F8F8F2">).textContent</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">opacity:0</span></span>
<span class="line"><span style="color: #88846F">now you can see me</span></span>
<span class="line"><span style="color: #88846F">visibility</span></span>
<span class="line"><span style="color: #88846F">display:none</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;.wrapper&#39;</span><span style="color: #F8F8F2">).innerText</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">opacity:0</span></span>
<span class="line"><span style="color: #88846F">now you can see me</span></span>
<span class="line"><span style="color: #88846F">visibility</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>textContent 会返回节点中的每一个元素。相反,innerText 受 CSS 样式的影响,并且不会返回隐藏元素的文本。
此外,由于 innerText 受 CSS 样式的影响,它会触发回流（ reflow ）去确保是最新的计算样式。</li>
</ol>
<h3 id="与innerhtml区别" tabindex="-1"><a class="header-anchor" href="#与innerhtml区别" aria-hidden="true">#</a> 与innerHTML区别</h3>
<p>Element.innerHTML通常返回HTML。但是textContent通常具有更好的性能,因为文本不会被解析为html,此外,使用textContent可以
防止XSS攻击。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">divElement.innerHTML </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">`&lt;h1&gt;我是新插入的html&lt;/h1&gt;`</span><span style="color: #F8F8F2">; </span><span style="color: #88846F">// 浏览器会解析html</span></span>
<span class="line"><span style="color: #F8F8F2">divElement.textContent </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">`&lt;h1&gt;我是新插入的html&lt;/h1&gt;`</span><span style="color: #F8F8F2">; </span><span style="color: #88846F">// 直接插入标签,不会解析html</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent" target="_blank" rel="noopener noreferrer">MDN-textContent<ExternalLinkIcon/></a></p>
<h2 id="node-insertbefore" tabindex="-1"><a class="header-anchor" href="#node-insertbefore" aria-hidden="true">#</a> Node.insertBefore()</h2>
<p>在参考节点之前插入一个拥有指定父节点的子节点。如果给定的子节点是对文档中现有节点对引用,inertBefore()会将其从当前位置
移动到新位置。</p>
<ol>
<li>如果引用节点为null,则将指定对节点添加到指定父节点的子节点列表的末尾。</li>
<li>如果给定的子节点是DocumentFragment,那么DocumentFragment的全部内容将被移动到指定父节点的子节点列表中.</li>
</ol>
<p>函数返回被插入过的子节点;当newNode是DocumentFragment时,返回空DocumentFragment.</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore" target="_blank" rel="noopener noreferrer">MDN-Node.insertBefore(newNode,referenceNode)<ExternalLinkIcon/></a></p>
<JavaScript-InsertBefore/>
<h2 id="nodelist" tabindex="-1"><a class="header-anchor" href="#nodelist" aria-hidden="true">#</a> NodeList</h2>
<p>NodeList对象是节点的集合。通常是由属性, 如Node.childNodes 和 方法 document.querySelectorAll返回的。</p>
<p>在一些情况下, NodeList是一个实时集合,如果文档节点发生变化,NoList也会随之变化。如Node.childNodes是实时的。
在其他情况下, NodeList是一个静态集合。也就意味着对文档对象模型的任何改动都不会影响集合的内容。如document.querySelectorAll()</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">id</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;node-list&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">span</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">class</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;text&quot;</span><span style="color: #F8F8F2">&gt;1&lt;/</span><span style="color: #F92672">span</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">span</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">class</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;text&quot;</span><span style="color: #F8F8F2">&gt;2&lt;/</span><span style="color: #F92672">span</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> nodeList </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;#node-list&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> childNodes </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> nodeList.childNodes</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  button.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;click&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> span </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;span&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    span.textContent </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #F92672">...</span><span style="color: #F8F8F2">text].length </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">    nodeList.</span><span style="color: #A6E22E">appendChild</span><span style="color: #F8F8F2">(span)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(text.length)  </span><span style="color: #88846F">// 一直都是2</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(childNodes.length, childNodes)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// 随着插入元素的增加而增加</span></span>
<span class="line"><span style="color: #F8F8F2">  }, </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历nodelist" tabindex="-1"><a class="header-anchor" href="#遍历nodelist" aria-hidden="true">#</a> 遍历NodeList</h3>
<p>NodeList.entries() / NodeList.values() / Node.keys() / Node.forEach()</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// forEach</span></span>
<span class="line"><span style="color: #F8F8F2">text.</span><span style="color: #A6E22E">forEach</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">text</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;each&#39;</span><span style="color: #F8F8F2">, text)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// &lt;span class=&quot;text&quot;&gt;1&lt;/span&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// &lt;span class=&quot;text&quot;&gt;2&lt;/span&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// entries</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(text.</span><span style="color: #A6E22E">entries</span><span style="color: #F8F8F2">())</span></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> tag </span><span style="color: #F92672">of</span><span style="color: #F8F8F2"> text.</span><span style="color: #A6E22E">entries</span><span style="color: #F8F8F2">()){</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(tag)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">[0, span.text]</span></span>
<span class="line"><span style="color: #88846F">[1, span.text]</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// keys</span></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> key </span><span style="color: #F92672">of</span><span style="color: #F8F8F2"> text.</span><span style="color: #A6E22E">keys</span><span style="color: #F8F8F2">()){</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(key)  </span><span style="color: #88846F">// 0 1</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// values</span></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> value </span><span style="color: #F92672">of</span><span style="color: #F8F8F2"> text.</span><span style="color: #A6E22E">values</span><span style="color: #F8F8F2">()){</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(value)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// &lt;span class=&quot;text&quot;&gt;1&lt;/span&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// &lt;span class=&quot;text&quot;&gt;2&lt;/span&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不要尝试使用for...in 来遍历一个NodeList对象中的元素。 此时会把NodeList对象中的length和item属性遍历出来。此外,
for...in不会保证访问这些属性的顺序。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> key </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> text){</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;key&#39;</span><span style="color: #F8F8F2">, key)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">  0 ,1 ,entries ,keys ,values ,forEach ,length ,item</span></span>
<span class="line"><span style="color: #88846F">  */</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for...of 循环将会正确的遍历 NodeList对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> tag </span><span style="color: #F92672">of</span><span style="color: #F8F8F2"> text){</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;tag&#39;</span><span style="color: #F8F8F2">, tag)</span></span>
<span class="line"><span style="color: #88846F">// &lt;span class=&quot;text&quot;&gt;1&lt;/span&gt;</span></span>
<span class="line"><span style="color: #88846F">// &lt;span class=&quot;text&quot;&gt;2&lt;/span&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深度遍历dom数" tabindex="-1"><a class="header-anchor" href="#深度遍历dom数" aria-hidden="true">#</a> 深度遍历DOM数</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">id</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;node-container&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">&lt;!-- player --&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">li</span><span style="color: #F8F8F2">&gt;kyrie&lt;/</span><span style="color: #F92672">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">li</span><span style="color: #F8F8F2">&gt;lebron&lt;/</span><span style="color: #F92672">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #F92672">img</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">src</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">alt</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #F92672">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  hello world</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">visitNode</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">n</span><span style="color: #F8F8F2">) { </span><span style="color: #88846F">// 访问节点信息</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">switch</span><span style="color: #F8F8F2">(n.nodeType) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">case</span><span style="color: #F8F8F2"> n.ELEMENT_NODE:</span></span>
<span class="line"><span style="color: #F8F8F2">      console.</span><span style="color: #A6E22E">info</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;------- element -------&#39;</span><span style="color: #F8F8F2">, n.nodeName)</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">break</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">case</span><span style="color: #F8F8F2"> n.TEXT_NODE:</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(n.textContent.</span><span style="color: #A6E22E">trim</span><span style="color: #F8F8F2">()){</span></span>
<span class="line"><span style="color: #F8F8F2">        console.</span><span style="color: #A6E22E">info</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;------- text -------&#39;</span><span style="color: #F8F8F2">, n.textContent)</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">break</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">case</span><span style="color: #F8F8F2"> n.COMMENT_NODE:</span></span>
<span class="line"><span style="color: #F8F8F2">      console.</span><span style="color: #A6E22E">info</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;------- comment------&#39;</span><span style="color: #F8F8F2">, n.textContent)</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">break</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// ----- 深度遍历 ----- </span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">traverse</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">root</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">visitNode</span><span style="color: #F8F8F2">(root)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> childNodes </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> root.childNodes</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(childNodes.length </span><span style="color: #F92672">&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    childNodes.</span><span style="color: #A6E22E">forEach</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">n</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">traverse</span><span style="color: #F8F8F2">(n)</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">------- element ------- DIV</span></span>
<span class="line"><span style="color: #88846F">------- comment------  player </span></span>
<span class="line"><span style="color: #88846F">------- element ------- UL</span></span>
<span class="line"><span style="color: #88846F">------- element ------- LI</span></span>
<span class="line"><span style="color: #88846F">------- text ------- kyrie</span></span>
<span class="line"><span style="color: #88846F">------- element ------- LI</span></span>
<span class="line"><span style="color: #88846F">------- text ------- lebron</span></span>
<span class="line"><span style="color: #88846F">------- element ------- LI</span></span>
<span class="line"><span style="color: #88846F">------- element ------- IMG</span></span>
<span class="line"><span style="color: #88846F">------- text -------  hello world</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 上面的方法使用的是递归, 可以使用while循环改写</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">同级dom节点, 从数组末尾取出dom元素读取信息, 如果其有子节点, 将子节点</span></span>
<span class="line"><span style="color: #88846F">反转 添加进数组。</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">traverse</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">root</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> array </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [root]</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">while</span><span style="color: #F8F8F2">(array.length </span><span style="color: #F92672">&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> node </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> array.</span><span style="color: #A6E22E">pop</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(node </span><span style="color: #F92672">==</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">) </span><span style="color: #F92672">break</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">visitNode</span><span style="color: #F8F8F2">(node)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> childNodes </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> node.childNodes</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(childNodes </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> childNodes.length) {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">Array</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">from</span><span style="color: #F8F8F2">(childNodes).</span><span style="color: #A6E22E">reverse</span><span style="color: #F8F8F2">().</span><span style="color: #A6E22E">forEach</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">n</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">        array.</span><span style="color: #A6E22E">push</span><span style="color: #F8F8F2">(n)</span></span>
<span class="line"><span style="color: #F8F8F2">      })</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">------- element ------- DIV</span></span>
<span class="line"><span style="color: #88846F">------- comment------  player </span></span>
<span class="line"><span style="color: #88846F">------- element ------- UL</span></span>
<span class="line"><span style="color: #88846F">------- element ------- LI</span></span>
<span class="line"><span style="color: #88846F">------- text ------- kyrie</span></span>
<span class="line"><span style="color: #88846F">------- element ------- LI</span></span>
<span class="line"><span style="color: #88846F">------- text ------- lebron</span></span>
<span class="line"><span style="color: #88846F">------- element ------- LI</span></span>
<span class="line"><span style="color: #88846F">------- element ------- IMG</span></span>
<span class="line"><span style="color: #88846F">------- text -------  hello world</span></span>
<span class="line"><span style="color: #88846F">*/</span><span style="color: #F8F8F2"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="广度遍历dom数" tabindex="-1"><a class="header-anchor" href="#广度遍历dom数" aria-hidden="true">#</a> 广度遍历DOM数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">/*把同一层的所有DOM节点添加进数组,依次遍历,如果有子节点,然后将子节点遍历添加进数组*/</span></span>
<span class="line"><span style="color: #88846F">// 从头部取出父节点,如果有子节点然后将子节点依次push进数组</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">traverse</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">root</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> array </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [root]</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">while</span><span style="color: #F8F8F2">(array.length </span><span style="color: #F92672">&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> node </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> array.</span><span style="color: #A6E22E">shift</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(node </span><span style="color: #F92672">==</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">) </span><span style="color: #F92672">break</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">visitNode</span><span style="color: #F8F8F2">(node)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(node.childNodes </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> node.childNodes.length </span><span style="color: #F92672">&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">      node.childNodes.</span><span style="color: #A6E22E">forEach</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">n</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">        array.</span><span style="color: #A6E22E">push</span><span style="color: #F8F8F2">(n)</span></span>
<span class="line"><span style="color: #F8F8F2">      })</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">------- element ------- DIV</span></span>
<span class="line"><span style="color: #88846F">------- comment------  player </span></span>
<span class="line"><span style="color: #88846F">------- element ------- UL</span></span>
<span class="line"><span style="color: #88846F">------- text ------- hello world</span></span>
<span class="line"><span style="color: #88846F">------- element ------- LI</span></span>
<span class="line"><span style="color: #88846F">------- element ------- LI</span></span>
<span class="line"><span style="color: #88846F">------- element ------- LI</span></span>
<span class="line"><span style="color: #88846F">------- text ------- kyrie</span></span>
<span class="line"><span style="color: #88846F">------- text ------- lebron</span></span>
<span class="line"><span style="color: #88846F">------- element ------- IMG</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
