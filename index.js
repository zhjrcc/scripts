// 将obj密封，并且他的原型也是冻结的。
let obj = Object.seal(Object.create(Object.freeze({x:1})))

