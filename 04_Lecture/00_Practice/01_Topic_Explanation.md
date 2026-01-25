## Topic: Why Programming Languages & JavaScript Nature

Programming languages allow humans to give instructions to computers in a structured way. Computers understand only machine code, so languages act as an interface between human logic and machine execution.

JavaScript is an interpreted, high-level, dynamic language mainly used for web development. It runs directly in browsers and also on servers using Node.js. Unlike compiled languages like C++, JavaScript does not require a manual compilation step before running.

JavaScript is dynamically typed, meaning variables can change their data type during execution. It is also single-threaded, meaning it executes one task at a time, but it uses an event loop to handle asynchronous operations like timers and API calls.

**Key Points**

* JS runs in browser and server
* Interpreted and dynamic
* Single-threaded but asynchronous

---

## Topic: var, let, const

These are keywords used to declare variables.

`var` is the old way. It allows re-declaration and has function scope, which can cause unexpected bugs.

`let` and `const` were introduced in ES6. Both are block-scoped (limited to `{}` block).
`let` allows reassignment, `const` does not.

**Key Points**

* Use `let` when value changes
* Use `const` by default
* Avoid `var` in modern JS

---

## Topic: ECMAScript

ECMAScript is the official standard that defines how JavaScript should work. JavaScript follows ECMAScript specifications. ES6 (2015) introduced major features like let, const, arrow functions, and classes.

---

## Topic: Primitive vs Non-Primitive Data Types

Primitive types store single values and are immutable. Non-primitive types (objects and arrays) store collections and are mutable.

Primitive values are stored directly in memory, while objects are stored by reference.

---

## Topic: JavaScript Memory Model

Primitive values are copied when assigned to new variables. Objects share references, meaning changes affect all references.

---

## Topic: Type Conversion

JavaScript automatically converts types during operations (implicit coercion), which can cause confusion. Explicit conversion is safer and clearer.

---

## Topic: Operators

Operators perform operations on values. `==` compares values after conversion; `===` compares value and type.

---

## Topic: Slice vs Splice

Slice returns a shallow copy and does not modify the array. Splice modifies the array by adding/removing elements.