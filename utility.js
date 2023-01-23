// 解构赋值：将实参解构为单个形参
const vectorAdd = ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2];
const result = vectorAdd([1, 2], [3, 4]);
console.log(result); // [4, 6]
