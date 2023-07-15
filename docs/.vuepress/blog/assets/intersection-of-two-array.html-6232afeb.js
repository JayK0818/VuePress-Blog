import{_ as s}from"./framework-c27b6911.js";import{o as n,c as a,b as l}from"./app-ec006255.js";const p={},o=l(`<h1 id="两个数组的交集" tabindex="-1"><a class="header-anchor" href="#两个数组的交集" aria-hidden="true">#</a> 两个数组的交集</h1><p>给定两个数组 <strong>nums1</strong> 和 <strong>nums2</strong>, 返回 <em>它们的交集</em>。输出结果中的 每个元素是唯一的。 我们可以 <strong>不考虑输出的结果顺序</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums1 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums2 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// 输出 [2]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums1 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">9</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums2 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">9</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">9</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">8</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// [9, 4]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">intersection</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums1</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[], </span><span style="color:#FD971F;font-style:italic;">nums2</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[])</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[] </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> set</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Set</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Set</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> num </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> nums1) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums2.</span><span style="color:#A6E22E;">includes</span><span style="color:#F8F8F2;">(num)) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      set.</span><span style="color:#A6E22E;">add</span><span style="color:#F8F8F2;">(num)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">...</span><span style="color:#F8F8F2;">set]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法二</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">intersection</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums1</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[], </span><span style="color:#FD971F;font-style:italic;">nums2</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[])</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[] </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> set </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Set</span><span style="color:#F8F8F2;">(nums2)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">...new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Set</span><span style="color:#F8F8F2;">(nums1.</span><span style="color:#A6E22E;">filter</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">item</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> set.</span><span style="color:#A6E22E;">has</span><span style="color:#F8F8F2;">(item)))]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="两个数组的交集ii" tabindex="-1"><a class="header-anchor" href="#两个数组的交集ii" aria-hidden="true">#</a> 两个数组的交集II</h1><p>给你两个整数数组 <strong>nums1</strong> 和 <strong>nums2</strong>, 请你以数组形式返回数组的交集。返回结果中每个元素出现的次数,应与元素在两个数组中都出现的次数一致。 (如果出现次数不一致, 则考虑取较小值), 可以不考虑输出结果的顺序。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums1 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">], nums2 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// 输出 [2, 2]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums1 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">9</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">], nums2 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">9</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">9</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">8</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// 输出 4 9</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><p>定义两个map结构分别存储两个数组中数字出现的次数, 键名为数组项, 键值为出现次数。遍历其中一个map数据, 判断键名是否是交集, 如果是的话 判断它应该出现几次。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">intersection</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums1</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[], </span><span style="color:#FD971F;font-style:italic;">nums2</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[])</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[] </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> map1</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Map</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Map</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> map2</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Map</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Map</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> item </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> nums1) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    map1.</span><span style="color:#A6E22E;">has</span><span style="color:#F8F8F2;">(item) </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> map1.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(item, map1.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(item) </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> map1.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(item, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> item </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> nums2) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    map2.</span><span style="color:#A6E22E;">has</span><span style="color:#F8F8F2;">(item) </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> map2.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(item, map2.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(item) </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> map2.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(item, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> temp</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> []</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> [key, value] </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> map1.</span><span style="color:#A6E22E;">entries</span><span style="color:#F8F8F2;">()) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">map2.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(key)) </span><span style="color:#F92672;">continue</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> value </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> (map2.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(key) </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> map2.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(key) </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> value</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      temp.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(key)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> temp</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法二</strong></p><p>题解中看到的一种方法, 使用哈希表存储较短的数组。同样键名为数组项, 键值为该项出现的次数。遍历第二个数组的时候, 如果存在交集, 将其添加进一个空数组, 并把该数据在hash表中的次数 -1。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">intersection</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums1</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[], </span><span style="color:#FD971F;font-style:italic;">nums2</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[] </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums1.length </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> nums2.length) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">intersect</span><span style="color:#F8F8F2;">(nums2, nums1)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 存储其中较短数组 每项 出现的次数</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> map</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Map</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Map</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> item </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> nums1) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    map.</span><span style="color:#A6E22E;">has</span><span style="color:#F8F8F2;">(item) </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> map.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(item, map.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(item) </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> map.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(item, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> temp</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> []</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> item </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> nums2) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">map.</span><span style="color:#A6E22E;">has</span><span style="color:#F8F8F2;">(item)) </span><span style="color:#F92672;">continue</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> n </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> map.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(item) </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (n </span><span style="color:#F92672;">&gt;=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      temp.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(item)</span></span>
<span class="line"><span style="color:#F8F8F2;">      map.</span><span style="color:#A6E22E;">set</span><span style="color:#F8F8F2;">(item, </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">n)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> temp</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),F=[o];function e(t,c){return n(),a("div",null,F)}const i=s(p,[["render",e],["__file","intersection-of-two-array.html.vue"]]);export{i as default};
