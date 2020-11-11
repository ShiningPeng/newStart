let a = [1, 2, [3, [4, [5]]]];
// [1,2,3,4,5]
// a.push(a)
function flat(a) {
  let res = [];
  function traversal(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
        traversal(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  }
  traversal(a);
  return res;
}

// 拍平环
let map = new Map();
function flat1(a) {
  let res = [];
  if (map.get(a)) return map.get(a);
  map.set(a, res);
  for (let i = 0, len = a.length; i < len; i++) {
    if (Object.prototype.toString.call(a[i]) === "[object Array]") {
      res.push(...flat1(a[i]));
      // res = res.concat(flat1(a[i]))
    } else {
      res.push(a[i]);
    }
  }
  return res;
}

console.log(flat1(a));
