# 常用npm包

## plop 

  Plop is what I like to call a 'micro-generator framework', because it is a small tool that gives
  you a simple way to generate code or any other type of flat text files in a consistent way.

```js
//Install
npm install plop --save-dev
npm install plop -g
```
  Create a propfile.js at the root of your code
```js
// Usage
// 项目根目录下创建propfile.js 
module.exports = function(prop) {
  plop.setGenerator('component', {
    description:'this is a skeleton propfile',
    prompts:[
      {
        type:'input',
        name:'name',
        message:'component name'
      }
    ],
    actions:[{
      type:'add',
      path:'src/{{name}}/{{name}}.jsx',
      templateFile:'plop-templates/component.hbs'//项目根目录下创建 plop-templates文件夹
    }]
  })
}
```
:::tip
  if you did not install plop globally, you will need to setup an npm script to run plop for you.
```js
{
  "scripts":{
    "plop":"plop"
  }
}
```
:::
[github-plop](https://github.com/plopjs/plop)
