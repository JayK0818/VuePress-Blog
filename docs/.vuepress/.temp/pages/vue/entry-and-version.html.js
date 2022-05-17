export const data = {
  "key": "v-3c367b94",
  "path": "/vue/entry-and-version.html",
  "title": "Vue构建版本和打包入口",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Vue不同构建版本",
      "slug": "vue不同构建版本",
      "children": []
    },
    {
      "level": 2,
      "title": "打包入口",
      "slug": "打包入口",
      "children": []
    },
    {
      "level": 2,
      "title": "EntryRuntime with Compiler",
      "slug": "entryruntime-with-compiler",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652629709000
  },
  "filePathRelative": "vue/entry-and-version.md"
}

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
