const EventEmitter = require('events');
// events,node模块，事件触发器
class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.on('price',()=>{
  console.log('价格变化1')
})
myEmitter.on('price',()=>{
  console.log('价格变化2')
})
myEmitter.on('price',()=>{
  console.log('价格变化3')
})
myEmitter.emit('price');
myEmitter.emit('event');
// 打印: 1
myEmitter.emit('event');
