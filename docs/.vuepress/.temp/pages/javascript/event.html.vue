<template><div><h1 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h1>
<ol>
<li>事件类型(event type)</li>
<li>事件目标(event target)</li>
<li>事件对象(event object)</li>
<li>事件传播(event propagation) -&gt; 事件冒泡和事件捕获</li>
</ol>
<h2 id="window事件" tabindex="-1"><a class="header-anchor" href="#window事件" aria-hidden="true">#</a> window事件</h2>
<p>window.load()
当整个页面及所有依赖资源 如样式表和图片都已经加载完成时, 将触发load事件。</p>
<p>window.unload()
unload()事件处理程序可以用于保存用户的状态,但是它不能用于取消用户转向其他地方</p>
<p>window.beforeunload()
当浏览器窗口关闭或者刷新时,会触发beforeunload事件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">window.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;beforeunload&#39;</span><span style="color: #F8F8F2">, (</span><span style="color: #FD971F; font-style: italic">event</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// Cancel the event as stated by the standard.</span></span>
<span class="line"><span style="color: #F8F8F2">  event.</span><span style="color: #A6E22E">preventDefault</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #88846F">// Chrome requires returnValue to be set.</span></span>
<span class="line"><span style="color: #F8F8F2">  event.returnValue </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;&#39;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>并非所有浏览器都支持此方法,有些浏览器需要事件处理程序实现两个遗留方法中都一个作为替代:</p>
<ol>
<li>将字符串分配给事件的returnValue属性</li>
<li>从事件处理程序返回一个字符串</li>
</ol>
</div>
<h2 id="addeventlistener" tabindex="-1"><a class="header-anchor" href="#addeventlistener" aria-hidden="true">#</a> addEventListener()</h2>
<p>EventTarget.addEventListener() 将指定的监听器注册到EventTarget上,当该对象触发指定的事件时,指定的回调函数就会被执行。</p>
<ol>
<li>它允许给一个事件注册多个监听器。</li>
<li>它提供了一种更精细的手段控制listener的触发阶段。</li>
<li>它对任何DOM元素都是有效的。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">target.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(type, listener, options);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// options(可选)</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  capture: </span><span style="color: #66D9EF; font-style: italic">Boolean</span><span style="color: #F8F8F2">  </span><span style="color: #88846F">// false冒泡阶段, true 捕获阶段</span></span>
<span class="line"><span style="color: #F8F8F2">  once: </span><span style="color: #66D9EF; font-style: italic">Boolean</span><span style="color: #F8F8F2">     </span><span style="color: #88846F">// 如果设置为true,listener会在其被调用之后自动移除</span></span>
<span class="line"><span style="color: #F8F8F2">  passive: </span><span style="color: #66D9EF; font-style: italic">Boolean</span><span style="color: #F8F8F2">  </span><span style="color: #88846F">// 设置为true, 表示listener永远不会调用preventDefault()</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 检测是否支持passive</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> passiveSupported </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F92672">try</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">var</span><span style="color: #F8F8F2"> options </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Object</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">defineProperty</span><span style="color: #F8F8F2">({}, </span><span style="color: #E6DB74">&#39;passive&#39;</span><span style="color: #F8F8F2">, {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">get</span><span style="color: #F8F8F2">:</span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">      passiveSupported </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">  window.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;test&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">, options)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span><span style="color: #F92672">catch</span><span style="color: #F8F8F2">(err) {</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">class</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">DomEvent</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">constructor</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">element</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.element </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> element</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">addEvent</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">type</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">handler</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.element.addEventListener){</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.element.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(type, handler, </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.element.attachEvent){</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.element.</span><span style="color: #A6E22E">attachEvent</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;on&#39;</span><span style="color: #F92672">+</span><span style="color: #F8F8F2">type, handler)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.element[</span><span style="color: #E6DB74">&#39;on&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> type] </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> handler</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">removeEvent</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">type</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">handler</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.element.removeEventListener){</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.element.</span><span style="color: #A6E22E">removeEventListener</span><span style="color: #F8F8F2">(type, handler, </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.element.detachEvent{</span></span>
<span class="line"><span style="color: #F8F8F2">      this.element.detachEvent(</span><span style="color: #E6DB74">&#39;on&#39;</span><span style="color: #F8F8F2"> + type)</span></span>
<span class="line"><span style="color: #F8F8F2">    }else{</span></span>
<span class="line"><span style="color: #F8F8F2">      this.element[</span><span style="color: #E6DB74">&#39;on&#39;</span><span style="color: #F8F8F2">+type] = null</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">function stopPropagation(event){</span></span>
<span class="line"><span style="color: #F8F8F2">  if(event.stopPropagation()){</span></span>
<span class="line"><span style="color: #F8F8F2">    event.stopPropagation()</span></span>
<span class="line"><span style="color: #F8F8F2">  }else{</span></span>
<span class="line"><span style="color: #F8F8F2">    event.cancelBubble = true</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">function preventDefault(event){</span></span>
<span class="line"><span style="color: #F8F8F2">  if(event.preventDefault()) event.preventDefault()</span></span>
<span class="line"><span style="color: #F8F8F2">  if(event.returnValue) event.returnValue = false</span></span>
<span class="line"><span style="color: #F8F8F2">  return false</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">// IE9 及 之前的IE不支持addEventListener()和removeEventListener(), </span></span>
<span class="line"><span style="color: #88846F">// IE5之后定义了类似的  attachEvent()和 detachEvent()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>stopPropagation()可以在事件传播期间的任何时间调用,它能工作在捕获阶段,事件目标本身中和冒泡阶段</p>
</div>
<h2 id="removeeventlistener" tabindex="-1"><a class="header-anchor" href="#removeeventlistener" aria-hidden="true">#</a> removeEventListener()</h2>
<p>删除使用EventTarget.addEventListener()方法添加的事件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">target.</span><span style="color: #A6E22E">removeEventListener</span><span style="color: #F8F8F2">(type, listener[, options]);</span></span>
<span class="line"><span style="color: #F8F8F2">target.</span><span style="color: #A6E22E">removeEventListener</span><span style="color: #F8F8F2">(type, listener[, useCapture]);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件处理程序的参数" tabindex="-1"><a class="header-anchor" href="#事件处理程序的参数" aria-hidden="true">#</a> 事件处理程序的参数</h3>
<p>在IE8及之前的版本中, 调用事件处理函数时并未传递事件对象作为第一个参数,此时需要通过全局对象window.event来获得事件对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">handler</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">event</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  event </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> event </span><span style="color: #F92672">||</span><span style="color: #F8F8F2"> window.event</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件传播" tabindex="-1"><a class="header-anchor" href="#事件传播" aria-hidden="true">#</a> 事件传播</h3>
<p>事件捕获 -&gt; 目标对象 -&gt; 事件冒泡</p>
<p>事件捕获提供了在事件还没有发送到目标之前查看它们的机会,事件捕获能用于程序调试,或者用于事件取消技术,
过滤掉事件从而使目标事件处理程序绝对不会被调用。</p>
<p>可点击下方带颜色的盒子,从大到小 依次为 box1 box2 box3.</p>
<JavaScript-Event/>
<h3 id="event-target" tabindex="-1"><a class="header-anchor" href="#event-target" aria-hidden="true">#</a> Event.target</h3>
<p>触发事件的对象(某个DOM元素的)引用。 使用该属性可以用来实现事件委托。</p>
<p><strong>可点击下方球员列表,会弹出当前球员姓名和li元素索引。</strong></p>
<JavaScript-EventDelegation/>
<h3 id="event-currenttarget" tabindex="-1"><a class="header-anchor" href="#event-currenttarget" aria-hidden="true">#</a> Event.currentTarget</h3>
<p>event.currentTarget总是指向事件绑定的元素。</p>
<h3 id="event-stoppropagation" tabindex="-1"><a class="header-anchor" href="#event-stoppropagation" aria-hidden="true">#</a> Event.stopPropagation</h3>
<p>阻止捕获和冒泡阶段中当前事件的进一步传播, 但是它不能阻止任何默认行为的发生,例如对连接的点击仍会被处理。</p>
</div></template>
