export const themeData = {
  "lastUpdated": true,
  "lastUpdatedText": "上次更新",
  "contributors": false,
  "smoothScroll": false,
  "darkMode": true,
  "logo": null,
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "JavaScript",
      "link": "/javascript/"
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
  "sidebar": {
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
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
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
