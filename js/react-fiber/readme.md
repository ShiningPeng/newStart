- JSX ->(babel) -> createElement -> 虚拟DOM（react element） -> 对应平台的渲染器 reactDOM/reactNative 渲染

- setState -> 生成另外一棵虚拟DOM -> dom diff(reconcilers) -> 找出哪些地方需要更新 -> 应用更新，看到新页面


## stack reconciler

## fiber reconciler
react16之前DOM diff 是一个递归的过程：遍历虚拟DOM上所有的节点，这个如果js执行时间是很长的，而且js需要计算和页面渲染绘制，这是互斥的

- 浏览器的一次 event-loop即一帧需要做的
- task
- microtask
- requestAnimationFrame
- render
- requestIdleCallback 当这一帧有空闲时间时会执行

之前js占据主动权，js想执行多久就执行多久
现在js做出让步，把js放在 requestIdleCallback 里面，js 和浏览器 统一站在用户体验的角度
合作调度（cooperative schedule）


协程\纤程
- 能够把可中断的任务切片处理。
- 能够调整优先级，重置并复用任务。


### fiber是一个数据结构
这个数据结构支持我们写出 可中止暂停重新启动的代码

```js
fiber:{
  child:指向第一个子节点
  sibling:下一个兄弟
  return: 父节点
}
// 
```
fiber：以单链表的形式表达一棵树


generate  yield



## 生命周期

- Render阶段：计算出哪些元素需要更新 
- Commit阶段：之前Render 阶段已经花费了很多时间，为了让用户尽快的看到页面，所以这个阶段会一气呵成，更新页面