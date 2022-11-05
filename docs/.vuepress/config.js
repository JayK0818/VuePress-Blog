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
      text: 'React',
      children: [
        '/react/basis',
        '/react/hook',
        '/react/create-react-app',
        '/react/react-router-dom',
        '/react/redux',
        '/react/react-redux',
        '/react/redux-toolkit',
        '/react/mobx'
      ]
    }
  ],
  vue:[
    {
      text:'Vue.js',
      children: [
        '/vue/data-transfer',
        '/vue/migration',
        '/vue/pinia'
      ]
    },
    {
      text: '打包工具',
      children: ['/vue/webpack']
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
        '/front-end/css/animation',
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
        '/front-end/javascript/web-component',
        '/front-end/javascript/object',
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
        '/front-end/typescript/class',
        '/front-end/typescript/utility-type'
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
      text: 'Node',
      collapsable: false,
      children: [
        '/back-end/node.md',
        '/back-end/express.md',
        '/back-end/koa.md',
        '/back-end/nest.md'
      ]
    },
    {
      text: '数据库',
      collapse: false,
      children: [
        '/back-end/database/mongosh',
        '/back-end/database/mongodb',
        '/back-end/database/mongoose'
      ]
    },
    {
      text: 'Util',
      children: [
        '/back-end/util/tapable',
        '/back-end/util/commander',
        '/back-end/util/inquirer',
        '/back-end/util/joi',
        '/back-end/util/nodemon',
        '/back-end/util/formidable'
      ]
    }
  ],
  algorithm: [
    {
      text: 'Leetcode',
      children: [
        '/algorithm/leetcode/two-sum',
        '/algorithm/leetcode/add-two-number',
        '/algorithm/leetcode/longest-substring-without-repeat',
        '/algorithm/leetcode/middle-number-of-two-array',
        '/algorithm/leetcode/longest-reverse-substring',
        '/algorithm/leetcode/int-reverse',
        '/algorithm/leetcode/string-to-number',
        '/algorithm/leetcode/palindrome-number',
        '/algorithm/leetcode/water-container',
        '/algorithm/leetcode/number-to-roman',
        '/algorithm/leetcode/roman-to-number',
        '/algorithm/leetcode/longest-string-prefix',
        '/algorithm/leetcode/three-number-sum',
        '/algorithm/leetcode/closest-three-number-sum',
        '/algorithm/leetcode/phone-number-combine',
        '/algorithm/leetcode/four-number-sum',
        '/algorithm/leetcode/remove-nth-node-from-list',
        '/algorithm/leetcode/valid-brackets',
        '/algorithm/leetcode/create-brackets',
        '/algorithm/leetcode/remove-repeat-item',
        '/algorithm/leetcode/remove-specified-element',
        '/algorithm/leetcode/first-match-string-index',
        '/algorithm/leetcode/devide-two-number',
        '/algorithm/leetcode/substrings-with-concat'
        // '/algorithm/leetcode/combine-ascending-list'
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
        CssFloat: resolve('CSS', 'Float','Float'),
        CssFloatLayout: resolve('CSS', 'Float' ,'FloatLayout'),
        CssFloatText: resolve('CSS', 'Float', 'FloatText'),
        CssFloatSilence: resolve('CSS', 'Float', 'FloatSilence'),
        CssCenter: resolve('CSS', 'Center', 'Center'),
        CssRowCenter: resolve('CSS', 'Center', 'RowCenter'),
        CssFlex: resolve('CSS', 'Center', 'Flex'),
        CssFlexColumn: resolve('CSS', 'Center', 'FlexColumn'),
        CssFlexGroup: resolve('CSS', 'Center', 'FlexGroup'),
        CssStickyFooter: resolve('CSS', 'Center', 'StickyFooter'),
        CssGridTemplate: resolve('CSS', 'Grid', 'Template'),
        CssGridItems: resolve('CSS', 'Grid', 'GridItems'),
        CssGridContent: resolve('CSS', 'Grid', 'GridContent'),
        CssGridFlow: resolve('CSS', 'Grid', 'GridFlow'),
        CssPseudoBefore: resolve('CSS', 'Pseudo', 'Before'),
        CssTransition: resolve('CSS', 'Animation', 'Transition'),
        CssAnimation: resolve('CSS', 'Animation', 'Animation')
      }
    })
  ],
  theme: defaultTheme({
    lastUpdated: false,
    lastUpdatedText:'上次更新',
    contributors: false,
    sidebarDepth: 2,
    navbar:[
      { text: '首页', link:'/' },
      { text: '前端',link:'/front-end/javascript/bom' },
      { text: '后端',link:'/back-end/node/' },
      { text: 'Vue',link:'/vue/data-transfer/' },
      { text: 'React',link:'/react/basis/' },
      { text: '算法', link: '/algorithm/leetcode/two-sum/'}
    ],
    contributors: false,
    darkMode: false,
    logo:null,
    sidebar:{
      collapsable: true,
      '/react/': side.react,
      '/front-end/': side.front_end,
      '/back-end/': side.node,
      '/vue/': side.vue,
      '/algorithm/': side.algorithm
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
