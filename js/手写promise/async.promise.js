const PENDING = Symbol('PENDING')
const FULFILLED = Symbol('FULFILLED')
const REJECTED = Symbol('REJECTED')
function MyPromise(fn) {
  this.value = undefined
  let self = this
  this.status = PENDING
  this.onFulfilled = () => { }
  function resolve(value) {
    self.value = value;
    self.status = FULFILLED
    self.onFulfilled(value)
  }
  function reject() {

  }
  fn(resolve, reject);
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.status === FULFILLED) { onFulfilled(this.value) }
  else if (this.status === PENDING) {
    this.onFulfilled = onFulfilled  
  } else {
    // reject
    onRejected()
  }

}
new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000);
}).then((res) => {
  console.log(res)
}, () => { })