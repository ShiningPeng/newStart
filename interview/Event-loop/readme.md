1. settimeout
2. promise
3. 发送请求
4. addeventlistener
5. 页面dom操作


- 浏览器内部有很多线程
1. 定时器触发线程
2. http
3. GUI线程（渲染页面）

- IntersectionObeserver(判断是否进入视窗api)可用于图片懒加载

**Event-loop**：浏览器用来协调用户交互（事件交互），渲染，网络等任务采取的一个策略


```js
settimeout(()=> {
    console.log(1)
},0)
Promise.resolve(2).then(console.log)
console.log(3)
//3 2 1
```

#### 宏任务、任务
settimeout,整体的一段script标签中的代码
由宿主环境引起的任务



#### 微任务
promise.then  MutationObeserver   process.nextTick
由js本身引起的任务

## 流程：
- 只要宏任务队列不为空：
    1. 从宏任务队列中取出**一个**执行(等这个宏任务及所有微任务执行完，才会执行下一个宏任务)
    2. 从微任务队列中取出**所有的**微任务执行
    （如果在执行过程中又产生了微任务，再次重复第2步）
    3. 有可能进入浏览器的更新渲染阶段
        1. requestAnimationframe 的回调
        2. 执行 IntersectionObeserver 回调
        3. 重新绘制渲染

以60fps 来看，每一帧花费 16.666ms
渲染过程是
    一个宏任务 -》 清空微任务 -》 渲染 -》一个宏任务 -》清空微任务 -》渲染
也就是说渲染是在夹在在两个宏任务之间，
如果两个宏任务之间间隔<16.666ms，则不渲染
如果两个宏任务之间间隔>16.666ms则进行渲染


    