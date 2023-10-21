// 类数组对象，index，length都要有
let arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
  // true，表示需要把该对象展开
  [Symbol.isConcatSpreadable]: true,
};

let arr = [].concat(arrayLike);
console.log(arr.length); // 3

Object.defineProperty(arrayLike, Symbol.isConcatSpreadable, {
  value: false,
});
arr = [].concat(arrayLike);
console.log(arr.length); // 1

class NonSpreadableArray extends Array {
  [Symbol.isConcatSpreadable] = false;
}
let a = new NonSpreadableArray(1, 2, 3);
console.log([].concat(a).length); // 1
