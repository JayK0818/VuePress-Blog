import{_ as s}from"./framework-c27b6911.js";import{o as n,c as l,b as a}from"./app-ec006255.js";const p={},o=a(`<h1 id="旋转数组" tabindex="-1"><a class="header-anchor" href="#旋转数组" aria-hidden="true">#</a> 旋转数组</h1><h2 id="寻找旋转排序数组中的最小值" tabindex="-1"><a class="header-anchor" href="#寻找旋转排序数组中的最小值" aria-hidden="true">#</a> 寻找旋转排序数组中的最小值</h2><p>已知一个长度为 <strong>n</strong> 的数组, 预先按照升序排列, 经由 <em>1</em> 到 <em>n</em> 此旋转后,得到输入数组。 例如: 原数组 <em>nums = [0,1,2,3,4,5,6,7]</em> 在变化后可能得到:</p><ol><li>若旋转 <strong>4</strong> 次, 则可以得到 <strong>[4,5,6,7,0,1,2]</strong></li><li>若旋转 <strong>7</strong> 次, 则可以得到 <strong>[0,1,2,4,5,6,7]</strong></li></ol><p>给你一个元素值 <strong>互不相同</strong> 的数组 <strong>nums</strong>, 它原来是一个升序排列的数组, 并按上述情形进行了多次旋转, 请你找出并返回数组中的 <strong>最小元素</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// 输出1</span></span>
<span class="line"><span style="color:#88846F;">// 原数组为 [1, 2, 3, 4, 5] 旋转3次得到输入数组</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">6</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// 输出 0</span></span>
<span class="line"><span style="color:#88846F;">// 原数组为 [0, 1, 2, 4, 5, 6, 7] 旋转4次得到输入数组。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><p>遍历数组, 找到某个临界点, 因为旋转后 它是两段 从小到大排序的数据。临界点下标所对应的值 即为 最小值!</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">find_min</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[])</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> start </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> prev </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums[i]</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> next </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums[i</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (next </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> prev) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      start </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">break</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> nums[start]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法二</strong></p><p>使用二分法, 如果当前下标所对应的值小于右指针对应的值,那么 目标值应该在当前下标<em>middle</em>左侧, 否则在<em>middle</em>右侧。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">find_min</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[]) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums.length </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> nums[</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> start </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> end </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (start </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> end) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> middle </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">((start </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> end) </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums[middle] </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> nums[end]) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      end </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> middle</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      start </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> middle </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> nums[end]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="寻找旋转排序数组中的最小值-ii" tabindex="-1"><a class="header-anchor" href="#寻找旋转排序数组中的最小值-ii" aria-hidden="true">#</a> 寻找旋转排序数组中的最小值 II</h2><p>在上题的基础之上, 数组中元素可能会重复。它原来是一个升序排列的数组, 请找出并返回数组中的 <strong>最小元素</strong>。</p><p>如果数组中有重复元素, 此时比较难以判断 目标值 到底在 <strong>middle</strong> 的左侧还是右侧, 举个例子,数组 <em>[2, 2, 2, 2, 0, 1, 2]</em>, 它是数组*[0, 1, 2, 2, 2, 2, 2]* 经过旋转4次之后得到的数据, 使用二分法 第一次处理时, <em>middle = 3</em>, 此时怎么判断临界点在左侧还是右侧是个难点。</p><ul><li>将等于的情况放到最后一步考虑,如果<em>nums[middle] &lt; nums[end]</em>, 此时可以肯定 <strong>最小值</strong> 在 <em>middle</em> 的左侧。</li><li>如果<em>nums[middle] &gt; nums[start]</em>, 此时可以肯定 <strong>最小值</strong> 在<em>middle</em> 右侧。</li><li>上述两点都不满足的话, 逐步缩小 right 指针的位置。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">find_min</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[])</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> start </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (start </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> right) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">((start </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> right) </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums[mid] </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> nums[right]) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums[mid] </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> nums[right]) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      start </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      right </span><span style="color:#F92672;">-=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> right</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索旋转数组目标值" tabindex="-1"><a class="header-anchor" href="#搜索旋转数组目标值" aria-hidden="true">#</a> 搜索旋转数组目标值</h2><p>整数数组 <strong>nums</strong> 按升序排列, 数组中的值 <strong>互不相同</strong>, 在传递给函数之前, <strong>nums</strong> 在预先未知的某个下标 <strong>k</strong> 上进行了旋转。给你旋转后的数组 <strong>nums</strong> 和一个整数 <strong>target</strong>, 如果 <strong>nums</strong> 中存在这个目标值 <strong>target</strong>, 则返回它的下标, 否则返回 <strong>-1</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">6</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">], target </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#88846F;">// 输出 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">6</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">], target </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">3</span></span>
<span class="line"><span style="color:#88846F;">// 输出 -1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">], target </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#88846F;">// 输出 -1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><p>采用二分法 先找到临界点在哪个位置, 然后判断 目标值 <strong>target</strong> 在哪个区间, 再次使用二分法 找到目标值 <strong>target</strong> 的下标并返回, 没有找到则返回 <strong>-1</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">find_number_in_rotate_array</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[], </span><span style="color:#FD971F;font-style:italic;">target</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (left </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> right) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">((left </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> right) </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums[mid] </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> nums[right]) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 左侧</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (target </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> nums[nums.length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">]) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">    right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> right </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">  } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> nums.length </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (left </span><span style="color:#F92672;">&lt;=</span><span style="color:#F8F8F2;"> right) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">((left </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> right) </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums[mid] </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> target) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> mid</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums[mid] </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> target) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法二</strong></p><p>上述方案使用了 两次 二分法。现在使用一次 二分法 找出 <strong>target</strong> 所对应的下标。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">find_target_in_rotate_array</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[], </span><span style="color:#FD971F;font-style:italic;">target</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (left </span><span style="color:#F92672;">&lt;=</span><span style="color:#F8F8F2;"> right) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">((left </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> right) </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// 如果当前下标对应的值 正好等于 target, 直接返回</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums[mid] </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> target) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> mid</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// [left----&gt;mid] 这部分是递增的</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums[mid] </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> nums[right]) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// 判断target 是否在 [left, mid) 区间内</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (nums[left] </span><span style="color:#F92672;">&lt;=</span><span style="color:#F8F8F2;"> target </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> target </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> nums[mid]) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">      } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// [mid, right] 这部分是递增的, 判断target是否在此区间内</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (target </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> nums[mid] </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> nums[right] </span><span style="color:#F92672;">&gt;=</span><span style="color:#F8F8F2;"> target ) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">      } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> [</span></span>
<span class="line"><span style="color:#F8F8F2;">        right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> mid </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">      ]</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),F=[o];function e(t,c){return n(),l("div",null,F)}const y=s(p,[["render",e],["__file","rotate-array.html.vue"]]);export{y as default};
