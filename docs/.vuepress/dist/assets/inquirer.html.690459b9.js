import{_ as l,o as e,c as p,b as s,a as o,e as n,d as i,r as c}from"./app.7b5becf5.js";const r={},F=s("h1",{id:"inquirer",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#inquirer","aria-hidden":"true"},"#"),n(" Inquirer")],-1),t=s("p",null,"A collection of common interactive command line user interfaces.",-1),d={href:"https://www.npmjs.com/package/inquirer",target:"_blank",rel:"noopener noreferrer"},y=n("npm-inquirer"),v=i(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm install </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">save inquirer</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">inquirer.</span><span style="color:#A6E22E;">prompt</span><span style="color:#F8F8F2;">([</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// pass your questions in here</span></span>
<span class="line"><span style="color:#F8F8F2;">]).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;font-style:italic;">answers</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// use user feedback... whatever</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">catch</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;font-style:italic;">error</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// errro</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Inquirer v9 higher are native esm modules, this mean you cannot use the commonjs syntax require(&#39;inquirer&#39;) anymore.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm install </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">save inquirer@</span><span style="color:#F92672;">^</span><span style="color:#AE81FF;">8.0</span><span style="color:#F8F8F2;">.</span><span style="color:#AE81FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> inquirer </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;inquirer&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// \u4E00\u4E2A\u7B80\u5355\u7684\u6848\u4F8B, \u4E0B\u56FE\u662F\u6267\u884C\u8FD9\u6BB5\u4EE3\u7801\u7684\u7ED3\u679C</span></span>
<span class="line"><span style="color:#F8F8F2;">inquirer.</span><span style="color:#A6E22E;">prompt</span><span style="color:#F8F8F2;">([</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;input&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;username&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;\u4F60\u7684\u540D\u5B57&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;input&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;password&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">]).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;font-style:italic;">answer</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(answer)</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="param" tabindex="-1"><a class="header-anchor" href="#param" aria-hidden="true">#</a> param</h2><ol><li>type: \u8868\u793A\u54A8\u8BE2\u7684\u95EE\u9898\u7C7B\u578B,\u5176\u5408\u6CD5\u7684\u503C\u6709 input, number, confirm, list, rawList, expand, checkbox, password, editor</li><li>name: \u7528\u6765\u4F5C\u4E3Aanswers\u5BF9\u8C61\u7684\u952E\u540D(The name use when storing the answer in the answers hash).</li><li>message: \u63CF\u8FF0\u5F53\u524D\u8BE2\u95EE\u7684\u4FE1\u606F (\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u51FD\u6570)</li><li>default: \u9ED8\u8BA4\u503C(if nothing is entered, or a function that returns the default values).</li><li>choices: (Array|Function) \u4E00\u4E2A\u6570\u7EC4\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\u7684\u51FD\u6570(Array values can be simple <em>numbers</em> <em>strings</em> or <em>objects</em> containing a <strong>name</strong> (to display in list), a <strong>value</strong>(to save the answer hash).)</li><li>validate: (Function) \u5982\u679C\u8F93\u5165\u5408\u6CD5 \u8FD4\u56DEtrue, \u5426\u5219\u8FD4\u56DEfalse</li><li>when: (Function|Boolean) Receive the current user answers hash and should return <em>true</em> or <em>false</em> depending on whether or not this question should be asked.</li><li>loop: enable list looping</li><li>prefix: change the default prefix message</li><li>suffix: change the default suffix message</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">inquirer.prompt[{</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;rawlist&#39;</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// \u4F7F\u7528rawlist \u9009\u9879\u524D\u4F1A\u6709\u5E8F\u53F7</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;list&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;framework&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// choices \u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#F8F8F2;">    choices: [</span><span style="color:#E6DB74;">&#39;Angular&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;Vue&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;React&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">    choices: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&#39;Angular&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: </span><span style="color:#E6DB74;">&#39;a&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&#39;Vue&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: </span><span style="color:#E6DB74;">&#39;v&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&#39;React&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: </span><span style="color:#E6DB74;">&#39;r&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ],</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;Please select a framework&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    default: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;">// \u2018r\u2019 \u8BBE\u7F6E\u4E3A\u6570\u7EC4\u7D22\u5F15 / \u6216\u8005\u6570\u7EC4\u9879 \u5BF9\u8C61\u7684value\u503C</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">]).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;font-style:italic;">answer</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(answer)</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#88846F;">// { framework: &#39;Vue&#39;} / {framework: &#39;v&#39; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">//...</span></span>
<span class="line"><span style="color:#88846F;">// \u5FC5\u987B\u8F93\u5165\u6570\u5B57</span></span>
<span class="line"><span style="color:#F8F8F2;">[</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;number&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;age&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;age&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">validate</span><span style="color:#F8F8F2;">: (</span><span style="color:#FD971F;font-style:italic;">input</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#E6DB74;">/</span><span style="color:#AE81FF;">\\d</span><span style="color:#F92672;">+</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">test</span><span style="color:#F8F8F2;">(input)) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;You need to provide a number&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// type: checkbox</span></span>
<span class="line"><span style="color:#F8F8F2;">[</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;checkbox&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    choices: [</span><span style="color:#E6DB74;">&#39;apple&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;banana&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;grape&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;pineapple&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;orange&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">    choices: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&#39;apple&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: </span><span style="color:#E6DB74;">&#39;apple&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&#39;banana&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: </span><span style="color:#E6DB74;">&#39;banana&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&#39;grape&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: </span><span style="color:#E6DB74;">&#39;grape&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&#39;orange&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: </span><span style="color:#E6DB74;">&#39;orange&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        disabled: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;">// \u7981\u6B62\u9009\u62E9</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ],</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;fruit&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;please select a fruit&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#88846F;">// { fruits: [&#39;apple&#39;, &#39;banana&#39;] }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// password (\u8F93\u5165\u5185\u5BB9\u4E0D\u53EF\u89C1)</span></span>
<span class="line"><span style="color:#F8F8F2;">[</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;password&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;password&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;type your password&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// expand</span></span>
<span class="line"><span style="color:#88846F;">/**</span></span>
<span class="line"><span style="color:#88846F;"> * choices object will taken an extra parameter called key for the expand prompt.</span></span>
<span class="line"><span style="color:#88846F;"> */</span></span>
<span class="line"><span style="color:#F8F8F2;">[</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;expand&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;expand&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;expand message&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    choices: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&#39;hello&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: </span><span style="color:#E6DB74;">&#39;hello&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        key: </span><span style="color:#E6DB74;">&#39;e&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;">// \u63D0\u793A\u4FE1\u606F</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&#39;world&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        value: </span><span style="color:#E6DB74;">&#39;world&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        key: </span><span style="color:#E6DB74;">&#39;w&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">// \u5BF9\u4E0A\u9762\u7684\u7528\u6CD5\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u603B\u7ED3</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> inquirer </span><span style="color:#F92672;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;inquirer&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">inquirer.</span><span style="color:#A6E22E;">prompt</span><span style="color:#F8F8F2;">([</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;input&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;username&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;username&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;number&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;age&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;your age&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">validate</span><span style="color:#F8F8F2;">: (</span><span style="color:#FD971F;font-style:italic;">age</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#E6DB74;">/</span><span style="color:#AE81FF;">\\d</span><span style="color:#F92672;">+</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">test</span><span style="color:#F8F8F2;">(age)) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;provide a number&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;list&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;front-end-framework&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    choices: [</span><span style="color:#E6DB74;">&#39;vue&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;angular&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;react&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;nuxt&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;next&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;select a front-end framework&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;list&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;back-end-framework&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    choices: [</span><span style="color:#E6DB74;">&#39;express&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;koa&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;nestjs&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;select a back-end framework&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;checkbox&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;editor&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    choices: [</span><span style="color:#E6DB74;">&#39;vscode&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;hbuilder&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;webstorm&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;atom&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;edit-plus&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;select a code editor&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    type: </span><span style="color:#E6DB74;">&#39;confirm&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&#39;like&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    message: </span><span style="color:#E6DB74;">&#39;do you like code&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">]).</span><span style="color:#A6E22E;">then</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;font-style:italic;">answers</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(answers)</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">{</span></span>
<span class="line"><span style="color:#88846F;">  username: &#39;jack&#39;,</span></span>
<span class="line"><span style="color:#88846F;">  age: 20,</span></span>
<span class="line"><span style="color:#88846F;">  &#39;front-end-framework&#39;: &#39;vue&#39;,</span></span>
<span class="line"><span style="color:#88846F;">  &#39;back-end-framework&#39;: &#39;koa&#39;,</span></span>
<span class="line"><span style="color:#88846F;">  editor: [ &#39;vscode&#39;, &#39;webstorm&#39; ],</span></span>
<span class="line"><span style="color:#88846F;">  like: true</span></span>
<span class="line"><span style="color:#88846F;">}</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function u(m,b){const a=c("ExternalLinkIcon");return e(),p("div",null,[F,t,s("p",null,[s("a",d,[y,o(a)])]),v])}var D=l(r,[["render",u],["__file","inquirer.html.vue"]]);export{D as default};
