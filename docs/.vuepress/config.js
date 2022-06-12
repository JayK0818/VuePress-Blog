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
  front_end: [
    {
      text: 'CSS',
      children: [
        '/front-end/css/display',
        '/front-end/css/box',
        '/front-end/css/float'
      ]
    },
    {
      text: 'JavaScript',
      collapsable: false,
      children: [
        '/front-end/javascript/bom',
        '/front-end/javascript/event',
        '/front-end/javascript/ajax',
        '/front-end/javascript/fetch',
        '/front-end/javascript/constructor-function',
        '/front-end/javascript/scope-closure',
        '/front-end/javascript/this',
        '/front-end/javascript/high-order-function',
        '/front-end/javascript/promise',
        '/front-end/javascript/javascript-new-features',
        '/front-end/javascript/concept',
        '/front-end/javascript/value-copy',
        '/front-end/javascript/json',
        '/front-end/javascript/debounce-throttle',
        '/front-end/javascript/code-snippet',
        '/front-end/javascript/node',
        '/front-end/javascript/element',
        '/front-end/javascript/object',
        '/front-end/javascript/javascript-route',
        '/front-end/javascript/sort'
      ]
    },
    {
      text: 'TypeScript',
      collapsable: false,
      children: [
        '/front-end/typescript/types',
        '/front-end/typescript/function',
        '/front-end/typescript/object',
        '/front-end/typescript/narrowing',
        '/front-end/typescript/type-manipulation',
        '/front-end/typescript/class'
      ]
    },
    {
      text: '算法',
      collapsable: false,
      children: [
        '/front-end/algorithm/array',
        '/front-end/algorithm/string',
        '/front-end/algorithm/list',
        '/front-end/algorithm/tree',
        '/front-end/algorithm/other'
      ]
    }
  ],
  node:[
    {
      text:' Util',
      children:[
        '/node/util/tapable'
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
        VueProvideFather: resolve('Vue', 'Provide', 'Father'),
        CssFloat: resolve('CSS', 'Float','Float'),
        CssFloatLayout: resolve('CSS', 'Float' ,'FloatLayout'),
        CssFloatText: resolve('CSS', 'Float', 'FloatText'),
        CssFloatSilence: resolve('CSS', 'Float', 'FloatSilence')
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
      {text:'前端',link:'/front-end/javascript/bom'},
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
      collapsable: true,
      '/react/': side.react,
      '/front-end/': side.front_end,
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
