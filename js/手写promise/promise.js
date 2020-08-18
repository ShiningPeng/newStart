new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000);
}).then((r) => {
  console.log(r)
  // 决议：根据不同的返回值做不同的操作
  // 可以return 7中基本数据类型和promise
  // 以及具有then 属性的对象
  return {
    then:(resolve,reject)=> {
      resolve(123)
    }
  }
}).then(r => {
  console.log(r)
})