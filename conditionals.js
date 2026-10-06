//conditional statemtnt if

let age = 20;

if (age >= 18) {
    console.log("you are an adult")
}

//else if

let score = 40;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
 console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//Switch Statement

let day = 3; 
let dayName;

switch (day) {
    case 1: 
    dayName = "Monday";
    break;

    case 2: 
    dayName = "Tuesday";
    break;

    case 3:
        dayName = "Wednesday";

        break;
        case 4: 
        dayName =  "Thursday";
        break;

        case 5: 
        dayName = "Friday";

        default:
            dayName = "Weekend";
}
console.log(dayName);   

//loops

for (let i = 0; i < 5; i++) {
    console.log("Number: "+ i);
}

// while loop 

// let i = 0;
// while (i < 5) {
//     console.log("Number:" + i);
//     i ++;
// }

// let i = 0;
// do {
//     console.log("Number: " + i);
//     i++;

// } while (i < 5);

//exercise 5 1.	Find the sum of all numbers from 1 to n using a for loop

let n = 10;
let sum = 0; 
for (let i = 1; i <=n; i++) {
   sum += i
   console.log(sum)
}

// 2.	Calculate the factorial of n using a while loop

let y = 10; 
let factorial = 1
let x = y
while (x>1) {
    factorial *= x
    x--
}
console.log("factorial are" + factorial)


//3.	Create a guess sing game where the use keeps guessing a number between 1 and 10 until they guess correctly. Use a do-while loop 
let secretNumber = 9
let guess;
do {
    guess = Math.floor(Math.random()*10) +1
    console.log(guess)
} while (guess !== secretNumber) {
    console.log("Correct" + secretNumber)
}

//Function Declaration

function greet(params) {
    console.log("Hello, World!")
}

//Calling the function to output
greet();

//parameters and Arguments; paramenters input for functions, arguments are 
//values for paramenters

function salute(name) {
    console.log("Hello, " + name + "!");
}

salute("Alice");
salute("Bob");

//Return Values 

function add(a, b) {
    return a + b;
}

let result = add(8,5);
console.log(result);

//exercise

function greetUser(phoneno) {
    console.log("My phone number is, " + phoneno + "!");
}

greetUser(09037672796);

//no 2

function calculateAverage(c, d, e) {
    return (c + d + e) /3;
}

let results = calculateAverage(2,4,6);
console.log(results);

//calculate perimeter 

function calculatePerimeter (l,br) {
    return (l+br) * 2;
}
let printout = calculatePerimeter(6,4);
console.log(printout);

//Function Expressions

const twe = function(anein) {
    console.log("Hello, " + anein + "!");
};

twe("Flora"); 

//Arrow Funtions 

const twole = (aneilen) => {
    console.log("Hello, " + aneilen + "!");

};
twole("Odio");

//Score (local Global)
let globalVar = "I am global";

function checkScope(){
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

checkScope();
 console.log(globalVar);
 //console.log(localVar);

 //exercise on arrow function 

 const addi = (x,y) => {
    return(x+y);
 };
 let resultsss = addi(3,4); 
 console.log(resultsss);
