import{_ as s}from"./framework-c27b6911.js";import{o as n,c as l,b as a}from"./app-ec006255.js";const p={},o=a(`<h1 id="完全平方数" tabindex="-1"><a class="header-anchor" href="#完全平方数" aria-hidden="true">#</a> 完全平方数</h1><p>给你一个整数 <strong>n</strong>, 返回 和为 <strong>n</strong> 的完全平方数的 最少数量。 <strong>完全平方数</strong> 是一个整数, 其值等于另一个整数的平方. 例如 <em>1</em> <em>4</em> <em>9</em> 都是完全平方数, 而 <em>3</em> 和 <em>11</em> 不是。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> n </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">12</span></span>
<span class="line"><span style="color:#88846F;">// 输出3   12 = 4 + 4 + 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> n </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">13</span></span>
<span class="line"><span style="color:#88846F;">// 输出 2   13 = 4 + 9</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法一</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">nums_squares</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">n</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 存储小于n 的所有完全平方数</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> queue</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> []</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (j </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">&lt;=</span><span style="color:#F8F8F2;"> n) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// 如果这个数正好可以 开方, 它是一个完全平方数, 直接返回1。</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (j </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> j </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> n) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    queue.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(j </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> j)</span></span>
<span class="line"><span style="color:#F8F8F2;">    j</span><span style="color:#F92672;">++</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> step </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 每次都从完全平方数里找</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> nums </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">...</span><span style="color:#F8F8F2;">queue]</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> visited</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> {[</span><span style="color:#FD971F;font-style:italic;">key</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">]</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> } </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {}</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> (queue.length) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    step </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> queue.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> num </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> queue.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">() </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span></span>
<span class="line"><span style="color:#F8F8F2;">      visited[num] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> nums) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> sum </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> num</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (sum </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> n) {</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> step</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (sum </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> n) {</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#F92672;">break</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (visited[sum] </span><span style="color:#F92672;">!==</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">          queue.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(sum)</span></span>
<span class="line"><span style="color:#F8F8F2;">          visited[sum] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),e=[o];function F(c,t){return n(),l("div",null,e)}const y=s(p,[["render",F],["__file","square-number.html.vue"]]);export{y as default};
