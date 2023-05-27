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
      },
      {
        text: 'Webpack',
        link: '/front-end/webpack/getting-start'
      },
      {
        text: 'HTTP',
        link: '/front-end/http/concept'
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
  { text: '算法', link: '/algorithm/longest-substring-without-repeat' }
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
      collapsable: true,
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
        // '/front-end/javascript/sort'
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
        '/front-end/vue/lifecycle',
        '/front-end/vue/migration',
        '/front-end/vue/pinia'
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
      ]
    },
    {
      text: 'Webpack',
      children: [
        '/front-end/webpack/getting-start',
        '/front-end/webpack/loader',
        '/front-end/webpack/plugin',
        '/front-end/webpack/environment'
      ]
    },
    {
      text: 'HTTP',
      children: [
        '/front-end/http/concept',
        '/front-end/http/cache-control',
        '/front-end/http/cookie',
        '/front-end/http/cors'
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
    '/algorithm/longest-substring-without-repeat',
    '/algorithm/longest-reverse-substring',
    '/algorithm/int-reverse',
    '/algorithm/string-to-number',
    '/algorithm/palindrome-number',
    '/algorithm/number-to-roman',
    '/algorithm/roman-to-number',
    '/algorithm/phone-number-combine',
    '/algorithm/remove-nth-node-from-list',
    '/algorithm/create-brackets',
    '/algorithm/first-match-string-index',
    '/algorithm/devide-two-number',
    '/algorithm/substrings-with-concat',
    '/algorithm/array-arrangement',
    '/algorithm/longest-valid-brackets',
    '/algorithm/matrix-rotate',
    '/algorithm/zero-matrix',
    '/algorithm/reverse-string-word',
    '/algorithm/implement-strStr',
    '/algorithm/max-consecutive-ones',
    '/algorithm/min-sub-array-length',
    '/algorithm/reverse-letter-of-word-in-string',
    // 二分查找相关题目
    {
      text: '数组',
      children: [
       '/algorithm/array/add-two-number',
        '/algorithm/array/two-number-sum',
        '/algorithm/array/combine-array-range',
        '/algorithm/array/four-number-sum',
        '/algorithm/array/water-container',
        '/algorithm/array/three-number-sum',
        '/algorithm/array/closest-three-number-sum',
        '/algorithm/array/longest-string-prefix',
        '/algorithm/array/search-insert-index',
        '/algorithm/array/array-middle-index',
        '/algorithm/array/remove-repeat-item',
        '/algorithm/array/remove-array-zero-item',
        '/algorithm/array/array-split',
        '/algorithm/array/middle-number-of-two-array',
        '/algorithm/array/remove-specified-element',
        '/algorithm/array/yang-hui-triangle',
        '/algorithm/array/valid-sudoku',
      ]
    },
    {
      text: '二分查找',
      children: [
        '/algorithm/binary-search/concept',
        '/algorithm/binary-search/find-target-index',
        '/algorithm/binary-search/find-smallest-letter-bigger-than-target',
        '/algorithm/binary-search/negative-number-count-in-grid',
        '/algorithm/binary-search/find-first-last-index',
        '/algorithm/binary-search/square-root-of-number',
        '/algorithm/binary-search/rotate-array',
        '/algorithm/binary-search/guess-number',
        '/algorithm/binary-search/first-bad-version',
        '/algorithm/binary-search/find-max-value',
        '/algorithm/binary-search/implement-pow',
        '/algorithm/binary-search/valid-sqrt-number',
        '/algorithm/binary-search/closest-the-number-of-array'
      ]
    },
    {
      text: '哈希表',
      children: [
        '/algorithm/hash/has-repeat-item',
        '/algorithm/hash/appear-once-in-array',
        '/algorithm/hash/happy-number',
        '/algorithm/hash/is-isomorphism-string',
        '/algorithm/hash/min-index-sum-of-two-array',
        '/algorithm/hash/first-unique-character-in-string',
        '/algorithm/hash/intersection-of-two-array',
        '/algorithm/hash/group-anagram',
        '/algorithm/hash/top-k-frequent-number'
      ]
    },
    {
      text: '二叉树',
      children: [
        '/algorithm/tree/concept'
      ]
    },
    {
      text: '队列&栈',
      children: [
        '/algorithm/queue-stack/circle-queue',
        '/algorithm/queue-stack/valid-brackets',
        '/algorithm/queue-stack/temperature-every-day',
        '/algorithm/queue-stack/evaluate-reverse-polish-expression',
        '/algorithm/queue-stack/decode-string'
        // '/algorithm/queue-stack/square-number'
      ]
    }
  ]
}

export {
  navbar,
  sidebar
}
