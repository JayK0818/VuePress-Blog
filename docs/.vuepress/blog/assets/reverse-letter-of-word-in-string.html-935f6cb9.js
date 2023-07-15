import{_ as s}from"./framework-c27b6911.js";import{o as n,c as a,b as l}from"./app-ec006255.js";const o={},p=l(`<h1 id="反转字符串中的单词" tabindex="-1"><a class="header-anchor" href="#反转字符串中的单词" aria-hidden="true">#</a> 反转字符串中的单词</h1><p>给定一个字符串 <strong>s</strong>, 你需要反转字符串中每个单词的字符顺序, 同时扔保留空格和单词的初始顺序! <strong>s</strong> 不包含任何收尾空格并且其中的所有单词都用一个空格隔开。 <strong>s</strong> 里至少有一个单词。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> s </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;Let&#39;s take LeetCode contest&quot;</span></span>
<span class="line"><span style="color:#88846F;">// 输出 &quot;s&#39;teL ekat edoCteeL tsetnoc&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><p>将字符串转换成数组处理, 遍历数组依次处理每个单词, 同样将单词转换成数组处理, 将数组收尾下标对应的字母对换即可。最后将数组处理成字符串输出!</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">reverse_word</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">s</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> array </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> s.</span><span style="color:#A6E22E;">split</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">/</span><span style="color:#AE81FF;">\\s</span><span style="color:#F92672;">+</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> array.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> word </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> array[i]</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> start </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> end </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> word.length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> word_array </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> word.</span><span style="color:#A6E22E;">split</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (start </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> end) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      [word_array[start], word_array[end]] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [word_array[end], word_array[start]]</span></span>
<span class="line"><span style="color:#F8F8F2;">      start </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">      end </span><span style="color:#F92672;">-=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    array[i] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> word_array.</span><span style="color:#A6E22E;">join</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> array.</span><span style="color:#A6E22E;">join</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39; &#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法二</strong></p><p>跟上面的解法差不多, 只不过在处理单词时不转换为数组, 而是直接将字符串倒序遍历拼接成一个新的字符串。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">reverse_word</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">s</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> array </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> s.</span><span style="color:#A6E22E;">split</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">/</span><span style="color:#AE81FF;">\\s</span><span style="color:#F92672;">+</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> array.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> word </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> array[i]</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> string </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> word.length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">; j </span><span style="color:#F92672;">&gt;=</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; j</span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      string </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> word[j]</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    array[i] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> string</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> array.</span><span style="color:#A6E22E;">join</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39; &#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=[p];function F(t,r){return n(),a("div",null,e)}const y=s(o,[["render",F],["__file","reverse-letter-of-word-in-string.html.vue"]]);export{y as default};
