import{_ as s}from"./framework-c27b6911.js";import{o as n,c as l,b as a}from"./app-ec006255.js";const p={},o=a(`<h1 id="存在重复元素" tabindex="-1"><a class="header-anchor" href="#存在重复元素" aria-hidden="true">#</a> 存在重复元素</h1><p>给你一个整数数组 <em>nums</em>。如果任一值在数组中 <strong>至少出现两次</strong>, 返回 <em>true</em>, 如果数组中每个元素互不相同。返回 <em>false</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这道题比较简单, 遍历数组使用set存储每个元素, 每次遍历时查询当前元素是否已经存在于set数据结构里, 如果存在 直接返回true。</p><p><strong>解法一</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">contains_duplicate_item</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[])</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">boolean</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> set</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Set</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Set</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> n </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> nums) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (set.</span><span style="color:#A6E22E;">has</span><span style="color:#F8F8F2;">(n)) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      set.</span><span style="color:#A6E22E;">add</span><span style="color:#F8F8F2;">(n)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="存在重复元素ii" tabindex="-1"><a class="header-anchor" href="#存在重复元素ii" aria-hidden="true">#</a> 存在重复元素II</h2><p>给你一个整数数组 <strong>nums</strong> 和 一个整数 <em>k</em>, 判断数组中是否存在两个 <strong>不同的索引</strong> <em>i</em> 和 <em>j</em>, 满足 <em>nums[i] = nums[j]</em> 且 <strong>abs(i - j) &lt;= k</strong>。如果存在返回 <em>true</em>, 否则 返回 <em>false</em>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">], k </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">3</span></span>
<span class="line"><span style="color:#88846F;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">], k </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#88846F;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">], k </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span></span>
<span class="line"><span style="color:#88846F;">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><p>定义一个map存储数组每项出现的下标, 然后遍历Map, 判断存储的下标数组是否存在 <em>i - j &lt;= k</em> 的条件, 有的话返回true, 否则返回false.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">has_repeat_item</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[], </span><span style="color:#FD971F;font-style:italic;">k</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">boolean</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> map</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Map</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[]&gt; </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Map</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.length; i</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> n </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums[i]</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> temp</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> map.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(n) </span><span style="color:#F92672;">||</span><span style="color:#F8F8F2;"> []</span></span>
<span class="line"><span style="color:#F8F8F2;">    temp.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(i)</span></span>
<span class="line"><span style="color:#F8F8F2;">    map.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(n, temp)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> value </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> map.</span><span style="color:#A6E22E;">values</span><span style="color:#F8F8F2;">()) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> value.length</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (length </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">continue</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">; j </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; j</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (value[j] </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> value[i] </span><span style="color:#F92672;">&lt;=</span><span style="color:#F8F8F2;"> k) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法二</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">has_repeat_item</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[], </span><span style="color:#FD971F;font-style:italic;">k</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">boolean</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> map</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Map</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Map</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> n </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums[i]</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (map.</span><span style="color:#A6E22E;">has</span><span style="color:#F8F8F2;">(n)) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> diff </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> (map.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(n) </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (diff </span><span style="color:#F92672;">&lt;=</span><span style="color:#F8F8F2;"> k) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    map.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(n, i)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),e=[o];function F(t,c){return n(),l("div",null,e)}const i=s(p,[["render",F],["__file","has-repeat-item.html.vue"]]);export{i as default};
