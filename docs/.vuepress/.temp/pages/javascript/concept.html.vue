<template><h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h1>
<h2 id="event-loop" tabindex="-1"><a class="header-anchor" href="#event-loop" aria-hidden="true">#</a> Event Loop</h2>
<ol>
<li>
<p>进程(process)是计算机中的程序关于某数据集合上的一次运行活动, 是系统进行资源分配和调度的基本单位, 是操作系统结构的基础。</p>
</li>
<li>
<p>线程(thread) 是操作系统能否进行运算调度的最小单位。它被包含在进程之中,是进程中的实际运作单位。 一个进程中可以有很多线程, 每条线程
并行执行不同的任务。</p>
</li>
</ol>
<p>JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，
否则会带来很复杂的同步问题。</p>
<ol start="3">
<li>同步任务和异步任务:
同步任务指的是 在主线程上排队执行的任务,只有前一个任务执行完毕,才能执行后一个任务。（执行栈 execution context stack）
异步任务: 不进入主线程,而进入任务队列, 只有任务队列通知主线程,某个异步任务可以执行了,该任务才会进入到主线程执行。(task queue)</li>
</ol>
<p>主线程空了,就会去读取'任务队列', 任务队列是一个先进先出的数据结构。只要执行栈一清空,'任务队列'上第一位的事件就自动进入到主线程。
这个过程是循环不断的,所以整个的这种运行机制又称为Event Loop(事件循环)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF">setTimeout</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)}, </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HTML5规定了setTimeout()的第二个参数最小值不得低于4ms，如果低于这个值就会自动增加。 setTimeout()只是将事件插入了'任务队列',
所以没有办法保证,回调函数一定会在setTimeout()指定的事件执行。</p>
<p><strong>宏任务/微任务</strong></p>
<ol>
<li>宏任务: 整体代码 setTimeout setInterval</li>
<li>微任务: Promise MutationObserver</li>
</ol>
<p>第一次事件循环中，JavaScript 引擎会把整个 script 代码当成一个宏任务执行，执行完成之后，再检测本次循环中是否寻在微任务，存在的话就依次从微任务的任务队列中读取执行完所有的微任务，再读取宏任务的任务队列中的任务执行，再执行所有的微任务，如此循环。JS 的执行顺序就是每次事件循环中的 宏任务-微任务。</p>
<p><a href="http://www.ruanyifeng.com/blog/2014/10/event-loop.html" target="_blank" rel="noopener noreferrer">JavaScript-Event-Loop<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 面试题 下面代码的执行顺序</span></span>
<span class="line"><span style="color: #F92672">async</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">async1</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;async1 start&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">await</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">async2</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;async1 end&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F92672">async</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">async2</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;async2&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;script start&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF">setTimeout</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;setTimeout&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">},</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #A6E22E">async1</span><span style="color: #F8F8F2">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Promise</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">resolve</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;promise1&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">}).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;promise2&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;script end&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #88846F">/* 正确执行顺序 ： </span></span>
<span class="line"><span style="color: #88846F">script start</span></span>
<span class="line"><span style="color: #88846F">async1 start</span></span>
<span class="line"><span style="color: #88846F">async2</span></span>
<span class="line"><span style="color: #88846F">promise1</span></span>
<span class="line"><span style="color: #88846F">script end</span></span>
<span class="line"><span style="color: #88846F">async1 end</span></span>
<span class="line"><span style="color: #88846F">promise2</span></span>
<span class="line"><span style="color: #88846F">setTimeout</span></span>
<span class="line"><span style="color: #88846F">*/</span><span style="color: #F8F8F2"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Promise新建后就会立即执行。 立即resolve()的Promise对象,是在本轮事件循环的结束时执行,而不是在下一轮 事件循环开始时。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 以下代码的执行顺序</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;start&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #66D9EF">setTimeout</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;children2&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">Promise</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">().</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;children3&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">},</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Promise</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">resolve</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;children4&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF">setTimeout</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;children5&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;children6&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">}).</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;children7&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF">setTimeout</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(res)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">start</span></span>
<span class="line"><span style="color: #88846F">children4</span></span>
<span class="line"><span style="color: #88846F">children2</span></span>
<span class="line"><span style="color: #88846F">children3</span></span>
<span class="line"><span style="color: #88846F">children5</span></span>
<span class="line"><span style="color: #88846F">children7</span></span>
<span class="line"><span style="color: #88846F">children6</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">p</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Promise</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">resolve</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> p1 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">Promise</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">resolve</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF">setTimeout</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">      },</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">    p1.</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(res)</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">    console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">resolve</span><span style="color: #F8F8F2">(</span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #A6E22E">p</span><span style="color: #F8F8F2">().</span><span style="color: #A6E22E">then</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">res</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(res)</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;end&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #88846F">/*</span></span>
<span class="line"><span style="color: #88846F">3</span></span>
<span class="line"><span style="color: #88846F">end</span></span>
<span class="line"><span style="color: #88846F">4</span></span>
<span class="line"><span style="color: #88846F">2</span></span>
<span class="line"><span style="color: #88846F">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Promise对象的状态改变,只有两种可能:从pending变为fulfilled和从pending变为rejected.状态改变就凝固了不会再改变了。</p>
<h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a> 垃圾回收</h2>
<ol>
<li>函数的局部变量</li>
</ol>
<p>局部变量只在函数执行的过程中存在,在这个过程中会为局部变量在栈(或堆)内存上分配相应的空间。以便存储它们的值。然后在函数中使用这些值。
直至函数执行完成, 此时局部变量就没有存在的必要了。</p>
<h3 id="引用计数" tabindex="-1"><a class="header-anchor" href="#引用计数" aria-hidden="true">#</a> 引用计数</h3>
<p>另一种不太常见的垃圾收集策略 叫做 引用计数(reference counting).
引用计数有一个问题, 就是无法回收循环引用的对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">count_fn</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> object1 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {}</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> object2 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {}</span></span>
<span class="line"><span style="color: #F8F8F2">  object1.name </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> object2;</span></span>
<span class="line"><span style="color: #F8F8F2">  object2.name </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> object1;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在采用引用计数的垃圾回收策略中,当函数执行完毕后, object1和object2将继续存在,因为它们的引用次数永远不会是0。</p>
<h3 id="标记清除" tabindex="-1"><a class="header-anchor" href="#标记清除" aria-hidden="true">#</a> 标记清除</h3>
<p>JavaScript中最常用的垃圾收集方式就是 标记清除。
垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记, 然后它会去掉环境中的变量 以及被环境中的变量引用的变量的标记。而
在此之后再被加上标记的变量将被视为准备删除的变量。原因是环境中的变量已经无法访问到这些变量了。最后,垃圾收集器完成内存清除工作。
销毁那些带标记的值并回收它们所占用的内存空间。</p>
<p>分标记和清除,先遍历所有对象找到活动对象,再次遍历清除没有标记的对象,可以解决循环引用不能回收。</p>
<h3 id="管理内存" tabindex="-1"><a class="header-anchor" href="#管理内存" aria-hidden="true">#</a> 管理内存</h3>
<p>确保占用最少的内存可以让页面获得更好的性能。而优化内存占用的最佳方式,就是为执行的代码只保存必要的数据。一旦数据
不再有用, 最后通过将其值设置为null来释放其引用。这种方法叫做解除引用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 创建dom,但不再页面上显示 分离dom</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> tempElement </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">fn</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> ul </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;ul&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #F92672">for</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> i </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">; i </span><span style="color: #F92672">&lt;</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">10</span><span style="color: #F8F8F2">; i</span><span style="color: #F92672">++</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">   ul.</span><span style="color: #A6E22E">appendChild</span><span style="color: #F8F8F2">(document.</span><span style="color: #A6E22E">createElement</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;li&#39;</span><span style="color: #F8F8F2">))</span></span>
<span class="line"><span style="color: #F8F8F2"> }</span></span>
<span class="line"><span style="color: #F8F8F2"> tempElement </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> ul;</span></span>
<span class="line"><span style="color: #F8F8F2"> tempElement </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 事件解绑</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  methods: {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">listen_click</span><span style="color: #F8F8F2">() {}</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">mounted</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    document.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;click&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.listen_click, </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">beforeUnmounted</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">    document.</span><span style="color: #A6E22E">removeEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;click&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.listen_click, </span><span style="color: #AE81FF">false</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 清除定时器</span></span>
<span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">mounted</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.timer </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">setTimeout</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">beforeUnmounted</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.timer) </span><span style="color: #66D9EF">clearTimeout</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.timer)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
