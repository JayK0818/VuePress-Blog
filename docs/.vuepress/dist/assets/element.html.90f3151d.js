import{_ as F,r as e,o as d,c as y,a as n,w as t,d as s,b as o,e as l}from"./app.02e89851.js";const h={},m=o(`<h1 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> Element</h1><h2 id="element-attributes" tabindex="-1"><a class="header-anchor" href="#element-attributes" aria-hidden="true">#</a> Element.attributes</h2><p>Element.attributes \u5C5E\u6027\u8FD4\u56DE\u8BE5\u5143\u7D20\u6240\u6709\u5C5E\u6027\u8282\u70B9\u7684\u4E00\u4E2A\u5B9E\u65F6\u96C6\u5408.\u8BE5\u96C6\u5408\u662F\u4E00\u4E2ANamedNodeMap\u5BF9\u8C61\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&#39;name&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&#39;hello&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">data-id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&#39;123&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&#39;color:red;&#39;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> oDiv </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">querySelector</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;.name&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">  oDiv.attributes </span><span style="color:#88846F;">// \u8FD4\u56DE</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">  {</span></span>
<span class="line"><span style="color:#88846F;">    0: class=&#39;name&#39;,</span></span>
<span class="line"><span style="color:#88846F;">    1: id=&#39;hello&#39;,</span></span>
<span class="line"><span style="color:#88846F;">    2: data-id=&#39;123&#39;,</span></span>
<span class="line"><span style="color:#88846F;">    3: style=&#39;color:red;&#39;</span></span>
<span class="line"><span style="color:#88846F;">  }</span></span>
<span class="line"><span style="color:#88846F;">  */</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=o('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u904D\u5386attributes\u5BF9\u8C61,\u6BCF\u4E2Aattribute\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61, \u53EF\u4EE5\u901A\u8FC7attribute.name \u548C attribute.value \u5C5E\u6027\u83B7\u53D6\u5C5E\u6027\u540D\u548C\u503C.</p></div><h2 id="element-hasattribute" tabindex="-1"><a class="header-anchor" href="#element-hasattribute" aria-hidden="true">#</a> Element.hasAttribute()</h2><p>hasAttribute \u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u6307\u793A\u8BE5\u5143\u7D20\u662F\u5426\u5305\u542B\u6709\u6307\u5B9A\u7684\u5C5E\u6027\uFF08attribute\uFF09\u3002</p><h2 id="element-clientwidth-element-clientheight" tabindex="-1"><a class="header-anchor" href="#element-clientwidth-element-clientheight" aria-hidden="true">#</a> Element.clientWidth/Element.clientHeight</h2><p>\u5185\u8054\u5143\u7D20\u4EE5\u53CA\u6CA1\u6709CSS\u6837\u5F0F\u7684\u5143\u7D20\u7684clientWidth\u5C5E\u6027\u503C\u4E3A0. Element.clientWidth\u5C5E\u6027\u8868\u793A\u5143\u7D20\u7684\u5185\u90E8\u5BBD\u5EA6\u3002\u8BE5\u5C5E\u6027\u5305\u62EC \u5185\u8FB9\u8DDDpadding,\u4F46\u4E0D\u5305\u62EC\u8FB9\u6846border,\u5916\u8FB9\u8DDDmargin\u548C\u5782\u76F4\u6EDA\u52A8\u6761.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8BE5\u5C5E\u6027\u503C\u4F1A\u88AB\u56DB\u820D\u4E94\u5165\u4E3A\u4E00\u4E2A\u6574\u6570\u3002\u5982\u679C\u4F60\u9700\u8981\u4E00\u4E2A\u5C0F\u6570\u503C\uFF0C\u53EF\u4F7F\u7528 element.getBoundingClientRect()\u3002</p></div><p>Element.clientWidth\u662F\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027\u3002</p><p>\u5982\u679C\u5305\u542B\u6EDA\u52A8\u6761, clientHeight\u53EF\u4EE5\u901A\u8FC7CSS height + CSS padding - \u6C34\u5E73\u6EDA\u52A8\u6761\u7684\u9AD8\u5EA6\u6765\u8BA1\u7B97\u3002</p><h2 id="element-offsetparent" tabindex="-1"><a class="header-anchor" href="#element-offsetparent" aria-hidden="true">#</a> Element.offsetParent</h2><p>\u8BE5\u5C5E\u6027\u662F\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027,\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u6700\u8FD1\u7684(closest,\u6307\u5305\u542B\u5C42\u7EA7\u4E0A\u7684\u6700\u8FD1)\u5305\u542B\u8BE5\u5143\u7D20\u7684\u5B9A\u4F4D\u5143\u7D20\u3002\u5982\u679C\u6CA1\u6709\u5B9A\u4F4D\u7684\u5143\u7D20,\u5219 offsetParent\u4E3A\u6700\u8FD1\u7684table table cell \u6216\u6839\u5143\u7D20\u3002\u5F53\u5143\u7D20\u7684display\u8BBE\u7F6E\u4E3Anone,offsetParent\u8FD4\u56DENull\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u5728weibkit\u4E2D,\u5982\u679C\u5143\u7D20\u4E3A\u9690\u85CF\u7684 \u6216\u8005\u8BE5\u5143\u7D20\u7684style.position\u88AB\u8BBE\u7F6E\u4E3Afixed,\u5219\u8BE5\u5C5E\u6027\u8FD4\u56DEnull</li><li>\u5728IE9\u4E2D,\u5982\u679C\u8BE5\u5143\u7D20\u7684style.position\u88AB\u8BBE\u7F6E\u4E3Afixed,\u5219\u8BE5\u5C5E\u6027\u8FD4\u56DENull,(display:none)\u65E0\u5F71\u54CD\u3002</li></ol></div><h2 id="element-offsetwidth" tabindex="-1"><a class="header-anchor" href="#element-offsetwidth" aria-hidden="true">#</a> Element.offsetWidth</h2><p>HTMLElement.offsetWidth\u662F\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027,\u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\u7684\u5E03\u5C40\u5BBD\u5EA6\u3002 offsetWidth\u662F\u6D4B\u91CF\u5305\u542B\u5143\u7D20\u7684\u8FB9\u6846(border) \u6C34\u5E73\u7EBF\u4E0A\u7684\u5185\u8FB9\u8DDD(padding) \u5782\u76F4\u65B9\u5411\u6EDA\u52A8\u6761(scrollbar)(\u5982\u679C\u5B58\u5728\u7684\u8BDD),\u4EE5\u53CACSS\u8BBE\u7F6E\u7684\u5BBD\u5EA6(width)\u7684\u503C\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8FD9\u4E2A\u5C5E\u6027\u5C06\u4F1A\u56DB\u820D\u4E94\u5165\u4E3A\u4E00\u4E2A\u6574\u6570, \u5982\u679C\u60F3\u8981\u83B7\u53D6\u4E00\u4E2A\u5C0F\u6570\u503C, \u53EF\u4EE5\u4F7F\u7528element.getBoundingClientRect()\u3002</p></div>',14),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth",target:"_blank",rel:"noopener noreferrer"},b=l("MDN-Element.offsetHeight"),E=s("h2",{id:"element-scrollheight",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#element-scrollheight","aria-hidden":"true"},"#"),l(" Element.scrollHeight")],-1),f=s("p",null,"Element.scrollHeight \u662F\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027, \u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\u5185\u5BB9\u9AD8\u5EA6\u7684\u5EA6\u91CF\u3002\u5305\u542B\u7531\u4E8E\u6EA2\u51FA\u5BFC\u81F4\u7684\u89C6\u56FE\u4E2D\u4E0D\u53EF\u89C1\u7684\u5185\u5BB9\u3002 (\u5305\u542B\u5143\u7D20\u7684padding,\u4F46\u4E0D\u5305\u542B\u5143\u7D20\u7684border\u548Cmargin)\u3002 \u540C\u6837, \u8BE5\u5C5E\u6027\u4E5F\u4F1A\u5BF9\u503C\u8FDB\u884C\u53D6\u6574\u3002",-1),_=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"\u8BE5\u5C5E\u6027\u503C\u4F1A\u88AB\u56DB\u820D\u4E94\u5165\u4E3A\u4E00\u4E2A\u6574\u6570\u3002\u5982\u679C\u4F60\u9700\u8981\u4E00\u4E2A\u5C0F\u6570\u503C\uFF0C\u53EF\u4F7F\u7528 element.getBoundingClientRect()\u3002")],-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight",target:"_blank",rel:"noopener noreferrer"},x=l("MDN-Element.scrollHeight"),D=o(`<div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.box</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">width</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">height</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">padding</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">margin</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">5</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">5</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">box-sizing</span><span style="color:#F8F8F2;">:</span><span style="color:#66D9EF;">border-box</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">overflow</span><span style="color:#F8F8F2;">:</span><span style="color:#66D9EF;">auto</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.inner</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">background-color</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">#98c379</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">width</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">400</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">height</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">400</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=s("p",null,"\u4E0A\u9762\u662F\u4E00\u4E2Adiv, \u91CC\u9762\u5305\u542B\u4E00\u4E2A\u66F4\u5927\u7684div, \u53EF\u4EE5\u5206\u522B\u70B9\u51FB \u4E0D\u540C\u6309\u94AE \u83B7\u53D6\u5B83\u7684\u5C3A\u5BF8\u6570\u636E\u3002",-1),S=s("h3",{id:"\u5224\u65AD\u5143\u7D20\u662F\u5426\u6EDA\u52A8\u5230\u5E95",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5224\u65AD\u5143\u7D20\u662F\u5426\u6EDA\u52A8\u5230\u5E95","aria-hidden":"true"},"#"),l(" \u5224\u65AD\u5143\u7D20\u662F\u5426\u6EDA\u52A8\u5230\u5E95")],-1),B=s("p",null,"scrollTop\u662F\u4E00\u4E2A\u975E\u6574\u6570, \u800CscrollHeight \u548C clientHeight \u662F\u56DB\u820D\u4E94\u5165\u7684, \u56E0\u6B64\u786E\u8BA4\u6EDA\u52A8\u533A\u57DF\u662F\u5426\u6EDA\u52A8\u5230\u5E95\u7684 \u552F\u4E00\u65B9\u6CD5\u662F\u67E5\u770B\u6EDA\u52A8\u91CF\u662F\u5426\u63A5\u8FD1\u67D0\u4E2A\u9600\u503C\u3002",-1),C=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"\u5728\u4F7F\u7528\u663E\u793A\u6BD4\u4F8B\u7F29\u653E\u7684\u7CFB\u7EDF\u4E0A, scrollTop\u53EF\u80FD\u4F1A\u63D0\u4F9B\u4E00\u4E2A\u5C0F\u6570\u3002")],-1);function k(N,w){const i=e("JavaScript-Attribute"),a=e("ClientOnly"),p=e("ExternalLinkIcon"),c=e("JavaScript-BoxSize"),r=e("JavaScript-ScrollBottom");return d(),y("div",null,[m,n(a,null,{default:t(()=>[n(i)]),_:1}),u,s("p",null,[s("a",v,[b,n(p)])]),E,f,_,s("p",null,[s("a",g,[x,n(p)])]),D,n(a,null,{default:t(()=>[n(c)]),_:1}),A,S,B,C,n(a,null,{default:t(()=>[n(r)]),_:1})])}var I=F(h,[["render",k],["__file","element.html.vue"]]);export{I as default};
