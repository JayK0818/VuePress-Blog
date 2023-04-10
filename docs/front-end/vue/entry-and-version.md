# Vue构建版本和打包入口

## Vue不同构建版本

  将vue.js源码clone到本地执行 npm run build 打包时, 会生成不同构建版本到vue.js文件,比如vue.common.dev.js,
  vue.esm.js 和 vue.runtime.js。 在vue.js官网上介绍了不同构建版本的区别

[Vue.js构建版本](https://cn.vuejs.org/v2/guide/installation.html)

  完整版: 同时包含编译器和运行时的版本
  编辑器: 用来将模版字符串编译成为JavaScript渲染函数的代码
  运行时: 用来创建Vue实例,渲染并处理虚拟DOM等代码。

  下面的代码 分别在分别引入 完整版和运行版本时的差别:
```js
// 引入vue.runtime.js 版本
new Vue({
  el:'#app',
  template:`<h1>{{msg}}</h1>`,
  data() {
    return {
      msg: 'hello world'
    }
  }
})
/*
You are using the runtime-only build of Vue where the template compiler is not
available. Either pre-compile the templates into render functions, or use the 
compiler-included build.
*/
/*
上面的代码运行时会报错, 因为使用的运行时版本的vue,没办法把template模版字符串编译为
JavaScript渲染函数代码,此时在不修改引入vue为完整版文件时,可以删除template选项,
直接使用render渲染函数。 
*/ 
new Vue({
  el:'#app',
  render(h) {
    return h('div',this.msg)
  },
  data() {
    return {
      msg: 'hello world'
    }
  }
})
```
  当使用 vue-loader 时，*.vue 文件中的模板会在构建时预编译为 JavaScript，在最终的捆绑包中并不需要编译器，因此可以只使用
  运行时构建版本。

## 打包入口

  要想知道vue.js生成不同版本是怎么构建的,需要查看执行每条命令执行的是什么逻辑。
```js
// package.json 
"scripts": {
  "dev":"rollup -w -c scripts/config.js --environment TARGET:web-full-dev",
  "dev:cjs":"rollup -w -c scripts/config.js --environment TARGET:web-runtime-cjs-dev",
  "dev:esm":"rollup -w -c scripts/config.js --environment TARGET:web-runtime-esm",
//...
}
```
  从上面的命令可以看到它的配置文件都在文件scripts的config.js文件下。 以npm run dev 这条命令为例, 
  找到scripts文件夹下的config.js文件, 在 末尾 导出了一个 对象,此时导出的对象就是打包时的配置。
```js
//下面的分析 都以 npm run dev 命令为例:
//scripts/config.js
//判断是否设置了打包时的参数 TARGET, 如果有的话,将参数传入genConfig,生成打包时的配置对象。
if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
} else {
  // 此处代码先忽略...
}
```

```js
// genConfig 函数
function genConfig (name) { // 解析target,此时name为 web-full-dev
// 这里又使用了builds 对象,查看builds对象 
  const opts = builds[name] 
  const config = {
    input: opts.entry,
    external: opts.external,
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || 'Vue'
    }
  }
}

/* builds为一个对象, 键名为传递的TARGET,键值为构建该版本的vue时所对应的配置对象*/
const builds = {
  // Runtime+compiler development build (Browser)
  'web-full-dev': {
    // 此处就是 打包时的入口文件,(参数格式为文件夹名/文件名)接着往下走...
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  },
  // Weex runtime framework (CommonJS).
  'weex-framework': {
    weex: true,
    entry: resolve('weex/entry-framework.js'),
    dest: resolve('packages/weex-vue-framework/index.js'),
    format: 'cjs'
  }
}
/*再来分析 'web-full-dev'的入口文件, 使用了一个 封装的resolve()函数,传递的参数为 
web/entry-runtime-with-compiler.js*/


// resolve('web/entry-runtime-with-compiler.js') 查看resolve函数
const resolve = p => {
  // 此时p 为web/entry-runtime-with-compiler.js, base为web,也就是文件夹名
  const base = p.split('/')[0]
  /*
  此时又用到了 aliases对象, 它是外部引入的一个文件, 在分析了下面的aliases.js文件后,
  aliases[base]有值,并且值为一个文件夹的绝对路径, 再拼接上文件路径
  截取完整字符串后的一段,(p.slice(base.length+1))
  就是打包的入口文件。
  */ 
  if (aliases[base]) { 
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    // dist/vue.js 在alias配置中没有找到别名,
    console.log(__dirname)
    return path.resolve(__dirname, '../', p)
  }
}

// aliases.js
const resolve = p => path.resolve(__dirname, '../', p)  // 根目录
// 实际上该文件的作用就是为web weex配置一个别名,
module.exports = {
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  web: resolve('src/platforms/web'),
  weex: resolve('src/platforms/weex'),
}
```

## EntryRuntime with Compiler

  在阅读在该文件下的代码前,先提一个问题,如果在引入了包含编译器和运行时版本的vue.js文件时,在new Vue()的时候
  同时提供了render函数和template选项,Vue会怎么渲染呢?
```js
// demo
const instance = new Vue({
  el:'#app',
  template:`<div>我是template</div>`,
  render(h){
    return h('div','我是render函数')
  }
})
// answer: 会忽略template选项,渲染render函数返回的内容。
```

```js
// platforms/web/entry-runtime-with-compiler.js
// 相比entry-runtime.js, 重新改写了$mount方法.
/*
如果是选择器, 则找到选择器对应的dom元素返回, 如果不是选择器,直接返回该dom元素
在开发环境下没有找到对应的选择器,会报错,在生成环境下会返回一个div.
*/
import Vue from './runtime/index'

function query (el: string | Element): Element {
  if (typeof el === 'string') {
    const selected = document.querySelector(el)
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}
// $mount方法将vue挂载到dom元素,el可以是一个选择器或者 dom 元素 
const mount = Vue.prototype.$mount;
Vue.prototype.$mount = function(el?:string|Element,hydrating?:boolean){
  el = el && query(el)  
  /*获取到dom节点后,判断是否挂载的元素为 body 或者 html,禁止挂载到 
  body 或者 html元素上*/
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
    `Do not mount Vue to <html> or <body> - mount to normal elements instead`
    )
    return this
  }
  const options = this.$options
  if (!options.render) {  // 在没有传入render函数时,才会使用template选项
    let template = options.template
    if (template) {
      // ...
    } else if (el) {
      template = getOuterHTML(el)
    }
  }
  return mount.call(this, el, hydrating)
}
```
```js
// platforms/web/entry-runtime.js
// 没有编译器的版本
import Vue from './runtime/index'
export default Vue
```
