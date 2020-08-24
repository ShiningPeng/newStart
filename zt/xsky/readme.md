- 面试题考察什么
- 牛客网
- 复盘时间 > 面试准备时间


1. css属性名和值不区分大小写
    - id classname querySelector 敏感
    刷题

2. 盒子模型
      - margin
      - 行内元素
      - 当我们使用内外边距，只有左右方向有效
      - 设置四个方向的内边距时，对于行内元素，确实显示效果，但是竖直方向的内边距只有效果，对其他元素没有影响，
      - 竖直方向 **外边距**没有效果

3. 自适应
 - rem 一切可依 等比例关系 px2rem插件
 蓝湖的用法 设计稿为750px
 手机多变，html元素设置font-size 根据宽度变化，10rem
 - media query
 - vw vh 
    - 一切皆是100份，100vw 100vh
    px -> vw 工具
 - 百分比
 - calc()函数
 - flexible.js老了
 - vm方案如何做适配
 - postcss
 - 适配 vue/react + vw 实现
    js babel
    工作流 webpack
    webpack css .styl .scss -> css-loader stylus-loader stylus css编译
    postcss 全新的css库， 平台 插件系统
    babel-core autoprefixer
    box-shadow
    -webkit-box-shadow
    cssnext css的variable
    1. 移动适配
      vw
    2. postcss
      vue 内置postcss
      .postcssrc.js
      px-to-vw
      post-px-to-viewport