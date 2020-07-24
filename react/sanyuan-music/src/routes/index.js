
import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
// import Recommend from '../application/Recommend/';
// import Singers from '../application/Singers/';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';
// 路由懒加载
const RecommendComponent = lazy(() => import("../application/Recommend"))
const SingersComponent = lazy(() => import("../application/Singers"))

const SuspenseComponent = Component => props => {
  // 延时加载组件
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
    )
}
// 路由的本质是什么？
// 路由级别的页面
// 二级路由 
// /path Component 放在相应的地方<Route />
// 嵌套


export default [{
  component: BlankLayout,
  routes: [
    {
      path: "/",
      component: HomeLayout,
      routes: [
        {
          path: '/',
          exact: true,
          render: () => <Redirect to={"/recommend"} />
        },
        {
          path: '/recommend',
          component: SuspenseComponent(RecommendComponent)
        },
        {
          path: '/singers',
          component: SuspenseComponent(SingersComponent),
          key:'singers'
        },
        // {
        //   path: '/rank',
        //   component: RankComponent
        // },
      ]
    }
  ]
}]
