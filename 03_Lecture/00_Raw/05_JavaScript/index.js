// let, var and Const
// Redeclaration and Reassignment

// Run this in Node.js after installation

// var (function scoped, older way)
var name = "Aniket";
console.log(name);

// let (block scoped, recommended)
let age = 22;
age = 23;
console.log(age);

// const (cannot be reassigned)
const country = "India";
console.log(country);

// Demonstrating scope
if (true) {
    var a = 10;   // accessible outside
    let b = 20;   // not accessible outside
}

console.log(a);
// console.log(b); // This would cause an error

