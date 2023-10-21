// 使用Symbol.hasInstance和instanceof操作符进行类型检查
let uint8 = {
  [Symbol.hasInstance](x) {
    return Number.isInteger(x) && x >= 0 && x <= 255;
  }
}

console.log(Math.PI instanceof uint8); // false, PI不是整数
console.log(-1 instanceof uint8) // false
console.log(128 instanceof uint8); // true
console.log(256 instanceof uint8); // false
