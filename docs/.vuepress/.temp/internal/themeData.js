export const themeData = {
  "smoothScroll": false,
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
      "text": "前端",
      "link": "/front-end/javascript/bom"
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
  "darkMode": true,
  "logo": null,
  "sidebar": {
    "collapsable": true,
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
    "/front-end/": [
      {
        "text": "CSS",
        "children": [
          "/front-end/css/box",
          "/front-end/css/float",
          "/front-end/css/flex",
          "/front-end/css/grid",
          "/front-end/css/center",
          "/front-end/css/mobile"
        ]
      },
      {
        "text": "JavaScript",
        "collapsable": false,
        "children": [
          "/front-end/javascript/bom",
          "/front-end/javascript/event",
          "/front-end/javascript/ajax",
          "/front-end/javascript/fetch",
          "/front-end/javascript/constructor-function",
          "/front-end/javascript/scope-closure",
          "/front-end/javascript/this",
          "/front-end/javascript/high-order-function",
          "/front-end/javascript/promise",
          "/front-end/javascript/javascript-new-features",
          "/front-end/javascript/concept",
          "/front-end/javascript/value-copy",
          "/front-end/javascript/json",
          "/front-end/javascript/debounce-throttle",
          "/front-end/javascript/code-snippet",
          "/front-end/javascript/node",
          "/front-end/javascript/element",
          "/front-end/javascript/object",
          "/front-end/javascript/javascript-route",
          "/front-end/javascript/sort"
        ]
      },
      {
        "text": "TypeScript",
        "collapsable": false,
        "children": [
          "/front-end/typescript/types",
          "/front-end/typescript/function",
          "/front-end/typescript/object",
          "/front-end/typescript/narrowing",
          "/front-end/typescript/type-manipulation",
          "/front-end/typescript/class"
        ]
      },
      {
        "text": "算法",
        "collapsable": false,
        "children": [
          "/front-end/algorithm/array",
          "/front-end/algorithm/string",
          "/front-end/algorithm/list",
          "/front-end/algorithm/tree",
          "/front-end/algorithm/other"
        ]
      }
    ],
    "/node/": [
      {
        "text": " Util",
        "children": [
          "/node/util/tapable"
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
