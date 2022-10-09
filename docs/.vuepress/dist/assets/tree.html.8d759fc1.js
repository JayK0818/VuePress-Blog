import{_ as s,o as n,c as l,d as a}from"./app.7b5becf5.js";const p={},e=a(`<h1 id="\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811" aria-hidden="true">#</a> \u4E8C\u53C9\u6811</h1><h2 id="\u6570\u7EC4\u8F6C\u5316\u6811" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u8F6C\u5316\u6811" aria-hidden="true">#</a> \u6570\u7EC4\u8F6C\u5316\u6811</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Tree</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  value</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span></span>
<span class="line"><span style="color:#F8F8F2;">  left</span><span style="color:#F92672;">?:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Tree</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  right</span><span style="color:#F92672;">?:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Tree</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">create_tree</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">array</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[])</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Tree</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(array.length </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> { value: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> tree_node</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Tree</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {value: array.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">()} </span><span style="color:#88846F;">// \u6839\u8282\u70B9</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> root</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Tree</span><span style="color:#F8F8F2;">[] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [tree_node]</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">while</span><span style="color:#F8F8F2;">(array.length </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// \u6BCF\u6B21\u53D6\u51FA\u6765\u7684\u65F6\u5019 \u5F53\u524D\u5BF9\u8C61\u90FD\u662F\u4E0A\u4E00\u4E2A\u5BF9\u8C61\u7684 left \u6216\u8005 right \u8282\u70B9</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> node </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> root.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">array.length) </span><span style="color:#F92672;">break</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      value: array.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    node.left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> left</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// \u5DE6\u8282\u70B9</span></span>
<span class="line"><span style="color:#F8F8F2;">    root.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(left)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">array.length) </span><span style="color:#F92672;">break</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      value: array.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// \u53F3\u8282\u70B9</span></span>
<span class="line"><span style="color:#F8F8F2;">    node.right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> right</span></span>
<span class="line"><span style="color:#F8F8F2;">    root.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(right)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> tree_node</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(create_tree[</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">6</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">])</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">{</span></span>
<span class="line"><span style="color:#88846F;">  value: 1,</span></span>
<span class="line"><span style="color:#88846F;">  left: {</span></span>
<span class="line"><span style="color:#88846F;">    value: 2, </span></span>
<span class="line"><span style="color:#88846F;">    left: { value: 4},</span></span>
<span class="line"><span style="color:#88846F;">    right: { value: 5}</span></span>
<span class="line"><span style="color:#88846F;">  },</span></span>
<span class="line"><span style="color:#88846F;">  right: {</span></span>
<span class="line"><span style="color:#88846F;">    value: 3,</span></span>
<span class="line"><span style="color:#88846F;">    left: {value: 6},</span></span>
<span class="line"><span style="color:#88846F;">    right: {value: 7}</span></span>
<span class="line"><span style="color:#88846F;">  }</span></span>
<span class="line"><span style="color:#88846F;">}</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">create_tree</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">array</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">array.length) </span><span style="color:#F92672;">return</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> tree </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [];</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> root </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">;  </span><span style="color:#88846F;">// \u6839\u8282\u70B9</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> array.length; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> value </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> array[i]</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> node </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> { value }  </span><span style="color:#88846F;">// \u5C06\u6240\u6709\u8282\u70B9\u7528\u53D8\u91CF\u4FDD\u5B58\u5E76\u6DFB\u52A0\u8FDB\u6570\u7EC4</span></span>
<span class="line"><span style="color:#F8F8F2;">    tree.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(node)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">( i </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// \u7D22\u5F15\u548C \u7236\u8282\u70B9\u4E4B\u95F4\u7684\u5173\u7CFB</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> parent_node </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> tree[</span><span style="color:#66D9EF;">Math</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;">floor</span><span style="color:#F8F8F2;">((i</span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">)] </span><span style="color:#88846F;">// \u7236\u8282\u70B9</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">parent_node.left) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        parent_node.left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> node</span></span>
<span class="line"><span style="color:#F8F8F2;">      } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        parent_node.right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> node</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      root </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> node</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> root</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">create_tree_2</span><span style="color:#F8F8F2;">([</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">6</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">]))</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u53C9\u6811\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u904D\u5386" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u904D\u5386</h2><p>\u6839\u636E\u6839\u8282\u70B9\u5728\u904D\u5386\u65F6\u7684\u4F4D\u7F6E \u53EF\u4EE5\u5206\u4E3A \u524D\u5E8F\u904D\u5386, \u4E2D\u5E8F\u904D\u5386, \u540E\u5E8F\u904D\u5386\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> binary_tree </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  value: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  left: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    value: </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    left: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      value: </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    right: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      value: </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  right: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    value: </span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    left: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      value: </span><span style="color:#AE81FF;">6</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    right: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      value: </span><span style="color:#AE81FF;">7</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">// \u524D\u5E8F\u904D\u5386</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">front_tree_map</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">node</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">TreeNodeProps</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">node) </span><span style="color:#F92672;">return</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(node.value)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">front_tree_map</span><span style="color:#F8F8F2;">(node.left)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">front_tree_map</span><span style="color:#F8F8F2;">(node.right)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">front_tree_map</span><span style="color:#F8F8F2;">(binary_tree) </span><span style="color:#88846F;">// 1 2 3 4 5 6 7</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// \u4E2D\u5E8F\u904D\u5386</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">middle_tree_map</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">node</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">TreeNodeProps</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">node) </span><span style="color:#F92672;">return</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">middle_tree_map</span><span style="color:#F8F8F2;">(node.left)</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(node.value)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">middle_tree_map</span><span style="color:#F8F8F2;">(node.right)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">middle_tree_map</span><span style="color:#F8F8F2;">(binary_tree)  </span><span style="color:#88846F;">// 3 2 4 1 6 5 7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// \u540E\u5E8F\u904D\u5386</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">back_tree_map</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">node</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">TreeNodeProps</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">node) </span><span style="color:#F92672;">return</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">back_tree_map</span><span style="color:#F8F8F2;">(node.left)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">back_tree_map</span><span style="color:#F8F8F2;">(node.right)</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(node.value)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">back_tree_map</span><span style="color:#F8F8F2;">(binary_tree)  </span><span style="color:#88846F;">// 3 4 2 6 7 5 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u53C9\u641C\u7D22\u6811" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u641C\u7D22\u6811" aria-hidden="true">#</a> \u4E8C\u53C9\u641C\u7D22\u6811</h2><p>\u5C06\u6570\u7EC4\u8F6C\u4E3A\u4E00\u4E2A\u4E8C\u53C9\u641C\u7D22\u6811, \u8BE5\u4E8C\u53C9\u641C\u7D22\u6811\u6709\u5982\u4E0B\u7279\u5F81:</p><ol><li>\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u53EA\u5305\u542B\u5C0F\u4E8E\u5F53\u524D\u8282\u70B9\u7684\u6811</li><li>\u8282\u70B9\u7684\u53F3\u5B50\u6811\u53EA\u5305\u542B\u5927\u4E8E\u5F53\u524D\u8282\u70B9\u7684\u6811</li><li>\u6240\u6709\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u81EA\u8EAB\u5FC5\u987B\u4E5F\u662F\u4E8C\u53C9\u6811</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> array</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">10</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">20</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">25</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">16</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">6</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">17</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">11</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">8</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">NodeProps</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  left</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">null</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">NodeProps</span></span>
<span class="line"><span style="color:#F8F8F2;">  right</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">null</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">NodeProps</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  value</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">insert</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">root</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">NodeProps</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">number</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">)</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">void</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (number </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> root.value) {  </span><span style="color:#88846F;">// \u53F3\u4FA7</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (root.right </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      root.right </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: number,</span></span>
<span class="line"><span style="color:#F8F8F2;">        left: </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        right: </span><span style="color:#AE81FF;">null</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">insert</span><span style="color:#F8F8F2;">(root.right, number)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {  </span><span style="color:#88846F;">// \u5DE6\u4FA7</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(root.left </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      root.left </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: number,</span></span>
<span class="line"><span style="color:#F8F8F2;">        left: </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        right: </span><span style="color:#AE81FF;">null</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">insert</span><span style="color:#F8F8F2;">(root.left, number)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">create_tree</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">array</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">[]) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (array.length </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">null</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> root </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    value: array.</span><span style="color:#A6E22E;">shift</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">    left: </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    right: </span><span style="color:#AE81FF;">null</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  array.</span><span style="color:#A6E22E;">forEach</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">item</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">insert</span><span style="color:#F8F8F2;">(root, item)</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> root</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">create_tree</span><span style="color:#F8F8F2;">(array))</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function F(c,r){return n(),l("div",null,o)}var i=s(p,[["render",F],["__file","tree.html.vue"]]);export{i as default};