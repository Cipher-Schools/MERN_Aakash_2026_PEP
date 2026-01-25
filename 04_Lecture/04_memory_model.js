// Primitive copy (stored by value)
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20

// Reference copy (stored by reference)
let obj1 = { name: "Aniket" };
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul (changed)
console.log(obj2.name); // Rahul

// What this code demonstrates:

// Primitive values are copied
// Objects share reference in memory