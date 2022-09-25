import{_ as a,o as l,c as e,b as s,a as p,d as o,e as c,r as F}from"./app.7b5becf5.js";const r={},t=o(`<h1 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h1><p>Fetch API\u63D0\u4F9B\u4E86\u4E00\u4E2AJavaScript\u63A5\u53E3,\u7528\u4E8E\u8BBF\u95EE\u6216\u8005\u64CD\u4F5CHTTP\u7BA1\u9053\u7684\u4E00\u4E9B\u5177\u4F53\u90E8\u5206,\u4F8B\u5982\u8BF7\u6C42\u548C\u54CD\u5E94\u3002</p><p>fetch\u548Cajax\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E0D\u540C:</p><ul><li>\u5F53\u63A5\u53D7\u5230\u4E00\u4E2A\u9519\u8BEF\u7684HTTP\u72B6\u6001\u7801\u65F6,\u4ECEfetch()\u8FD4\u56DE\u7684Promise\u4E0D\u4F1A\u6807\u8BB0\u4E3Areject,\u4EC5\u5F53\u7F51\u7EDC\u6545\u969C\u6216\u8005\u8BF7\u6C42\u88AB\u963B\u6B62\u65F6 \u624D\u4F1A\u6807\u8BB0\u4E3Areject.</li><li>fetch\u4E0D\u4F1A\u53D1\u9001\u8DE8\u57DFcookies,\u9664\u975E\u4F7F\u7528\u4E86credentials\u7684\u521D\u59CB\u5316\u9009\u9879\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// server ,body\u53C2\u6570\u4F7F\u7528body-parser\u89E3\u6790\u7684</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> player </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    id:</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    firstName:</span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    lastName:</span><span style="color:#E6DB74;">&#39;irving&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    id:</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    firstName:</span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    lastName:</span><span style="color:#E6DB74;">&#39;james&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    id:</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    firstName:</span><span style="color:#E6DB74;">&#39;kevin&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    lastName:</span><span style="color:#E6DB74;">&#39;durant&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">router.</span><span style="color:#A6E22E;">get</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;/api/player&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#F92672;">async</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">ctx</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> id </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> ctx.request.query.id;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">id) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    ctx.body </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> player</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> findPlayer </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> player.</span><span style="color:#A6E22E;">find</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">p</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> p.id </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> id);</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(findPlayer){</span></span>
<span class="line"><span style="color:#F8F8F2;">      ctx.body </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> findPlayer</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">      ctx.body </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        code:</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        message:</span><span style="color:#E6DB74;">&#39;\u672A\u627E\u5230&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">router.</span><span style="color:#A6E22E;">post</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;/api/register&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#F92672;">async</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">ctx</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> request </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> ctx.request.body;</span></span>
<span class="line"><span style="color:#F8F8F2;">  ctx.body </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    code:</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message:</span><span style="color:#E6DB74;">&#39;\u6CE8\u518C\u6210\u529F&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  };</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u652F\u6301\u7684\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u7684\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> \u652F\u6301\u7684\u8BF7\u6C42\u53C2\u6570</h2><p>fetch()\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53EF\u9009\u53C2\u6570,\u4E00\u4E2A\u53EF\u4EE5\u63A7\u5236\u4E0D\u540C\u914D\u7F6E\u7684init\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// get\u8BF7\u6C42(\u9ED8\u8BA4)</span></span>
<span class="line"><span style="color:#A6E22E;">fetch</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;http://localhost:9000/api/player?id=1&#39;</span><span style="color:#F8F8F2;">,{</span></span>
<span class="line"><span style="color:#F8F8F2;">  method:</span><span style="color:#E6DB74;">&#39;GET&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> res.</span><span style="color:#A6E22E;">json</span><span style="color:#F8F8F2;">()).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(res)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">  0: {id: 1, firstName: &#39;kyrie&#39;, lastName: &#39;irving&#39;}</span></span>
<span class="line"><span style="color:#88846F;">  1: {id: 2, firstName: &#39;lebron&#39;, lastName: &#39;james&#39;}</span></span>
<span class="line"><span style="color:#88846F;">  2: {id: 3, firstName: &#39;kevin&#39;, lastName: &#39;durant&#39;}</span></span>
<span class="line"><span style="color:#88846F;">  */</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// post\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6E22E;">fetch</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;http://localhost:9000/api/register&#39;</span><span style="color:#F8F8F2;">,{</span></span>
<span class="line"><span style="color:#F8F8F2;">  method:</span><span style="color:#E6DB74;">&#39;POST&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  headers:{</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#E6DB74;">&#39;Content-Type&#39;</span><span style="color:#F8F8F2;">:</span><span style="color:#E6DB74;">&#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  body:</span><span style="color:#E6DB74;">&#39;username=lebron&amp;age=30&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> res.</span><span style="color:#A6E22E;">json</span><span style="color:#F8F8F2;">())</span></span>
<span class="line"><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {})</span></span>
<span class="line"><span style="color:#88846F;">// \u670D\u52A1\u7AEF\u63A5\u53D7\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#88846F;">/*{ username: &#39;lebron&#39;, age: 30 }*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">fetch</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;http://localhost:9000/api/register&#39;</span><span style="color:#F8F8F2;">,{</span></span>
<span class="line"><span style="color:#F8F8F2;">  method:</span><span style="color:#E6DB74;">&#39;POST&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  headers:{</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#E6DB74;">&#39;Content-Type&#39;</span><span style="color:#F8F8F2;">:</span><span style="color:#E6DB74;">&#39;application/json&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  body:</span><span style="color:#66D9EF;">JSON</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;">stringify</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">    username:</span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    age:</span><span style="color:#AE81FF;">30</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> res.</span><span style="color:#A6E22E;">json</span><span style="color:#F8F8F2;">()).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {})</span></span>
<span class="line"><span style="color:#88846F;">/*\u540C\u6837\u670D\u52A1\u7AEF\u63A5\u53D7\u5230\u7684\u53C2\u6570: { username: &#39;lebron&#39;, age: 30 }*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0A\u4F20\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u6587\u4EF6" aria-hidden="true">#</a> \u4E0A\u4F20\u6587\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> data </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">FormData</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F92672;">for</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> files.length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> file </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> files[i];</span></span>
<span class="line"><span style="color:#F8F8F2;">  data.</span><span style="color:#A6E22E;">append</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;file&#39;</span><span style="color:#F8F8F2;">, file)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">fetch</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;http://localhost:9000/api/upload&#39;</span><span style="color:#F8F8F2;">,{</span></span>
<span class="line"><span style="color:#F8F8F2;">  method:</span><span style="color:#E6DB74;">&#39;POST&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  body:data</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> res.</span><span style="color:#A6E22E;">json</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u8BF7\u6C42\u662F\u5426\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u8BF7\u6C42\u662F\u5426\u6210\u529F" aria-hidden="true">#</a> \u68C0\u6D4B\u8BF7\u6C42\u662F\u5426\u6210\u529F</h2><p>\u60F3\u8981\u7CBE\u786E\u7684\u5224\u65ADfetch()\u662F\u5426\u6210\u529F,\u9700\u8981\u5305\u542Bpromise resolved\u7684\u60C5\u51B5,\u6B64\u65F6\u518D\u5224\u65ADResponse.ok\u662F\u5426\u4E3Atrue.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">fetch</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;flowers.jpg&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  .</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">response</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">response.ok) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">throw</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">Error</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;Network response was not OK&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> response.</span><span style="color:#A6E22E;">blob</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">  .</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">myBlob</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    myImage.src </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> URL.</span><span style="color:#A6E22E;">createObjectURL</span><span style="color:#F8F8F2;">(myBlob);</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">  .</span><span style="color:#A6E22E;">catch</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">error</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">error</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;There has been a problem with your fetch operation&#39;</span><span style="color:#F8F8F2;">,error);</span></span>
<span class="line"><span style="color:#F8F8F2;">  });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D6\u6D88fetch\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88fetch\u8BF7\u6C42" aria-hidden="true">#</a> \u53D6\u6D88Fetch\u8BF7\u6C42</h2><p>AbortController \u63A5\u53E3\u8868\u793A\u4E00\u4E2A\u63A7\u5236\u5668\u5BF9\u8C61\uFF0C\u5141\u8BB8\u4F60\u6839\u636E\u9700\u8981\u4E2D\u6B62\u4E00\u4E2A\u6216\u591A\u4E2A Web \u8BF7\u6C42</p><p><strong>\u5C5E\u6027</strong> AbortController.signal \u7528\u6765abort\u4E00\u4E2A\u7F51\u7EDC\u8BF7\u6C42</p><p><strong>\u65B9\u6CD5</strong> AbortController.abort() \u7528\u6765\u4E2D\u6B62\u4E00\u4E2A\u5C1A\u672A\u5B8C\u6210\u7684\u7F51\u7EDC\u8BF7\u6C42\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> controller </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">AbortController</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> signal </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> controller.signal;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">fetch</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;htt://www.xxx.example.com&#39;</span><span style="color:#F8F8F2;">,{</span></span>
<span class="line"><span style="color:#F8F8F2;">  signal,</span></span>
<span class="line"><span style="color:#F8F8F2;">  method:</span><span style="color:#E6DB74;">&#39;GET&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> res.</span><span style="color:#A6E22E;">json</span><span style="color:#F8F8F2;">()).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(res)</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#88846F;">// \u53D6\u6D88\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#F8F8F2;">controller.</span><span style="color:#A6E22E;">abort</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),i={href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal",target:"_blank",rel:"noopener noreferrer"},y=c("AbortController.signal");function d(v,m){const n=F("ExternalLinkIcon");return l(),e("div",null,[t,s("p",null,[s("a",i,[y,p(n)])])])}var u=a(r,[["render",d],["__file","fetch.html.vue"]]);export{u as default};
