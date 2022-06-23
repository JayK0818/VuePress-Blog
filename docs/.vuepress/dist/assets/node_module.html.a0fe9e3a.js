import{_ as a,r as l,o as e,c as p,d as s,a as o,b as i,e as c}from"./app.02e89851.js";const t={},r=i(`<h1 id="\u5E38\u7528npm\u5305" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528npm\u5305" aria-hidden="true">#</a> \u5E38\u7528npm\u5305</h1><h2 id="plop" tabindex="-1"><a class="header-anchor" href="#plop" aria-hidden="true">#</a> plop</h2><p>Plop is what I like to call a &#39;micro-generator framework&#39;, because it is a small tool that gives you a simple way to generate code or any other type of flat text files in a consistent way.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">//Install</span></span>
<span class="line"><span style="color:#F8F8F2;">npm install plop </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">save</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">dev</span></span>
<span class="line"><span style="color:#F8F8F2;">npm install plop </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create a propfile.js at the root of your code</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// Usage</span></span>
<span class="line"><span style="color:#88846F;">// \u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFApropfile.js </span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">prop</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  plop.</span><span style="color:#A6E22E;">setGenerator</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;component&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">    description:</span><span style="color:#E6DB74;">&#39;this is a skeleton propfile&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    prompts:[</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        type:</span><span style="color:#E6DB74;">&#39;input&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        name:</span><span style="color:#E6DB74;">&#39;name&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        message:</span><span style="color:#E6DB74;">&#39;component name&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ],</span></span>
<span class="line"><span style="color:#F8F8F2;">    actions:[{</span></span>
<span class="line"><span style="color:#F8F8F2;">      type:</span><span style="color:#E6DB74;">&#39;add&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      path:</span><span style="color:#E6DB74;">&#39;src/{{name}}/{{name}}.jsx&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      templateFile:</span><span style="color:#E6DB74;">&#39;plop-templates/component.hbs&#39;</span><span style="color:#88846F;">//\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA plop-templates\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#F8F8F2;">    }]</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>if you did not install plop globally, you will need to setup an npm script to run plop for you.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#E6DB74;">&quot;scripts&quot;</span><span style="color:#F8F8F2;">:{</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#E6DB74;">&quot;plop&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#E6DB74;">&quot;plop&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,7),F={href:"https://github.com/plopjs/plop",target:"_blank",rel:"noopener noreferrer"},d=c("github-plop");function y(v,m){const n=l("ExternalLinkIcon");return e(),p("div",null,[r,s("p",null,[s("a",F,[d,o(n)])])])}var b=a(t,[["render",y],["__file","node_module.html.vue"]]);export{b as default};
