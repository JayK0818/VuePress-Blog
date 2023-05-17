# 概念与知识点

  这是一个学习HTTP/TCP相关知识的学习记录, 内容主要摘抄自<<图解HTTP协议>>以及MDN中关于HTTP的相关文档。

## HTTP的诞生

  3项WWW构建技术
- 把SGML(Standard Generalized Markup Language,标准通用语言)作为页面的文本标记语言的HTML(HyperText Markup Language,超文本标记语言),
- 作为文档传递协议的HTTP
- 指定文档所在地址的URL(Uniform Resource Locator,统一资源定位符。)

## TCP/IP

  TCP/IP协议族按层次分别为以下四层: 应用层、传输层、网络层和数据链路层。

- 应用层  应用层决定了向用户提供应用服务时通信的活动。(FTP, DNS HTTP)
- 传输层  传输层对上层应用层,提供处于网络连接中的两台计算机之间的数据传输。在传输层有两个性质不同的协议:TCP/UPD。
- 网络层  网络层用于处理在网络上流动的数据包。数据包是网络传输的最小数据单位。
- 链路层  用来处理网络的硬件部分。

## TCP三次握手

  TCP协议为了更容易传送大数据才把数据分割。而且TCP协议能够确认数据最终是否送达到对方采用了**三次握手策略(three-way handshaking)**。握手过程中
  使用了TCP的标志 ---*SYN (synchronize)* 和 *ACK(acknowledgement)*。

  发送端首先发送一个带有SYN标志的数据包给对方。接收端收到后, 回传一个带有SYN/ACK标志的数据包表示传递确认信息。最后发送端再返回一个带ACK标志的数据包,
  代表**握手**结束

## HTTP/1.1 标准化的协议

  HTTP/1.1 消除了大量歧义内容并引入了多项改进:

- 连接可以复用，节省了多次打开 TCP 连接加载网页文档资源的时间.在HTTP/1.1中, 所有的连接默认都是持久连接。
- 增加管线化技术，允许在第一个应答被完全发送之前就发送第二个请求，以降低通信延迟。
- 引入额外的缓存控制机制
- 支持响应分块(chunked: 数据以一系列分块的方式进行发送。)
- 引入内容协商机制，包括语言、编码、类型等。并允许客户端和服务器之间约定以最合适的内容进行交换
- 凭借 **Host** 标头，能够使不同域名配置在同一个 IP 地址的服务器上

## HTTP/2

- HTTP/2 是二进制协议而不是文本协议。
- 这是一个多路复用协议。并行的请求能在同一个链接中处理, 移除了HTTP/1.x中顺序和阻塞的约束。
- 压缩了标头(它将消息分成帧嵌入到流中。数据帧和报头帧分离,这将允许报头压缩)。因为标头在一系列请求中尝尝是相似的,移除了重复和传输重复数据的成本。

## HTTP消息

  HTTP请求和响应具有相似的结构，由以下部分组成:

- 一行起始行用于描述要执行的请求，或者是对应的状态，成功或失败。这个起始行总是单行的。
- 一个可选的 HTTP 标头集合指明请求或描述消息主体（body）
- 一个空行指示所有关于请求的元数据已经发送完毕
- 一个可选的包含请求相关数据的主体（比如 HTML 表单内容），或者响应相关的文档。主体的大小由起始行的 HTTP 头来指定

![HTTP消息](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/httpmsgstructure2.png)

### HTTP请求

1. 起始行(start-line): **一个HTTP方法**、**请求目标**、**HTTP版本**
2. 标头(Header): **通用标头**、**请求标头**、**表示标头**
3. 主体(Body)

### HTTP响应

1. 状态行(status line): **协议版本**、**状态码**、**状态文本**。
2. 标头(Header): **通用标头**、**响应标头**、**表示标头**。
3. 主体

### 内容编码

  内容编码指明应用在实体内容上的编码格式。并保持实体信息原样压缩。内容编码后的实体由客户端接收并负责解码
  常用的内容编码有以下几种方式:
- gzip (GNU zip)
- compress (UNIX系统的标准压缩)
- deflate (zlib)
- identity (不进行编码)

## HTTP首部字段

- Accept  告知服务器 客户端 可以处理的内容类型, 这种内容类型用 **MIME类型** 来表示。使用 **Content-Type** 通知客户端它的选择
  MIME 类型是一种标准用来表示文档、文件或字节流的性质和格式。type/subtype

- Date    创建报文的日期
- Accept-Charset  客户端可以处理的字符集类型。服务端使用 **Content-Type** 通知客户端它的选择。
- Accept-Encoding 客户端可以处理的内容编码方式 - 通常是某种压缩方法 **Content-Encoding** 中通知客户端该选择.

