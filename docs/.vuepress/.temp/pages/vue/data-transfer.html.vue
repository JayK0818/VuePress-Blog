<template><h1 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h1>
<h2 id="props-emit" tabindex="-1"><a class="header-anchor" href="#props-emit" aria-hidden="true">#</a> props / emit</h2>
<p>父组件可以通过props向子组件传递数据, 子组件通过emit触发一个事件,然后父组件监听这个事件获取传递过来的数据。</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">&lt;!-- parent.vue --&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    父组件: {{count}} </span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">a-button</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">      @</span><span style="color: #A6E22E">click</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">stop</span><span style="color: #F8F8F2">=</span><span style="color: #F8F8F2">&#39;</span><span style="color: #F8F8F2">add</span><span style="color: #F8F8F2">&#39;</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">type</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;primary&#39;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">size</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;small&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    &gt;click&lt;/</span><span style="color: #F92672">a-button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">child</span><span style="color: #F8F8F2"> :</span><span style="color: #A6E22E">count</span><span style="color: #F8F8F2">=</span><span style="color: #F8F8F2">&#39;</span><span style="color: #F8F8F2">count</span><span style="color: #F8F8F2">&#39;</span><span style="color: #F8F8F2">/&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;ts&#39;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">defineComponent</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">    name:</span><span style="color: #E6DB74">&#39;Father&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    components: {</span></span>
<span class="line"><span style="color: #F8F8F2">      [Child.name]: Child,</span></span>
<span class="line"><span style="color: #F8F8F2">      [Button.name]: Button</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">setup</span><span style="color: #F8F8F2"> () {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> count </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">ref</span><span style="color: #F8F8F2">&lt;</span><span style="color: #66D9EF; font-style: italic">number</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">add</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> () </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">        count.value </span><span style="color: #F92672">+=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">        count,</span></span>
<span class="line"><span style="color: #F8F8F2">        add</span></span>
<span class="line"><span style="color: #F8F8F2">      }</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  })</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">&lt;!-- child.vue --&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">class</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;child-container&#39;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">span</span><span style="color: #F8F8F2">&gt;子组件: {{count}}&lt;/</span><span style="color: #F92672">span</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;ts&#39;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">defineComponent</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  name:</span><span style="color: #E6DB74">&#39;Child&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  props: {</span></span>
<span class="line"><span style="color: #F8F8F2">    count: {</span></span>
<span class="line"><span style="color: #F8F8F2">      type: </span><span style="color: #66D9EF; font-style: italic">Number</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      required: </span><span style="color: #AE81FF">true</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Vue-PropFather/>
<h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit</h3>
<Vue-EmitFather/>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">&lt;!-- parent.vue --&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;父组件: {{count}}&lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">child</span><span style="color: #F8F8F2"> @</span><span style="color: #A6E22E">increment</span><span style="color: #F8F8F2">=</span><span style="color: #F8F8F2">&#39;</span><span style="color: #F8F8F2">increment</span><span style="color: #F8F8F2">&#39;</span><span style="color: #F8F8F2">/&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;ts&#39;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> { defineComponent, ref } </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> Child </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./Child.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">defineComponent</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  name: </span><span style="color: #E6DB74">&#39;father&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  components: {</span></span>
<span class="line"><span style="color: #F8F8F2">    [Child.name]: Child</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">setup</span><span style="color: #F8F8F2"> () {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> count </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">ref</span><span style="color: #F8F8F2">&lt;</span><span style="color: #66D9EF; font-style: italic">number</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">increment</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">payload</span><span style="color: #F8F8F2">)</span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">void</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      count.value </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> payload;</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      count, increment</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">&lt;!-- child.vue --&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    子组件:</span></span>
<span class="line"><span style="color: #F8F8F2">    {{count}}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">a-button</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">type</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;primary&#39;</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">size</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;small&#39;</span><span style="color: #F8F8F2"> @</span><span style="color: #A6E22E">click</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">stop</span><span style="color: #F8F8F2">=</span><span style="color: #F8F8F2">&#39;</span><span style="color: #F8F8F2">add</span><span style="color: #F8F8F2">&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    &gt;click&lt;/</span><span style="color: #F92672">a-button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;ts&#39;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> { defineComponent, ref } </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> { Button } </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;ant-design-vue&#39;</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">defineComponent</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  name: </span><span style="color: #E6DB74">&#39;child&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  components: {</span></span>
<span class="line"><span style="color: #F8F8F2">    [Button.name]: Button</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  emits:[</span><span style="color: #E6DB74">&#39;increment&#39;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">setup</span><span style="color: #F8F8F2"> (</span><span style="color: #FD971F; font-style: italic">props</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">context</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> count </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">ref</span><span style="color: #F8F8F2">&lt;</span><span style="color: #66D9EF; font-style: italic">number</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">add</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> ()</span><span style="color: #F92672">:</span><span style="color: #66D9EF; font-style: italic">void</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      count.value </span><span style="color: #F92672">+=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">      context.</span><span style="color: #A6E22E">emit</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;increment&#39;</span><span style="color: #F8F8F2">, count.value)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      count, add</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> Provide / Inject</h2>
<p>在一些深度嵌套的组件中, 深层次的子组件只需要父组件的部分内容, 如果通过prop 沿着组件链逐级传递下去,会很麻烦。
对于这种情况,可以使用provide/inject。父组件通过provide提供数据, 子组件通过inject选项来使用数据。</p>
<p>下面的案例 左侧使用的是 props选项, 右侧使用的是setup实现。</p>
<Vue-ProvideFather/>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">&lt;!-- father --&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    父组件: {{count}} - {{double}}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">a-button</span></span>
<span class="line"><span style="color: #F8F8F2">      @</span><span style="color: #A6E22E">click</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">stop</span><span style="color: #F8F8F2">=</span><span style="color: #F8F8F2">&#39;</span><span style="color: #F8F8F2">increment</span><span style="color: #F8F8F2">&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">type</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;primary&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">size</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;small&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">    &gt;click&lt;/</span><span style="color: #F92672">a-button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">child</span><span style="color: #F8F8F2">/&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;ts&#39;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> { defineComponent, computed, provide, ref } </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> Child </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;./Child.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">defineComponent</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  name: </span><span style="color: #E6DB74">&#39;ProvideFather&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  components: {</span></span>
<span class="line"><span style="color: #F8F8F2">    [Child.name]: Child</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">data</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      count: </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">provide</span><span style="color: #F8F8F2">() { </span><span style="color: #88846F">// 访问组件实例的property,需要将provide转换为返回对象的函数</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #88846F">// 使传递的number 是响应式的</span></span>
<span class="line"><span style="color: #F8F8F2">      number: </span><span style="color: #A6E22E">computed</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.count)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  methods: {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">increment</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.count </span><span style="color: #F92672">+=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.times </span><span style="color: #F92672">+=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">setup</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> times </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">ref</span><span style="color: #F8F8F2">&lt;</span><span style="color: #66D9EF; font-style: italic">number</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> double </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">computed</span><span style="color: #F8F8F2">(() </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> times.value </span><span style="color: #F92672">*</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #88846F">// provide 传递两个参数, name和value</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">provide</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;times&#39;</span><span style="color: #F8F8F2">, double)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      double,</span></span>
<span class="line"><span style="color: #F8F8F2">      times</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">// child.vue</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    子组件: {{number}} - {{double}}</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&#39;ts&#39;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> { defineComponent, inject } </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">defineComponent</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  name: </span><span style="color: #E6DB74">&#39;child&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  inject: [</span><span style="color: #E6DB74">&#39;number&#39;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">setup</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> double </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">inject</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;times&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      double</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件车" tabindex="-1"><a class="header-anchor" href="#事件车" aria-hidden="true">#</a> 事件车</h2>
<ul>
<li>在Vue2.x中的实现</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// 实际就是重新 创建一个vue对象用来触发和监听事件。</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> bus </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">Vue</span><span style="color: #F8F8F2">({})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">/*A.vue*/</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  name:</span><span style="color: #E6DB74">&#39;ComponentA&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  methods: {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">click</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">$emit</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;update&#39;</span><span style="color: #F8F8F2">, {</span></span>
<span class="line"><span style="color: #F8F8F2">        message:</span><span style="color: #E6DB74">&#39;hello world&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">      })</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">/*B.vue*/</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  name: </span><span style="color: #E6DB74">&#39;ComponentB&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">created</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">$on</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;update&#39;</span><span style="color: #F8F8F2">, (</span><span style="color: #FD971F; font-style: italic">data</span><span style="color: #F8F8F2">) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(data)</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>在Vue3.x中的实现</p>
<p>因为Vue.3.x中已经废弃了 $on $off等实例方法,再用上面的方式来实现事件车行不通。这里需要借用一个第三方库 mitt</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> mitt </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;mitt&#39;</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> emitter </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">mitt</span><span style="color: #F8F8F2">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">emitter.</span><span style="color: #A6E22E">emit</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;foo&#39;</span><span style="color: #F8F8F2">, { a: </span><span style="color: #E6DB74">&#39;b&#39;</span><span style="color: #F8F8F2"> })</span></span>
<span class="line"><span style="color: #F8F8F2">mitter.</span><span style="color: #A6E22E">on</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;foo&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">e</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;foo&#39;</span><span style="color: #F8F8F2">, e) )</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://github.com/developit/mitt" target="_blank" rel="noopener noreferrer">Github-mitt<ExternalLinkIcon/></a></p>
<p><a href="https://v3.cn.vuejs.org/guide/migration/introduction.html#%E8%A2%AB%E7%A7%BB%E9%99%A4%E7%9A%84-api" target="_blank" rel="noopener noreferrer">Vue3.x 被移除的 API<ExternalLinkIcon/></a></p>
<h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h3>
<p>下面是一个利用事件车在兄弟组件中通信的小demo, 可以分别点击首发 或者 替补中的球员, 将其放入替补中 或者 移入到首发。</p>
<Vue-EventBus/>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #88846F">// StartingUp.vue</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">defineComponent</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  name: </span><span style="color: #E6DB74">&quot;StartingUp&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">created</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    bus.</span><span style="color: #A6E22E">on</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;bench&#39;</span><span style="color: #F8F8F2">,({</span><span style="color: #FD971F; font-style: italic">player</span><span style="color: #F8F8F2">}) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.player_list.</span><span style="color: #A6E22E">push</span><span style="color: #F8F8F2">(player)</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">setup</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> player_list </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">ref</span><span style="color: #F8F8F2">([</span><span style="color: #E6DB74">&#39;詹姆斯&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;奥尼尔&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;乔丹&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;科比&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;库里&#39;</span><span style="color: #F8F8F2">])</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">click</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">p</span><span style="color: #F8F8F2">,</span><span style="color: #FD971F; font-style: italic">i</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">      bus.</span><span style="color: #A6E22E">emit</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;starting-up&#39;</span><span style="color: #F8F8F2">, {</span></span>
<span class="line"><span style="color: #F8F8F2">        player:p</span></span>
<span class="line"><span style="color: #F8F8F2">      })</span></span>
<span class="line"><span style="color: #F8F8F2">      player_list.value.</span><span style="color: #A6E22E">splice</span><span style="color: #F8F8F2">(i, </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      player_list,</span></span>
<span class="line"><span style="color: #F8F8F2">      click</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// Bench.vue</span></span>
<span class="line"><span style="color: #F92672">export</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">default</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">defineComponent</span><span style="color: #F8F8F2">({</span></span>
<span class="line"><span style="color: #F8F8F2">  name: </span><span style="color: #E6DB74">&quot;Bench&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">created</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    bus.</span><span style="color: #A6E22E">on</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;starting-up&#39;</span><span style="color: #F8F8F2">,({</span><span style="color: #FD971F; font-style: italic">player</span><span style="color: #F8F8F2">}) </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.player_list.</span><span style="color: #A6E22E">push</span><span style="color: #F8F8F2">(player)</span></span>
<span class="line"><span style="color: #F8F8F2">    })</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">setup</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> player_list </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">ref</span><span style="color: #F8F8F2">([</span><span style="color: #E6DB74">&#39;杜兰特&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;贾巴尔&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;罗伯特森&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;韦德&#39;</span><span style="color: #F8F8F2">,</span><span style="color: #E6DB74">&#39;斯托克顿&#39;</span><span style="color: #F8F8F2">])</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">click</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">p</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">i</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">      player_list.value.</span><span style="color: #A6E22E">splice</span><span style="color: #F8F8F2">(i,</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">      bus.</span><span style="color: #A6E22E">emit</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;bench&#39;</span><span style="color: #F8F8F2">,{</span></span>
<span class="line"><span style="color: #F8F8F2">        player:p</span></span>
<span class="line"><span style="color: #F8F8F2">      })</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      player_list,</span></span>
<span class="line"><span style="color: #F8F8F2">      click</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单实现eventbus" tabindex="-1"><a class="header-anchor" href="#简单实现eventbus" aria-hidden="true">#</a> 简单实现EventBus</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #66D9EF; font-style: italic">class</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">EventBus</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">constructor</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.tasks </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {}</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">on</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">key</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">fn</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(</span><span style="color: #F92672">!</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.tasks[key]) {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.tasks[key] </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> []</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.tasks[key].</span><span style="color: #A6E22E">push</span><span style="color: #F8F8F2">(fn)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">off</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">key</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F; font-style: italic">callback</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> fnTask </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.tasks[key]</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(fnTask) {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.tasks[key] </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> []</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">callback</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">emit</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">key</span><span style="color: #F8F8F2">, </span><span style="color: #F92672">...</span><span style="color: #FD971F; font-style: italic">args</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> fnTask </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.tasks[key]</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2">(fnTask </span><span style="color: #F92672">&amp;&amp;</span><span style="color: #F8F8F2"> fnTask.length) {</span></span>
<span class="line"><span style="color: #F8F8F2">      fnTask.</span><span style="color: #A6E22E">forEach</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">fn</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #A6E22E">fn</span><span style="color: #F8F8F2">(</span><span style="color: #F92672">...</span><span style="color: #F8F8F2">args)</span></span>
<span class="line"><span style="color: #F8F8F2">      })</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> bus </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">new</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">EventBus</span><span style="color: #F8F8F2">()</span></span>
<span class="line"><span style="color: #F8F8F2">bus.</span><span style="color: #A6E22E">on</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;update&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;更新了&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #FD971F">arguments</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">bus.</span><span style="color: #A6E22E">emit</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;update&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">bus.</span><span style="color: #A6E22E">off</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;update&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">  console.</span><span style="color: #A6E22E">log</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;解除绑定了&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">bus.</span><span style="color: #A6E22E">emit</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;update&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">123</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
