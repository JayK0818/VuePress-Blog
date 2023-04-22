/**
 * @description 顶部导航栏
*/
const navbar = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/front-end/',
    children: [
      {
        text: 'CSS',
        link: '/front-end/css/box'
      },
      {
        text: 'JavaScript',
        link: '/front-end/javascript/bom'
      },
      {
        text: 'Vue',
        link: '/front-end/vue/data-transfer'
      },
      {
        text: 'TypeScript',
        link: '/front-end/typescript/types'
      },
      {
        text: 'React',
        link: '/front-end/react/basis'
      }
    ]
  },
  {
    text: '后端',
    link: '/back-end/',
    children: [
      {
        text: 'Node及框架',
        link: '/back-end/node'
      },
      {
        text: '数据库',
        link: '/back-end/database/mongosh'
      },
      {
        text: 'Util',
        link: '/back-end/util/tapable'
      }
    ]
  },
  { text: '算法', link: '/algorithm/two-number-sum' }
]

/**
 * @description 侧导航栏
*/
const sidebar = {
  front_end: [
    {
      text: 'CSS',
      children: [
        '/front-end/css/box',
        '/front-end/css/float',
        '/front-end/css/flex',
        '/front-end/css/grid',
        '/front-end/css/center',
        '/front-end/css/mobile',
        '/front-end/css/bfc',
        '/front-end/css/pseudo',
        '/front-end/css/animation',
        '/front-end/css/other'
      ]
    },
    {
      text: 'JavaScript',
      collapsable: false,
      children: [
        '/front-end/javascript/bom',
        '/front-end/javascript/event',
        '/front-end/javascript/ajax',
        '/front-end/javascript/fetch',
        '/front-end/javascript/constructor-function',
        '/front-end/javascript/scope-closure',
        '/front-end/javascript/this',
        '/front-end/javascript/operator',
        '/front-end/javascript/high-order-function',
        '/front-end/javascript/promise',
        {
          text: 'ECMAScript语法',
          children: [
            '/front-end/javascript/ecmascript/es2015.md',
            '/front-end/javascript/ecmascript/es2016.md',
            '/front-end/javascript/ecmascript/es2017.md',
            '/front-end/javascript/ecmascript/es2018.md',
            '/front-end/javascript/ecmascript/es2019.md',
            '/front-end/javascript/ecmascript/es2020.md',
            '/front-end/javascript/ecmascript/es2021.md',
            '/front-end/javascript/ecmascript/es2022.md',
          ]
        },
        '/front-end/javascript/concept',
        '/front-end/javascript/value-copy',
        '/front-end/javascript/json',
        '/front-end/javascript/debounce-throttle',
        '/front-end/javascript/code-snippet',
        '/front-end/javascript/node',
        '/front-end/javascript/element',
        '/front-end/javascript/web-component',
        '/front-end/javascript/object',
        '/front-end/javascript/sort'
      ]
    },
    {
      text: 'TypeScript',
      collapsable: true,
      children: [
        '/front-end/typescript/types',
        '/front-end/typescript/function',
        '/front-end/typescript/object',
        '/front-end/typescript/narrowing',
        '/front-end/typescript/type-manipulation',
        '/front-end/typescript/class',
        '/front-end/typescript/utility-type'
      ]
    },
    {
      text: 'Vue',
      collapsable: true,
      children: [
        '/front-end/vue/data-transfer',
        '/front-end/vue/migration',
        '/front-end/vue/pinia',
        '/front-end/vue/webpack'
      ]
    },
    {
      text: 'React',
      children: [
        '/front-end/react/basis',
        '/front-end/react/hook',
        '/front-end/react/create-react-app',
        '/front-end/react/react-router-dom',
        '/front-end/react/redux',
        '/front-end/react/react-redux',
        '/front-end/react/redux-toolkit',
        '/front-end/react/mobx'
      ]
    }
  ],
  node:[
    {
      text: 'Node',
      collapsable: false,
      children: [
        '/back-end/node.md',
        '/back-end/express.md',
        '/back-end/koa.md',
        '/back-end/nest.md'
      ]
    },
    {
      text: '数据库',
      collapse: false,
      children: [
        '/back-end/database/mongosh',
        '/back-end/database/mongodb',
        '/back-end/database/mongoose'
      ]
    },
    {
      text: 'Util',
      children: [
        '/back-end/util/tapable',
        '/back-end/util/commander',
        '/back-end/util/inquirer',
        '/back-end/util/joi',
        '/back-end/util/nodemon',
        '/back-end/util/formidable'
      ]
    }
  ],
  algorithm: [
    '/algorithm/two-number-sum',
    '/algorithm/add-two-number',
    '/algorithm/longest-substring-without-repeat',
    '/algorithm/middle-number-of-two-array',
    '/algorithm/longest-reverse-substring',
    '/algorithm/int-reverse',
    '/algorithm/string-to-number',
    '/algorithm/palindrome-number',
    '/algorithm/water-container',
    '/algorithm/number-to-roman',
    '/algorithm/roman-to-number',
    '/algorithm/longest-string-prefix',
    '/algorithm/three-number-sum',
    '/algorithm/closest-three-number-sum',
    '/algorithm/phone-number-combine',
    '/algorithm/four-number-sum',
    '/algorithm/remove-nth-node-from-list',
    '/algorithm/valid-brackets',
    '/algorithm/create-brackets',
    '/algorithm/remove-repeat-item',
    '/algorithm/remove-specified-element',
    '/algorithm/first-match-string-index',
    '/algorithm/devide-two-number',
    '/algorithm/substrings-with-concat',
    '/algorithm/array-arrangement',
    '/algorithm/longest-valid-brackets',
    '/algorithm/search-first-last-index',
    '/algorithm/search-insert-index',
    '/algorithm/valid-sudoku',
    '/algorithm/array-middle-index',
    '/algorithm/combine-array-range',
    '/algorithm/matrix-rotate',
    '/algorithm/zero-matrix',
    '/algorithm/reverse-string-word',
    '/algorithm/implement-strStr',
    '/algorithm/array-split',
    '/algorithm/max-consecutive-ones',
    '/algorithm/min-sub-array-length',
    '/algorithm/yang-hui-triangle',
    '/algorithm/reverse-letter-of-word-in-string',
    '/algorithm/minimum-value-in-rotate-array',
    '/algorithm/remove-array-zero-item'
  ]
}

export {
  navbar,
  sidebar
}
