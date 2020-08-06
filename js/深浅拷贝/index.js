// JSON.parse(JSON.stringify()) 为什么不能拷贝函数
// json专有的语法


// Object.assign() 浅拷贝，合并
let a = {a:1}
let b = {b:1}
Object.assign({},a,b) //相当于解构

let map = new Map()

function deepClone(obj) {
    let t = {}
    if(map.get(obj)) return map.get(obj)
    map.set(obj, t)
    Object.keys(obj).forEach(k => {
        if(typeof obj[k] === 'object') {
            t[k] = deepClone(obj[k])
        }else {
            t[k] =obj[k]
        }
    })
    return t
}

let obj = {a:1,b:{b:2}}
let obj1 = deepClone(obj)
obj.b.b = 111111111111
console.log(obj,obj1)

let obj2 = {}
let obj3 = {}
obj.t=obj
console.log(obj)
