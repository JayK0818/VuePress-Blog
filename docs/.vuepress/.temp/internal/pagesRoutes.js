import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1be64244","/node/node_module.html",{"title":"常用npm包"},["/node/node_module","/node/node_module.md"]],
  ["v-15051314","/node/",{"title":"常用的Node包"},["/node/index.html","/node/README.md"]],
  ["v-e2e4b238","/react/basis.html",{"title":"React基础"},["/react/basis","/react/basis.md"]],
  ["v-14918cba","/react/concept.html",{"title":"Redux"},["/react/concept","/react/concept.md"]],
  ["v-0a4aa4a4","/react/create-react-app.html",{"title":"create-react-app"},["/react/create-react-app","/react/create-react-app.md"]],
  ["v-8c683810","/react/react-performance-optimization.html",{"title":"React性能优化"},["/react/react-performance-optimization","/react/react-performance-optimization.md"]],
  ["v-2f769766","/vue/data-transfer.html",{"title":"组件通信"},["/vue/data-transfer","/vue/data-transfer.md"]],
  ["v-3c367b94","/vue/entry-and-version.html",{"title":"Vue构建版本和打包入口"},["/vue/entry-and-version","/vue/entry-and-version.md"]],
  ["v-ec241072","/vue/global-api.html",{"title":"GlobalApi"},["/vue/global-api","/vue/global-api.md"]],
  ["v-6357b2ee","/vue/pinia.html",{"title":"Pinia"},["/vue/pinia","/vue/pinia.md"]],
  ["v-731d388a","/vue/vue-instance.html",{"title":"Vue Instance"},["/vue/vue-instance","/vue/vue-instance.md"]],
  ["v-5dd96c6e","/vue/webpack.html",{"title":"Webpack"},["/vue/webpack","/vue/webpack.md"]],
  ["v-bf64565e","/front-end/algorithm/array.html",{"title":"数组"},["/front-end/algorithm/array","/front-end/algorithm/array.md"]],
  ["v-25149bac","/front-end/algorithm/list.html",{"title":"链表"},["/front-end/algorithm/list","/front-end/algorithm/list.md"]],
  ["v-4493bb0c","/front-end/algorithm/other.html",{"title":"其他"},["/front-end/algorithm/other","/front-end/algorithm/other.md"]],
  ["v-2146a2d7","/front-end/algorithm/string.html",{"title":"字符串"},["/front-end/algorithm/string","/front-end/algorithm/string.md"]],
  ["v-3853cf2a","/front-end/algorithm/tree.html",{"title":"二叉树"},["/front-end/algorithm/tree","/front-end/algorithm/tree.md"]],
  ["v-63a00837","/front-end/css/bfc.html",{"title":"BFC"},["/front-end/css/bfc","/front-end/css/bfc.md"]],
  ["v-638de28b","/front-end/css/box.html",{"title":"盒模型"},["/front-end/css/box","/front-end/css/box.md"]],
  ["v-3da607e7","/front-end/css/center.html",{"title":"水平垂直居中"},["/front-end/css/center","/front-end/css/center.md"]],
  ["v-94d3a0fa","/front-end/css/flex.html",{"title":"Flex"},["/front-end/css/flex","/front-end/css/flex.md"]],
  ["v-80ee854c","/front-end/css/float.html",{"title":"浮动"},["/front-end/css/float","/front-end/css/float.md"]],
  ["v-6a99ac56","/front-end/css/grid.html",{"title":"Grid"},["/front-end/css/grid","/front-end/css/grid.md"]],
  ["v-e8a4288c","/front-end/css/mobile.html",{"title":"移动端"},["/front-end/css/mobile","/front-end/css/mobile.md"]],
  ["v-1d6f9db4","/front-end/css/other.html",{"title":"CSS属性"},["/front-end/css/other","/front-end/css/other.md"]],
  ["v-20bbcc1e","/front-end/css/pseudo.html",{"title":"伪元素与伪类"},["/front-end/css/pseudo","/front-end/css/pseudo.md"]],
  ["v-13a8ef3a","/front-end/typescript/class.html",{"title":"Class"},["/front-end/typescript/class","/front-end/typescript/class.md"]],
  ["v-1da56c88","/front-end/typescript/function.html",{"title":"Function"},["/front-end/typescript/function","/front-end/typescript/function.md"]],
  ["v-20fc5beb","/front-end/typescript/narrowing.html",{"title":"Narrowing"},["/front-end/typescript/narrowing","/front-end/typescript/narrowing.md"]],
  ["v-7f3f3b41","/front-end/typescript/object.html",{"title":"Object Type"},["/front-end/typescript/object","/front-end/typescript/object.md"]],
  ["v-7db6c2e2","/front-end/typescript/type-manipulation.html",{"title":"Type Manipulation"},["/front-end/typescript/type-manipulation","/front-end/typescript/type-manipulation.md"]],
  ["v-059d78d9","/front-end/typescript/types.html",{"title":"Types"},["/front-end/typescript/types","/front-end/typescript/types.md"]],
  ["v-2fed1fc5","/front-end/typescript/utility-type.html",{"title":"Utility Types"},["/front-end/typescript/utility-type","/front-end/typescript/utility-type.md"]],
  ["v-643a81a8","/front-end/javascript/ajax.html",{"title":"Ajax"},["/front-end/javascript/ajax","/front-end/javascript/ajax.md"]],
  ["v-4216bb6c","/front-end/javascript/bom.html",{"title":"BOM"},["/front-end/javascript/bom","/front-end/javascript/bom.md"]],
  ["v-290ef9ab","/front-end/javascript/code-snippet.html",{"title":"代码片段"},["/front-end/javascript/code-snippet","/front-end/javascript/code-snippet.md"]],
  ["v-40ed63bc","/front-end/javascript/concept.html",{"title":"概念"},["/front-end/javascript/concept","/front-end/javascript/concept.md"]],
  ["v-71f0205d","/front-end/javascript/constructor-function.html",{"title":"构造函数"},["/front-end/javascript/constructor-function","/front-end/javascript/constructor-function.md"]],
  ["v-7f2d98dc","/front-end/javascript/debounce-throttle.html",{"title":"函数防抖与函数截流"},["/front-end/javascript/debounce-throttle","/front-end/javascript/debounce-throttle.md"]],
  ["v-0aed33e4","/front-end/javascript/element.html",{"title":"Element"},["/front-end/javascript/element","/front-end/javascript/element.md"]],
  ["v-2b98c520","/front-end/javascript/event.html",{"title":"Event"},["/front-end/javascript/event","/front-end/javascript/event.md"]],
  ["v-7c76c560","/front-end/javascript/fetch.html",{"title":"Fetch"},["/front-end/javascript/fetch","/front-end/javascript/fetch.md"]],
  ["v-3dc8b848","/front-end/javascript/high-order-function.html",{"title":"高阶函数"},["/front-end/javascript/high-order-function","/front-end/javascript/high-order-function.md"]],
  ["v-f18e0cc0","/front-end/javascript/javascript-new-features.html",{"title":"ECMAScript新特性"},["/front-end/javascript/javascript-new-features","/front-end/javascript/javascript-new-features.md"]],
  ["v-c588be02","/front-end/javascript/javascript-route.html",{"title":"前端路由"},["/front-end/javascript/javascript-route","/front-end/javascript/javascript-route.md"]],
  ["v-72b56412","/front-end/javascript/javascript-skill.html",{"title":"Skill"},["/front-end/javascript/javascript-skill","/front-end/javascript/javascript-skill.md"]],
  ["v-1513c3e0","/front-end/javascript/json.html",{"title":"JSON"},["/front-end/javascript/json","/front-end/javascript/json.md"]],
  ["v-7160a306","/front-end/javascript/node.html",{"title":"Node"},["/front-end/javascript/node","/front-end/javascript/node.md"]],
  ["v-46d06c29","/front-end/javascript/object.html",{"title":"Object"},["/front-end/javascript/object","/front-end/javascript/object.md"]],
  ["v-345d7162","/front-end/javascript/promise.html",{"title":"Promise"},["/front-end/javascript/promise","/front-end/javascript/promise.md"]],
  ["v-3ca30831","/front-end/javascript/",{"title":"ECMAScript"},["/front-end/javascript/index.html","/front-end/javascript/README.md"]],
  ["v-4c571f70","/front-end/javascript/scope-closure.html",{"title":"作用域和闭包"},["/front-end/javascript/scope-closure","/front-end/javascript/scope-closure.md"]],
  ["v-54e6bcea","/front-end/javascript/sort.html",{"title":"排序"},["/front-end/javascript/sort","/front-end/javascript/sort.md"]],
  ["v-343603ea","/front-end/javascript/this.html",{"title":"This"},["/front-end/javascript/this","/front-end/javascript/this.md"]],
  ["v-6ea57cd7","/front-end/javascript/value-copy.html",{"title":"深拷贝与浅拷贝"},["/front-end/javascript/value-copy","/front-end/javascript/value-copy.md"]],
  ["v-3e823056","/node/util/tapable.html",{"title":"Tapable"},["/node/util/tapable","/node/util/tapable.md"]],
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
