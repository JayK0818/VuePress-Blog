# GlobalApi

 ```js
 // src/core/global-api/index.js
 // 设置Vue的一些全局API和全局配置config操作
export function initGlobalAPI (Vue: GlobalAPI) {
  const configDef = {}
  configDef.get = () => config
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => { // 防止改写config对象。
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
  Object.defineProperty(Vue, 'config', configDef)

  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick

  // 将一个对象变为响应式对象
  Vue.observable = <T>(obj: T): T => {
    observe(obj)
    return obj
  }
/*
ASSET_TYPES 在shared/constant.js中定义的一个常量数据。
const ASSET_TYPES = ['component', 'directive', 'filter']
在Vue身上设置一个options空对象,此处用来设置全局的components/filters/directives
*/
  Vue.options = Object.create(null)
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })
  // 记录当时的Vue构造函数,在后面的extend方法会使用。
  Vue.options._base = Vue
/*
extend方法, 将一个对象的所有属性拷贝到 另一个对象上并返回
function extend (to: Object, _from: ?Object): Object {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}
*/
  //将内置组件(keep-alive) 拷贝到 Vue.options.components 对象上。
  extend(Vue.options.components, builtInComponents)
  // 注册插件
  initUse(Vue)
  // 混入 mixins
  initMixin(Vue)
  // Vue.extend方法
  initExtend(Vue)
  initAssetRegisters(Vue)
}
```

## initUse

  注册插件,通常用来为Vue添加全局功能。 通过调用全局的Vue.use()使用插件。参数可以是一个函数,或者一个对象。
  插件应该暴露一个install方法。这个方法的第一个参数是Vue构造器,第二个参数是一个可选的选项对象。

  Vue.use会自动阻止多次注册相同插件,即使多次调用也只会注册一次该插件。

```js
Vue.use(MyPlugin)
// 会调用 MyPlugin.install(Vue)

// toArray方法,将一个array object的对象转化为数组, start参数为可选,表示删除第几个数据。
//---------注意此时start为1时就是第一项数据,而不是数组中理解的下标为0的数据-----------
function toArray (list, start){
  start = start || 0
  let i = list.length - start
  const ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}
// src/core/global-api/use.js
function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    /* 判断插件是否已经注入, 如果没有注入 则将_installedPlugins 设置为一个空数组,
    否则,将插件 添加进_installedPlugins数组里,防止重复注册插件。
    */
    const installedPlugins = (
      this._installedPlugins || (this._installedPlugins = [])
    )
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }
    const args = toArray(arguments, 1)
    args.unshift(this)
    /*
    把第一个参数去掉,并且把Vue构造函数添加到参数数组首项,install 方法调用时，
    会将 Vue 作为参数传入。
    */ 
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin) // 将插件添加进数组_installedPlugins数组
    return this
  }
}
```

[Vue-Plugin](https://cn.vuejs.org/v2/guide/plugins.html)

## initMixin

  混入(mixin)提供了一种非常灵活的方式来分发Vue组件中可复用的功能。一个混入对象可以包含任意组件选项。
```js
const mixin = {
  data(){
    message:'hello'
  },
  created(){
    console.log('mixin-created')
  }
}
const component = Vue.component('player',{
  template:`<div>{{message}} - {{msg}}</div>`,
  data(){
    return {
      message:'world',
      msg:'message'
    }
  },
  created(){
    console.log('component-mixin')
  },
  mixins:[mixin],
})
// 先执行mixin的生命周期钩子函数, data选项参数冲突的话,会使用组件的同名参数
```

[Vue-Mixin](https://cn.vuejs.org/v2/guide/mixins.html)

```js
// src/core/global-api/mixin.js

function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // 将全局options选项与mixin选项进行合并
    /*
    数据对象会在内部进行递归合并,并在发生冲突时以组件数组优先,同名钩子函数合并为一个数组
    */
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
```
## initAssetRegisters

```js
// core/global-api/assets.js

// 注册或者获取全局定义的组件,过滤器 和 自定义指令
function initAssetRegisters (Vue: GlobalAPI) {
/*
遍历 ['filter','component','directive']数组,并在Vue上分别添加这几个方法,这三个方法是
同时注册的,因为三个函数传递的参数类型差不多.

Vue.directive(id, [definition]) // id:string, definition:Function/Object 
Vue.filter(id,[definition])     // id:string, definition:Function
Vue.component(id,[definition])  // id:string, definition:Function/Object
*/ 
  ASSET_TYPES.forEach(type => {
    Vue[type] = function ( id: string, definition: Function | Object) {
      // 如果没有传递要注册的参数,则返回注册的组件或自定义指令或者过滤器。
      if (!definition) {  
        return this.options[type + 's'][id]
      } else {
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id) // 验证组件名称是否合法。
        }
        /* 判断组件的参数是否是一个 对象。isPlainObject函数功能比较简单:
        function isPlainObject(object){
          return Object.prototype.toString.call(object) === '[object Object]'
        }
        */ 
        if (type === 'component' && isPlainObject(definition)) {
          // 如果传递了 name 则作为组件名, 否则使用id作为组件名
          definition.name = definition.name || id
          // 将组件对象转化为组件的构造函数。
          definition = this.options._base.extend(definition)
        }
        // 如果指令传递的是一个函数,这里将会被 `bind` 和 `update` 调用
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        /*
        将通过Vue.filter()/Vue.component()/Vue.directive()注册的指令,组件和过滤器 
        添加进Vue.options[directives/components/filters]对象里
        */
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}

/* validateComponentName function */
// src/core/util/options
function validateComponentName (name: string) {
  // 判断组件名是否合法的标签
  if (!new RegExp(`^[a-zA-Z][\\-\\.0-9_${unicodeRegExp.source}]*$`).test(name)){
    // 警告省略...
  }
  // 判断组件名是否为内置的组件名或者是否在全局config.js文件里定义过 不能作为组件名称注册
  /* const isBuiltInTag = makeMap('slot,component', true)
    内置组件名 slot component, 第二个参数为true,将组件名转化为小写字母.
  */
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    // 警告省略...
  }
  /*vue.config.js文件里 关于isReservedTag的注释*/
  /* Check if a tag is reserved so that it cannot be registered as a
  component. This is platform-dependent and may be overwritten.
  */ 
}
```

[Vue-全局API](https://cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80-API)
 
 ### 组件注册

  从上面对组件对处理过程可以看出,Vue.component()注册组件 返回的是一个构造函数,跟使用Vue.extend()创建一个
  '子类'是一样的,因为 Vue.component(id, definition) 第二个参数传递的是一个对象的话, 会使用Vue.extend()
  方法处理为一个构造函数返回。
```js
// 使用Vue.extend()
const Dialog = Vue.extend({
  template:`<div class='dialog'></div>`,
  data() {
    return {
      message:'登陆'
    }
  }
})
new Dialog({
  el:'#app'
})

// 使用Vue.component()
const Dialog = Vue.component('dialog-component',{
  template:`<div class='dialog'>{{message}}</div>`,
  data() {
    return {
      message:'登陆'
    }
  }
})
new Dialog({
  el:'#dialog',
})
```
  以上两种方式创建的组件使用方式一样,效果相同。
