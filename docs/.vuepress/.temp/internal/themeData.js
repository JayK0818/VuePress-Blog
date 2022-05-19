export const themeData = {
  "lastUpdated": true,
  "lastUpdatedText": "上次更新",
  "contributors": false,
  "sidebarDepth": 2,
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "JavaScript",
      "link": "/javascript/bom"
    },
    {
      "text": "Node",
      "link": "/node/"
    },
    {
      "text": "Vue",
      "link": "/vue/data-transfer/"
    },
    {
      "text": "React",
      "link": "/react/create-react-app/"
    }
  ],
  "smoothScroll": false,
  "darkMode": true,
  "logo": null,
  "sidebar": {
    "collapsable": false,
    "/react/": [
      {
        "title": "React",
        "children": [
          "/react/create-react-app",
          "/react/context",
          "/react/react-performance-optimization",
          "/react/concept"
        ]
      }
    ],
    "/javascript/": [
      {
        "title": "JavaScript",
        "collapsable": false,
        "children": [
          "/javascript/bom",
          "/javascript/event",
          "/javascript/ajax",
          "/javascript/fetch",
          "/javascript/constructor-function",
          "/javascript/scope-closure",
          "/javascript/this",
          "/javascript/high-order-function",
          "/javascript/promise",
          "/javascript/javascript-new-features",
          "/javascript/concept",
          "/javascript/value-copy",
          "/javascript/json",
          "/javascript/debounce-throttle",
          "/javascript/code-snippet",
          "/javascript/node",
          "/javascript/element",
          "/javascript/object",
          "/javascript/javascript-route",
          "/javascript/algorithm",
          "/javascript/sort"
        ]
      },
      {
        "title": "TypeScript",
        "collapsable": false,
        "children": [
          "/javascript/typescript/types",
          "/javascript/typescript/function",
          "/javascript/typescript/object"
        ]
      }
    ],
    "/node/": [
      {
        "title": "Node",
        "children": [
          "/node/node_module"
        ]
      }
    ],
    "/vue/": [
      {
        "title": "Vue",
        "children": [
          "/vue/data-transfer",
          "/vue/entry-and-version",
          "/vue/global-api",
          "/vue/vue-instance",
          "/vue/pinia",
          "/vue/webpack"
        ]
      }
    ]
  },
  "topBanner": false,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
