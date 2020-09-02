// 数据结构由什么组成
// ADT 数据和操作数据的方法

// 栈 FILO first in last out
// 原始数据为 items:any [] 
// 方法：constructor this.items = []
// pop(),push()  
// peek 获取栈顶元素 
// 数量 size
// 是否为空 isEmpty
// 清空stack clear
// 输出 toString

export default class Stack {
  private items: any[];
  constructor() {
    this.items = []
  }
  pop() {
    return this.items.pop()
  }
  push(item: any) {
    this.items.push(item)
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() { 
    return this.items.length === 0
  }
  clear() {
    this.items = [] 
   }
   size():number{
     return this.items.length
   }
   toString(){
     return this.items.toString()
   }
}