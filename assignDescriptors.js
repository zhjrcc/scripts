// 写一个assign的变种函数，需求是不仅仅复制值，也要复制属性特性
Object.defineProperty(Object, "assignDescriptors", {
  writable: true,
  configurable: true,
  enumerable: false,
  value: function (target, ...sources) {
    for (let source of sources) {
      let names = Object.getOwnPropertyNames(source);
      for (let name of names) {
        let desc = Object.getOwnPropertyDescriptor(source, name);
        Object.defineProperty(target, name, desc);
      }
      let symbols = Object.getOwnPropertySymbols(source);
      for (let symbol of symbols) {
        let desc = Object.getOwnPropertyDescriptor(source, symbol);
        Object.defineProperty(target, symbol, desc);
      }
    }
    return target;
  },
});

let o = {};
Object.defineProperties(o, {
  a: { value: 1, enumerable: true, writable: true, configurable: true },
  count: {
    get: function () {
      this.a++;
      return this.a;
    },
    enumerable: true,
    configurable: true
  },
});
let o1 = {};
Object.assignDescriptors(o1, o);
let o2 = {};
Object.assign(o2, o)

console.log(o); // {a: 2, count: [Getter]}
console.log(o1); // {a: 1, count: [Getter]}
console.log(o1.count); // 2
console.log(o1.count); // 3
console.log(o2);  // {a: 1, count: 2}
