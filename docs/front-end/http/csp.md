# CSP

  内容安全策略(CSP) 是一个额外的安全层。用于检测并削弱某些特定类型的攻击, 包括跨站脚本和数据注入攻击等。为了使CSP可用, 你需要配置你的网络服务器返回
  **Content-Security-Policy** HTTP标头。除此之外, meta元素也可以被用来配置该策略。

```html
<meta http-equiv='Content-Security-Policy' content="default-src 'self'; img-src https://*; chil-src 'none'"/>
```

  CSP通过指定有效域(浏览器认可的可执行脚本的有效来源), 使服务器管理者有能力减少或消除XSS攻击所依赖的载体。

## Content-Security-Policy

  配置内容安全策略 添加 **Content-Security-Policy** HTTP标头到一个页面, 并配置相应的值, 以控制用户代理可以为该页面获取哪些资源。
```js
// usage
{
  'Content-Security-Policy': 'policy'
}
```
- default-src   可以为其他CSP拉取指令提供备选项。
  1. 'self' 指向与要保护的文件所在的源, 包含相同的URL schema 与端口号。
  2. 'unsafe-inline'  允许使用内联资源。例如内联 script元素 / 内联 style 内联事件处理器。
  3. 'unsafe-eval'    允许使用eval()  
  4. 'none'           不允许使用任何内容。

```js
Content-Security-Policy: default-src 'self'; script-src https://example.com

// 等价于
Content-Security-Policy: connect-src 'self';
  font-src 'self';
  frame-src 'self';
  img-src 'self';
  manifest-src 'self';
  media-src 'self';
  object-src 'self';
  script-src https://example.com;
  style-src 'self';
  worker-src 'self'
```