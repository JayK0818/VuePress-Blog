import{_ as s,o as n,c as a,e as l}from"./app.084d5aed.js";const p={},e=l(`<h1 id="\u76D2\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u76D2\u6A21\u578B" aria-hidden="true">#</a> \u76D2\u6A21\u578B</h1><p>\u5F53\u5BF9\u4E00\u4E2A\u6587\u6863\u8FDB\u884C\u5E03\u5C40\u7684\u65F6\u5019,\u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u5F15\u64CE\u4F1A\u6839\u636E\u6807\u51C6\u4E4B\u4E00\u7684CSS\u57FA\u7840\u6846\u76D2\u6A21\u578B,\u5C06\u6240\u6709\u5143\u7D20\u8868\u793A\u4E3A\u4E00\u4E2A\u4E2A\u77E9\u5F62\u7684\u76D2\u5B50(Box)\u3002 CSS\u51B3\u5B9A\u8FD9\u4E9B\u76D2\u5B50\u7684\u5927\u5C0F,\u4F4D\u7F6E\u4EE5\u53CA\u5C5E\u6027\u3002 \u6BCF\u4E2A\u76D2\u5B50\u6709\u56DB\u4E2A\u8FB9\u754C: \u5185\u5BB9\u8FB9\u754CContent edge,\u5185\u8FB9\u8DDD\u8FB9\u754C Padding Edge \u8FB9\u6846\u8FB9\u754CBorder Edge,\u5916\u8FB9\u6846\u8FB9\u754C Margin Edge.</p><ol><li>\u6807\u51C6\u76D2\u6A21\u578B: \u5B9E\u9645\u7684\u5143\u7D20 \u662F width padding \u548C border \u4E00\u8D77\u51B3\u5B9A\u6574\u4E2A\u76D2\u5B50\u7684\u5927\u5C0F\u3002(margin\u4E0D\u56DE\u8BA1\u5165\u5B9E\u9645\u5927\u5C0F,\u4F1A\u5F71\u54CD\u76D2\u5B50\u5728\u9875\u9762\u6240\u5360\u7A7A\u95F4)</li><li>\u602A\u5F02\u76D2\u6A21\u578B: \u5143\u7D20\u6240\u5360\u7684\u7A7A\u95F4\u5C31\u662F\u5B9E\u9645\u8BBE\u7F6E\u7684width/height\u3002 \u53EF\u4EE5\u901A\u8FC7 box-sizing: border-box\u6765\u5B9E\u73B0\u3002</li></ol><h2 id="margin" tabindex="-1"><a class="header-anchor" href="#margin" aria-hidden="true">#</a> margin</h2><p>\u4E3A\u7ED9\u5B9A\u5143\u7D20\u8BBE\u7F6E \u4E0A\u4E0B\u5DE6\u53F3 \u56DB\u4E2A\u65B9\u5411\u7684\u5916\u8FB9\u8DDD\u5C5E\u6027\u3002</p><p>\u53EF\u80FD\u7684\u503C: length(\u56FA\u5B9A\u503C\u4F5C\u4E3A\u5916\u8FB9\u8DDD) / percentage(\u767E\u5206\u6BD4) / auto</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.box</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;">; </span><span style="color:#88846F;">/*\u5757\u5143\u7D20\u5DE6\u53F3\u5C45\u4E2D*/</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin-left</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin-right</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin-top</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin-bottom</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin-top</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;  </span><span style="color:#88846F;">/*\u76F8\u5BF9\u7236\u5143\u7D20\u5BBD\u5EA6\u768410%*/</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin-top</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;  </span><span style="color:#88846F;">/*\u76F8\u5BF9\u7236\u5143\u7D20\u5BBD\u5EA6\u768410%*/</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin-left</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">-10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E0A\u4E0B\u5916\u8FB9\u8DDD\u7684\u8BBE\u7F6E \u5BF9\u4E0D\u53EF\u66FF\u6362\u7684 \u5185\u8054\u5143\u7D20\u65E0\u6548, \u5982span i \u7B49\u3002 \u5916\u8FB9\u8DDD\u63A7\u5236\u7B49\u662F\u5916\u90E8\u7A7A\u51FA\u7B49\u7A7A\u95F4, \u800Cpadding\u64CD\u4F5C\u5143\u7D20 \u5185\u90E8\u7A7A\u51FA\u7B49\u7A7A\u95F4\u3002</p><p>margin \u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8D1F\u6570, \u4F46\u662Fpadding\u4E0D\u53EF\u4EE5</p></div><h2 id="padding" tabindex="-1"><a class="header-anchor" href="#padding" aria-hidden="true">#</a> padding</h2><p>\u5B9A\u4E49\u5143\u7D20\u8FB9\u6846\u4E0E\u5143\u7D20\u5185\u5BB9\u4E4B\u95F4\u7684\u7A7A\u95F4\u3002 \u53EF\u80FD\u7684\u503C: length(px,em\u7B49) %</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.box</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">padding</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">padding-left</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">padding-right</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">padding-top</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">padding-bottom</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">padding-left</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;  </span><span style="color:#88846F;">/* \u76F8\u5BF9\u4E8E\u7236\u7EA7\u5BBD\u5EA6\u768410% */</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">padding-top</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;	  </span><span style="color:#88846F;">/* \u76F8\u5BF9\u4E8E\u7236\u7EA7\u5BBD\u5EA6\u768410% */</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="border" tabindex="-1"><a class="header-anchor" href="#border" aria-hidden="true">#</a> border</h2><p>border\u5C5E\u6027\u662F\u4E00\u4E2A\u7528\u4E8E\u8BBE\u7F6E\u5404\u79CD\u5355\u72EC\u7684\u8FB9\u754C\u5C5E\u6027\u3002\u53EF\u4EE5\u7528\u4E8E\u8BBE\u7F6E\u4E00\u4E2A\u6216\u591A\u4E2A\u4EE5\u4E0B\u5C5E\u6027\u7684\u503C: border-width / border-style / border-color</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.box</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">solid</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">#e8e8e8</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-style</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">solid</span></span>
<span class="line"><span style="color:#F8F8F2;">  border-color: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> display</h2><p>display \u5C5E\u6027\u8BBE\u7F6E\u4E00\u4E2A\u5143\u7D20\u5E94\u8BE5\u5982\u4F55\u663E\u793A.</p><ol><li>display-outside(\u5916\u90E8\u503C)</li><li>display-inside(\u5185\u90E8\u503C)</li><li>display-listitem(\u5217\u8868\u503C)</li><li>display-internal(\u5C5E\u6027\u503C)</li><li>display-box(\u663E\u793A\u503C)</li><li>display-legacy(\u6DF7\u5408\u503C)</li><li>global(\u5168\u5C40\u503C)</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u9690\u85CF\u4E00\u4E2A\u5143\u7D20\u53EF\u4EE5\u901A\u8FC7 display:none(\u4E0D\u4F1A\u5360\u636E\u4E4B\u524D\u7684\u7A7A\u95F4,\u4ECD\u4F1A\u5F71\u54CD\u5E03\u5C40), \u6216\u8005\u628Avisibility\u8BBE\u7F6E\u4E3A hidden(\u4F1A\u5360\u636E\u4E4B\u524D\u4E00\u6837\u7684\u7A7A\u95F4)\u3002</p></div><p>\u5916\u90E8\u503C\u5C31\u662F\u5B9A\u4E49\u81EA\u8EAB\u5143\u7D20\u7684\u5916\u90E8\u8868\u73B0, \u800C\u4E0D\u5F71\u54CD\u5185\u90E8\u7684\u5B50\u5143\u7D20\u3002 display-outside: block / inline</p><p>\u5916\u90E8\u503C: \u5B9A\u4E49\u5B50\u5143\u7D20\u5E03\u5C40\u7684\u3002 display-inside: flex / grid / table</p><p>\u5217\u8868\u503C: ul / ol</p><p>\u6DF7\u5408\u503C: inline-block / inline-table / inline-flex / inline-grid</p><p>\u5168\u5C40\u503C: inherit: \u7EE7\u627F\u7236\u5143\u7D20\u7684\u5C5E\u6027 initial: \u521D\u59CB\u503C unset: \u6DF7\u5408\u4E86inherit \u548C initial, \u5982\u679C\u8BE5\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F, \u5219\u7B49\u540C\u4E8Einherit,\u5426\u5219\u7B49\u540C\u4E8E initial</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">/* \u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761 */</span></span>
<span class="line"><span style="color:#A6E22E;">.box::-webkit-scrollbar</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">6</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">6</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.box::-webkit-scrollbar-thumb</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">background</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">#51606d</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-radius</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">3</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.box::-webkit-scrollbar-track</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">background</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">#263849</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[e];function i(F,c){return n(),a("div",null,o)}var t=s(p,[["render",i],["__file","box.html.vue"]]);export{t as default};
