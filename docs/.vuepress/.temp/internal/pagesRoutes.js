import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-15051314","/node/",{"title":"常用的Node包"},["/node/index.html","/node/README.md"]],
  ["v-1be64244","/node/node_module.html",{"title":"常用npm包"},["/node/node_module","/node/node_module.md"]],
  ["v-14918cba","/react/concept.html",{"title":"概念"},["/react/concept","/react/concept.md"]],
  ["v-d762745a","/react/context.html",{"title":"Context"},["/react/context","/react/context.md"]],
  ["v-0a4aa4a4","/react/create-react-app.html",{"title":"create-react-app"},["/react/create-react-app","/react/create-react-app.md"]],
  ["v-8c683810","/react/react-performance-optimization.html",{"title":"React性能优化"},["/react/react-performance-optimization","/react/react-performance-optimization.md"]],
  ["v-2f769766","/vue/data-transfer.html",{"title":"组件通信"},["/vue/data-transfer","/vue/data-transfer.md"]],
  ["v-3c367b94","/vue/entry-and-version.html",{"title":"Vue构建版本和打包入口"},["/vue/entry-and-version","/vue/entry-and-version.md"]],
  ["v-ec241072","/vue/global-api.html",{"title":"GlobalApi"},["/vue/global-api","/vue/global-api.md"]],
  ["v-6357b2ee","/vue/pinia.html",{"title":"Pinia"},["/vue/pinia","/vue/pinia.md"]],
  ["v-731d388a","/vue/vue-instance.html",{"title":"Vue Instance"},["/vue/vue-instance","/vue/vue-instance.md"]],
  ["v-5dd96c6e","/vue/webpack.html",{"title":"Webpack"},["/vue/webpack","/vue/webpack.md"]],
  ["v-e02a086e","/javascript/",{"title":"ECMAScript"},["/javascript/index.html","/javascript/README.md"]],
  ["v-da61cde0","/javascript/ajax.html",{"title":"Ajax"},["/javascript/ajax","/javascript/ajax.md"]],
  ["v-443dbc5a","/javascript/algorithm.html",{"title":"算法"},["/javascript/algorithm","/javascript/algorithm.md"]],
  ["v-0d89043c","/javascript/bom.html",{"title":"BOM"},["/javascript/bom","/javascript/bom.md"]],
  ["v-1ce9a913","/javascript/code-snippet.html",{"title":"代码片段"},["/javascript/code-snippet","/javascript/code-snippet.md"]],
  ["v-7d489dba","/javascript/concept.html",{"title":"概念"},["/javascript/concept","/javascript/concept.md"]],
  ["v-210e3076","/javascript/constructor-function.html",{"title":"构造函数"},["/javascript/constructor-function","/javascript/constructor-function.md"]],
  ["v-35204a74","/javascript/debounce-throttle.html",{"title":"函数防抖与函数截流"},["/javascript/debounce-throttle","/javascript/debounce-throttle.md"]],
  ["v-cf6e94b4","/javascript/element.html",{"title":"Element"},["/javascript/element","/javascript/element.md"]],
  ["v-e39c19f0","/javascript/event.html",{"title":"事件"},["/javascript/event","/javascript/event.md"]],
  ["v-65c2f2e8","/javascript/fetch.html",{"title":"Fetch"},["/javascript/fetch","/javascript/fetch.md"]],
  ["v-41d563e0","/javascript/high-order-function.html",{"title":"高阶函数"},["/javascript/high-order-function","/javascript/high-order-function.md"]],
  ["v-17561938","/javascript/javascript-new-features.html",{"title":"ECMAScript新特性"},["/javascript/javascript-new-features","/javascript/javascript-new-features.md"]],
  ["v-883f4732","/javascript/javascript-route.html",{"title":"前端路由"},["/javascript/javascript-route","/javascript/javascript-route.md"]],
  ["v-356bed42","/javascript/javascript-skill.html",{"title":"Skill"},["/javascript/javascript-skill","/javascript/javascript-skill.md"]],
  ["v-43a85b48","/javascript/json.html",{"title":"JSON"},["/javascript/json","/javascript/json.md"]],
  ["v-c0158b24","/javascript/node.html",{"title":"Node"},["/javascript/node","/javascript/node.md"]],
  ["v-229cc991","/javascript/object.html",{"title":"Object"},["/javascript/object","/javascript/object.md"]],
  ["v-f8ded232","/javascript/promise.html",{"title":"Promise"},["/javascript/promise","/javascript/promise.md"]],
  ["v-614fade0","/javascript/scope-closure.html",{"title":"作用域和闭包"},["/javascript/scope-closure","/javascript/scope-closure.md"]],
  ["v-f909575c","/javascript/sort.html",{"title":"排序"},["/javascript/sort","/javascript/sort.md"]],
  ["v-62ca9b52","/javascript/this.html",{"title":"This"},["/javascript/this","/javascript/this.md"]],
  ["v-7a7726e5","/javascript/ts-types.html",{"title":"TypeScript"},["/javascript/ts-types","/javascript/ts-types.md"]],
  ["v-ae963382","/javascript/value-copy.html",{"title":"深拷贝与浅拷贝"},["/javascript/value-copy","/javascript/value-copy.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
