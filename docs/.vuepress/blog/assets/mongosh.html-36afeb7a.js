import{_ as e}from"./framework-c27b6911.js";import{r as o,o as p,c as i,d as s,e as n,a as l,b as c}from"./app-ec006255.js";const r="/assets/mongosh-shell-1c427407.png",t="/assets/player-collection-7469e256.png",d="/assets/mongodb-find-09ec5474.png",F={},y=s("h1",{id:"mongosh",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mongosh","aria-hidden":"true"},"#"),n(" Mongosh")],-1),m=s("p",null,"MongoDB Shell is the quickest way to connect to MongoDB, Easily query data, configure settings and execute other actions with this modern, estensible command-line interface.",-1),v={href:"https://downloads.mongodb.com/compass/mongosh-1.6.0-win32-x64.zip",target:"_blank",rel:"noopener noreferrer"},u=c(`<p>同样配置好环境变量, 在命令行和数据库进行交互:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">mongosh</span></span>
<span class="line"><span style="color:#88846F;">// 等同于 mongosh &#39;mongodb://localhost:27017&#39; (默认启动在27017端口)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// mongosh 指定端口连接数据库</span></span>
<span class="line"><span style="color:#F8F8F2;">mongosh </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">port </span><span style="color:#AE81FF;">28015</span></span>
<span class="line"><span style="color:#F8F8F2;">mongosh </span><span style="color:#E6DB74;">&#39;mongodb://localhost:28015&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 连接远程数据库</span></span>
<span class="line"><span style="color:#F8F8F2;">mongosh </span><span style="color:#E6DB74;">&#39;mongodb://mongodb0.example.com:28015&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">mongosh </span><span style="color:#E6DB74;">&#39;--host mongodb0.example.com --port 28015&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 连接指定数据库</span></span>
<span class="line"><span style="color:#F8F8F2;">mongosh </span><span style="color:#E6DB74;">&#39;mongodb://localhost:27017/db1&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 退出数据库的连接</span></span>
<span class="line"><span style="color:#F8F8F2;">.exit </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> exit </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">exit</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">quit </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">quit</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="mongosh-shell"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 数据库相关</span></span>
<span class="line"><span style="color:#F8F8F2;">use DATABASE_NAME </span><span style="color:#88846F;">// (如果数据库不存在, 则创建数据库, 否则切换到指定数据库)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 删除数据库</span></span>
<span class="line"><span style="color:#F8F8F2;">db.</span><span style="color:#A6E22E;">dropDatabase</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> use player</span></span>
<span class="line"><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> show dbs</span></span>
<span class="line"><span style="color:#F8F8F2;"> admin</span></span>
<span class="line"><span style="color:#F8F8F2;"> config</span></span>
<span class="line"><span style="color:#F8F8F2;"> local</span></span>
<span class="line"><span style="color:#88846F;">// 新创建的数据库并没有数据, 所以没有显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">db  </span><span style="color:#88846F;">//显示当前使用的数据库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 创建表</span></span>
<span class="line"><span style="color:#F8F8F2;">db.</span><span style="color:#A6E22E;">createCollection</span><span style="color:#F8F8F2;">(name, options)</span></span>
<span class="line"><span style="color:#88846F;">// player&gt; db.createCollection(&quot;runoob&quot;)</span></span>
<span class="line"><span style="color:#88846F;">// { ok: 1 }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 查看已创建的表</span></span>
<span class="line"><span style="color:#F8F8F2;">show collections</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 删除表</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">drop</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 插入一条数据, 如果数据表不存在, 则会创建一张表。</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">insertOne</span><span style="color:#F8F8F2;">({ firstName: </span><span style="color:#E6DB74;">&#39;kyrie&#39;</span><span style="color:#F8F8F2;">, lastName: </span><span style="color:#E6DB74;">&#39;irving&#39;</span><span style="color:#F8F8F2;">, age: </span><span style="color:#AE81FF;">30</span><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">insertOne</span><span style="color:#F8F8F2;">({ firstName: </span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">, lastName: </span><span style="color:#E6DB74;">&#39;james&#39;</span><span style="color:#F8F8F2;">, age: </span><span style="color:#AE81FF;">38</span><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="player-collection"></p><p><strong>CRUD operations create, read, update and delete documents.</strong></p><h2 id="insert-documents" tabindex="-1"><a class="header-anchor" href="#insert-documents" aria-hidden="true">#</a> Insert documents</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 插入一条或者多条数据(插入多条数据传入一个数据)</span></span>
<span class="line"><span style="color:#88846F;">// db.collection.insertOne() / db.collection.insertMany()</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">insertMany</span><span style="color:#F8F8F2;">([</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    firstName: </span><span style="color:#E6DB74;">&#39;kevin&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    lastName: </span><span style="color:#E6DB74;">&#39;durant&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    age: </span><span style="color:#AE81FF;">34</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  {</span></span>
<span class="line"><span style="color:#F8F8F2;">    firstName: </span><span style="color:#E6DB74;">&#39;chris&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    lastName: </span><span style="color:#E6DB74;">&#39;paul&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    age: </span><span style="color:#AE81FF;">37</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* If the document does not specify an _id field, MongoDB adds the _id field with an </span></span>
<span class="line"><span style="color:#88846F;">ObjectID value to the new document</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">insertOne</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  firstName: </span><span style="color:#E6DB74;">&#39;kevin&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  lastName: </span><span style="color:#E6DB74;">&#39;love&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  age: </span><span style="color:#AE81FF;">34</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  _id: </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="query-documents" tabindex="-1"><a class="header-anchor" href="#query-documents" aria-hidden="true">#</a> Query documents</h2><p>use the db.collection.find() method in the MongoDB shell to query documents in a collection.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 返回所有的数据</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">find</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 返回指定数据</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">find</span><span style="color:#F8F8F2;">({ age: </span><span style="color:#AE81FF;">34</span><span style="color:#F8F8F2;"> })</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update-documents" tabindex="-1"><a class="header-anchor" href="#update-documents" aria-hidden="true">#</a> Update documents</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 分别更新一条/更新多条/替换一个数据</span></span>
<span class="line"><span style="color:#88846F;">// db.collection.updateOne() / db.collection.updateMany() / db.collection.replaceOne()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">updateOne</span><span style="color:#F8F8F2;">({firstName:</span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">}, {$set:{firstName: </span><span style="color:#E6DB74;">&#39;hello&#39;</span><span style="color:#F8F8F2;">}})</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">updateOne</span><span style="color:#F8F8F2;">({firstName:</span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">}, {$set:{age: </span><span style="color:#E6DB74;">&#39;40&#39;</span><span style="color:#F8F8F2;">}})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">updateMany</span><span style="color:#F8F8F2;">({age: </span><span style="color:#AE81FF;">34</span><span style="color:#F8F8F2;">}, {$set:{age: </span><span style="color:#AE81FF;">43</span><span style="color:#F8F8F2;">}})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-documents" tabindex="-1"><a class="header-anchor" href="#delete-documents" aria-hidden="true">#</a> Delete documents</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki monokai" style="background-color:#272822;" tabindex="0"><code><span class="line"><span style="color:#88846F;">// db.collection.deleteMany() / db.collection.deleteOne()</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">deleteMany</span><span style="color:#F8F8F2;">({}) </span><span style="color:#88846F;">// 删除所有的数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">deleteMany</span><span style="color:#F8F8F2;">({firstName: </span><span style="color:#E6DB74;">&#39;lebron&#39;</span><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">deleteMany</span><span style="color:#F8F8F2;">({firstName: </span><span style="color:#E6DB74;">&#39;hello&#39;</span><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">db.myCollection.</span><span style="color:#A6E22E;">deleteOne</span><span style="color:#F8F8F2;">({age: </span><span style="color:#AE81FF;">43</span><span style="color:#F8F8F2;">})  </span><span style="color:#88846F;">// delete only one document that matches a condition</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="player-collection"></p>',16),b={href:"https://www.mongodb.com/docs/mongodb-shell/crud/",target:"_blank",rel:"noopener noreferrer"};function h(g,E){const a=o("ExternalLinkIcon");return p(),i("div",null,[y,m,s("p",null,[s("a",v,[n("MongoDB Shell下载地址"),l(a)])]),u,s("p",null,[s("a",b,[n("Perform CRUD operations 参考文档"),l(a)])])])}const A=e(F,[["render",h],["__file","mongosh.html.vue"]]);export{A as default};
