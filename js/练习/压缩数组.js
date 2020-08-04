
function zip() {
    // todo
    let args = [...arguments];
    let len = args.length;
    let arr1 = [], arr2 = [];
    for (let j = 0; j < args[i].length; j++) {
    for (let i = 0; i < len; i++) {
            arr1.push(args[i][j])
        }
    }
    return arr1;
}
console.log(zip(['fred', 'barney'], [30, 40], [true, false], [1, 'sfjsofo'], ['dddd', 144]));
  // => [['fred', 30, true], ['barney', 40, false]]




