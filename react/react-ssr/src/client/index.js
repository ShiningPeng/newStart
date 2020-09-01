import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/Header/Header';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import route from '../route'

function App() {
  return (
    <BrowserRouter>
      {renderRoutes(route)}
    </BrowserRouter>
  )
}

//root节点下面已经有东西
// 客户端不需要再构造 dom节点，只需要服务端完成不了的事件绑定
ReactDOM.hydrate(<App />, document.getElementById('root'))