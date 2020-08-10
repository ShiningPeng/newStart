function printoutResult(str) {
    let arr = str.split('')
    let left = [], right = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === '(') {
            left.push(i)
        } else if (arr[i] === ')') {
            right.push(i)
        } else if (arr[i] === '<') {
            arrow.push(i)
        }
    }
    arr.splice(left[0], right[right.length - 1] - left[0] + 1)
    let stack = []
    for (let char of arr) {
        if (char === '<') {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    let res = stack.join("")
    return res
}
console.log(printoutResult('Corona(Tr(u)(m)p)U<SA<<<Virus'))