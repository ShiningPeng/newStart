import React from 'react'

class Order extends React.Component {
  childRef = React.createRef()
  parentRef = React.createRef()
  state = {}
  child = (e) => {
    console.log('child')
    e.stopPropagation()
  }
  parent = () => {
    console.log('parent')
  }
  componentDidMount() {
    // document.addEventListener('click',()=>{
    // 哪一个DOM节点 回调该被执行
    // })
    document.addEventListener('click', () => {
      console.log('document')
    })
    this.childRef.current.addEventListener('click', () => {
      console.log('child')
    })
    this.parentRef.current.addEventListener('click', () => {
      console.log('parent')
    })
    const element = (
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    )
    console.log(element)
  }
  render() {
    return (
      <div onClick={this.parent} ref={this.parentRef}>
        <div onClick={this.child} ref={this.childRef}>child</div>
      </div>
    );
  }
}

export default Order;

