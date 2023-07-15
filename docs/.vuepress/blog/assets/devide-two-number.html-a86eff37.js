import{_ as s}from"./framework-c27b6911.js";import{o as n,c as l,b as a}from"./app-ec006255.js";const p={},o=a(`<h1 id="两数相除" tabindex="-1"><a class="header-anchor" href="#两数相除" aria-hidden="true">#</a> 两数相除</h1><p>给定两个整数, 被除数 <strong>dividend</strong> 和 除数 <strong>divisor</strong>。将两数相除, 要求不使用乘法, 除法 和 mod 运算符。返回 被除数 <strong>dividend</strong> 除以 <strong>divisor</strong> 得到的商。 整数除法的结果应该截取其小数部分。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">dividend </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">10</span><span style="color:#F8F8F2;">, divisor </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">3</span></span>
<span class="line"><span style="color:#88846F;">// 输出 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">dividend </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">, divisor </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自己的第一个想法是将除数 <strong>divisor</strong> 累加, 但是在 被除数 <strong>dividend</strong> 很大而除数 <strong>divisor</strong> 很小的时候, 需要做很多次循环。测试时超时未通过。 在评论中看到一种算法, 每次将除数翻倍 累加, 来减少循环次数!</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">divide</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">dividend</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">divisor</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (divisor </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">||</span><span style="color:#F8F8F2;"> dividend </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> is_same_symbol </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (dividend </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> divisor </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">||</span><span style="color:#F8F8F2;"> (dividend </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> divisor </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (dividend </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    dividend </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">abs</span><span style="color:#F8F8F2;">(dividend)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (divisor </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    divisor </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">abs</span><span style="color:#F8F8F2;">(divisor)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">_func</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">c</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">d</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (d </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> c) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> count </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> sum </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> d</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// 注意此处不是 sum, 而是 sum + sum, 如果是sum, 那么就不是翻倍累加 而是 每次以相同速度递增累加了。</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> ((sum </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> sum) </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> c) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      count </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> count</span></span>
<span class="line"><span style="color:#F8F8F2;">      sum </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> sum</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">/**</span></span>
<span class="line"><span style="color:#88846F;">     * 以 11 / 2 为例</span></span>
<span class="line"><span style="color:#88846F;">     * count = 1      第一次比较 (2 + 2) &lt; 11</span></span>
<span class="line"><span style="color:#88846F;">     * count = 2      sum = 4   (4 + 4) &lt; 11</span></span>
<span class="line"><span style="color:#88846F;">     * count = 4      sum = 8   (8 + 8) &gt; 11 跳出循环</span></span>
<span class="line"><span style="color:#88846F;">     * 因为最后一次 累加超过被除数了, 将被除数 减去 上一次 累加的值, 此时是剩余的</span></span>
<span class="line"><span style="color:#88846F;">     * (上一次是 count = 4, sum = 8, 也就是4 * 2 = 8, 剩下的 3 / 2 等于多少？  和之前的count相加即可)</span></span>
<span class="line"><span style="color:#88846F;">    */</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> count </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">_func</span><span style="color:#F8F8F2;">(c </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> sum, d)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> result </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">_func</span><span style="color:#F8F8F2;">(dividend, divisor)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">is_same_symbol </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> (result </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> result))</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (result </span><span style="color:#F92672;">&gt;=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">pow</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">31</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">||</span><span style="color:#F8F8F2;"> result </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">pow</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">31</span><span style="color:#F8F8F2;">)) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">pow</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">31</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> result</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),F=[o];function e(t,c){return n(),l("div",null,F)}const y=s(p,[["render",e],["__file","devide-two-number.html.vue"]]);export{y as default};
