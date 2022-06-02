<template><div><h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h1>
<p>AJAX最大的优点是在不重新加载整个页面的情况下,可以与服务器交换数据并更新部分网页内容 通过在后台与服务器进行少量数据交换,
AJAX可以使网页实现异步更新.</p>
<p>EventTarget &lt;---- XMLHttpRequestEventTarget &lt;---- XMLHttpRequest</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// usage:</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> xhr </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">XMLHttpRequest</span><span style="color: #F8F8F2">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong>XMLHttpRequest.onreadystatechange</strong>: 当readyState属性发生变化时调用的event handler.
<strong>XMLHttpRequest.readyState</strong>:         请求的状态码</p>
<table>
<thead>
<tr>
<th>值</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td style="text-align:center">代理被创建，但尚未调用 open() 方法。</td>
</tr>
<tr>
<td>1</td>
<td style="text-align:center">open() 方法已经被调用</td>
</tr>
<tr>
<td>2</td>
<td style="text-align:center">send() 方法已经被调用，并且头部和状态已经可获得。</td>
</tr>
<tr>
<td>3</td>
<td style="text-align:center">下载中； responseText 属性已经包含部分数据。</td>
</tr>
<tr>
<td>4</td>
<td style="text-align:center">下载操作已完成。</td>
</tr>
</tbody>
</table>
<p><strong>XMLHttpRequest.response</strong>: 返回响应的正文。返回类型包括ArrayBuffer/Blob/Document...</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>取值类型取决于responseType的值, 可以设置responseType的值, 需要在open()初始化请求之后调用,并且要在调用send()
发送请求之前</p>
</div>
<p><strong>XMLHttpRequest.responseType</strong>: 用于指定响应中包含的数据类型。
arraybuffer/blob/json/text
<strong>XMLHttpRequest.timeout</strong>: 代表一个请求在被自动终止前所消耗的毫秒数,默认值为0。意味着没有超时！</p>
<p><strong>XMLHttpRequest.upload</strong>: 返回一个XMLHttpRequestUpload对象，用来表示上传的进度。</p>
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
<table>
<thead>
<tr>
<th>事件</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>onloadstart</td>
<td style="text-align:center">获取开始</td>
</tr>
<tr>
<td>onprogress</td>
<td style="text-align:center">数据传输进行中</td>
</tr>
<tr>
<td>onabort</td>
<td style="text-align:center">获取操作终止</td>
</tr>
<tr>
<td>onerror</td>
<td style="text-align:center">获取失败</td>
</tr>
<tr>
<td>onload</td>
<td style="text-align:center">获取成功</td>
</tr>
<tr>
<td>ontimeout</td>
<td style="text-align:center">获取操作在用户规定的时间内未完成</td>
</tr>
<tr>
<td>onloadend</td>
<td style="text-align:center">获取完成（不论成功与否）</td>
</tr>
</tbody>
</table>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong>XMLHttpRequest.abort()</strong>            终止发送的请求</p>
<p><strong>XMLHttpRequest.open()</strong>             初始化一个请求,该方法只能在JavaScript中使用</p>
<p><strong>XMLHttpRequest.send()</strong>             发送请求</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果请求方法是GET或者HEAD,则应将请求主体设置为null</p>
</div>
<p><strong>XMLHttpRequest.setRequestHeader()</strong> 设置HTTP请求头的值,必须在open()之后,send()之前调用</p>
<h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 用koa搭建一个简单的server</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> Koa </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;koa&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> router </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;koa-router&#39;</span><span style="color: #F8F8F2">)()</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> cors </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;koa-cors&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> koaBody </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;koa-body&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> app </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Koa</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">app.</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2">(</span><span style="color: #A6E22E">cors</span><span style="color: #F8F8F2">())</span></span>
<span class="line"><span style="color: #F8F8F2">app.</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2">(</span><span style="color: #A6E22E">koaBody</span><span style="color: #F8F8F2">())</span></span>
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
<span class="line"><span style="color: #F8F8F2">  ctx.body </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> player</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">router.</span><span style="color: #A6E22E">post</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/api/player&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #F92672">async</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F; font-style: italic">ctx</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> id </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> ctx.request.body.id;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> findPlayer </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> player.</span><span style="color: #A6E22E">find</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">p</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> p.id </span><span style="color: #F92672">==</span><span style="color: #F8F8F2"> id);</span></span>
<span class="line"><span style="color: #F8F8F2">  ctx.body </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> findPlayer</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">app.</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2">(router.</span><span style="color: #A6E22E">routes</span><span style="color: #F8F8F2">()).</span><span style="color: #A6E22E">use</span><span style="color: #F8F8F2">(router.</span><span style="color: #A6E22E">allowedMethods</span><span style="color: #F8F8F2">())</span></span>
<span class="line"><span style="color: #F8F8F2">app.</span><span style="color: #A6E22E">listen</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;9000&#39;</span><span style="color: #F8F8F2">, () </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;app starting...&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 一个简单的ajax get请求</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> xhr </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">XMLHttpRequest</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">open</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;GET&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;http://localhost:9000/api/player&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">onreadystatechange</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(xhr.readyState </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> xhr.status </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> data </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">JSON</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF">parse</span><span style="color: #F8F8F2">(xhr.response)</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(data)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">    0: {id:1, firstName: &#39;kyrie&#39;, lastName: &#39;irving&#39;}</span></span>
<span class="line"><span style="color: #88846F">    1: {id:2, firstName: &#39;lebron&#39;, lastName: &#39;james&#39;}</span></span>
<span class="line"><span style="color: #88846F">    2: {id:3, firstName: &#39;kevin&#39;, lastName: &#39;durant&#39;}</span></span>
<span class="line"><span style="color: #88846F">    */</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">send</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 一个简单的post请求</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> xhr </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">XMLHttpRequest</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">open</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;POST&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;http://localhost:9000/api/player&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">onreadystatechange</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(xhr.readyState </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> xhr.status </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> data </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">JSON</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF">parse</span><span style="color: #F8F8F2">(xhr.response)</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;post:&#39;</span><span style="color: #F8F8F2">,data)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">    {</span></span>
<span class="line"><span style="color: #88846F">      firstName: &quot;kyrie&quot;</span></span>
<span class="line"><span style="color: #88846F">      id: 1</span></span>
<span class="line"><span style="color: #88846F">      lastName: &quot;irving&quot;</span></span>
<span class="line"><span style="color: #88846F">    }</span></span>
<span class="line"><span style="color: #88846F">    */</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">setRequestHeader</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;Content-Type&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;application/x-www-form-urlencoded&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">send</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;id=1&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// server  将一张图片原始二进制数据返回</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">readFile</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">path</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Promise</span><span style="color: #F8F8F2">((</span><span style="color: #FD971F; font-style: italic">resolve</span><span style="color: #F8F8F2">,</span><span style="color: #FD971F; font-style: italic">reject</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    fs.</span><span style="color: #A6E22E">readFile</span><span style="color: #F8F8F2">(path, (</span><span style="color: #FD971F; font-style: italic">err</span><span style="color: #F8F8F2">,</span><span style="color: #FD971F; font-style: italic">data</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(err){</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #A6E22E">reject</span><span style="color: #F8F8F2">(err)</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(data)</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">router.</span><span style="color: #A6E22E">get</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/api/iu&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #F92672">async</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F; font-style: italic">ctx</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> data </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">await</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">readFile</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;./iu.jpeg&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  ctx.body </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> data;</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> xhr </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">XMLHttpRequest</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">open</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;GET&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;http://localhost:9000/api/iu&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.responseType </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;blob&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #88846F">// 注意设置responseType的位置</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">onreadystatechange</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(xhr.readyState </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> xhr.status </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(xhr.response)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> url </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> window.URL.</span><span style="color: #A6E22E">createObjectURL</span><span style="color: #F8F8F2">(xhr.response)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> image </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Image</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">400</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">600</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    image.</span><span style="color: #A6E22E">onload</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">      window.URL.</span><span style="color: #A6E22E">revokeObjectURL</span><span style="color: #F8F8F2">(image.src)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    image.src </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> url;</span></span>
<span class="line"><span style="color: #F8F8F2">    document.body.</span><span style="color: #A6E22E">appendChild</span><span style="color: #F8F8F2">(image)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">send</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 文件上传进度</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> data </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">FormData</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> i </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">; i </span><span style="color: #F92672">&lt;</span><span style="color: #F8F8F2"> files.length; i</span><span style="color: #F92672">++</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> file </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> files[i];</span></span>
<span class="line"><span style="color: #F8F8F2">  data.</span><span style="color: #A6E22E">append</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;file&#39;</span><span style="color: #F8F8F2">, file)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> xhr </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">XMLHttpRequest</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">open</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;POST&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;http://localhost:9000/api/upload&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">onreadystatechange</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(xhr.readyState </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> xhr.status </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(xhr.response)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.upload.</span><span style="color: #A6E22E">onprogress</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">event</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(event.total, event.loaded)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">xhr.</span><span style="color: #A6E22E">send</span><span style="color: #F8F8F2">(data)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.html5rocks.com/zh/tutorials/file/xhr2/" target="_blank" rel="noopener noreferrer">XMLHttpRequest2新技巧<ExternalLinkIcon/></a></p>
<h2 id="form表单的enctype" tabindex="-1"><a class="header-anchor" href="#form表单的enctype" aria-hidden="true">#</a> Form表单的enctype</h2>
<p>当method的值为post时,enctype就是将表单的内容提交给服务器的MIME类型。</p>
<ul>
<li>application/x-www-form-urlencoded (默认)</li>
<li>multipart/form-data               当表单包含type=file</li>
<li>text/plain                        出现于HTML5,用于调试</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// server  ----- 处理表单数据(使用了一个formidable的库)</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> formidable </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">require</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;formidable&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">router.</span><span style="color: #A6E22E">post</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/api/register&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #F92672">async</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F; font-style: italic">ctx</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> form </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">formidable</span><span style="color: #F8F8F2">({ multiples: </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2"> });</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">await</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Promise</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">resolve</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    form.</span><span style="color: #A6E22E">parse</span><span style="color: #F8F8F2">(ctx.req,(</span><span style="color: #FD971F; font-style: italic">err</span><span style="color: #F8F8F2">,</span><span style="color: #FD971F; font-style: italic">fields</span><span style="color: #F8F8F2">,</span><span style="color: #FD971F; font-style: italic">files</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(fields)</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">  ctx.body </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;注册成功&#39;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// ----ajax提交表单 ---</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> submit </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;.submit&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">submit.</span><span style="color: #A6E22E">onclick</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">event</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  event.</span><span style="color: #A6E22E">preventDefault</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> data </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">FormData</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">  data.</span><span style="color: #A6E22E">append</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;username&#39;</span><span style="color: #F8F8F2">, username.value)</span></span>
<span class="line"><span style="color: #F8F8F2">  data.</span><span style="color: #A6E22E">append</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;age&#39;</span><span style="color: #F8F8F2">, age.value)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> xhr </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">XMLHttpRequest</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">  xhr.</span><span style="color: #A6E22E">open</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;POST&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;http://localhost:9000/api/register&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  xhr.</span><span style="color: #A6E22E">onreadystatechange</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(xhr.readyState </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> xhr.status </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">      console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(xhr.response)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  xhr.</span><span style="color: #A6E22E">send</span><span style="color: #F8F8F2">(data)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ajax简易封装" tabindex="-1"><a class="header-anchor" href="#ajax简易封装" aria-hidden="true">#</a> Ajax简易封装</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">parse</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">obj</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> temp </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> []</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> _obj </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span><span style="color: #F92672">...</span><span style="color: #F8F8F2">obj}</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> key </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> _obj) {</span></span>
<span class="line"><span style="color: #F8F8F2">    temp.</span><span style="color: #A6E22E">push</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">`</span><span style="color: #F92672">${</span><span style="color: #F8F8F2">key</span><span style="color: #F92672">}</span><span style="color: #E6DB74">=</span><span style="color: #F92672">${</span><span style="color: #66D9EF">encodeURIComponent</span><span style="color: #F8F8F2">(_obj[key])</span><span style="color: #F92672">}</span><span style="color: #E6DB74">`</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> temp.</span><span style="color: #A6E22E">join</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;&amp;&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">_ajax</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">options</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  url:</span><span style="color: #E6DB74">&#39;&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  method:</span><span style="color: #E6DB74">&#39;GET&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  data:{},</span></span>
<span class="line"><span style="color: #F8F8F2">  timeout:</span><span style="color: #AE81FF">3000</span></span>
<span class="line"><span style="color: #F8F8F2">}) {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Promise</span><span style="color: #F8F8F2">((</span><span style="color: #FD971F; font-style: italic">resolve</span><span style="color: #F8F8F2">,</span><span style="color: #FD971F; font-style: italic">reject</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(</span><span style="color: #F92672">!</span><span style="color: #F8F8F2">options.url) </span><span style="color: #F92672">return</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> xhr, timer </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(window.XMLHttpRequest) {</span></span>
<span class="line"><span style="color: #F8F8F2">      xhr </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">XMLHttpRequest</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      xhr </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">ActiveXObject</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;Microsoft.XMLHTTP&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">    xhr.</span><span style="color: #A6E22E">onreadystatechange</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(xhr.readyState </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(timer){</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #A6E22E">reject</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;超时啦啦啦啦&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #66D9EF">clearTimeout</span><span style="color: #F8F8F2">(timer)</span></span>
<span class="line"><span style="color: #F8F8F2">          timer </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">((xhr.status </span><span style="color: #F92672">&gt;=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> xhr.status </span><span style="color: #F92672">&lt;</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">300</span><span style="color: #F8F8F2">)) {</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(xhr.response)</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #A6E22E">reject</span><span style="color: #F8F8F2">(xhr.status)</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(options.timeout </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">      timer </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">setTimeout</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">        xhr.</span><span style="color: #A6E22E">abort</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">      }, options.timeout)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(options.method.</span><span style="color: #A6E22E">toUpperCase</span><span style="color: #F8F8F2">() </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;GET&#39;</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">      xhr.</span><span style="color: #A6E22E">open</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;GET&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">`</span><span style="color: #F92672">${</span><span style="color: #F8F8F2">options.url</span><span style="color: #F92672">}${</span><span style="color: #A6E22E">parse</span><span style="color: #F8F8F2">(options.data)</span><span style="color: #F92672">}</span><span style="color: #E6DB74">`</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">      xhr.</span><span style="color: #A6E22E">send</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      xhr.</span><span style="color: #A6E22E">open</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;POST&#39;</span><span style="color: #F8F8F2">,options.url, </span><span style="color: #AE81FF">true</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">      xhr.</span><span style="color: #A6E22E">setRequestHeader</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;Content-Type&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;application/x-www-form-urlencoded&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">      xhr.</span><span style="color: #A6E22E">send</span><span style="color: #F8F8F2">(options.data)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2>
<p>axios是一个基于promise的HTTP库,可以用在浏览器和node.js中。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// --------- 第一种方式 -----------</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> CancelToken </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> axios.CancelToken;</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> source </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> CancelToken.</span><span style="color: #A6E22E">source</span><span style="color: #F8F8F2">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">axios.</span><span style="color: #A6E22E">get</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/user/12345&#39;</span><span style="color: #F8F8F2">, {</span></span>
<span class="line"><span style="color: #F8F8F2">  cancelToken: source.token,</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">source.</span><span style="color: #A6E22E">cancel</span><span style="color: #F8F8F2">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// --------- 第二种方式 --------</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> CancelToken </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> axios.CancelToken;</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> cancel;</span></span>
<span class="line"><span style="color: #F8F8F2">axios.</span><span style="color: #A6E22E">get</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;/user/123&#39;</span><span style="color: #F8F8F2">, {</span></span>
<span class="line"><span style="color: #F8F8F2">  cancelToken: </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">CancelToken</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">executor</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">c</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    cancel </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> c</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #A6E22E">cancel</span><span style="color: #F8F8F2">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- <JavaScript-AxiosCancel/> -->
</div></template>
