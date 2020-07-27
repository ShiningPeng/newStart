let obj = {
    a: 1,
    toString() {
        return 1;
    },
    valueOf() {
        return 4;
    },
    // 一个复杂类型进行类型转换的时候：
    // 自定义类型转换时转化的类型是什么
    //es6的,在有valueOf或者toString的情况下，es6的Symbol.toPrimitive的优先级更高
    // [Symbol.toPrimitive]: () => {
    //     return 123;
    // }
    // es6之前用 toString 或 valueOf 等函数来实现
}

let res = obj + 1;
console.log(res);//5

// console.log(String(obj)) //1


let arr = [1, 2];
console.log('Object.prototype.toString(arr)', Object.prototype.toString(arr));
// 上面的是Object的toSting
// arr.toString是重写的toString
console.log('arr.toString()', arr.toString());

let num =123;
num.toString()
// 123.toString() //此处 . 会被解析为小数点，所以会出现语法错误
(123).toString()


// js中Number的所有写法