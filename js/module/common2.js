const { done, a } = require('./common1')
console.log(done)
setTimeout(() => {
    console.log(done)
}, 5000);
console.log(a)
setTimeout(() => {
    console.log(a)
}, 3000);


// commonjs中引入导出的变量如果是基本数据类型，则引入之后变量的值便不会随着原来的变量改变
// 如果是引用类型，则变量在引入之后会收到原来的变量的影响，互相影响