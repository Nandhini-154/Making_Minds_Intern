//MILESTONE 3

// Unary Operators: Operate on a single operand.
let x = 10;
console.log(-x); // Unary minus: Changes the sign of x
console.log(++x); // Increment: Increases the value of x by 1 before returning it
console.log(--x); // typeof: Returns the data type of x

// Bitwise Operators: Perform bitwise operations on operands.
let a = 5; // binary representation: 0101
let b = 3; // binary representation: 0011
console.log(a & b); // Bitwise AND: 0001
console.log(a | b); // Bitwise OR: 0111
console.log(a ^ b); // Bitwise XOR: 0110
console.log(~a); // Bitwise NOT: 1010

// Boolean Operators: Operate on boolean values and return a boolean result.
let c = true;
let d = false;
console.log(c && d); // Logical AND: Returns true if both c and d are true
console.log(c || d); // Logical OR: Returns true if either c or d is true
console.log(!c); // Logical NOT: Returns the opposite of c

// Multiplicative Operators: Perform multiplication, division, and modulus operations.
let e = 10;
let f = 3;
console.log(e * f); // Multiplication: Returns the product of e and f
console.log(e / f); // Division: Returns the quotient of e divided by f
console.log(e % f); // Modulus: Returns the remainder of e divided by f

// Additive Operators: Perform addition and subtraction.
let g = 5;
let h = 2;
console.log(g + h); // Addition: Returns the sum of g and h
console.log(g - h); // Subtraction: Returns the difference between g and h

// Relational Operators: Compare two operands and return a boolean result.
let i = 10;
let j = 5;
console.log(i > j); // Greater than: Returns true if i is greater than j
console.log(i < j); // Less than: Returns true if i is less than j

// Equality Operators: Compare two operands for equality and return a boolean result.
let k = 5;
let l = "5";
console.log(k == l); // Loose equality: Returns true if k is equal to l
console.log(k === l); // Strict equality: Returns true if k is equal to l and of the same type

// Conditional Operator: A ternary operator that evaluates a condition and returns one of two values based on that condition.
let m = 10;
let n = (m > 5) ? "greater" : "less or equal";
console.log(n); // Output: "greater"

// Assignment Operators: Assign values to variables.
let o = 5;
o += 3; // Equivalent to o = o + 3
console.log(o); // Output: 8

// Comma Operator: Evaluates multiple operands and returns the value of the last operand.
let p = (2 + 3, 4 + 5);
console.log(p); // Output: 9
