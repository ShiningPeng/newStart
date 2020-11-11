let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

const flat = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flat(val) : val);
  }, []);
};

console.log(flat(arr));

// console.log(arr.flat(Infinity));
