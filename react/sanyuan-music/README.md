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