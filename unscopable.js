let obj = {
  fullname: 'zhjrcc',
  age: 20,
  language: 'javascript'
}
obj[Symbol.unscopables] = {
  language: true,
  //language: false,
}
with (obj) {
  // ReferenceError: language is not defined
  console.log(fullname, age, language)
}
