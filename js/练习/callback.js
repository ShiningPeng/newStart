function FileComponent(path, cb) {
    // todo
    setTimeout(() => {
        cb('读取完毕')
    }, 3000);
  }
  
  FileComponent('index.js', (file) => {
    // console.log(file)
    // 3s 之后 输出 “读取完毕”
  })


//   在Array原型链上添加方法
//   Array.prototype.myForeach = function(cb) {
//     for(let i = 0;i<this.length;i++){
//         cb(this[i],i)
//     }
    
//   }
//   let arr = [1,2,3]
//   arr.myForeach((item,i) => {
//     console.log(item);
//   })



 

//   456
//123
  