- 全栈项目
    一分为二思想
    前后端分离
    ui与redux分离
    城市数据
    - cityData  null
        action-type
    - action setCityData
    - 是否显示城市 isCitySelectorVisible
        ACTION_SET_IS_CITY_SELECTOR_VISIBLE
        isLoadingCityData 
        ACTION_SET_IS_LOADING_CITY_DATA

    - 后端api设计思路
        1. mongodb/mysql 写真后端
            mockerAPI 解决了跨域问题
        2. 模块化输出API配置
        3. require json  Mocker.mock random 配置
    - api -> action -> reducer -> connect -> 组件

    - 数据请求都放在actions之中
        异步的actions中， dispatch 多个action