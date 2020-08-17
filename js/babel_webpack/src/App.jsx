import React from 'react'
import style from './style.css'
// 通过这样的方式引入图片
// import img from './xxx.png'
// 需要安装file-loader
// 并且需要在webpack.config.js中配置module,rules下新建一个test
// {
//   test:/(.jpg|.png)$/,
//   use:['file-loader']
// }


export default function App(){
  return(
    // 放到服务器上时，地址
    //  http://baidu.com/a/b/index.html
    //  ./url.jpg => http://baidu.com/a/b/   与目标的文件地址不符合
    //   /url.jpg => http://baidu.com/
    <div 
    // className="swiper-container"
    className={style['swiper-container']}
    >
      <img src="/url.jpg" alt=""/>
      <h1>This is App</h1>
    </div>
  )
}