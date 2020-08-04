## get post
一个是 req body    一个是querystring  (a=1&b=2)

在浏览器中浏览器解析文档，会发出请求，img link script GET 参数只能放在url 里面
xmlhttprequest  node中的http模块 postMan 摆脱了浏览器的限制，只要服务端客户端约定好，参数放在哪里是不受限制的


get的参数用来组成 url的一部分

从协议本身来看，并没有限制get传递参数不能放到 body
POST 传递参数也可以 放到querystring（问y号后面那一串）

一个 url 由哪些部分组成

- 语义不一样，GET,POST
- GET 资源可以缓存，POST一般不能缓存
- GET url长度有限（浏览器限制），post req body 不限制
- GET和post其实都是不安全的，http明文传输， https更安全的加密的

