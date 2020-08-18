import React, { useContext } from 'react'
import { context } from './BrowserRouter'
export default function Link(props) {
  const { update, pathname } = useContext(context)
  const { to, children } = props
  const handleClick = (e) => {
    e.preventDefault()
    // 阻止a标签的跳转并刷新整个页面的默认事件
    window.history.pushState(null, null, to)
    // 整个页面更新
    // 在Context中存一份数据
    update({ pathname: to })
  }
  return (
    <a onClick={handleClick}
      href={to}
    >
      {children}
    </a>
  )
}