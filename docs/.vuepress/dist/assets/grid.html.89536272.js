import{_ as t,r as n,o as r,c as i,a as s,w as p,b as a}from"./app.a286d625.js";const y={},d=a(`<h1 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> Grid</h1><p>CSS\u7F51\u683C\u5E03\u5C40\u53EF\u4EE5\u5C06\u4E00\u4E2A\u9875\u9762\u5212\u5206\u4E3A\u51E0\u4E2A\u4E3B\u8981\u533A\u57DF, \u4EE5\u53CA\u5B9A\u4E49\u8FD9\u4E9B\u533A\u57DF\u7684\u5927\u5C0F, \u4F4D\u7F6E, \u5C42\u6B21\u7F50\u5B50\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.box</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">grid</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">inline-grid</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grid-template-columns-grid-template-rows" tabindex="-1"><a class="header-anchor" href="#grid-template-columns-grid-template-rows" aria-hidden="true">#</a> grid-template-columns/grid-template-rows</h2><p>grid-template-columns \u57FA\u4E8E\u7F51\u683C\u5217\u7684\u7EF4\u5EA6, \u5B9A\u4E49\u7F51\u683C\u7EBF\u7684\u540D\u79F0\u548C\u7F51\u683C\u8F68\u9053\u7684\u5C3A\u5BF8\u5927\u5C0F\u3002 grid-template-rows \u57FA\u4E8E\u7F51\u683C\u884C\u7684\u7EF4\u5EA6, \u5B9A\u4E49\u7F51\u683C\u7EBF\u7684\u540D\u79F0\u548C\u7F51\u683C\u8F68\u9053\u7684\u5C3A\u5BF8\u5927\u5C0F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.box</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">grid</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-columns</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-rows</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">/* \u6216\u8005\u4F7F\u7528\u767E\u5206\u6BD4 */</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-columns</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">33</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">33</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">33</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-rows</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">fr</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-columns</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">repeat</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">);  </span><span style="color:#88846F;">/*\u91CD\u590D3\u6B21, \u6BCF\u5217100px*/</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>auto-fill: \u6709\u65F6\u5355\u5143\u683C\u7684\u5927\u5C0F\u662F\u56FA\u5B9A\u7684, \u4F46\u662F\u5BB9\u5668\u5927\u5C0F\u662F\u4E0D\u786E\u5B9A\u7684, \u5982\u679C\u5E0C\u671B\u6BCF\u4E00\u884C \u6216\u8005\u6BCF\u4E00\u5217 \u5BB9\u7EB3\u5C3D\u53EF\u80FD\u591A\u7684\u5355\u5143\u683C, \u53EF\u4EE5\u4F7F\u7528 auto-fill \u5173\u952E\u5B57\u81EA\u52A8\u586B\u5145.</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.container</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">grid</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-columns</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">repeat</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">auto-fill</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-columns</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">repeat</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-columns</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">minmax</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">fr</span><span style="color:#F8F8F2;">) </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">; </span><span style="color:#88846F;">/*\u4E2D\u95F4\u7684\u5BBD\u5EA6\u81EA\u9002\u5E94,\u6700\u5C0F100px*/</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grid-template-areas-grid-area" tabindex="-1"><a class="header-anchor" href="#grid-template-areas-grid-area" aria-hidden="true">#</a> grid-template-areas/grid-area</h2><p>grid-template-areas \u662F\u7F51\u683C\u533A\u57DFgrid areas\u5728CSS\u4E2D\u7684\u7279\u5B9A\u547D\u540D, \u53EF\u4EE5\u5408\u5E76\u4E0D\u540C\u7684\u533A\u57DF\u3002 \u6BCF\u884C \u7531\u5355\u5F15\u53F7\u5185\u5B9A\u4E49, \u4EE5\u7A7A\u683C\u5206\u9694\u3002 . \u53F7\u8868\u793A\u6CA1\u6709\u540D\u79F0\u7684\u7F51\u683C\u9879\u3002</p><p>grid-area \u4F7F\u7528\u5728 grid-template-areas \u5B9A\u4E49\u5E03\u5C40\u7684\u540D\u5B57, \u76F8\u540C\u7684\u90E8\u5206\u5C06\u4F1A\u5408\u5E76\u3002</p><p>grid-area \u5C5E\u6027\u6307\u5B9A\u7F51\u683C\u5143\u7D20\u5728\u7F51\u683C\u5E03\u5C40\u4E2D\u7684\u5927\u5C0F\u548C\u4F4D\u7F6E, \u662F\u4EE5\u4E0B\u5C5E\u6027\u7684\u7B80\u5199\u5C5E\u6027:</p><ol><li>grid-row-start</li><li>grid-row-end</li><li>grid-column-start</li><li>grid-column-end</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.grid-example</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">grid</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">300</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">300</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-areas</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&#39;a a a&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&#39;b c c&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&#39;b c c&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-template-columns</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">repeat</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.grid-example</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">.item1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-area</span><span style="color:#F8F8F2;">: a; </span><span style="color:#88846F;">/*\u4E0D\u80FD\u4F7F\u7528\u5F15\u53F7*/</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">background-color</span><span style="color:#F8F8F2;">:</span><span style="color:#66D9EF;">pink</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.grid-example</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">.item2</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-area</span><span style="color:#F8F8F2;">: b;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">background-color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">skyblue</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.grid-example</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">.item3</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-area</span><span style="color:#F8F8F2;">: c;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">background-color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">orange</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* \u4ECE\u7B2C2\u884C\u548C\u7B2C1\u5217\u5F00\u59CB, \u6A2A\u8DE82\u884C3\u5217 */</span></span>
<span class="line"><span style="color:#A6E22E;">.item</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-area</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;"> / </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;"> / span </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;"> / span </span><span style="color:#AE81FF;">3</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* \u6805\u683C\u5E03\u5C40 */</span></span>
<span class="line"><span style="color:#A6E22E;">.col-1</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-area</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / span </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.col-2</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-area</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / span </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.col-3</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-area</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;"> / span </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">...</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="column-gap-row-gap" tabindex="-1"><a class="header-anchor" href="#column-gap-row-gap" aria-hidden="true">#</a> column-gap/row-gap</h2><p>column-gap \u548C row-gap \u7528\u6765\u8BBE\u7F6E\u7F51\u683C\u7684\u95F4\u9699\u3002 \u5206\u522B\u7528\u6765\u8BBE\u7F6E\u884C \u6216 \u5217\u7684\u95F4\u9694</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.box</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">grid</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">column-gap</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">row-gap</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">/* \u6216\u8005\u4F7F\u7528\u767E\u5206\u6BD4 */</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">row-gap</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">column-gap</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">column-gap</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">2</span><span style="color:#F92672;">rem</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),v=a(`<h2 id="justify-items-align-items" tabindex="-1"><a class="header-anchor" href="#justify-items-align-items" aria-hidden="true">#</a> justify-items/align-items</h2><p>justify-items\u5C5E\u6027\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5185\u5BB9\u7684\u6C34\u5E73\u4F4D\u7F6E, align-items\u5C5E\u6027\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5185\u5BB9\u7684\u5782\u76F4\u4F4D\u7F6E\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.box</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">grid</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">justify-items</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">start</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">end</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">stretch</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">align-items</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">start</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">end</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">stretch</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>justify-items \u548C align-items \u53EF\u4EE5\u901A\u8FC7 place-items\u5C5E\u6027\u7ED3\u5408\u5199\u5728\u4E00\u8D77.</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.box</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">place-items</span><span style="color:#F8F8F2;">: &lt;align-items&gt; &lt;justify-items&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u=a(`<h2 id="justify-content-align-content" tabindex="-1"><a class="header-anchor" href="#justify-content-align-content" aria-hidden="true">#</a> justify-content/align-content</h2><p>justify-content \u548C align-content \u5C5E\u6027\u662F\u5728\u6574\u4E2A\u5185\u5BB9\u533A\u57DF\u5728\u5BB9\u5668\u91CC\u9762\u7684\u6C34\u5E73\u4F4D\u7F6E \u548C \u5782\u76F4\u4F4D\u7F6E\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.container</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">justify-content</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">start</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">end</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">stretch</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">space-around</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">space-between</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">space-evenly</span></span>
<span class="line"><span style="color:#F8F8F2;">  align-content: </span><span style="color:#66D9EF;">start</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">end</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">stretch</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">space-around</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">space-between</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">space-evenly</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">\u540C\u6837,\u548Cplace-items\u4E00\u6837, place-content\u5C5E\u6027\u662F align-content\u548Cjustify-content\u5C5E\u6027\u7684\u5408\u5E76\u7B80\u5199\u5F62\u5F0F</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"><span style="color:#A6E22E;">.container</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">place-content</span><span style="color:#F8F8F2;">: &lt;align-content&gt; &lt;justify-content&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m=a(`<h2 id="grid-auto-flow" tabindex="-1"><a class="header-anchor" href="#grid-auto-flow" aria-hidden="true">#</a> grid-auto-flow</h2><p>grid-auto-flow \u5C5E\u6027\u63A7\u5236\u7740\u81EA\u52A8\u5E03\u5C40\u7B97\u6CD5\u600E\u6837\u8FD0\u4F5C, \u5212\u5206\u7F51\u683C\u4EE5\u540E, \u5BB9\u5668\u7684\u5B50\u5143\u7D20\u4F1A\u6309\u7167\u987A\u5E8F\u81EA\u52A8\u653E\u7F6E\u5728\u6BCF\u4E00\u4E2A\u7F51\u683C\u3002 \u9ED8\u8BA4\u7684\u653E\u7F6E\u987A\u5E8F\u662F \u5148\u884C\u540E\u5217\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.container</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">grid</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-auto-flow</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">row</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">column</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">dense</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">row</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">dense</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">column</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">dense</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">dense \u5173\u952E\u5B57\u6307\u5B9A \u81EA\u52A8\u5E03\u5C40\u7B97\u6CD5\u4F7F\u7528\u4E00\u79CD &#39;\u7A20\u5BC6&#39; \u5806\u79EF\u7B97\u6CD5, \u5982\u679C\u540E\u9762\u51FA\u73B0\u4E86\u8F83\u5C0F\u7684\u5143\u7D20, \u5219\u53BB\u8BD5\u56FE\u53BB\u586B\u5145\u7F51</span></span>
<span class="line"><span style="color:#88846F;">\u683C\u4E2D\u524D\u9762\u7559\u4E0B\u7684\u7A7A\u767D\u3002\u53EF\u80FD\u4F1A\u5BFC\u81F4\u539F\u6765\u51FA\u73B0\u7684\u6B21\u5E8F\u88AB\u6253\u4E71\u3002</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grid-column-start" tabindex="-1"><a class="header-anchor" href="#grid-column-start" aria-hidden="true">#</a> grid-column-start</h2><p>grid-column-start / grid-column-end / grid-row-start / grid-row-end</p><p>\u9879\u76EE\u7684\u4F4D\u7F6E\u662F\u53EF\u4EE5\u6307\u5B9A\u7684, \u5177\u4F53\u65B9\u6CD5\u5C31\u662F\u6307\u5B9A\u9879\u76EE\u7684\u56DB\u4E2A\u8FB9\u6846, \u5206\u522B\u5B9A\u4F4D\u5728\u54EA\u6839\u7F51\u683C\u7EBF</p><ol><li>grid-column-start\u5C5E\u6027\uFF1A\u5DE6\u8FB9\u6846\u6240\u5728\u7684\u5782\u76F4\u7F51\u683C\u7EBF</li><li>grid-column-end\u5C5E\u6027\uFF1A\u53F3\u8FB9\u6846\u6240\u5728\u7684\u5782\u76F4\u7F51\u683C\u7EBF</li><li>grid-row-start\u5C5E\u6027\uFF1A\u4E0A\u8FB9\u6846\u6240\u5728\u7684\u6C34\u5E73\u7F51\u683C\u7EBF</li><li>grid-row-end\u5C5E\u6027\uFF1A\u4E0B\u8FB9\u6846\u6240\u5728\u7684\u6C34\u5E73\u7F51\u683C\u7EBF</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.item-1</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-column-start</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-column-end</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">/* \u8FD8\u53EF\u4EE5\u4F7F\u7528span\u5173\u952E\u5B57 \u8868\u793A\u8DE8\u57DF \u591A\u5C11\u4E2A\u7F51\u683C */</span></span>
<span class="line"><span style="color:#A6E22E;">.item-2</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-column-start</span><span style="color:#F8F8F2;">: span </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">grid-row-start</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),E=a(`<h2 id="justify-self-align-self" tabindex="-1"><a class="header-anchor" href="#justify-self-align-self" aria-hidden="true">#</a> justify-self/align-self</h2><p>justify-self \u548C align-self \u5C5E\u6027\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9\u7684\u6C34\u5E73\u4F4D\u7F6E \u548C justify-items/align-items\u5C5E\u6027\u7684\u7528\u6CD5\u5B8C\u5168\u4E00\u81F4, \u4F46\u53EA\u4F5C\u7528\u4E8E\u5355\u4E2A\u9879\u76EE\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.item</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">justify-self</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">start</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">end</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">stretch</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">align-self</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">start</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">end</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;"> | </span><span style="color:#66D9EF;">stretch</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function b(g,D){const e=n("Css-Grid-Template"),l=n("ClientOnly"),o=n("Css-Grid-Items"),F=n("Css-Grid-Content"),c=n("Css-Grid-Flow");return r(),i("div",null,[d,s(l,null,{default:p(()=>[s(e)]),_:1}),v,s(l,null,{default:p(()=>[s(o)]),_:1}),u,s(l,null,{default:p(()=>[s(F)]),_:1}),m,s(l,null,{default:p(()=>[s(c)]),_:1}),E])}var h=t(y,[["render",b],["__file","grid.html.vue"]]);export{h as default};