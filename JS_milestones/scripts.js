//JS MILESTONE 2

/* Case-sensitivity: Programming languages differentiate between uppercase and lowercase letters.
 For example, "Variable" and "variable" would be treated as different entities.*/
 console.log("Case sensitive");
var name = "Stella";
var age = 23;
var Name="Anu";
console.log(name); 
console.log(age); 
console.log(Name);

/*Identifiers: Names given to variables, functions, etc., in code. They must follow certain rules 
like starting with a letter, and can contain letters, digits, underscores, or dollar signs.*/
var n= 10;
var n1=100;
// var 1=3; invalid
var _=4;
var _a_="hi";
var $a="hey"

/*Comments: Text within code that is ignored by the interpreter/compiler.
 Used for explanations or temporarily disabling code.*/

// This is a single-line comment

/*
   This is a multi-line comment
   It can span multiple lines
*/

/*Strict Mode: A JavaScript feature for enforcing stricter parsing and error handling. 
It helps catch common coding mistakes and deprecated features.*/
"use strict";

/*Statements: Instructions that perform actions. They can include variable declarations, assignments, function calls, etc.*/
var x = 5;
var y = 10;
var z = x + y; // This is an expression statement

/*Keywords and reserved words: Words with predefined meanings in the language. They cannot be used as identifiers.
Keywords like var, if, else, etc.*/

//var if = "this is not allowed"; // 'if' is a reserved word


/* Variables: Containers for storing data values. They can be declared using keywords like var, let, or const.
 var: It has function-level scope and can be reassigned.*/

 var x = 10;
function example() {
  var y = 20;
}
console.log("Output of  var");
console.log(x); // Output: 10
console.log(y); // Error: y is not defined

//let: Introduced in ES6, it has block-level scope and can be reassigned.
console.log("Output of  let");
let a = 10;
if (true) {
  let b = 20;
  console.log(b);//scope within the blk
}
console.log(a); // Output: 10
console.log(b); // Error: b is not defined

//const: Also introduced in ES6, it has block-level scope but cannot be reassigned
const PI = 3.14;
//PI = 3;  Error: Assignment to constant variable

// The typeof Operator: Returns the data type of an operand
var age=10;
console.log(typeof age); // Output: number

// Undefined: Represents the absence of a value
var n;
console.log(typeof n); // Output: undefined

// Null: Represents the intentional absence of any object value
var c = null;
console.log(typeof c); // Output: object

// Boolean: Represents true or false
var t = true;
console.log(typeof t); // Output: boolean

// Number: Represents numeric values
var b = 42;
console.log(typeof b); // Output: number

// String: Represents textual data
var str = "Hello, world!";
console.log(typeof str); // Output: string

// Object types: Objects are collections of key-value pairs
var person = {
  name: "John",
  age: 30,
  isEmployed: true
};
console.log(typeof person); // Output: object

// Arrays: Ordered lists of values
var arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // Output: object

// JSON Objects: JavaScript Object Notation
var jsonObject = {
  "name": "John",
  "age": 30,
  "city": "New York"
};
console.log(typeof jsonObject); // Output: object