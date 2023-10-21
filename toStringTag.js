function classOf(obj) {
  return Object.prototype.toString.call(obj).slice(8,-1);
}
class Range {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get [Symbol.toStringTag]() {
    return "Range";
  }
}
class Range1 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
let r = new Range(1, 10)
// r1不具有Symbol.toStringTag属性
let r1 = new Range1(1, 10)
console.log(classOf([])) // Array
console.log(classOf(()=>{})) // Function
console.log(classOf(false)) // Boolean
console.log(classOf('')) // String
console.log(classOf(1)) // Number
console.log(classOf(Symbol('sym'))) //Symbol
console.log(classOf(null)) //Null
console.log(classOf(undefined)); // Undefined
console.log(classOf(/./)) //RegExp

console.log(classOf(r)) // Range
console.log(classOf(r1)); // Object
