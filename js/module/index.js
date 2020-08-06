import './a.js'                //es11 动态import

// 安装了rollup，用来打包
// npm i rollup -S
// npx rollup index.js --file dist.js --format cjs

// 循环依赖是不好的设计
// 循环依赖只会引入声明引入的代码之前的导出值
// js:1.没有模块化的是普通的脚本文件
// 2. module 一个模块

