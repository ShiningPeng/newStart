// 样式组件
import styled from 'styled-components'

// 专门用来切页面， 不用过于组件化的语法，多用于静态的,兼容性好
export const Top = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
    background:#d44449;
    & > span {
        line-height:40px;
        color: #f1f1f1;
        font-size: 20px;
        &.iconfont {
            font-size: 25px;
        }
    }
`

export const Tab = styled.div`
    height: 44px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    background: #d44439;
    a {
        flex:1;
        padding: 2px 0;
        font-size: 14px;
        color: #e4e4e4;
        /* text-decoration: none; */
        &.selected {
            span {
                border-bottom: 2px solid #f1f1f1;
                padding: 3px 0;
                font-weight: 700;
                color: #f1f1f1;
            }
        }
    }
`

export const TabItem = styled.div`
    height: 100%;
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
`