- router
    1. react-router
       react-router-dom
       react-router-config

    2. react-router 是一个嵌套的结构
    config 中的 routes配置一下

        当路由比较复杂时，传统的手写 router/route 配置难以维护，
        企业级的router 配置方案 react-router-config
        layout app中总有几套皮肤，tabbar，导航栏可以通过layout搭配，匹配那个级别的所有路由
        routes 由 react-router-config 里的 renderRoutes(route.routes)

- search 业务
    接口文档
    - 热门搜索
      url  /search/hot
      参数 null 
      返回值 result.hot
    - 搜索建议
        url /suggest?keyword=    前端的编码，通过decodeURI()  这个api来解码
        参数 keyword
        返回值 result.albums
    - 搜索结果
        url /search?keyword=
        参数 keyword
        返回值 songs