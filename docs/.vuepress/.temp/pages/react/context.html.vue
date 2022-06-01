<template><div><h1 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h1>
<p>Context提供了一个无需为每层组件手动添加props,就能在组件树间进行数据传递的方法,以下案例 来自react官网的整理.
为了方便，只嵌套了一层子组件的方式实现。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果只是想避免层层传递一些属性,组件组合有时候是比context更好的解决方案。</p>
</div>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F92672">import</span><span style="color: #F8F8F2"> React,{useContext} </span><span style="color: #F92672">from</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;react&#39;</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> themes </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  light: {</span></span>
<span class="line"><span style="color: #F8F8F2">    foreground: </span><span style="color: #E6DB74">&#39;#000000&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    background: </span><span style="color: #E6DB74">&#39;#eeeeee&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  dark: {</span></span>
<span class="line"><span style="color: #F8F8F2">    foreground: </span><span style="color: #E6DB74">&#39;#ffffff&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    background: </span><span style="color: #E6DB74">&#39;#222222&#39;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">// 创建一个context对象并提供一个默认值</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> ThemeContext </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> React.</span><span style="color: #A6E22E">createContext</span><span style="color: #F8F8F2">(themes.light)  </span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">class</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">App</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">extends</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">React</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E; font-style: italic; text-decoration: underline">Component</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">constructor</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">props</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">super</span><span style="color: #F8F8F2">(props)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.state </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">      theme: themes.light</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">handleToggleTheme</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> () </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E">setState</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">state</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> ({</span></span>
<span class="line"><span style="color: #F8F8F2">      theme: state.theme </span><span style="color: #F92672">===</span><span style="color: #F8F8F2"> themes.light </span><span style="color: #F92672">?</span></span>
<span class="line"><span style="color: #F8F8F2">        themes.dark </span><span style="color: #F92672">:</span><span style="color: #F8F8F2"> themes.light</span></span>
<span class="line"><span style="color: #F8F8F2">    }))</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">render</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #F92672">div</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">        &lt;</span><span style="color: #66D9EF; font-style: italic">ThemeContext.Provider</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">value</span><span style="color: #F92672">={</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.state.theme</span><span style="color: #F92672">}</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">          &lt;</span><span style="color: #66D9EF; font-style: italic">ThemeButton1</span><span style="color: #F8F8F2">/&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">          &lt;</span><span style="color: #66D9EF; font-style: italic">ThemeButton2</span><span style="color: #F8F8F2">/&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">          &lt;</span><span style="color: #66D9EF; font-style: italic">ThemeButton3</span><span style="color: #F8F8F2">/&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">        &lt;/</span><span style="color: #66D9EF; font-style: italic">ThemeContext.Provider</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">        &lt;</span><span style="color: #F92672">button</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">onClick</span><span style="color: #F92672">={</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.handleToggleTheme</span><span style="color: #F92672">}</span><span style="color: #F8F8F2">&gt;toggle theme&lt;/</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;/</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    )</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// class组件使用</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">class</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">ThemeButton1</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">extends</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">React</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E; font-style: italic; text-decoration: underline">Component</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">constructor</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">props</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">super</span><span style="color: #F8F8F2">(props)</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">static</span><span style="color: #F8F8F2"> contextType </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> ThemeContext</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">render</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #F92672">button</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #A6E22E">style</span><span style="color: #F92672">={</span><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">          background:</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.context.background,</span></span>
<span class="line"><span style="color: #F8F8F2">          color:</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.context.foreground</span></span>
<span class="line"><span style="color: #F8F8F2">        }</span><span style="color: #F92672">}</span><span style="color: #F8F8F2">&gt;hello world&lt;/</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    )</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">// 也可以使用下面的方式</span></span>
<span class="line"><span style="color: #F8F8F2">ThemeButton1.contextType </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> ThemeContext</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 函数组件使用consumer</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">ThemeButton2</span><span style="color: #F8F8F2"> () {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #66D9EF; font-style: italic">ThemeContext.Consumer</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #F92672">{</span><span style="color: #FD971F; font-style: italic">theme</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">        (&lt;</span><span style="color: #F92672">button</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #A6E22E">style</span><span style="color: #F92672">={</span><span style="color: #F8F8F2">{background:theme.background,color:theme.foreground}</span><span style="color: #F92672">}</span></span>
<span class="line"><span style="color: #F8F8F2">        &gt;hello world&lt;/</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;)</span><span style="color: #F92672">}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #66D9EF; font-style: italic">ThemeContext.Consumer</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  )</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">// 函数组件使用 useContext</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">ThemeButton3</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> theme </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">useContext</span><span style="color: #F8F8F2">(ThemeContext)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">button</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">style</span><span style="color: #F92672">={</span><span style="color: #F8F8F2">{background:theme.background,color:theme.foreground}</span><span style="color: #F92672">}</span></span>
<span class="line"><span style="color: #F8F8F2">    &gt;hello world&lt;/</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  )</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #88846F">/*当Provider的value值发生变化时,它内部所有消费组件都会重新渲染。从Provider到内部consumer组件的</span></span>
<span class="line"><span style="color: #88846F">传播不受制于shouldComponentUpdate函数*/</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">class</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">ThemeButton4</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">extends</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">React</span><span style="color: #F8F8F2">.</span><span style="color: #A6E22E; font-style: italic; text-decoration: underline">Component</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">constructor</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">props</span><span style="color: #F8F8F2">){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">super</span><span style="color: #F8F8F2">(props)</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.state </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> {}</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">shouldComponent</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">nextProps</span><span style="color: #F8F8F2">,</span><span style="color: #FD971F; font-style: italic">nextState</span><span style="color: #F8F8F2">) {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">false</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">static</span><span style="color: #F8F8F2"> contextType </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> ThemeContext</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">render</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #F92672">button</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #A6E22E">style</span><span style="color: #F92672">={</span><span style="color: #F8F8F2">{background:</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.context.background,color:</span><span style="color: #FD971F">this</span><span style="color: #F8F8F2">.context.foreground}</span><span style="color: #F92672">}</span></span>
<span class="line"><span style="color: #F8F8F2">      &gt;hello world&lt;/</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    )</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #88846F">// 在函数里面,Provider数据更新同样不受制于memo</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> ThemeButton5 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">memo</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2">(){</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> theme </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">useContext</span><span style="color: #F8F8F2">(ThemeContext)</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">button</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #A6E22E">style</span><span style="color: #F92672">={</span><span style="color: #F8F8F2">{background:theme.background,color:theme.foreground}</span><span style="color: #F92672">}</span></span>
<span class="line"><span style="color: #F8F8F2">    &gt;hello world&lt;/</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  )</span></span>
<span class="line"><span style="color: #F8F8F2">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>当provider的父组件重新渲染时,可能会在consumers组件中触发意外的渲染。比如当传递给Provider的value值为一个对象时。
为避免这种情况,可以将value状态值提升到父节点state里。</p>
</div>
</div></template>
