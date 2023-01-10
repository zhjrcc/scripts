// empty statement
for(let i = 0 ; i < i.length; a[i++])

// Equivalent to
for(let i = 0 ; i < i.length; i++) {
  a[i]
}

// else if

if(){

} else if() {

} else if() {

}

// Equivalent to

if(){

} else {
  if (){

  } else {
    if() {
      
    }
  }
}

// for is equivalent to while
initialize;
while(test) {
  try {
    statement;
    break;
  } finally {
    increment;
  }
}
for(initialize; test; increment) {
  statement;
  break;
}

// for/of with Object.keys()
let obj = { x: 1, y: 2};
for(let element of Object.keys(obj)) {
  console.log(element); // x, y
}

// Object.create
// to guard against unintended (but nonmalicious) modification of an object by a library function
let obj = { x: 1,};
library.function(Object.create(obj))

// access a property of an object with the [] array notation
let addr = ''
for(let i = 0; i <= 4; i++) {
  addr += customer[`address${i}`] + "\n";
}

// The difference between hasOwnProperty and propertyIsEnumerable
Object.prototype.hasOwnProperty("toString") // => true
Object.prototype.propertyIsEnumerable("toString") // => false: own property but not enumerable

// The difference between in operator and . property access
let o = {x: undefined}
o.x !== undefined; //false,exist but is undefined
"x" in o; //ture,property exist