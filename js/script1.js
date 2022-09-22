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
};

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
/*
let cn  = 29;
let i;
while(i != cn){
    console.log("Try again");
    i = prompt("Enter a correct number")
}
console.log("You have enterd a correct number");
*/
// Mean of 4 numbers
/*
const mean = (a, b, c, d)=>{
    return (a + b + c + d) / 4
}
console.log(mean(2, 4, 1, 8));
*/

// Template literals
/*
let boy1 = "Piyush";
let boy2 = "Devender";

// let sentence = `boy2 is a friend of boy1`
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence);
*/

// String Methods
// Slice function
/*
const fristName = "Rohanbharadwaj"
const friend = "Shivam"
console.log(fristName.slice(0, 4));
console.log(fristName.slice(5));
console.log(fristName.replace("Rohan", "Sohan"));
console.log(fristName.substring(5, 10));
console.log(fristName.substring(5));
console.log(fristName.concat(" is a friend of ", friend, " and they are playing video game. "));
*/

// Using a for loop to print a string
/*
const string = "Practice";
for(let i of string){
    console.log(i)
};
*/

// Practice
/*
const str = "Aka\"";
console.log(str.length);

let para = "The quick brown fox jump over the lazy dog";
let para1 = "fox";
console.log(para.includes(para1));
console.log(`The word "${para}" ${para.includes(para1) ? " is " : " is not "} in the para`);
*/

// Use slice method to find a number in a string
/*
let string = "Please give me Rs 1000";
let amount = Number.parseInt(string.slice("Please give me Rs ".length));
console.log(amount);
console.log(typeof amount);
*/

// Arrays
/*
let marks_of_class_10 = [63, 45, 78, 32, 67, 45, 71];
console.log(marks_of_class_10[0]);
console.log(marks_of_class_10[1]);
console.log(marks_of_class_10[2]);
console.log(marks_of_class_10[3]);
console.log(marks_of_class_10[4]);
console.log(marks_of_class_10[5]);
console.log(marks_of_class_10[6]);
marks_of_class_10[7] = 88; // Adding a value in array
console.log(marks_of_class_10[7]); // Not exist
console.log(marks_of_class_10.length);
marks_of_class_10[2] = 85;
console.log(marks_of_class_10);
*/

// Print array with the help of for loop
/*
const array = [92, 81, 64, 39, 72];
for(let i of array){
    console.log(i);
}
*/

// Array methods
/*
let num = [34, 23, 87, 97, 54];
let b = num.toString();
console.log(b, typeof b);
let c = num.join(" & ");
console.log(c, typeof c);
*/
/*
let num = [11, 12, 13, 14, 15, 16, 17];
let num_more = [20, 21, 22, 23, 24, 25];
let b = num.toString(num_more);
let newarray = num.concat(num_more);
console.log(num);
console.log(num_more);
console.log(newarray);
console.log(newarray.length);
console.log(b);
*/

// Array for loop
/*
let num = [3, 6, 2, 8, 5];
for(let i = 0; i<num.length; i++){
    console.log(num[i]);
};

// forEach Loop

num.forEach((element)=>{
    console.log(element*element*element);
})
*/

// Array.from
/*
const naam = "Ayushi";
console.log(naam);
let arr = Array.from(naam);
console.log(arr);
*/

// for...of loop
/*
let num = [65, 80, 21, 32, 87, 45]
for(let i of num){
    console.log(i);
}

// for...in loop

for(let i in num){
    console.log(num[i]);
}
*/

// Array map method
/*
let num = [34, 67, 21, 68];
// console.log(num);
let a = num.map((value, index, num)=>{
    console.log(value, index, num);
    return value + 5 + index;
})
console.log(a);
*/

// Array filter method
/*
let num = [2, 34, 21, 3, 6, 72, 56, 36, 39, 18, 27];
console.log(num);
let a = num.filter((a)=>{
    return (a<30);
})
console.log(a);
*/

// Array reduce method
/*
let num = [3, 2, 7, 4, 5, 1, 2];
let newnum  = num.reduce((a, b)=>{
    return a + b;
});
console.log(newnum);
*/

// Prompt with adding a new array
/*
let arr = [3, 5, 2, 7, 1];
console.log(arr);
let a = Number.parseInt(prompt("Enter a number"));
let newarr = arr.push(a);
// console.log(arr);

// Using do-while loop

do {
	a = Number.parseInt(prompt("Enter a number"));
	let newarr = arr.push(a); // push only storing a number
} while (a != 0);
console.log(arr);
*/

// Using filter method to find those numbers which is divisible by 10
/*
// let arr = [20, 32, 56, 30, 60, 330]
// let n = arr.filter((x)=>{
//     return x % 5 == 0;
// })
// console.log(n);

let num = [2, 6, 3, 1, 7]
let n = num.map((element)=>{
    return element*element;
});
console.log(n);
*/




















