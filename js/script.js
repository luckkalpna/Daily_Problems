// let a = "Mango";
// b = "Guava";
// c = "Apple";
// let i = prompt("Enter your favourite fruit");

// if (i < 5) {
// 	console.log("Mango");
// } else if (i <= 20);
// console.log("Guava");


// let a = "Mango";
// b = "Apple";
// c = "Guavava";
// let i = prompt("Enter your favourite fruit");

// if(i < 5){
//     console.log("Mango is my favourite fruit");
// }
//     else if(i <= 20)
//     console.log("Apple")

//     else
//     console.log("Guavava");



// 1. Check if a number is odd or even in JavaScript

// let num = 10;
// num = 15;
// num = 20;

// num = prompt("Enter your nnumber")

// function isEvenorOdd(num) {
// 	if (num % 2 == 0) {
// 		console.log(`${num} is a Even number`);
// 	} else {
// 		console.log(`${num} is a Odd number`);
// 	}
// }

// isEvenorOdd(10); //"10 is a Even number"
// isEvenorOdd(19); //"19 is a Odd number"

// Hour
// If hour is between 6am to 12pm: Good Morning!
// If hour is between 12p, to 6pm: Good Afternoon!
// Otherwise: Good Evening!

// Objects
/*
let person = {
    name: 'Ankita',
    age: 15,
    class: 'V'
}

let human = {
    name: 'Chanchal',
    age: 18,
    address: 'House'
}
human.age = 30;
console.log(human);

let family = {
    name: 'All family',
    
}
*/

// Dot Notation
/*
person.name = 'Riya'
console.log(person.name);
*/

// Array
/*
let selectedColors = ['red', 'blue', 'green'];
selectedColors[3] = 100; // Add any extra object or number
console.log(selectedColors);
*/

// Function
/*
function form(name, lastName){
    console.log('Hello ' + name + ' ' + lastName)
}
form('Riyansh', 'Yadav');
*/

// Calculating function
/*
function square(number){
    return number * number;
}
console.log(square(2));
*/

// Arguments
// For Sum
/*
function sum(){
    let total = 0;
    for(let value of arguments)
    total += value;
    return total;
}
console.log(sum(1, 2, 3, 4, 10, 15, 20))
*/

// For Subtaraction
/*
function subtraction(){
    let total = 0;
    for(let value of arguments)
    total += value;
    return total;
}
console.log(subtraction(20, 2, -5, 1))
*/

// Rest Operators
/*
function fruits(...a){
    console.log("fruits", a)
}
fruits("apple", "mango", "orange", "pear", "cherry");
*/   

// Default parameters
/*
function intrest(principal, rate, years){
    return principal * rate / 100 * years;
}
console.log(intrest(5000, 2.5, 3));
*/

// Getters and Setters method
/*
const person = {
    firstName: "Bharti",
    lastName: "Sharma",
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[2];
    }
};
person.fullName = 'Riya Sagar';
console.log(person);
*/

// Try and Catch method
/*
const person = {
    firstName: "Bharti",
    lastName: "Sharma",
    set fullName(value){
        if(typeof value !== 'string')
        throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if(parts.length !== 2)
        throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullName = "";
}

catch(e){
    alert(e); 
}
console.log(person); 
*/

// Local vs Global Scope
/*
const color = "red";
function star(){
    const message = "Hello";
    const color = "blue";
    console.log(color);
}
function stop(){
    const message = "Hii";
}
start();
*/

// (This) keyword
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c', 'd'],
    showTags(){
        this.tags.forEach(function(tags){
            console.log(this.title, tags);
        }, this);
    }
};
*/

video.showTags();
const video = {
    title: 'a',
    tags: ['a', 'b', 'c', 'd'],
    showTags(){
        this.tags.forEach(function(tags){
            console.log(this.title, tags);
        }, this);
    }
};

video.showTags();

// https://www.youtube.com/user/programmingwithmosh
