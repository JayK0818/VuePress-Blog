export const data = {
  "key": "v-7d489dba",
  "path": "/javascript/concept.html",
  "title": "概念",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Event Loop",
      "slug": "event-loop",
      "children": []
    },
    {
      "level": 2,
      "title": "垃圾回收",
      "slug": "垃圾回收",
      "children": [
        {
          "level": 3,
          "title": "引用计数",
          "slug": "引用计数",
          "children": []
        },
        {
          "level": 3,
          "title": "标记清除",
          "slug": "标记清除",
          "children": []
        },
        {
          "level": 3,
          "title": "管理内存",
          "slug": "管理内存",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1652629709000
  },
  "filePathRelative": "javascript/concept.md"
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
