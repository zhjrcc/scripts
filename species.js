class EZArray extends Array {
  // static get [Symbol.species]() {
  //   // 默认返回的是this，也就是创建的每一个实例都是当前的子类，而不是父类
  //   // return this;
  //   // 更改为返回父类Array，则使用返回新数组的数组方法会返回父类的实例，而不是当前的子类
  //   return Array;
  // }
  static [Symbol.species] = this;
  get last() {
    return this[this.length-1];
  }
}
let arr = new EZArray(1,2,3);
let arrx2 = arr.map(x => x *= 2);
let last = arrx2.last;
console.log(arr, arrx2, last); // [1,2,3] [2,2,6] undefined
