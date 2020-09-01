import express from 'express';
import path from 'path';
import React from 'react';
import {renderRoutes } from 'react-router-config'
import route from '../route'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server';
// clint ReactDOm.render( ,root)
// server renderToString
import Header from '../common/Header/Header.jsx';
// import { renderRoutes } from 'react-router-config';
// <Header />
const app = express();
// 把public映射成 静态资源的目录
app.use(express.static('public'))

app.get('*', (req, res) => {
  // const root = <Header />
  const root = (
    <StaticRouter location={req.url}>
      {
        renderRoutes(route)
      }
    </StaticRouter>
  )
  // 把 vnode -> html string
  // 有事件 addEventListener (浏览器专用的 api)
  const htmlStr = renderToString(root);
  // console.log(htmlStr);
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${htmlStr}</div>
    <script src="/index.js"></script>
  </body>
  </html>
  `)
})
app.listen(3000, () => {
  console.log('server is running 3000');
})