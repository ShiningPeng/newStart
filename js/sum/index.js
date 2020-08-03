function sum(num1) {
    return (num2) => {
        return num3 => {
            return num1 + num2 + num3;
        } 
    }
}

console.log(sum(1)(2)(3) === 6)

// curry 柯里化，函数式编程