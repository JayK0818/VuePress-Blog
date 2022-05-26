const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { defaultTheme } = require('vuepress')
const { AntDesignVueResolver } = require('unplugin-vue-components/resolvers')
const { shikiPlugin } = require('@vuepress/plugin-shiki')
const { viteBundler } = require('@vuepress/bundler-vite')
const path = require('path')

function resolve(dirname,directory,filename){
  if(filename === undefined){
    return path.resolve(__dirname,`./components/${dirname}/${directory}.vue`)
  }else{
    return path.resolve(__dirname,`./components/${dirname}/${directory}/${filename}.vue`)
  }
}

const side = {
  react: [
    {
      title: 'React',
      children: [
        '/react/create-react-app',
        '/react/context',
        '/react/react-performance-optimization',
        '/react/concept'
      ]
    }
  ],
  vue:[
    {
      title:'Vue',
      children: [
        '/vue/data-transfer',
        '/vue/entry-and-version',
        '/vue/global-api',
        '/vue/vue-instance',
        '/vue/pinia',
        '/vue/webpack'
      ]
    }
  ],
  javascript: [
    {
      title: 'JavaScript',
      collapsable: false,
      children: [
        '/javascript/bom',
        '/javascript/event',
        '/javascript/ajax',
        '/javascript/fetch',
        '/javascript/constructor-function',
        '/javascript/scope-closure',
        '/javascript/this',
        '/javascript/high-order-function',
        '/javascript/promise',
        '/javascript/javascript-new-features',
        '/javascript/concept',
        '/javascript/value-copy',
        '/javascript/json',
        '/javascript/debounce-throttle',
        '/javascript/code-snippet',
        '/javascript/node',
        '/javascript/element',
        '/javascript/object',
        '/javascript/javascript-route',
        '/javascript/algorithm',
        '/javascript/sort'
      ]
    },
    {
      title: 'TypeScript',
      collapsable: false,
      children: [
        '/javascript/typescript/types',
        '/javascript/typescript/function',
        '/javascript/typescript/object',
        '/javascript/typescript/narrowing',
        '/javascript/typescript/type-manipulation'
      ]
    }
  ],
  node:[
    {
      title:'Node',
      children:[
        '/node/node_module'
      ]
    }
  ]
}

module.exports = {
  lang: 'zh-CN',
  title: '牧童的博客',
  description:'Vuepress,JavaScript,Node.js,React.js,Vue.js,前端开发',
  head:[
    ['link', {rel:'icon',href:'/code.png'}]
  ],
  plugins:[
    shikiPlugin({
      theme: 'monokai'
    }),
    registerComponentsPlugin({
      components: {
        JavaScriptAttribute:resolve('JavaScript','Attribute'),
        JavaScriptInsertBefore:resolve('JavaScript','InsertBefore'),
        JavaScriptDebounce: resolve('JavaScript', 'Debounce'),
        ReactThrottleDelay:resolve('React','ThrottleDelay'),
        ReactThrottleImmediate: resolve('React','ThrottleImmediate'),
        JavaScriptObject: resolve('JavaScript', 'Object'),
        JavaScriptModalButton: resolve('JavaScript', 'ModalButton'),
        JavaScriptEvent: resolve('JavaScript', 'Event'),
        JavaScriptEventDelegation: resolve('JavaScript', 'EventDelegation'),
        VueEventBus: resolve('Vue', 'EventBus', 'EventBus'),
        JavaScriptAxiosCancel: resolve('JavaScript', 'AxiosCancel'),
        PiniaState: resolve('Vue', 'Pinia', 'State'),
        PiniaTodo: resolve('Vue', 'Pinia', 'Todos'),
        VueHome: resolve('Vue', 'Home', 'index'),
        JavaScriptBoxSize: resolve('JavaScript', 'BoxSize'),
        JavaScriptScrollBottom: resolve('JavaScript', 'ScrollBottom'),
        VuePropFather: resolve('Vue', 'Prop', 'Father'),
        VueEmitFather: resolve('Vue', 'Emit', 'Father'),
        VueProvideFather: resolve('Vue', 'Provide', 'Father')
      }
    })
  ],
  theme: defaultTheme({
    smoothScroll: false,
    lastUpdated: true,
    lastUpdatedText:'上次更新',
    contributors: false,
    sidebarDepth: 2,
    navbar:[
      {
        text:'首页',
        link:'/'
      },
      {text:'JavaScript',link:'/javascript/bom'},
      {text:'Node',link:'/node/'},
      {text:'Vue',link:'/vue/data-transfer/'},
      {text:'React',link:'/react/create-react-app/'},
    ],
    lastUpdated:true,
    lastUpdatedText:'上次更新',
    contributors: false,
    darkMode:true,
    logo:null,
    sidebar:{
      collapsable: false,
      '/react/': side.react,
      '/javascript/': side.javascript,
      '/node/': side.node,
      '/vue/': side.vue
    },
    topBanner: false
  }),
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        require('unplugin-vue-components/vite')({
          resolvers: [AntDesignVueResolver()]
        })
      ]
    }
  })
}
