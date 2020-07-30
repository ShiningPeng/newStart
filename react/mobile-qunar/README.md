1. css reset
    normalize.css
    index.css css 移动业务的设置

2. 无状态组件的创建流程刻意练习
    - 组件插入父级组件中，思考好props
    - 组件的类型如果是无状态组件
        prop-types css propType
        形参props
        return
    - props 解构出来要的prop
    - 功能函数建议由父组件来打理
        纯粹的负责 Render
        函数可以复用

3. 年轻的react hooks 全新开发模式
    class components -> function
    函数式编程
    class + constructor + 生命周期 + render -> function + react hooks函数
    - useCallback 缓存一个函数
    - useMemo

4. 状态组件编写顺序
    - 数据 provider store

5. redux
    - 简单的redux项目结构
        store.js createStore reducers
            中间件 axios redux-thunk redux支持异步
        reducers.js combineReducers
        actions.js 数据请求，状态改变的触发都由actions来负责
            ActionTypes 可读性
    - redux API -> 设计状态(reducer + action)
        初始值 from to 两个reducer函数
        函数 初始值 action return 初始值
        状态会怎么变 SET 动作的声明 SET_FROM
        - switch case
        - {type,payload} action
        - actionTypes 可读性
        - actions 写出来
    - reducer 

    - 数据组件化
        1. connect 高阶返回原组件
            connect({
                mapState,
                mapDispatch
            })(Component)
        2. 创建组件
        3. 状态组件，无状态组件重用方法

    - reducer
        1. action 标准做法
        - 返回 { type: , payload } 更新reducer
        状态
        - 组件里的事件、生命周期等功能 主要是和数据 状态 打交道， 归为 Action 来做
        所有的action export function
        在组件里引入需要的action
        - bindActionCreators
        action变成本地调用的函数
            dispatch
        - useMemo 缓存函数
        - connect 中去第二个参数返回 action


    1. action
        from 北京
        to 南昌
        两个action


- from to 的复盘
    1. redux 哲学，编程思想
    reducers纯函数 返回 状态及接受状态的更新
    那一刻只有一个状态与之对应， switch case
    - actin actionTypes
        是更新reducer的使者， dispatch action
    from to都 有独立的reducer函数和action