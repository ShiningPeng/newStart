## SPA
vue/react -> webpack -> html/css/js

html -> <div id="root"></div>
等 js 把所有的 内容渲染到 root 里面去
用户不能第一时间看到有价值的内容(白屏时间长)

## SSR
vue/react -> webpack -> 后端(node)
用户 第一次访问 html <div id="root">你网页的内容</div>

## 同构组件（即在服务端运行，又在客户端运行）
1. 服务端 bundle.js 是一个node项目
2. 客户端 index.js 就是一个静态资源
3. node 服务 让react组件通过reactDOM暴露出来的renderToString这个api渲染成html字符串
4. node 返回的东西就是带有 内容的字符串（缩短首屏白屏时间）
5. node 返回html 结构，也把客户端的 index.js 返回给浏览器，让react组件在客户端也会渲染一次，绑定事件

## MPA
