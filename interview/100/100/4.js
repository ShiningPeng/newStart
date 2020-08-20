// 从面向对象聊继承  
// Object.create()
const person = {
  isHuman:false,
  printIntroduction:function(){
    console.log(`my name is ${this.name},Am i human,${this.isHuman}`)
  }
}

// 最简单的继承方案
const zhaoboy = Object.create(person)
// const zhaoboy = Object.create(null)
// 这样做会导致 zhaoboy.__proto__ = undefined，该对象的原型链未定义

zhaoboy.name = '酷吧你我他'
zhaoboy.isHuman = true;
zhaoboy.printIntroduction()
console.log(zhaoboy.__proto__)
console.log(zhaoboy.__proto__ === Object.prototype)










// Object.setPrototypeOf()