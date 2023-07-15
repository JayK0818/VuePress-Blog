import{_ as s}from"./framework-c27b6911.js";import{o as n,c as a,b as l}from"./app-ec006255.js";const o={},p=l(`<h1 id="翻转字符串里的单词" tabindex="-1"><a class="header-anchor" href="#翻转字符串里的单词" aria-hidden="true">#</a> 翻转字符串里的单词</h1><p>给你一个字符串 <strong>s</strong>, 请你反转字符串中 <strong>单词</strong> 的顺序。 <strong>单词</strong> 是由非空格字符 组成的字符串。 <strong>s</strong> 中使用至少一个空格 将字符串中的 <strong>单词</strong> 分隔开。 返回 <strong>单词</strong> 顺序颠倒 且 <strong>单词</strong> 之间用单个空格连接的结果字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> s </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;the sky is blue&quot;</span></span>
<span class="line"><span style="color:#88846F;">// output &quot;blue is sky the&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> s </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;  hello world  &quot;</span></span>
<span class="line"><span style="color:#88846F;">// &quot;world hello&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><p>先将字符串通过 空格 分割为数组 并过滤掉数组中多余的空格, 然后去除每个单词的 前后空格 最后 再将数组 倒置后 处理为字符串输出 即可。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">reverse_words</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">s</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> s.</span><span style="color:#A6E22E;">split</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39; &#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">filter</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">item</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Boolean</span><span style="color:#F8F8F2;">(item)).</span><span style="color:#A6E22E;">map</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">item</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> item.</span><span style="color:#A6E22E;">trim</span><span style="color:#F8F8F2;">()).</span><span style="color:#A6E22E;">reverse</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">join</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39; &#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法二</strong></p><p>上面的split方法 参数是一个空格, 如果中间有多余空格 分割后的数组后 会多一个空字符串 [&#39;&#39;], 所以需要再过滤掉多余的空字符串。字符串的 split方法 参数 分隔符 既可以使用 字符串, 也可以 传递一个正则表达式。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">reverse_words</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">s</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> s.</span><span style="color:#A6E22E;">trim</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">split</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">/</span><span style="color:#AE81FF;">\\s</span><span style="color:#F92672;">+</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">map</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">item</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> item.</span><span style="color:#A6E22E;">trim</span><span style="color:#F8F8F2;">()).</span><span style="color:#A6E22E;">reverse</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">join</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39; &#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法三</strong></p><p>利用双指针算法, 首位两个指针 交换当前位置的 字符串, 然后首位指针分别向中间靠拢 直到相遇</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">reverse_words</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">s</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> array </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> s.</span><span style="color:#A6E22E;">trim</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">split</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">/</span><span style="color:#AE81FF;">\\s</span><span style="color:#F92672;">+</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> array.length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> j) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    [array[i], array[j]] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [array[j], array[i]]</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> array.</span><span style="color:#A6E22E;">join</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39; &#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),e=[p];function t(r,F){return n(),a("div",null,e)}const y=s(o,[["render",t],["__file","reverse-string-word.html.vue"]]);export{y as default};
