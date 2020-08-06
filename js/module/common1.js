console.log('1开始')
var done = false;
module.exports.done = done;
setTimeout(() => {
    done = true;
}, 3000);
let a = {
    na: 12,
    li: 'ddd'
}
module.exports.a = a;
setTimeout(() => {
    a.na = 111111111111111111
}, 2000);