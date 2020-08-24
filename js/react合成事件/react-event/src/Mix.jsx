import React from 'react'

class Mix extends React.Component {
  
  state = {
    visible: false
  }
  handleToggle = (e) => {
    console.log(1)
    this.setState({
      visible: !this.state.visible
    })
    // 无法阻止
    e.stopPropagation()
    // react会把用react语法写出来的事件如onClick事件都绑定在document上面
    //所有事件统一采用的事件监听 都是 document.addEventListener 
    // 事件监听器 内部维护了元素和事件处理函数的关系
    // e.stopPropagation()也是react自身实现的 阻止冒泡，
    // 仅限于都用 react 的事件才生效
    // 合成事件：是react的一套事件系统
  }
  componentDidMount(){
    document.addEventListener('click',()=>{
    console.log(2)
      this.setState({
        visible:false
      })
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>toggle</button>
        <div style={{ display: this.state.visible ? 'block' : 'none' }}>
          内容
        </div>
      </div>
    );
  }
}

export default Mix;