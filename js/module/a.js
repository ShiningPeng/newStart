// import { add, min, bar } from './math.js'

console.log(bar)

console.log(add(1, 2))

setTimeout(() => {
    console.log(bar)
}, 5000);



// tree-shaking   ,min 没有必要打包合并到项目最终js文件中，因为没有用到