//array
let fruits = ["apple", "Banana", "Cherry"];
console.log(fruits);
//let firstFruits = fruits[0];
//console.log(firstFruits);

//modify the elements in array

fruits[1] = "Cumcumber";
console.log(fruits); 

//push add element to the end and pop removes an element from the end

fruits.push("Date");

console.log(fruits);

//to remove element

fruits.pop();

console.log(fruits);

//shift removes the first element from the begining and show the remaining ones

let firstFruits = fruits.shift();
console.log(firstFruits);

console.log(fruits);


fruits.unshift("Apricot");
console.log(fruits);

//splice can add and remove the same time from the array

fruits.splice(1, 1, "Blackberry", "Cranberry");
console.log(fruits);

//slice can select a portion of an array; begining and ending

let someFruits = fruits.slice(1,3) //this means it will start from index 1 and end
//at the index before 3

console.log(someFruits);

//concat to join two or more arrays together

let moreFruits = ["Dragonfruits", "Elderberry"];

let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//objects in JavaScript

let person = {
    firstName: "Jude",
    lastName: "Itua",
    age: 35,
    isStudent: false
};
console.log(person);

console.log(person.age);

person.age = 45;
person.country = "Nigeria";

console.log(person.age);
console.log(person.country);

//methods and properties

let someone = {
    nameOne: "Alfred",
    nameTwo: "Luke",
    old: 45,

    fullName: function() {
        return this.nameOne + " " + this.nameTwo;
    },

    celebrateBirthday: function() {
        this.old += 1;
        return this.old;
    }

};
console.log(someone.fullName());

console.log(someone.celebrateBirthday ());
console.log(someone.old);

//assignment

let colours = ["red", "green", "blue", "yellow", "purple"]

//print all colours
console.log(colours);

//print only second colour

let secondcolour = colours[1];
console.log(secondcolour);

//print only 4th colour

let fourthColour = colours[3];
console.log(fourthColour);

//string 

let text = 'hello world';

console.log(text.split(' '));

//class work

let statement = 'JavaScript is awesome!';
//length of text
console.log(statement.length);

console.log(statement.toUpperCase());

console.log(statement.toLowerCase());

console.log(statement.substring(14, 21));

//exercise on numbers

console.log(Math.sqrt(144));

console.log(Math.pow(3, 7));

console.log(Math.random(0, 100));

console.log(Math.max(5, 10, 15));

console.log(Math.min(5, 10, 15));

//DOM practice

const paragraph = document.getElementById('myParagraph');

myParagraph.textContent = 'I have changed the text!!'

const textElement = document.getElementById('text');

textElement.innerHTML = '<strong> Content Changed by Fred </strong>';

// const button = document.getElementById('myButton');

// button.style.backgroundColor = 'blue';
// button.style.color = 'white';

function bgchanger(){
const button = document.getElementById('eventt');
button.style.backgroundColor="yellow"
button.style.color="red"
}

const button = document.getElementById('eventt');
button.addEventListener('click', bgchanger)

//fetch example

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:',error));