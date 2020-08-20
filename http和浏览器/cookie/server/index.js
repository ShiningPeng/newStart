const http = require('http')
const fs = require('fs')
let sessiontable = [{
  username: 'limisd',
  userid: 1001,
  login: true,
  expires: '2021',
  id: 01
}]

let count = 10000
// 用户登录状态的保持
// 1第一次登录之后，后端写入一个cookie，username=liming
// cookie:sessionId:01
// 2 cookie每次都随着http请求自动发送
// 3 每次后端 取出 cookie信息进行判断，if(login){登录状态有效}
http.createServer((req, res) => {
    function isLogin() {
      if (req.headers['cookie']) {
        let cookie = req.headers['cookie'];
        // let [name, sessionId] = cookie.split('=');
        let cookies = cookie.split(';');
        let sessionCookie = cookies.find(cookie => cookie.includes('session'));
        let [name, sessionId] = sessionCookie.split('=');
        if (sessiontable.find((item) => {
          return item.id === Number(sessionId);
        })) {
          return true;
        } else {
          return false;
        }
      } else {return false;}
  
  }
  console.log(req.url)
  if (req.url.includes('/transfer')) {
    if(!isLogin()){
      res.end('not auth')
    }
    count -= 100;
    res.end('ok')
  } else if (req.url === '/count') {
    res.end(count + '')
  } else if (req.url === '/islogin') {
    if(isLogin()){
      res.end('login')
    }else{
      res.end('not login')
    }
  }
  else {
    const html = fs.readFileSync('./index.html', 'utf-8')
    res.setHeader('set-cookie', 'sessionid=1')
    res.end(html)
  }
})
  .listen(9090, () => {
    console.log('serve is running at 9090')
  })