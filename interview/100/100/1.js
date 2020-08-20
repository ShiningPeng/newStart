// 函数即对象
// 首字母大写为构造函数
function Foo() {
  Foo.a = function () {
    console.log(1)
  }
  // new 的过程
  this.a = function () {
    console.log(2)
  }
}
// 原型链
Foo.prototype.a = function () {
  console.log(3)
}
// 属性覆盖
Foo.a = function () {
  console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();


function New(constructor, ...args){
  let obj = {}
  obj.__proto__ = constructor.prototype
  obj.prototype.apply(this)
  return obj
}
let a = New(Object,)
console.log(a)