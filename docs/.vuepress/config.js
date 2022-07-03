const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { defaultTheme } = require('vuepress')
const { NaiveUiResolver } = require('unplugin-vue-components/resolvers')
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
        '/react/basis',
        '/react/hook',
        '/react/create-react-app',
        '/react/react-router-dom',
        '/react/redux',
        '/react/react-redux',
        '/react/redux-toolkit',
        '/react/mobx',
        '/react/shopping-cart',
        '/react/todo-list'
      ]
    }
  ],
  vue:[
    {
      title:'Vue',
      children: [
        '/vue/data-transfer',
        // '/vue/entry-and-version',
        // '/vue/global-api',
        // '/vue/vue-instance',
        '/vue/pinia',
        '/vue/webpack'
      ]
    }
  ],
  front_end: [
    {
      text: 'CSS',
      children: [
        '/front-end/css/box',
        '/front-end/css/float',
        '/front-end/css/flex',
        '/front-end/css/grid',
        '/front-end/css/center',
        '/front-end/css/mobile',
        '/front-end/css/bfc',
        '/front-end/css/pseudo',
        '/front-end/css/other'
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
        '/front-end/javascript/operator',
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
  base: process.env.NODE_ENV === 'development' ? '/' : '/blog/',
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
        JavaScriptModalButton: resolve('JavaScript', 'ModalButton'),
        JavaScriptEvent: resolve('JavaScript', 'Event'),
        JavaScriptEventDelegation: resolve('JavaScript', 'EventDelegation'),
        VueEventBus: resolve('Vue', 'EventBus', 'EventBus'),
        PiniaState: resolve('Vue', 'Pinia', 'State'),
        PiniaTodo: resolve('Vue', 'Pinia', 'Todos'),
        VueHome: resolve('Vue', 'Home', 'index'),
        JavaScriptBoxSize: resolve('JavaScript', 'BoxSize'),
        JavaScriptScrollBottom: resolve('JavaScript', 'ScrollBottom'),
        VuePropFather: resolve('Vue', 'Prop', 'Father'),
        VueEmitFather: resolve('Vue', 'Emit', 'Father'),
        VueProvideFather: resolve('Vue', 'Provide', 'Father'),
        CssFloat: resolve('Css', 'Float','Float'),
        CssFloatLayout: resolve('Css', 'Float' ,'FloatLayout'),
        CssFloatText: resolve('Css', 'Float', 'FloatText'),
        CssFloatSilence: resolve('Css', 'Float', 'FloatSilence'),
        CssCenter: resolve('Css', 'Center', 'Center'),
        CssRowCenter: resolve('Css', 'Center', 'RowCenter'),
        CssFlex: resolve('Css', 'Center', 'Flex'),
        CssFlexColumn: resolve('Css', 'Center', 'FlexColumn'),
        CssFlexGroup: resolve('Css', 'Center', 'FlexGroup'),
        CssStickyFooter: resolve('Css', 'Center', 'StickyFooter'),
        CssGridTemplate: resolve('Css', 'Grid', 'Template'),
        CssGridItems: resolve('Css', 'Grid', 'GridItems'),
        CssGridContent: resolve('Css', 'Grid', 'GridContent'),
        CssGridFlow: resolve('Css', 'Grid', 'GridFlow'),
        CssPseudoBefore: resolve('Css', 'Pseudo', 'Before')
      }
    })
  ],
  theme: defaultTheme({
    lastUpdated: false,
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
      {text:'React',link:'/react/basis/'},
    ],
    contributors: false,
    darkMode: false,
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
          resolvers: [NaiveUiResolver()]
        })
      ]
    }
  })
}
