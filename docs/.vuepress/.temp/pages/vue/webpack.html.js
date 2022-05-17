export const data = {
  "key": "v-5dd96c6e",
  "path": "/vue/webpack.html",
  "title": "Webpack",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "开始",
      "slug": "开始",
      "children": []
    },
    {
      "level": 2,
      "title": "管理资源",
      "slug": "管理资源",
      "children": []
    },
    {
      "level": 2,
      "title": "代码分离",
      "slug": "代码分离",
      "children": [
        {
          "level": 3,
          "title": "配置多个入口",
          "slug": "配置多个入口",
          "children": []
        },
        {
          "level": 3,
          "title": "SplitChunksPlugin",
          "slug": "splitchunksplugin",
          "children": []
        },
        {
          "level": 3,
          "title": "动态导入",
          "slug": "动态导入",
          "children": []
        },
        {
          "level": 3,
          "title": "prefetch / preload",
          "slug": "prefetch-preload",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "缓存",
      "slug": "缓存",
      "children": [
        {
          "level": 3,
          "title": "fullhash",
          "slug": "fullhash",
          "children": []
        },
        {
          "level": 3,
          "title": "chunkhash",
          "slug": "chunkhash",
          "children": []
        },
        {
          "level": 3,
          "title": "contenthash",
          "slug": "contenthash",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Loader",
      "slug": "loader",
      "children": [
        {
          "level": 3,
          "title": "Style-loader",
          "slug": "style-loader",
          "children": []
        },
        {
          "level": 3,
          "title": "CSS-loader",
          "slug": "css-loader",
          "children": []
        },
        {
          "level": 3,
          "title": "url: Boolean / Object",
          "slug": "url-boolean-object",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Plugins",
      "slug": "plugins",
      "children": [
        {
          "level": 3,
          "title": "html-webpack-plugin",
          "slug": "html-webpack-plugin",
          "children": []
        },
        {
          "level": 3,
          "title": "mini-css-extract-plugin",
          "slug": "mini-css-extract-plugin",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "开发环境和生产环境",
      "slug": "开发环境和生产环境",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652629709000
  },
  "filePathRelative": "vue/webpack.md"
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
