var a = 10;
var a = 20; // Re-declaration allowed
a = 30;     // Re-assignment allowed

let b = 10;
// let b = 20; // Error: Cannot re-declare
b = 25;      // Re-assignment allowed

const c = 50;
// const c = 60; // Error
// c = 70;       // Error: Cannot reassign

// Scope example
{
    var x = 100;
    let y = 200;
    const z = 300;
}

console.log(x); // Works
// console.log(y); // Error
// console.log(z); // Error

for(var i = 0; i < 5; i++){
    //do something
}
console.log("i : ", i); // will work

for(let j = 0; j < 5; j++){
    //do something
}
console.log("j : ", j); // Error


// What this code demonstrates:

// Re-declaration vs reassignment
// block scope
// Why let/const are preferred
