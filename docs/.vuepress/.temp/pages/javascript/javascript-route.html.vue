<template><div><h1 id="前端路由" tabindex="-1"><a class="header-anchor" href="#前端路由" aria-hidden="true">#</a> 前端路由</h1>
<h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h2>
<p>window.history对象包含浏览器的历史</p>
<p>window.history.back()</p>
<p>window.history.forward()</p>
<p>window.history.go()</p>
<h3 id="history-pushstate-history-replacestate" tabindex="-1"><a class="header-anchor" href="#history-pushstate-history-replacestate" aria-hidden="true">#</a> history.pushState() / history.replaceState()</h3>
<p>history.pushState() 方法向当前浏览器会话的历史堆栈中添加一个状态。</p>
<p>history.replaceState() 修改当前历史记录实体。</p>
<p>history.pushState(state, title, url)</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>state 是一个JavaScript状态对象,它与pushState()创建的历史记录条目相关联。
title 当前大多数浏览器都忽略此参数.
url   新的历史条目</p>
</div>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState" target="_blank" rel="noopener noreferrer">MDN-history.pushState<ExternalLinkIcon/></a></p>
<p>描述:
从某种程度上说, 调用pushState() 和 window.location = '#foo'基本上一样, 它们都会在当前都document中创建和激活一个新的历史记录。
但是pushState()有以下优势:</p>
<p><strong>1 新的url可以是任何和当前url同源的url,当设置window.location只会在你只设置锚的时候才会使用当前url.</strong></p>
<p><strong>2. window.location = '#foo' 仅仅会在锚的值不是 #foo情况下创建一条新的历史记录</strong></p>
<p><strong>3 可以在新的历史记录中关联任何数据。</strong></p>
<h3 id="popstate" tabindex="-1"><a class="header-anchor" href="#popstate" aria-hidden="true">#</a> popState</h3>
<p>当活动历史条目更改时,将会触发popstate事件。 如果被激活的历史条目是通过history.pushState()或者history.replaceState()
的调用影响,popstate事件的state属性包含历史条目的状态对象的副本。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>history.pushState() 或者 history.replaceState() 不会触发popstate事件。
用户点击浏览器的回退按钮,或者history.back() / history.forward()</p>
</div>
<h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash</h2>
<p>location.hash 返回一个string, 其中会包含URL标识中的 # 和后面URL片段标识符。</p>
<h3 id="修改hash" tabindex="-1"><a class="header-anchor" href="#修改hash" aria-hidden="true">#</a> 修改hash</h3>
<p>window.location.hash = '#foo'</p>
<p><a href='#foo'></a></p>
<h3 id="hashchange" tabindex="-1"><a class="header-anchor" href="#hashchange" aria-hidden="true">#</a> hashchange</h3>
<p>当URL的片段标识符更改时,将触发hashchange事件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">window.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;hashchange&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;The hash has changed!&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}, </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
