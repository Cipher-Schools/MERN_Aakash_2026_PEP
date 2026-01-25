// Primitive types
let num = 42;
let str = "Hello";
let isLoggedIn = false;
let emptyValue = null;
let notAssigned;
let bigIntValue = 12345678901234567890n;
let uniqueId = Symbol("id");

console.log(typeof num);         // number
console.log(typeof str);         // string
console.log(typeof isLoggedIn);  // boolean
console.log(typeof emptyValue);  // object (historical bug)
console.log(typeof notAssigned); // undefined
console.log(typeof bigIntValue); // bigint
console.log(typeof uniqueId);    // symbol

// Non-primitive types
let user = { name: "Aniket", age: 18 };
let numbers = [10, 20, 30];

console.log(typeof user);    // object
console.log(typeof numbers); // object

// What this code demonstrates:

// All primitive data types
// Objects and arrays as reference types