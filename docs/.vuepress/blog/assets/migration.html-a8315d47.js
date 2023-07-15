import{_ as a}from"./framework-c27b6911.js";import{r as p,o as e,c as o,d as s,e as c,a as i,b as n}from"./app-ec006255.js";const F="/assets/ref-d7abe9d7.jpg",t="/assets/attrs_2_1-b059c9ba.png",r="/assets/attrs_2_2-011b1c2f.png",y="/assets/attrs_3_1-6c332cfd.png",d="/assets/attrs_3_2-9643b41c.png",v="/assets/children-8c5de77c.png",u={},m=n(`<h1 id="vue2-x迁移" tabindex="-1"><a class="header-anchor" href="#vue2-x迁移" aria-hidden="true">#</a> Vue2.x迁移</h1><h2 id="v-for中的ref数组" tabindex="-1"><a class="header-anchor" href="#v-for中的ref数组" aria-hidden="true">#</a> v-for中的Ref数组</h2><p>Vue3.x中, ref在for循环中不再自动创建$refs数组。需要从单个绑定的元素获取多个ref.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">&lt;!-- 2.x的版本 --&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">li</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">v-for</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;player in player_list&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">:key</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;player.id&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">ref</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;player&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &gt;{{player.firstName}} - {{player.lastName}}&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Vue</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">//...</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        player_list: [</span></span>
<span class="line"><span style="color:#F8F8F2;">          {</span></span>
<span class="line"><span style="color:#F8F8F2;">            firstName: </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            lastName: </span><span style="color:#E6DB74;">&#39;irving&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            id: </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">          },</span></span>
<span class="line"><span style="color:#F8F8F2;">          {</span></span>
<span class="line"><span style="color:#F8F8F2;">            firstName: </span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            lastName: </span><span style="color:#E6DB74;">&#39;james&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            id: </span><span style="color:#AE81FF;">2</span></span>
<span class="line"><span style="color:#F8F8F2;">          }</span></span>
<span class="line"><span style="color:#F8F8F2;">        ]</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">mounted</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">$nextTick</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> players </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.$refs.player</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(players)</span></span>
<span class="line"><span style="color:#F8F8F2;">      })</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">&lt;!-- 3.x版本 --&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">li</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">v-for</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;player in player_list&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">:key</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;player.id&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">:ref</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;setPlayerRef&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &gt;{{player.firstName}} - {{player.lastName}}&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">setup</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> playerRefs </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">ref</span><span style="color:#F8F8F2;">([])</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> player_list </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">ref</span><span style="color:#F8F8F2;">([</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          firstName: </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          lastName: </span><span style="color:#E6DB74;">&#39;irving&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          id: </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          firstName: </span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          lastName: </span><span style="color:#E6DB74;">&#39;james&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          id: </span><span style="color:#AE81FF;">2</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      ])</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">setPlayerRef</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">el</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">if</span><span style="color:#F8F8F2;">(el) {</span></span>
<span class="line"><span style="color:#F8F8F2;">          playerRefs.value.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(el)</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">onMounted</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(playerRefs.value)</span></span>
<span class="line"><span style="color:#F8F8F2;">      })</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        player_list,</span></span>
<span class="line"><span style="color:#F8F8F2;">        setPlayerRef</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+F+'" alt="ref"></p><h2 id="attribute" tabindex="-1"><a class="header-anchor" href="#attribute" aria-hidden="true">#</a> Attribute</h2><p>在2.x版本中, 元素的attribute 如果是falsy(undefined, null, 或 false), 则会移除它们, 否则会加上。而在3.x的版本中, 会将false 强制转化为 &#39;false&#39;,不会移除该属性， 如果需要显示地移除attribute, 需要设置为 null / undefined。</p>',8),b={href:"https://v3.cn.vuejs.org/guide/migration/attribute-coercion.html#%E6%A6%82%E8%A7%88",target:"_blank",rel:"noopener noreferrer"},E=n(`<h1 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs" aria-hidden="true">#</a> $attrs</h1><p>在2.x版本中, $attrs 不会包含传递到组件上的 class 和 style属性。 在inheritAttrs: false时, 其他属性不会被添加到根元素, 但是 class 和 style 不受影响。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">&lt;!-- 2.x --&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&#39;app&#39;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">child-component</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;child&quot;</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">message</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;hello&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;hello&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">:style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;{backgroundColor:&#39;#fff&#39;}&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &gt;&lt;/</span><span style="color:#F92672;">child-component</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> ChildComponent </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  name: </span><span style="color:#E6DB74;">&#39;child-component&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  template: </span><span style="color:#E6DB74;">\`&lt;div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">    &lt;div&gt;Hello, World&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">    &lt;div&gt;你好, 生活&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">  &lt;/div&gt;\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  inheritAttrs: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">created</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.$attrs)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// {name: &#39;child&#39;, message: &#39;hello&#39;}</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> app </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Vue</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  el: </span><span style="color:#E6DB74;">&#39;#app&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  components: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    [ChildComponent.name]: ChildComponent</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图分别表示 在子组件上添加 attribute, 在设置了 inheritAttrs 为true 和 false 的结果。 <img src="`+t+'" alt="inheritAttrs-true"><img src="'+r+`" alt="inheritAttrs-false"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">child-component</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;child&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">message</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;hello&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;hello&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">:style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;{backgroundColor:&#39;#fff&#39;}&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &gt;&lt;/</span><span style="color:#F92672;">child-component</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> app </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">app.</span><span style="color:#A6E22E;">component</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;child-component&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">  template: </span><span style="color:#E6DB74;">\`&lt;div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">    &lt;div&gt;Hello, World&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">    &lt;div&gt;你好, 生活&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">  &lt;/div&gt;\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  inheritAttrs: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">setup</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">props</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">context</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(context.attrs)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">    {</span></span>
<span class="line"><span style="color:#88846F;">      class: &quot;hello&quot;</span></span>
<span class="line"><span style="color:#88846F;">      message: &quot;hello&quot;</span></span>
<span class="line"><span style="color:#88846F;">      name: &quot;child&quot;</span></span>
<span class="line"><span style="color:#88846F;">      style: {</span></span>
<span class="line"><span style="color:#88846F;">        backgroundColor: &quot;#fff&quot;</span></span>
<span class="line"><span style="color:#88846F;">      }</span></span>
<span class="line"><span style="color:#88846F;">    }</span></span>
<span class="line"><span style="color:#88846F;">    * */</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">app.</span><span style="color:#A6E22E;">mount</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;#attr-app&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在3.x版本中, 对attrs的处理比较一致, inheritAttrs为false时, 根元素不会继承所有属性包括 class 和 style, 并且子组件的attrs中包含class和style.</p><p><img src="`+y+'" alt="inheritAttrs-true"><img src="'+d+`" alt="inheritAttrs-false"></p><h2 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> $children</h2><p>在2.x的版本中, 父组件可以通过$children访问当前实例的子组件。 使用上述Demo 在mounted中访问 $children 如下图所示. 在3.x 版本中 访问$children 为 undefined.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#88846F;">// ...</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">mounted</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.$children)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="Vue2-$children"></p><h2 id="directive" tabindex="-1"><a class="header-anchor" href="#directive" aria-hidden="true">#</a> directive</h2><p>在2.x版本中, 自定义指令通过使用下列钩子来创建</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;directive-app&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-highlight</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;&#39;red&#39;&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-direction</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;1 + 1&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-if</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;visible&quot;</span><span style="color:#F8F8F2;">&gt;{{count}}&lt;/</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">@click</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;increment&quot;</span><span style="color:#F8F8F2;">&gt;click&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">@click</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;visible = !visible&quot;</span><span style="color:#F8F8F2;">&gt;toggle&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Vue</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      count: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      visible: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  directives: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    highlight: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">inserted</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">el</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">binding</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">vnode</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">oldVnode</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;el&#39;</span><span style="color:#F8F8F2;">, el) </span><span style="color:#88846F;">// 指定绑定的元素</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;binding&#39;</span><span style="color:#F8F8F2;">, binding)</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">        v-highlight</span></span>
<span class="line"><span style="color:#88846F;">          {</span></span>
<span class="line"><span style="color:#88846F;">            expression: &quot;&#39;red&#39;&quot;</span></span>
<span class="line"><span style="color:#88846F;">            modifiers:</span></span>
<span class="line"><span style="color:#88846F;">            No properties</span></span>
<span class="line"><span style="color:#88846F;">            name: &quot;highlight&quot;</span></span>
<span class="line"><span style="color:#88846F;">            rawName: &quot;v-highlight&quot;</span></span>
<span class="line"><span style="color:#88846F;">            value: &quot;red&quot;</span></span>
<span class="line"><span style="color:#88846F;">          }</span></span>
<span class="line"><span style="color:#88846F;">        v-direction</span></span>
<span class="line"><span style="color:#88846F;">          {</span></span>
<span class="line"><span style="color:#88846F;">            expression: &quot;1 + 1&quot;</span></span>
<span class="line"><span style="color:#88846F;">            modifiers: {}</span></span>
<span class="line"><span style="color:#88846F;">            name: &quot;direction&quot;</span></span>
<span class="line"><span style="color:#88846F;">            rawName: &quot;v-direction&quot;</span></span>
<span class="line"><span style="color:#88846F;">            value: 2</span></span>
<span class="line"><span style="color:#88846F;">          }</span></span>
<span class="line"><span style="color:#88846F;">        */</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">bind</span><span style="color:#F8F8F2;">() { </span><span style="color:#88846F;">// 切换visible, 当visible为true的时候 指定绑定到dom上的时候调用</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;bind&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// count更新时</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">update</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">el</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">binding</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">vnode</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">oldVnode</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;update&#39;</span><span style="color:#F8F8F2;">, el, binding, vnode, oldVnode)</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// true为false, 元素隐藏时指令与元素解绑时调用</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">unbind</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;unbind&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    direction: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">inserted</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">el</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">binding</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;direction:&#39;</span><span style="color:#F8F8F2;">, binding)</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  methods: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">increment</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.count </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})  </span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在3.x的版本中, 自定义指令的钩子函数与组件生命周期钩子函数命名一致, 并新增created / beforeUpdate / beforeUnmount等钩子。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;app&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-highlight:color</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;&#39;red&#39;&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-if</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;visible&quot;</span><span style="color:#F8F8F2;">&gt;{{count}}&lt;/</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">@click</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;increment&quot;</span><span style="color:#F8F8F2;">&gt;add&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">@click</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;visible = !visible&quot;</span><span style="color:#F8F8F2;">&gt;toggle&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> app </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  directives: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    highlight: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">created</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;created&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">beforeMount</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;beforeMount&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">mounted</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;mounted&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">beforeUpdate</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;beforeUpdate&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">updated</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;updated&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">beforeUnmount</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;beforeUnmount&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#A6E22E;">unmounted</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;unmounted&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">setup</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> count </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">ref</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> visible </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">ref</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">increment</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      count.value </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      count,</span></span>
<span class="line"><span style="color:#F8F8F2;">      increment,</span></span>
<span class="line"><span style="color:#F8F8F2;">      visible</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">{</span></span>
<span class="line"><span style="color:#88846F;">  arg: &#39;color&#39;</span></span>
<span class="line"><span style="color:#88846F;">  dir: {created: ƒ, beforeMount: ƒ, mounted: ƒ, beforeUpdate: ƒ, updated: ƒ, …}</span></span>
<span class="line"><span style="color:#88846F;">  instance: Proxy {…} 当前实例, 实例是指令的一部分</span></span>
<span class="line"><span style="color:#88846F;">  modifiers: {}</span></span>
<span class="line"><span style="color:#88846F;">  oldValue: undefined</span></span>
<span class="line"><span style="color:#88846F;">  value: &quot;red&quot;</span></span>
<span class="line"><span style="color:#88846F;">}</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#88846F;">&lt;!-- 隐藏元素时依次调用 beforeUnmount / unmounted --&gt;</span></span>
<span class="line"><span style="color:#88846F;">&lt;!-- 元素显示时 依次调用 created beforeMount mounted --&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webcomponent" tabindex="-1"><a class="header-anchor" href="#webcomponent" aria-hidden="true">#</a> webComponent</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&#39;primary-button&#39;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">PrimaryButton</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">extends</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;font-style:italic;text-decoration:underline;">HTMLElement</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">constructor</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">super</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> templateEle </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">querySelector</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;#primary-button&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> content </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> templateEle.content.</span><span style="color:#A6E22E;">cloneNode</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> shadow </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">attachShadow</span><span style="color:#F8F8F2;">({mode: </span><span style="color:#E6DB74;">&#39;closed&#39;</span><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> style </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;style&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    style.textContent </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">\`</span></span>
<span class="line"><span style="color:#E6DB74;">      button {</span></span>
<span class="line"><span style="color:#E6DB74;">        padding: 5px 10px;</span></span>
<span class="line"><span style="color:#E6DB74;">        background-color: #1890ff;</span></span>
<span class="line"><span style="color:#E6DB74;">        color: #fff;</span></span>
<span class="line"><span style="color:#E6DB74;">        outline: none;</span></span>
<span class="line"><span style="color:#E6DB74;">        border: 1px solid #1890ff;</span></span>
<span class="line"><span style="color:#E6DB74;">        cursor: pointer;</span></span>
<span class="line"><span style="color:#E6DB74;">      }</span></span>
<span class="line"><span style="color:#E6DB74;">    \`</span></span>
<span class="line"><span style="color:#F8F8F2;">    shadow.</span><span style="color:#A6E22E;">append</span><span style="color:#F8F8F2;">(content, style)</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">window.customElements.</span><span style="color:#A6E22E;">define</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;primary-button&#39;</span><span style="color:#F8F8F2;">, PrimaryButton)</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述通过webComponent定义了一个自定义元素, 如果在Vue中直接使用会报警告, 没有定义 primary-button 组件。在2.x版本中, 通过Vue.config.ignoreElements 将标签配置为自定义元素</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">Vue.config.ignoreElements </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#E6DB74;">&#39;primary-button&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在3.x的版本中, 此检查在编译期间执行.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// webpack 中的配置</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">    {</span></span>
<span class="line"><span style="color:#F8F8F2;">      test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">vue</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      use: </span><span style="color:#E6DB74;">&#39;vue-loader&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      options: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        compilerOptions: {</span></span>
<span class="line"><span style="color:#F8F8F2;">          </span><span style="color:#A6E22E;">isCustomElement</span><span style="color:#F8F8F2;">: </span><span style="color:#FD971F;font-style:italic;">tag</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> tag </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;primary-button&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  ]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 模板编译</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> app </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Vue.</span><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">({})</span></span>
<span class="line"><span style="color:#F8F8F2;">app.config.compilerOptions.</span><span style="color:#A6E22E;">isCustomElement</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">tag</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> tag </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;primary-button&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在渲染动态组件时的差异:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">is</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&#39;primary-button&#39;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* 在2.x版本中将会渲染 一个  primary-button 组件</span></span>
<span class="line"><span style="color:#88846F;"> 在3.x版本中, 将is 作为attribute 传递给createElement调用,并作为原生attribute渲染, 因为在3.x版本中,</span></span>
<span class="line"><span style="color:#88846F;">  is attribute的特殊处理限制在了 component标签中。</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> mixin</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 2.x 版本</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> mixin </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      player: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        firstName: </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        lastName: </span><span style="color:#E6DB74;">&#39;irving&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Vue</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">el: </span><span style="color:#E6DB74;">&#39;#mixin-app&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      player: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        age: </span><span style="color:#AE81FF;">30</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  mixins: [mixin],</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">created</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.player)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">    * {</span></span>
<span class="line"><span style="color:#88846F;">        age: 30</span></span>
<span class="line"><span style="color:#88846F;">        firstName: &quot;kyrie&quot;</span></span>
<span class="line"><span style="color:#88846F;">        lastName: &quot;irving&quot;</span></span>
<span class="line"><span style="color:#88846F;">    * }</span></span>
<span class="line"><span style="color:#88846F;">    * */</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 3.x 版本</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> mixin </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      player: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        firstName: </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        lastName: </span><span style="color:#E6DB74;">&#39;irving&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> mixin_app </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      player: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        age: </span><span style="color:#AE81FF;">30</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  mixins: [mixin],</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">created</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.player)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">    * {age: 30}</span></span>
<span class="line"><span style="color:#88846F;">    * */</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="emits" tabindex="-1"><a class="header-anchor" href="#emits" aria-hidden="true">#</a> emits</h2><p>Vue3组件提供一个emits选项,用来表示当前组件可以向父组件触发的事件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;emit-app&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">my-button</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">@click</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;handleClick&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">my-button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> emit_app </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">setup</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">handleClick</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;父组件触发了&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        handleClick</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">  emit_app.</span><span style="color:#A6E22E;">component</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;my-button&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">    template: </span><span style="color:#E6DB74;">\`&lt;button @click=&quot;handleClick&quot;&gt;click&lt;/button&gt;\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    emits: [</span><span style="color:#E6DB74;">&#39;click&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">setup</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">props</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">context</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">handleClick</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;子组件触发了&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">        context.</span><span style="color:#A6E22E;">emit</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;click&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        handleClick</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">  在子组件监听一个子组件触发的原生click事件，如果子组件没有emits选项, 此时click会触发两次。</span></span>
<span class="line"><span style="color:#88846F;">一次来自 $emit()。</span></span>
<span class="line"><span style="color:#88846F;">另一次来自应用在根元素上的原生事件监听器。</span></span>
<span class="line"><span style="color:#88846F;">*/</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移除的api" tabindex="-1"><a class="header-anchor" href="#移除的api" aria-hidden="true">#</a> 移除的API</h2><ol><li>在3.x版本中已经移除了 $on，$off 和 $once</li><li>移除了 filter 过滤器</li><li>在2.x版本中, 不支持多个根节点组件, 在3.x版本中 组件可以包含多个根节点, 但是要求开发者显示定义attribute应该分布在哪里。</li><li>Vue.extend移除</li><li>全局API通过具名导出支持tree-shaking</li><li>不在支持数字的keyCode事件修饰符, 不支持config.keyCodes</li><li>移除$listeners, 组件监听的事件作为 attrs的一部分</li><li>propsData被移除, 可以在createApp() 第二个参数给根组件传递props</li><li>移除.native事件修饰符</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">&lt;!-- 2.x --&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">input</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">type</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;text&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">@keyup.13</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;keyup&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">input</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">type</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;text&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">@keyup.enter</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;keyup&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">&lt;!-- 3.x --&gt;</span></span>
<span class="line"><span style="color:#88846F;">&lt;!-- 捕获q 和 Q --&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">input</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">type</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;text&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">@keyup.q</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;keyup&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 全局API</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> { nextTick } </span><span style="color:#F92672;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;vue&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 片段</span></span>
<span class="line"><span style="color:#F8F8F2;">app.</span><span style="color:#A6E22E;">component</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;child-component&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">  template: </span><span style="color:#E6DB74;">\`&lt;div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">    &lt;div&gt;Hello, World&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">    &lt;div&gt;你好, 生活&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#E6DB74;">  &lt;div v-bind=&quot;$attrs&quot;&gt;我是兄弟节点&lt;/div&gt;\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  inheritAttrs: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 3.x 移除Vue.extend, 应该始终通过createApp() 创建实例</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> Profile </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  template: </span><span style="color:#E6DB74;">\`&lt;div&gt;{{firstName}} - {{lastName}}&lt;/div&gt;\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      firstName: </span><span style="color:#E6DB74;">&#39;Kevin&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      lastName: </span><span style="color:#E6DB74;">&#39;Durant&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">(Profile).</span><span style="color:#A6E22E;">mount</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;#app&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渲染函数和函数式组件" tabindex="-1"><a class="header-anchor" href="#渲染函数和函数式组件" aria-hidden="true">#</a> 渲染函数和函数式组件</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 渲染函数 2.x</span></span>
<span class="line"><span style="color:#F8F8F2;">Vue.</span><span style="color:#A6E22E;">component</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;player-list&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">render</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">createElement</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;ul&#39;</span><span style="color:#F8F8F2;">, </span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.list.</span><span style="color:#A6E22E;">map</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">p</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;li&#39;</span><span style="color:#F8F8F2;">,[</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;span&#39;</span><span style="color:#F8F8F2;">, p.firstName), </span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;span&#39;</span><span style="color:#F8F8F2;">, p.lastName)</span></span>
<span class="line"><span style="color:#F8F8F2;">      ]))</span></span>
<span class="line"><span style="color:#F8F8F2;">    )</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  props: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    list: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      type: Array,</span></span>
<span class="line"><span style="color:#F8F8F2;">      required: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 函数式组件 2.x</span></span>
<span class="line"><span style="color:#F8F8F2;">Vue.</span><span style="color:#A6E22E;">component</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;smart-list&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">  functional: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">render</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">createElement</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">context</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">组件需要的一切都是通过context参数传递, 它是一个对象包含如下字段:</span></span>
<span class="line"><span style="color:#88846F;">1. props: 包含传递给组件的非props attribute, 和 组件props</span></span>
<span class="line"><span style="color:#88846F;">2. children: 子节点数组</span></span>
<span class="line"><span style="color:#88846F;">3. data: 传递给组件的整个数据对象, on, staticClass  attrs等</span></span>
<span class="line"><span style="color:#88846F;">4. parent: 对父组件的引用</span></span>
<span class="line"><span style="color:#88846F;">5. listeners: 所有父组件为当前组件注册的事件监听器的对象</span></span>
<span class="line"><span style="color:#88846F;">// ... </span></span>
<span class="line"><span style="color:#88846F;">*/</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;ul&#39;</span><span style="color:#F8F8F2;">, </span></span>
<span class="line"><span style="color:#F8F8F2;">      context.data,</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#88846F;">// 使用JavaScript代替 v-for</span></span>
<span class="line"><span style="color:#F8F8F2;">      context.props.list.</span><span style="color:#A6E22E;">map</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">p</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;li&#39;</span><span style="color:#F8F8F2;">,[</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;span&#39;</span><span style="color:#F8F8F2;">, p.firstName), </span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;span&#39;</span><span style="color:#F8F8F2;">, p.lastName)</span></span>
<span class="line"><span style="color:#F8F8F2;">      ]))</span></span>
<span class="line"><span style="color:#F8F8F2;">    )</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> function_vm </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Vue</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  el: </span><span style="color:#E6DB74;">&#39;#function-app&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      player_list: [</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          firstName: </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          lastName: </span><span style="color:#E6DB74;">&#39;irving&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          firstName: </span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          lastName: </span><span style="color:#E6DB74;">&#39;james&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      ]</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在3.x版本中, 所有的函数式组件都是用普通函数创建的。该函数接受props 和 context两个参数, context包含 attrs, slots 和emit。 此外, h函数是全局导入 而不是在render函数中隐式提供。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">DynamicHeading</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">props</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">context</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">h</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">\`h</span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">props.level</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span><span style="color:#F8F8F2;">, context.attrs, context.slots)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">DynamicHeading.props </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#E6DB74;">&#39;level&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  components: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    [DynamicHeading.name]: DynamicHeading</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">mount</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;#function-app&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 渲染函数</span></span>
<span class="line"><span style="color:#F8F8F2;">function_app.</span><span style="color:#A6E22E;">component</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;anchored-heading&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">  props: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    level: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      type: Number,</span></span>
<span class="line"><span style="color:#F8F8F2;">      required: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">render</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">h</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">\`h</span><span style="color:#F92672;">\${</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.level</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span><span style="color:#F8F8F2;">, {}, </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.$slots.</span><span style="color:#A6E22E;">default</span><span style="color:#F8F8F2;">())</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="挂载api" tabindex="-1"><a class="header-anchor" href="#挂载api" aria-hidden="true">#</a> 挂载API</h2><p>在2.x版本中, 当挂载一个具有template选项的组件时, 被渲染的元素内容会替换成要挂载的目标元素。 而在3.x版本中, 被渲染的应用会作为子元素插入。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 2.x</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> root_vm </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Vue</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  el: </span><span style="color:#E6DB74;">&#39;#root&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      message: </span><span style="color:#E6DB74;">&#39;hello world&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  template: </span><span style="color:#E6DB74;">\`&lt;div class=&quot;root&quot;&gt;{{message}}&lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">&lt;div id=&#39;root&#39;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#88846F;">将被渲染为</span></span>
<span class="line"><span style="color:#88846F;">&lt;div class=&#39;root&#39;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 3.x</span></span>
<span class="line"><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  template: </span><span style="color:#E6DB74;">\`&lt;div class=&quot;root&quot;&gt;{{message}}&lt;/div&gt;\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">setup</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> message </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">ref</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;hello world&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      message</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">mount</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;#root&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">&lt;div id=&quot;root&quot; data-v-app=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#88846F;">  &lt;div class=&quot;root&quot;&gt;hello world&lt;/div&gt;</span></span>
<span class="line"><span style="color:#88846F;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// setup 返回一个渲染函数</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> ButtonIncrement </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">setup</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> count </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">ref</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">increment</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      count.value </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">h</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;button&#39;</span><span style="color:#F8F8F2;">, {</span></span>
<span class="line"><span style="color:#F8F8F2;">      onClick: increment,</span></span>
<span class="line"><span style="color:#F8F8F2;">    },[count.value])</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">(ButtonIncrement).</span><span style="color:#A6E22E;">mount</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;#root&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-for和v-if的优先级" tabindex="-1"><a class="header-anchor" href="#v-for和v-if的优先级" aria-hidden="true">#</a> v-for和v-if的优先级</h2><p>在2.x版本中同一个元素上使用v-if 和 v-for时, v-for会优先作用, 但是在3.x版本中, v-if总是优先v-for生效。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">&lt;!-- 2.x --&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-for</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;p in player_list&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-if</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;p.visible&quot;</span><span style="color:#F8F8F2;">&gt;{{p.name}}&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Vue</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">      player_list: [</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          name: </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          visible: </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          name: </span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          visible: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          name: </span><span style="color:#E6DB74;">&#39;durant&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          visible: </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      ]</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">渲染为 &lt;ul&gt;&lt;li&gt;lebron&lt;/li&gt;&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#88846F;">*/</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">&lt;!-- 这么写会报错 --&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-for</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;p in player_list&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-if</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;p.visible&quot;</span><span style="color:#F8F8F2;">&gt;{{p.name}}&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">createApp</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">setup</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> player_list </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">ref</span><span style="color:#F8F8F2;">([</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          name: </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          visible: </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          name: </span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          visible: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#F8F8F2;">        {</span></span>
<span class="line"><span style="color:#F8F8F2;">          name: </span><span style="color:#E6DB74;">&#39;durant&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">          visible: </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      ])</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        player_list</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  })</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> Teleport</h2><p>Teleport可以将组件挂载与Vue App 根节点之外的地方。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">&lt;!-- 将挂载在body下面 --&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F44747;">teleport</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">to</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;body&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">v-if</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;modalOpen&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;modal&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">      I&#39;m a teleported modal! </span></span>
<span class="line"><span style="color:#F8F8F2;">      (My parent is &quot;body&quot;)</span></span>
<span class="line"><span style="color:#F8F8F2;">      &lt;</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">@click</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;modalOpen = false&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">        Close</span></span>
<span class="line"><span style="color:#F8F8F2;">      &lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F44747;">teleport</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49);function g(h,D){const l=p("ExternalLinkIcon");return e(),o("div",null,[m,s("p",null,[s("a",b,[c("Vue-Attribute"),i(l)])]),E])}const B=a(u,[["render",g],["__file","migration.html.vue"]]);export{B as default};
