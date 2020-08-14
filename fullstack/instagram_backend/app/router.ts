import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // controller url ->render view
  // 路由列表 nginx(服务器代理 负载均衡)
  // Egg.js 7001

  // 后端路由   /MVC Controller / index.html #root

  // 前端路由 react build js 挂载  SPA 更快  useEffect -> reducer action ->
  // api-> 后台/api/user /api 后端吐数据的地方
  // 登录接口 /api/login
  router.get('/', controller.home.index);
  router.get('/api/login', controller.login.index);
};
