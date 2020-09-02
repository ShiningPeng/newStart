import Stack from './lib/stack'

const stack = new Stack()


stack.push('first')
stack.push('second')
stack.push('thrid')
stack.pop()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.toString())
stack.clear()