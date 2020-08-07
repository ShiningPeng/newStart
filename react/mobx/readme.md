 - class setState  -> 父子组件props props调用  --》 Context  -》 redux useReducer
 -》 mobx (从connect中得到灵感) 装饰者模式

 1. 当数据流动层次超过两层，简单的useState传递起来太麻烦，而redux useReducer太重了，如果action可以忽略，就可以使用useContext, useState React.createContext结合 数据模板+实际操作
 useContext中就可以使用到状态state
 2. reducer函数是灵魂
    redux 企业级的数据状态安全流程及架构
    - state 读可以，但不能轻易写
    - state 写操作要通过 dispatch(action) -> reducer (return newState) -> 旧状态切换为新状态
    - reducer 一个旧状态通过同样的type，和payload ，新状态一定是一样的 