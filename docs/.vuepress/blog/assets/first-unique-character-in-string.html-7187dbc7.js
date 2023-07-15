import{_ as s}from"./framework-c27b6911.js";import{o as n,c as a,b as l}from"./app-ec006255.js";const p={},o=l(`<h1 id="字符串中的第一个唯一字符" tabindex="-1"><a class="header-anchor" href="#字符串中的第一个唯一字符" aria-hidden="true">#</a> 字符串中的第一个唯一字符</h1><p>给定一个字符串 <strong>s</strong>, 找到 它的第一个不重复的字符, 并返回它的索引。如果不存在, 则返回 <strong>-1</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> s </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;leetcode&#39;</span></span>
<span class="line"><span style="color:#88846F;">// 输出 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> s </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;loveleetcode&#39;</span></span>
<span class="line"><span style="color:#88846F;">// 输出2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> s </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;aabb&#39;</span></span>
<span class="line"><span style="color:#88846F;">// -1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><p>遍历两次字符串, 第一个遍历的时候 存储每个字符 出现的次数, 第二个遍历的时候, 找到那个出现次数为1的字符 并返回此时的下标。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">first_unique_character</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">s</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> map</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Map</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Map</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> s.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> item </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> s.</span><span style="color:#A6E22E;">charAt</span><span style="color:#F8F8F2;">(i)</span></span>
<span class="line"><span style="color:#F8F8F2;">    map.</span><span style="color:#A6E22E;">has</span><span style="color:#F8F8F2;">(item) </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> map.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(item, map.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(item) </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> map.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(item, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> s.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> character </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> s.</span><span style="color:#A6E22E;">charAt</span><span style="color:#F8F8F2;">(i)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (map.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(character) </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> i</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[o];function t(F,c){return n(),a("div",null,e)}const y=s(p,[["render",t],["__file","first-unique-character-in-string.html.vue"]]);export{y as default};
