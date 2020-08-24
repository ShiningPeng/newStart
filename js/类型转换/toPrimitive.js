// 只用在对象上，将对象转换为基本数据类型，一般用在比较时进行的隐式类型转换

let obj = {
  toString() {
    return 'str';
  },
  valueOf() {
    return 0;
  },
  [Symbol.toPrimitive]: (hint) => {
    console.log('----', hint);
    if (hint === 'string') {

      return 'hahdh';
    } else {
      return 0;
    }
  }
}
// 在有valueOf或者toString的情况下，es6的Symbol.toPrimitive的优先级更高
console.log(String(obj))
console.log(Number(obj))