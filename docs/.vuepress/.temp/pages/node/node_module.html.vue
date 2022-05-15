<template><h1 id="常用npm包" tabindex="-1"><a class="header-anchor" href="#常用npm包" aria-hidden="true">#</a> 常用npm包</h1>
<h2 id="plop" tabindex="-1"><a class="header-anchor" href="#plop" aria-hidden="true">#</a> plop</h2>
<p>Plop is what I like to call a 'micro-generator framework', because it is a small tool that gives
you a simple way to generate code or any other type of flat text files in a consistent way.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">//Install</span></span>
<span class="line"><span style="color: #F8F8F2">npm install plop </span><span style="color: #F92672">--</span><span style="color: #F8F8F2">save</span><span style="color: #F92672">-</span><span style="color: #F8F8F2">dev</span></span>
<span class="line"><span style="color: #F8F8F2">npm install plop </span><span style="color: #F92672">-</span><span style="color: #F8F8F2">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create a propfile.js at the root of your code</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// Usage</span></span>
<span class="line"><span style="color: #88846F">// 项目根目录下创建propfile.js </span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">module</span><span style="color: #F8F8F2">.</span><span style="color: #66D9EF; font-style: italic">exports</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">prop</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">  plop.</span><span style="color: #A6E22E">setGenerator</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;component&#39;</span><span style="color: #F8F8F2">, {</span></span>
<span class="line"><span style="color: #F8F8F2">    description:</span><span style="color: #E6DB74">&#39;this is a skeleton propfile&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    prompts:[</span></span>
<span class="line"><span style="color: #F8F8F2">      {</span></span>
<span class="line"><span style="color: #F8F8F2">        type:</span><span style="color: #E6DB74">&#39;input&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        name:</span><span style="color: #E6DB74">&#39;name&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        message:</span><span style="color: #E6DB74">&#39;component name&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    ],</span></span>
<span class="line"><span style="color: #F8F8F2">    actions:[{</span></span>
<span class="line"><span style="color: #F8F8F2">      type:</span><span style="color: #E6DB74">&#39;add&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      path:</span><span style="color: #E6DB74">&#39;src/{{name}}/{{name}}.jsx&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      templateFile:</span><span style="color: #E6DB74">&#39;plop-templates/component.hbs&#39;</span><span style="color: #88846F">//项目根目录下创建 plop-templates文件夹</span></span>
<span class="line"><span style="color: #F8F8F2">    }]</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>if you did not install plop globally, you will need to setup an npm script to run plop for you.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #E6DB74">&quot;scripts&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #E6DB74">&quot;plop&quot;</span><span style="color: #F8F8F2">:</span><span style="color: #E6DB74">&quot;plop&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p><a href="https://github.com/plopjs/plop" target="_blank" rel="noopener noreferrer">github-plop<ExternalLinkIcon/></a></p>
</template>
