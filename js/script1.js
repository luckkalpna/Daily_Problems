
// variables 
/*
let a = 34;
console.log(a);
a = "Aditya";
console.log(a);
a = [1, 4, 6, 5, 8];
console.log(typeof(a));
*/

// Blogs
/*
var a = 45;
let b = "Hello";
var c = null;
var d = undefined;

{
    let b = "Color";
    console.log(b);
}

console.log(b);
*/

// Data types :- 7 type of data type
// nn ss bb u
/*
let a = null;
let b = 324;
let c = "Divya";
let d = Symbol("This is a symbol");
let e = true; // they also true/false
let f = BigInt("342") + BigInt("8");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof f);
*/

// Objects
/*
const item = {
    "Pen": 30,
    "Scale": 10,
    "Cloths": 500,
    "Carpet": 200,
}

console.log(item );

console.log(item["Scale"]);

console.log(typeof item);
*/

// Create a variable and add a number
/*
let a = "Divyanshi"
let b = 56;
console.log(a + " " + b);

// find type of _______

console.log(typeof (a + b));
*/

// Can we change the variable
/*
const a = {
    name: "Priyansh",
    education: "graduated",
    age: 35,
}

a["friend"] = "Divya";
a["education"] = "Post-graduated";

console.log(a);
*/

// Create a dictatonary
/*
const dict = {
    "pen": "Pecile",
    "eraser": "Rubber",
    "scale": "Measurement",
}
console.log(dict);
console.log(dict.pen);
console.log(dict["eraser"]);
*/

// Comparsion Operators
/*
let comp1 = 4;
let comp2 = 4;
console.log("comp1 = comp2 is =", comp1 = comp2);
console.log("comp1 == comp2 is =", comp1 == comp2);
console.log("comp1 === comp2 is =", comp1 === comp2);
console.log("comp1 != comp2 is =", comp1 != comp2);
console.log("comp1 !== comp2 is =", comp1 !== comp2);
console.log("comp1 < comp2 is =", comp1 < comp2);
*/

// Logical Operators
/*
let x = 4;
let y = 8;
console.log(x<y && x!=y); // Both are true && return true
console.log(x<y || x==y);  // One are true they give true
console.log(!false);
console.log(!true);
*/

// Check any age
/*
let age = prompt("What is your age?");
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20")
    console.log("Good")
}
else{
    console.log("Your age is not lies between 10 and 20")
    console.log("please enter a valid age")
}
*/

// Switch Cases
/*
let fruit = prompt("Please enter your favourite food.")
switch(fruit){
    case "Apple":
    console.log("Apple is your favourite fruit");
    break

    case "Mango":
    console.log("Mango is your favourite fruit")
    console.log("Mango is a king of all fruits")
    break

    case "Pineapple":
    console.log("It's your favourite food");
    break

    default:
    console.log("What's your favourite food")
}
*/

// Sum Of all natural numbers
/*
let sum = 0;
let n = prompt("Enter your number")
for(i = 0; i < n; i++) {
    sum *= (i*1);
}
console.log("Sum of first " + n + " " + "natural number is " + sum);
*/

let obj = {
    cloth: 200,
    bucket: 100,
    hanger: 20,
    food: 50,
}

// for in loop
/*
for(let a in obj){
    console.log("Price of " + a + " is " + obj[a]);
}

// for of loop

for(let b of "Ajay"){
    console.log("Price of " + b + " is " + obj[a]);
}
*/

// While loop
/*cy
let n = prompt("Enter a value of n")
let i = 0;
while(i<n){
    console.log(i+1)
    i++;
}

let n = prompt("Enter a value of n")
let i = 10;
do{
    console.log(i)
    i++;
}while(i<n)
*/

// Functions
/*
function onePlusAvg(x, y){
    console.log("Done")
    return Math.round(1 + (x + y) / 2)
}

let a = 2;
let b = 5;
let c = 8; 

console.log("One plus sum of average is ", onePlusAvg(a, b));
console.log("One plus sum of average is ", onePlusAvg(b, c));
console.log("One plus sum of average is ", onePlusAvg(c, a));

const sum = (p, q) => {
    return p + q;
}
console.log(sum(10, 21));

const hello = () => {
    console.log("Hello Everyone");
    return "Hello";
}
let v = hello();
console.log(v);
*/

// Practice of previous question
/*
let marks = {
    ayush: 30,
    brijesh: 20,
    chandni: 18,
    divya: 28
}
// for loop
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// for in loop
for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}
*/

// Enter a correct number

let cn  = 29;
let i;
while(i != cn){
    i = prompt("Enter a correct number")
}
console.log("You have enterd a correct number");


