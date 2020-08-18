import React from 'react'


export default function Link(props){
  const {to, children} = props
  const handleClick = (e) => {
    e.preventDefault()
    // 阻止a标签的跳转并刷新整个页面的默认事件
    window.history.pushState(null,null,to)
  }
  return (
    <a onClick={handleClick}
      href={to}
    >
      {children}
    </a>
  )
}