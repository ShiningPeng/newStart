const PENDING = Symbol('PENDING');
const FULFILLED = Symbol('FULFILLED');
const REJECTED = Symbol('REJECTED');
function MyPromise(fn) {
  this.value = undefined
  let self = this;
  this.status = PENDING;
  this.onFulfilled = [];
  function resolve(value) {
    self.value = value;
    self.status = FULFILLED;
    self.onFulfilled.forEach(fn => {
      fn(value);
    })
  }
  function reject() {

  }
  fn(resolve, reject);
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.status === FULFILLED) { onFulfilled(this.value) }
  else if (this.status === PENDING) {
    return new MyPromise((resolve, reject) => {
      this.onFulfilled.push((value) => {
        // then 的回调 需要知道 返回值
        let x = onFulfilled(value);
        // 当这个promise需要 resolve 下一个then才会被调用
        if (x instanceof MyPromise) {
          x.then(resolve, reject)
        }
        // resolve();
      })

    })
    // this.onFulfilled.push(onFulfilled)  
  } else {
    // reject
  }
  // return this
}
new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
}).then((res) => {
  console.log(res);
  return new MyPromise((resolve,reject)=>{
    setTimeout(() => {
      resolve(2)
    }, 3000);
  })
})
  .then((res) => {
    console.log(res);
  })