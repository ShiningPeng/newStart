## cookie
- name
- value
- Domain:cookie生效的域名  
  - 子域能访问主域的cookie
  - 如map.baidu.com 可以访问 baidu.com的cookie
- Path:生效的路径
  - /a/b /c /  如果cookie设置在根路径，那么此站点下所有路径都可以访问
- Expires:过期时间，如果不设置，默认就是当前会话之后失效
- HttpOnly :cookie只在http传输，js无法操作（cookie可以由后端的set-cookie响应头设置，也可以由前端js的document.cookie='' 来设置）
- Secure: 只在https 环境下面生效
- SameSite: lax（宽松模式：某些域发出请求也会携带cookie） | strict（cookie只在**同域**生效） | none（任何域发出请求都会携带cookie）
- **cookie 只要符合 domain + path 的生效范围， 就会随着http请求自动发送**，易受到CSRF（跨站请求伪造）攻击
- 防止CSRF（跨站请求伪造）攻击：
  1. 设置samesite为strict
  2. csrf_token：用户登录之后，服务端会给你一个token，前端存储起来，之后的每次请求都要携带这个token，这样对于 其他域来说是没有这个token的，请求发出没有token
  3. 浏览器会给每一个请求添加一个reffer字段，表明这个请求的来源，服务端可以检测来源
