let obj = {
  age: 10,
  name: 'zhjrcc',
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.name
    } else if (hint === 'number') {
      return this.age
    }
    return true;
  }
}
let number = 20;
let string = 'my name is:';

console.log(number + +obj)
console.log(`${string}${obj}`)