```js
if (req.url === '/main.js') {
  const buffer = fs.readFileSync('./main.js')
  const gzip = zlib.gzipSync(buffer)
  res.writeHead(200, {
    'Content-Type': 'text/javascript',
    'Content-Encoding': 'gzip', // 告知前端压缩的方式, 前端会将压缩的内容解码
    // 压缩后 传输的内容从 5.2k ----> 减少到321B
  })
  res.end(gzip)
}
```
- Content-Length  实体主体的大小 (对实体主体进行内容编码传输时, 不能再使用Content-Length)首部字段
```js
const app = http.createServer(function(req, res) {
  if (req.url === '/main.js') {
    const buffer = fs.readFileSync('./main.js')
    const gzip = zlib.gzipSync(buffer)
    res.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Content-Encoding': 'gzip',
      'Content-Length': 20  // R_CONTENT_LENGTH_MISMATCH 200 (OK) 压缩的时候 使用Content-Length 会报错
    })
    res.end(gzip)
  }
})
```
- Content-Type    实体媒体类型
- Location        客户端重定向至指定的URI
- Connection      1. 控制不再转发给代理的首部字段 / 2. 管理持久连接
- Transfer-Encoding 报文主体采用的编码方式
- Host            请求头指明了请求将要发送到的服务器主机名和端口号。**Host**首部字段在 *HTTP/1.1* 规范内是唯一一个必须被包含在请求内的首部字段。
- Referer         当前请求页面的来源页面的地址。referer 实际上是 **referrer** 误拼写。
- Etag            资源的特定版本的标识符。可以将资源以字符串形式做唯一性标识的方式。

[Etag 强检测与弱检测](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#%E9%AA%8C%E8%AF%81%E5%99%A8)

:::tip
避免'空中碰撞'。在 **Etag** 和 **If-Match** 头部的帮助下，可以检测到 **空中碰撞** 的编辑冲突。例如, 当编辑 MDN时, 当前的内容 wiki 内容被散列, 
并在响应中放入 Etag
```js
{
  ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
}
```
将更改保存到 wiki 页面时, POST 请求将包含有 ETag 值的 **If-Match** 头来检查是否为最新版本。如果哈希值不匹配, 则意味着文档已经被编辑。
:::

  HTTP首部字段是可以自动扩展的。在WEB服务器和浏览器的应用上, 会出现各种非标准的首部字段。

- X-Frame-Options 响应首部, 用于控制网站内容在其他Web网站的Frame标签内的显示问题。
  1. DENY         拒绝
  2. SAMEORIGIN   同源域名下的页面

## HTTP状态码

  HTTP响应状态码用来表明 HTTP 请求是否成功完成。响应被归为以下五大类:

1. 信息响应 (100–199)
2. 成功响应 (200–299)
3. 重定向消息 (300–399)
4. 客户端错误响应 (400–499)
5. 服务端错误响应 (500–599)

- 200 **200 OK** 表明请求已经成功。默认情况下状态码为200的响应可以被缓存。
- 204 **No Content** 服务器接受的请求已成功处理。但在返回的响应豹纹中不含实体的主体部分。也不允许返回任何实体的主体。返回204响应, 浏览器显示的页面不发生更新。
- 206 **Partial Content** 客户端进行了范围请求,服务器成功执行了这部分的GET请求。

- 301 **Moved Permanently** 永久性重定向。表示请求的资源已被分配了新的URI.
- 302 **Found** 临时重定向。
- 304 **Not Modified** 可以使用缓存的内容。

```js
const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {
  if (req.url === '/player') {
    res.writeHead(301, {
      'Location': 'http://localhost:3000' // 定义重定向的地址
    })
    res.end()
  } else if (req.url === '/') {
    const data = fs.readFileSync('./index.html', 'utf-8')
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(data)
  }
}).listen(3000, () => {
  console.log('app listening at port 3000')
})
```
  HTTP重定向不是定义重定向的唯一方法, 还有两个:
1. 借助HTML的 &lt;meta&gt; 元素的HTML重定向机制
2. 借助 **DOM** 的 JavaScript 重定向机制。

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=http://example.com/" />
</head>
```
```js
window.location = 'https://example.com/'
```

- 400 **Bad Request** 请求报文中存在语法错误。
- 401 **Unauthorized** 缺乏目标资源要求的身份验证凭证
- 403 **Forbidden** 拒绝授权访问
- 404 **Not Found** 服务器无法找到所请求的资源。

- 500 **Internal Server Error** 服务器端在执行请求时发生了错误。
- 503 **Service Unavailable** 它表示服务器尚未处于可以接受请求的状态,通常造成这种情况的原因是由于服务器停机维护或者已超载.