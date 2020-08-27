var obj = {
  a: 1,
  b: 2,
  [Symbol.iterator]: () => {
    let i = 0;
    return {
      next: () => {
        i++;
        return ({
          value: 1,
          done: i >= 2
        })
      }
    }
  }
}

// for (let item of obj) {
//   console.log(item);
// }

let arr = [1, 5, 8, 6, 3, 4]
// for(let a in arr){
//   console.log(arr[a]);
// }

let map = new Map([["a", 1], ["b", 2], ["c", 3]]);
for(let entry of map){
    console.log(entry);
}
for(let [key,value] of map){
  console.log(key,value);
}