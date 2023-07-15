import{_ as s}from"./framework-c27b6911.js";import{o as n,c as l,b as a}from"./app-ec006255.js";const p={},o=a(`<h1 id="长度最小子数组" tabindex="-1"><a class="header-anchor" href="#长度最小子数组" aria-hidden="true">#</a> 长度最小子数组</h1><p>给定一个含有 <strong>n</strong> 个正整数的数组和一个正整数 <strong>target</strong>, 找出该数组中满足其和 <strong>&gt;=target</strong> 的长度最小的 <strong>连续子数组</strong>, 并返回其长度, 如果不存在符合条件的子数组, 返回 0.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">], target </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">7</span></span>
<span class="line"><span style="color:#88846F;">// 输出2 子数组[4, 3] 是该条件下的长度最小的子数组。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><p>暴力破解, 依次计算满足条件的子数组, 再判断长度是否为最小值。 最后返回最小值长度!</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">min_sub_array_length</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[], </span><span style="color:#FD971F;font-style:italic;">target</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.length</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (length </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> sum </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.</span><span style="color:#A6E22E;">reduce</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;font-style:italic;">p</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">n</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> p </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> n, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (sum </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> target) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> min </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">Infinity</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> i</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">; j </span><span style="color:#F92672;">&lt;=</span><span style="color:#F8F8F2;"> length; j</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> sub_array </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.</span><span style="color:#A6E22E;">slice</span><span style="color:#F8F8F2;">(i, j)</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> sum </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> sub_array.</span><span style="color:#A6E22E;">reduce</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;font-style:italic;">p</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">n</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> p </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> n, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (sum </span><span style="color:#F92672;">&gt;=</span><span style="color:#F8F8F2;"> target) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        min </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">min</span><span style="color:#F8F8F2;">(min, sub_array.length)</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">break</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> min</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个算法超过时间限制 没有通过</p><p><strong>解法二</strong></p><p>双指针法, 在评论区看到的一种算法, 利用快慢指针, 找到满足条件的区间, 此时 移动慢指针, 判断移动慢指针时是否还满足 区间之和大于等于 <strong>target</strong>, 如果不满足,继续移动快指针!</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">min_sub_array_length</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">target</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[])</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> sum </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.</span><span style="color:#A6E22E;">reduce</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;font-style:italic;">p</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">n</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> p </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> n, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (sum </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> target) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.length</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> min </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> length</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> slow </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> result </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    result </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> nums[i]</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (result </span><span style="color:#F92672;">&gt;=</span><span style="color:#F8F8F2;"> target) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (</span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (result </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> nums[slow] </span><span style="color:#F92672;">&gt;=</span><span style="color:#F8F8F2;"> target) {</span></span>
<span class="line"><span style="color:#F8F8F2;">          result </span><span style="color:#F92672;">-=</span><span style="color:#F8F8F2;"> nums[slow]</span></span>
<span class="line"><span style="color:#F8F8F2;">          slow </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">        } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#F92672;">break</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">      min </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">min</span><span style="color:#F8F8F2;">(min, i </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> slow </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> min</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),F=[o];function e(t,c){return n(),l("div",null,F)}const i=s(p,[["render",e],["__file","min-sub-array-length.html.vue"]]);export{i as default};
