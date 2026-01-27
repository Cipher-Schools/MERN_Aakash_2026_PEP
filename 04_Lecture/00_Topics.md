- # JavaScript
    - Core Basics
        - Why Languages
        - Interpreted vs Compile Languages
        - Why JavaScript is better than other languages?
        - Static vs Dynamic Types Languages
        - Single Thread Nature of JavaScript

    - var, let and const
        - Diffrence on the basis of re-declaration & re-assignment
        - Diffrence on the basis of scope ( Block Scope : {} )
    
    - EcmaScript
    
    - Premitive Data types
        - Number
        - BigInt
        - String
        - Boolean
        - Null
        - Undefined
        - Symbol
    - Non Primitive Data Types
        - Object
        - Array
    
    - Javascript Memory model to store Variables
        - Deep Copy
        - Shallow Copy

    - Datatype conversion
        - Implicit conversion
        
        - Emplicit conversion (Specially String Conversion)
            - String, Boolean, null, Undefined => Numbers (using Numbers() and parseInt() )
            - Numbers, String, null  => Boolean
            - Numbers, Boolean, null  => String
        
        ```
            "5" + 2   // "52"
            "5" - 2   // 3
            true + 1  // 2
            null + 1  // 1
            undefined + 1 // NaN
        ```

    - Operators in JavaScript
        - Arithmetic Operators
            ```js 
            +	Addition / String Concatination
            -	Subtraction
            *	Multiplication
            **	Exponentiation
            /	Division
            %	Modulus (Division Remainder)
            ++	Increment
            --	Decrement
            ```
        - Assignment Operators
            ```js
            Operator	Example	    Same As
            =       	x = y	    x = y
            +=      	x += y	    x = x + y
            -=      	x -= y	    x = x - y
            *=      	x *= y	    x = x * y
            /=      	x /= y	    x = x / y
            %=      	x %= y	    x = x % y
            **=     	x **= y	    x = x ** y
            ```
        - Comparison Operators (== and ===)
            ```js
            Operator	Description	                            Example
            ==	        equal to	                            x == 5
            ===	        equal value and equal type	            x === 5
            !=	        not equal	                            x != 5
            !==	        not equal value or not equal type	    x !== 5
            >	        greater than	                        x > 5
            <	        less than	                            x < 5
            >=	        greater than or equal to	            x >= 5
            <=	        less than or equal to	                x <= 5
            ```

    - Slicing
    - Splicing