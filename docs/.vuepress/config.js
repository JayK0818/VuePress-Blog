import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defaultTheme } from 'vuepress'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
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
  lang: 'zh-CN',
  title: '牧童的博客',
  description: 'Vuepress,JavaScript,Node.js,React.js,Vue.js,Mongodb,Nest,Koa,Express前端开发',
  head:[
    ['link', { rel: 'icon', href:'/code.png' } ]
  ],
  plugins: [
    shikiPlugin({
      theme: 'Monokai'
    }),
    registerComponentsPlugin({
      components: {
        JavaScriptAttribute:resolve('JavaScript','Attribute'),
        JavaScriptInsertBefore:resolve('JavaScript','InsertBefore'),
        JavaScriptModalButton: resolve('JavaScript', 'ModalButton'),
        JavaScriptEvent: resolve('JavaScript', 'Event'),
        JavaScriptEventDelegation: resolve('JavaScript', 'EventDelegation'),
        VueEventBus: resolve('Vue', 'EventBus', 'EventBus'),
        VueHome: resolve('Vue', 'Home', 'index'),
        JavaScriptBoxSize: resolve('JavaScript', 'BoxSize'),
        JavaScriptScrollBottom: resolve('JavaScript', 'ScrollBottom'),
        VuePropFather: resolve('Vue', 'Prop', 'Father'),
        VueEmitFather: resolve('Vue', 'Emit', 'Father'),
        VueProvideFather: resolve('Vue', 'Provide', 'Father'),
        VueLifeCycle: resolve('Vue', 'LifeCycle', 'index'),
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
    logo: null,
    sidebar:{
      collapsable: true,
      '/front-end/': sidebar.front_end,
      '/back-end/': sidebar.node,
      '/algorithm/': sidebar.algorithm
    },
    topBanner: false
  }),
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        Components({
          resolvers: [NaiveUiResolver()]
        })
      ]
    }
  })
}
