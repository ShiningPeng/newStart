function MyPromise(fn) {
  this.value = undefined
  let self = this
  function resolve(value) {
    self.value = value; 
    //self不能换为this，这里需要存构造函数的value属性，
    // 改成this后this指向resolve函数被调用的地方window
    // 导致value为undefined
   }
  function reject() { }
  fn(resolve, reject);
}
MyPromise.prototype.then = function (onFullfilled, onRejected) {
  onFullfilled(this.value)
}
new MyPromise((resolve, reject) => {
  resolve(1)
}).then((res) => {
  console.log(res)
}, () => { })