# Part 1 :

- Join whatsapp Group who have not Join it.
- Fill the Google Forms 1 and 2

# Part 2 :

- Logical Operators ( ?? (Nullish Coalescing) )
    ```js
    Operator	Description
    &&	        logical and
    ||	        logical or
    !	        logical not
    ```

    ```
        let count = 0;
        let total = count || 10;
        console.log(total);
    ```
    ```
        let count = 0;
        let total = count ?? 10;
        console.log(total);
    ```

    values :
    - 0
    - ""
    - false
    - NaN
    - null
    - undefined

- Control Flow in JavaScript
    - Conditional statements (if/else)
    - Loops
        - for, while, do while
        - break, continue, return

- Revise Primitive Data Types VS Non Premitive data Types
    - Core data structures to store values
    - Wrapeer upon Primitives
    - Store By value
    - Store By reference
    - Immutable
    - Mutable

- Primitive Data Types
    - Symbol
        - Symbol with object KEYS
        - Symbol for Uniqueness

    - Numbers
        - Numbers with 'new' keyword
        - Truthyness in this case
        - Prototype methods
        - toString(), toFixed(_), toPrecision(_), toLocalString(), toLocalString(_)
        - round(), floor(), ceil()

    - Strings
        - String Interpolation `${}`
        - String properties and methods : length, touppercase(), to lowercase(), join(), split('')
        - charAt(), indexof(), subString()
        - trim(), replace(_, _), includes()
        - slice(), splice()

- Non Premitive data Types

    - Array
        ```
        0. The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name.
        
        1. JavaScript arrays are resizable and can contain a mix of different data types.
        
        2. JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
        
        3. JavaScript array-copy operations create shallow copies.
        ```
        
        - push(_), pop(), unshift(_), shift()
        - includes(_), indexof(_), 
        - join(_) => String
        - Slice(_, _), Splice(_, _)
        - Merge Two Arrays => push(), concat(_), ... 
        - Flat an array => flat(_) 
        - Convert into an Array => Array.from(_)
            - from string to array
            - from objects to array

    - Objects
        - Create Objects => {......},
            - Constructor Method
            ```
                new Object()
                Object.Create(Parent Object)
            ```

        - Access Object elements => Using ( . ), using []
        - Get Object keys and values and entries
        - Object.freeze(_)
        - Use of Symbols in object keys
        
        - Nested Objects
        - Merge Objects => {obj1, obj2}
            - Object.assign({}, _, _)
            - ...
        - hasownProperty()
        - Optional Channing ( ? )

    - Functions

# Part 3 :

- Functions
    - What is Functions? => DRY
    - Function declaration/definition, function calling and expressions (using Function keyword & using variable),
    - Default Parameters in functions
    - ...
    - Pass Objects and Array as function arguments
    
    - Global, Function and Block Scope => {}
        - Nested if/else
        - Nested Functions
        - Scope level diffrence among let, var and const
    - Function Expression => Using variables
        - Call functions before declaration
        <!-- - Hoisting level Diffrence -->
    
    - Functions can also be the Object key's values
        - "This" used in Objects When Object Keys values are functions
            - This refer to current context
            - Showcase with Object created with Constructor method 

    ```js
    Why 'this' Works
    - Inside object methods, this dynamically binds to the calling object (for ex user) to calling method in execution context.
    ```

    - This behaviour in Object key's function
    - This behaviour in Node env
    - This behaviour in browser env
    - This behaviour in normal function
        ```js
        function sayHello(){
            let username = "aniket"
            console.log(this.username) // undefined
        }

        or
        
        const sayHello = function (){
            let username = "aniket"
            console.log(this.username) // undefined
        }
        ```

    - Arrow functions
        ```js
        const sayHello = () => {
            let username = "aniket"
            console.log(this.username) // undefined
        }
        ```
        - **JavaScript arrow functions (or fat arrow functions) are a concise syntax introduced in ES6 for writing function expressions. They offer a shorter way to write functions and have key differences in behavior from regular functions, primarily concerning the binding of the this keyword.**

        - Implicit Return
        - Explicit Return
        - Returning an Object Literal Implicitly

    - Regular VS Arrow functions
        <!-- - This level diffrence -->
        <!-- Hoisting Level Diffrence -->

    - IIFE Functions : Immediately Invoked Function Expression : ()();
        - Parameter in IIFE

    - Play with Functions
        - Calculator Logic
        - Write functions for BMI calculator, name greeting.
        - write a function which greet user when loggedin.
        - Create a function for a store so Shopkeeper can add the prices of n number of items. 
        - Write a function which return an array of keys and values of given object.
        - Write a function which reverse the given array.
    
    - Pass a function as a argument to another function ( *************** ).

    - Higher-order function

- Execution Context in JavaScript

- Create student database array
    - Roll_No., Name, Age, Cource

- Iterative Objects Loops
    - map(), filter()
    - forEach(), for in, for of


- Practice
    - write a function that take objects as parameters.
    - Sum Array Elements
    - Count Frequency of a element in array
    - Reverse an array

# Part 4 :

- DOM Manipulation (Selection & Modification)
    - What is DOM?
    - getElementById, getElementByClass
    - querySelector
    - What  is the difference between innerHTML and innerText?
    - changing content/styles dynamically
    - createElement
    - Edit and Remove
    - Practice
        - Change content and colors of yours DOM elements
        - Add a Parent div having 4 children, Implement Flex Properties
        - Add a Parent div having 4 children, Implement Grid Properties

# Explore in deep
- Math in javascript
- Deep copy and Shallow Copy
- Array.of()
- Optional Channing ( ? )
- reduce()