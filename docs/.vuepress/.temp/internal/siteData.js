export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "牧童的博客",
  "description": "Vuepress,JavaScript,Node.js,React.js,Vue.js,前端开发",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/code.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
