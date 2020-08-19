import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// type originConsole = (...args: any[]) => void
// let originConsole: originConsole = console.log
// console.log = (...args: any[]) => {
//   // alert('called')
//   originConsole.apply(window.console, args)
// }
// console.log(111)

// 监听数组的push
// let arr = [1,2,3]

// let myPush= Array.prototype.push;
// Array.prototype.push = function(...items:any[]){
//   console.log('pushed',items);
//   return myPush.apply(this,items)
// }
// arr.push(4)
// console.log(arr)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
