# nodemon

  nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application
  when file changes in the directory are detected.

## Install

```js
// global
npm install -g nodemon

npm install --save-dev nodemon
```
:::tip
With a local installation, nodemon will not be available in your system path or you can not use it directly
from the command line, Instead, the local installation of nodemon can be run by calling it from within an npm
script or using npx nodemon
:::

```js
// If my application accepted a host and port as the arguments.
nodemon ./server.js localhost 3000
```

## Config files

  nodemon supports local and global configuration files. These are usually named nodemon.json and can be located in currrent working directory or in your home directory.

  配置的优先级顺序: command line arguments > local config > global config

```json
// nodemon.json
{
  "ignore": ["*.test.js", "**/fixtures/**"],
  "delay": 2500,
  "ext": "js, mjs, json" // 监听后缀更改
}

// package.json
{
  "nodemonConfig": {
    "verbose": true,  // 设置日志输出模式 (详细模式)
    "ignore": ["*.test.js", "**/fixtures/**"],
    "delay": 2500,
    "ext": "js, mjs, json"
  }
}
```