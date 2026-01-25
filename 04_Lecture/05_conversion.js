// Explicit Conversion
let num = 50;
let strNum = String(num);
console.log(strNum, typeof strNum);

let input = "123";
let converted = Number(input);
console.log(converted, typeof converted);

// Implicit Conversion
console.log("5" + 2);   // "52"
console.log("5" - 2);   // 3
console.log(true + 1);  // 2
console.log(null + 1);  // 1
console.log(undefined + 1); // NaN

// What this code demonstrates:

// Manual conversion using constructors
// Automatic coercion behavior