console.log("hellow world");
// the section handles the behaviour of the buttons

/*
Line Javascript is kind of fun
especially when you have a great instructor like Oge
So, yeah lets keep moving 
*/

var name = "Alice"; 
let age = 25;
const country = "USA";

//this is redeclaring and reassigning 

name = "Bob";
age = 30;
//country = "Canada";

console.log(name);
console.log(age);
console.log(country);

//here I am working on the string data type

let school = "Fhobs Solutions";
let message = `I love, ${school}`;
console.log(message);

//working on the boolen data type

let isStudent = true
console.log(isStudent);

//working on the undefined and null data type

let myVariable; 
console.log(myVariable);

let emptyValue = null;
console.log(emptyValue);

//here, am working on object

let person ={
    name: "Fred",
    age: 33,
    isStudent: true,
};

console.log(person);

//working on array

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);

//working on function
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet ("Jude"); 

//working check data type

//Day Two  - Operators (Arithmetic)

let sum = 10 + 5; 

let difference = 10 - 5;

let product = 10 * 5;

let quotient = 10 / 5;

let remainder = 10 % 3; 

let power = 2 ** 3; 

console.log(sum, difference, product, quotient, remainder, power)

//exercise 2

let x = 10;
let y = 3;

//addition on a and b

let total = x + y;
console.log(total);

//subtracting y from x

let differences = x-y;
console.log(differences);

//multiplication 
let theproduct = x * y;

//division 
let thedivision = x / y;

//modulus
let thequotient = y % x;

console.log(theproduct, thedivision, thequotient);

//practices on comparison operators

//equality
console.log(5 == "5");


//strict equality 
console.log(5 === "5");

//inequality 
console.log(5 != "5"); 

console.log(10>=5);

console.log(false === "0");

//conditional statemtnt if

let age = 20;

if (age >= 18) {
    console.log("you are an adult")
}