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

