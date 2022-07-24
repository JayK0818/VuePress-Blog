import{_ as s,o as n,c as l,e as a}from"./app.cae4c64a.js";var p="/blog/assets/ref.d7abe9d7.jpg";const e={},o=a(`<h1 id="vue2-x\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#vue2-x\u8FC1\u79FB" aria-hidden="true">#</a> Vue2.x\u8FC1\u79FB</h1><h2 id="v-for\u4E2D\u7684ref\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#v-for\u4E2D\u7684ref\u6570\u7EC4" aria-hidden="true">#</a> v-for\u4E2D\u7684Ref\u6570\u7EC4</h2><p>Vue3.x\u4E2D, ref\u5728for\u5FAA\u73AF\u4E2D\u4E0D\u518D\u81EA\u52A8\u521B\u5EFA$refs\u6570\u7EC4\u3002\u9700\u8981\u4ECE\u5355\u4E2A\u7ED1\u5B9A\u7684\u5143\u7D20\u83B7\u53D6\u591A\u4E2Aref.</p><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">&lt;!-- 2.x\u7684\u7248\u672C --&gt;</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;">&lt;!-- 3.x\u7248\u672C --&gt;</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt="ref"></p>',6),F=[o];function c(i,r){return n(),l("div",null,F)}var y=s(e,[["render",c],["__file","migration.html.vue"]]);export{y as default};
