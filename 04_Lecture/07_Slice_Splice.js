let arr = [1,2,3,4,5,6,7,8,9];

// Slice (does not modify original)
let sliced = arr.slice(2,5);
console.log("Original:", arr);
console.log("Sliced:", sliced);

// Splice (modifies original)
let spliced = arr.splice(2,3);
console.log("After Splice:", arr);
console.log("Removed Items:", spliced);

// What this code demonstrates:

// slice creates copy
// splice changes original array