export const data = JSON.parse("{\"key\":\"v-1be64244\",\"path\":\"/node/node_module.html\",\"title\":\"常用npm包\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"plop\",\"slug\":\"plop\",\"children\":[]}],\"git\":{\"updatedTime\":1652629709000},\"filePathRelative\":\"node/node_module.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
