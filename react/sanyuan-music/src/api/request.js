import { axiosInstance } from './config';
import { useEffect } from 'react';





// 项目所有请求API的列表文件
// 每个请求一个函数
// 每个函数都是返回一个promise

// api 与 actions 的分离点
// api使用的是 axiosInstance.get 或post  返回的是promise

// 首页广告
export const getBannersRequest = () => {
  return axiosInstance.get("/banner");
}

// 推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

// 歌手列表，支持分页
// 接口请求规范 要传offset
// reducer   init = {singList:[],offset:0}
// useEffect dispatch  getHotSingerList  异步的
// -> getHotSingerListRequest API 请求
// then
//   changeSingerList []  [...oldSingerList,...data]  同步
//   changeOffset 0  data.length  同步

// better-scroll  baseUI scroll/index.js 支持上拉触底加载更多


// 下拉刷新的时候的过程：
//   onPullDown  offset:0 changeOffset:0
//   getHotSingerList -> getHotSingerListRequest API ->
//   changeSingerList


export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};


// history.pushState()  Link  id通过路由传参传递
export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`)
}



// 前后端合作的要素有哪些？
//  1.  接口地址
    // url /top/artists  请求  RESTFUL 资源的暴露
    // 2. 传参
    // 3. 接口文档（后端给）