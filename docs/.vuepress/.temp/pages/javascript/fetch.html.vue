<template><div><h1 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h1>
<p>Fetch API提供了一个JavaScript接口,用于访问或者操作HTTP管道的一些具体部分,例如请求和响应。</p>
<p>fetch和ajax主要有以下不同:</p>
<ul>
<li>当接受到一个错误的HTTP状态码时,从fetch()返回的Promise不会标记为reject,仅当网络故障或者请求被阻止时
才会标记为reject.</li>
<li>fetch不会发送跨域cookies,除非使用了credentials的初始化选项。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// server ,body参数使用body-parser解析的</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> player </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span></span>
<span class="line"><span style="color: #F8F8F2">  {</span></span>
<span class="line"><span style="color: #F8F8F2">    id:</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    firstName:</span><span style="color: #E6DB74">&#39;kyrie&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    lastName:</span><span style="color: #E6DB74">&#39;irving&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  {</span></span>
<span class="line"><span style="color: #F8F8F2">    id:</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    firstName:</span><span style="color: #E6DB74">&#39;lebron&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    lastName:</span><span style="color: #E6DB74">&#39;james&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  {</span></span>
<span class="line"><span style="color: #F8F8F2">    id:</span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    firstName:</span><span style="color: #E6DB74">&#39;kevin&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    lastName:</span><span style="color: #E6DB74">&#39;durant&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">router.</span><span style="color: #A6E22E">get</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/api/player&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #F92672">async</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F; font-style: italic">ctx</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> id </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> ctx.request.query.id;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(</span><span style="color: #F92672">!</span><span style="color: #F8F8F2">id) {</span></span>
<span class="line"><span style="color: #F8F8F2">    ctx.body </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> player</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> findPlayer </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> player.</span><span style="color: #A6E22E">find</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">p</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> p.id </span><span style="color: #F92672">==</span><span style="color: #F8F8F2"> id);</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(findPlayer){</span></span>
<span class="line"><span style="color: #F8F8F2">      ctx.body </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> findPlayer</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      ctx.body </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">        code:</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        message:</span><span style="color: #E6DB74">&#39;未找到&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">router.</span><span style="color: #A6E22E">post</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/api/register&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #F92672">async</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F; font-style: italic">ctx</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> request </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> ctx.request.body;</span></span>
<span class="line"><span style="color: #F8F8F2">  ctx.body </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    code:</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    message:</span><span style="color: #E6DB74">&#39;注册成功&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  };</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的请求参数" tabindex="-1"><a class="header-anchor" href="#支持的请求参数" aria-hidden="true">#</a> 支持的请求参数</h2>
<p>fetch()接受第二个可选参数,一个可以控制不同配置的init对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// get请求(默认)</span></span>
<span class="line"><span style="color: #A6E22E">fetch</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;http://localhost:9000/api/player?id=1&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">  method:</span><span style="color: #E6DB74">&#39;GET&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">}).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> res.</span><span style="color: #A6E22E">json</span><span style="color: #F8F8F2">()).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(res)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">  0: {id: 1, firstName: &#39;kyrie&#39;, lastName: &#39;irving&#39;}</span></span>
<span class="line"><span style="color: #88846F">  1: {id: 2, firstName: &#39;lebron&#39;, lastName: &#39;james&#39;}</span></span>
<span class="line"><span style="color: #88846F">  2: {id: 3, firstName: &#39;kevin&#39;, lastName: &#39;durant&#39;}</span></span>
<span class="line"><span style="color: #88846F">  */</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// post请求</span></span>
<span class="line"><span style="color: #A6E22E">fetch</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;http://localhost:9000/api/register&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">  method:</span><span style="color: #E6DB74">&#39;POST&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  headers:{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&#39;Content-Type&#39;</span><span style="color: #F8F8F2">:</span><span style="color: #E6DB74">&#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  body:</span><span style="color: #E6DB74">&#39;username=lebron&amp;age=30&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">}).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> res.</span><span style="color: #A6E22E">json</span><span style="color: #F8F8F2">())</span></span>
<span class="line"><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {})</span></span>
<span class="line"><span style="color: #88846F">// 服务端接受的参数</span></span>
<span class="line"><span style="color: #88846F">/*{ username: &#39;lebron&#39;, age: 30 }*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #A6E22E">fetch</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;http://localhost:9000/api/register&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">  method:</span><span style="color: #E6DB74">&#39;POST&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  headers:{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&#39;Content-Type&#39;</span><span style="color: #F8F8F2">:</span><span style="color: #E6DB74">&#39;application/json&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  body:</span><span style="color: #66D9EF">JSON</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF">stringify</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">    username:</span><span style="color: #E6DB74">&#39;lebron&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    age:</span><span style="color: #AE81FF">30</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">}).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> res.</span><span style="color: #A6E22E">json</span><span style="color: #F8F8F2">()).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {})</span></span>
<span class="line"><span style="color: #88846F">/*同样服务端接受到的参数: { username: &#39;lebron&#39;, age: 30 }*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> data </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">FormData</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> i </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">; i </span><span style="color: #F92672">&lt;</span><span style="color: #F8F8F2"> files.length; i</span><span style="color: #F92672">++</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> file </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> files[i];</span></span>
<span class="line"><span style="color: #F8F8F2">  data.</span><span style="color: #A6E22E">append</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;file&#39;</span><span style="color: #F8F8F2">, file)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #A6E22E">fetch</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;http://localhost:9000/api/upload&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">  method:</span><span style="color: #E6DB74">&#39;POST&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  body:data</span></span>
<span class="line"><span style="color: #F8F8F2">}).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> res.</span><span style="color: #A6E22E">json</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">}).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测请求是否成功" tabindex="-1"><a class="header-anchor" href="#检测请求是否成功" aria-hidden="true">#</a> 检测请求是否成功</h2>
<p>想要精确的判断fetch()是否成功,需要包含promise resolved的情况,此时再判断Response.ok是否为true.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #A6E22E">fetch</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;flowers.jpg&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  .</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">response</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (</span><span style="color: #F92672">!</span><span style="color: #F8F8F2">response.ok) {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">throw</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Error</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;Network response was not OK&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> response.</span><span style="color: #A6E22E">blob</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">  .</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">myBlob</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    myImage.src </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> URL.</span><span style="color: #A6E22E">createObjectURL</span><span style="color: #F8F8F2">(myBlob);</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">  .</span><span style="color: #A6E22E">catch</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">error</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">error</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;There has been a problem with your fetch operation&#39;</span><span style="color: #F8F8F2">,error);</span></span>
<span class="line"><span style="color: #F8F8F2">  });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取消fetch请求" tabindex="-1"><a class="header-anchor" href="#取消fetch请求" aria-hidden="true">#</a> 取消Fetch请求</h2>
<p>AbortController 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求</p>
<p><strong>属性</strong>
AbortController.signal  用来abort一个网络请求</p>
<p><strong>方法</strong>
AbortController.abort() 用来中止一个尚未完成的网络请求。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> controller </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">AbortController</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> signal </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> controller.signal;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6E22E">fetch</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;htt://www.xxx.example.com&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">  signal,</span></span>
<span class="line"><span style="color: #F8F8F2">  method:</span><span style="color: #E6DB74">&#39;GET&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">}).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> res.</span><span style="color: #A6E22E">json</span><span style="color: #F8F8F2">()).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(res)</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #88846F">// 取消请求</span></span>
<span class="line"><span style="color: #F8F8F2">controller.</span><span style="color: #A6E22E">abort</span><span style="color: #F8F8F2">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal" target="_blank" rel="noopener noreferrer">AbortController.signal<ExternalLinkIcon/></a></p>
</div></template>
