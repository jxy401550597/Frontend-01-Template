# 每周总结可以写在这里
- HTTP/TCP
    - TCP 
        - 三次握手四次挥手
    - HTTP 是纯粹的文本协议，它是规定了使用 TCP 协议来传输文本格式的一个应用层协议
        - HTTP格式
            - Request
                - 第一行被称为 request line[^1]
                    - method    [方法]
                    - path      [路径] 
                    - version   [协议和版本]
                - head 请求头
                    - 紧随着request line之后
                    - 由若干行组成，每行都是用冒号分隔的名称和值
                - body 请求体
                    - 在head之后, 由两个换行符[^2]分隔
                    - 可能包含文件或者表单数据
            - Response
                - 第一行被称为 response line[^3]
                    - version       [协议和版本]
                    - status code   [状态码]
                    - status text   [状态文本]
                - head 响应头
                    - 紧随着response line之后
                    - 由若干行组成，每行都是用冒号分隔的名称和值
                - body  响应体
                    - 在head之后, 由两个换行符[^3]分隔
                    - HTML代码
            - 8种请求方法
                - OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE、CONNECT
        - HTTP Status code / Status text
            - 常见状态码
                - 1xx：临时回应，表示客户端请继续。
                - 2xx：请求成功。
                - 3xx: 表示请求的目标有变化，希望客户端进一步处理。
                - 4xx：客户端请求错误。
                - 5xx：服务端请求错误。

                Status-Code | Status-Text 
                -           | -
                200         | OK
                301         | Moved Permanently
                302         | Found
                304         | Not Modified
                400         | Bad Request
                401         | Unauthorized
                403         | Forbidden
                404         | Not Found
                405         | Method Not Allowed
                500         | Internal Server Error
                502         | Bad Gateway
                503         | Service Unavailable

        - HTTP HEAD
                
                Request Header      | 规定
                -                   |        -
                Accept              | 浏览器接收的格式
                Accept-Encoding     | 浏览器接收的编码方式
                Accept-Language      | 浏览器接收的语言，用于服务端多语言判断
                Cache-Control       | 控制缓存的时效性
                Connection          | 连接方式，如果是Keep-Alive 且服务端支持，则会复用链接
                Host                | HTTP访问使用的域名
                If-Modified-Since   | 上次访问时的更改时间，如果服务端认为此时间后自己没有更新，则会给出304响应
                If-None-Match       | 次访问时使用的E-Tag 通常是页面的信息摘要，这个比更改时间更准确一些
                User-Agent          | 客户端标识
                Cookie              | 客户端存储的cookie字符串
            
                
                Response Header     | 规定
                -                   | -
                Cache-Control       | 缓存控制，用于通知各级缓存保存的时间，例如max-age=0，表示不要缓存
                Connection          | 连接类型 Keep-Alive 表示复用连接
                Content-Encoding    | 内容编码方式，通常是gzip
                Content-Length      | 内容的长度，有利于浏览器判断内容是否已经结束
                Content-Type        | 内容类型 所有请求网页的都是text/html
                Date                | 当前的服务器日期
                ETag                | 页面的信息摘要，用于判断是否需要重新到服务端取回页面
                Expires             | 过期时间, 用于判断是否需要重新到服务端取回页面
                Keep-Alive          | 保持连接不断时需要的一些信息，如timeout=5, max=100
                Last-Modified       | 页面上次修改时间
                Server              | 服务器软件类型
                Set-Cookie          | 设置cookie 可以存在多个
                Via                 | 服务端的请求链路，对一些调试场景至关重要的一个头

        - HTTP Request Body
            - 常见body格式
                - application/json
                - application/x-www-form-urlencoded (表单格式上传)
                - multipart/form-data (上传文件时)
                - text/xml