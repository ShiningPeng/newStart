1. tsx的工作流程
    .tsx React组件  webpack.config.js -> awesome-typescript-loader -> tsconfig.json -> typescript .jsx -> babel(polyfill+preset+plugin ) -> react DOM -> webpack-dev-server html-webpack-plugin footer script bundle.js

2. react-scripts 约定俗成

3. hooks 特色
    - useState
        设置对象时，通过解构...obj
    - useEffect
        
    - useCallback
    - useMemo//取代pureComponent
    - useRef
    - useReducer

4.分析 react 项目是如何运行的
 jsx
 root 
 jsx编译过程
 正则 <(.+)>...</>
  - 判断节点的类型 
    标签节点
    组件节点 （组件return，其中又是标签，通过递归）
    <></> 代理
    文本  递归退出条件