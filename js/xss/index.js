const Koa = require('koa')
const KoaViews = require('koa-views')
const Router = require('koa-router')
const path = require('path')
const app = new Koa()

app.use(KoaViews(path.resolve(__dirname, './views'), {
  extension: 'ejs'
}))

const router = Router()
// 存储型攻击,直接存在服务端
let dataFromDB = `<iframe src='http://www.baidu.com'></iframe>`
let map = {
  '<': '&lt;',
  '>': '&gt;'
}
function htmlEncode(s) {
  s = s.replace('<', '&lt;').replace('>', '&gt;')
  return s;
}
function jsEncode(s) {
  var t = '';
  for (let char of s) {
    let c = char.charCodeAt(0).toString('16');
    c = '\\x' + c;
    t += c;
    return t;
  }

}
router.get('/', async (ctx) => {
  const { xss } = ctx.query;
  await ctx.render('index', {
    username: 'xiaoming',
    xss: xss ? htmlEncode(xss) : '',
    dataFromDB: htmlEncode(dataFromDB),
    js: jsEncode(`"";alert(11111);`)  // \x16进制
  })
})

app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen(5000, () => {
  console.log('serve is running at 5000')
})