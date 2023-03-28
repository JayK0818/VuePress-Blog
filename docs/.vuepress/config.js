import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defaultTheme } from 'vuepress'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { viteBundler } from '@vuepress/bundler-vite'
import Components from 'unplugin-vue-components/vite'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { getDirname, path } from '@vuepress/utils'
import { navbar, sidebar } from './nav.js'
const __dirname = getDirname(import.meta.url)

function resolve(dirname,directory,filename){
  if(filename === undefined){
    return path.resolve(__dirname,`./components/${dirname}/${directory}.vue`)
  }else{
    return path.resolve(__dirname,`./components/${dirname}/${directory}/${filename}.vue`)
  }
}

export default {
  locales: {
    lang: 'zh-CN',
    title: '牧童的博客',
    description:'Vuepress,JavaScript,Node.js,React.js,Vue.js,前端开发',
    head:[
      ['link', {rel:'icon',href:'/code.png'}]
    ],
    base: process.env.NODE_ENV === 'development' ? '/' : '/blog/',
  },
  plugins: [
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
    sidebarDepth: 2,
    navbar,
    contributors: false,
    darkMode: false,
    logo:null,
    sidebar:{
      collapsable: true,
      '/react/': sidebar.react,
      '/front-end/': sidebar.front_end,
      '/back-end/': sidebar.node,
      '/vue/': sidebar.vue,
      '/algorithm/': sidebar.algorithm
    },
    topBanner: false
  }),
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        Components({
          resolvers: [AntDesignVueResolver()]
        })
      ],
      css: {
        preprocessorOptions: {
          less: {
            modifyVars: {
              'border-radius-base': 0
            },
            javascriptEnabled: true
          }
        }
      }
    }
  })
}
