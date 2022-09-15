// 1. Write a function that takes two numbers and returns the maximum of the two.

/*
let number = max(101, 40);
console.log(number);

// function max(a, b){
//     if(a > b) return a;
//     else return b;
// }
function max(a, b){
    return (a > b) ? a : b;
}
*/

/*
let image = isLandScape(10, 40);
console.log(image);

function isLandScape(a, b){
    return (a > b) ? true : false;
}
*/

// 2. Write a JS code to print numbers from 1 to 10 and 0 to 50.

/*
function printNumber(){
    for(let i = 1;i <= 10;i++){
        console.log(i);
    }
}
printNumber() // 1 2 3 4 5 6 7 8 9 10

function printNumber(){
    for(let i = 0; i <= 50; i++){
        console.log(i)
    }
}
printNumber();
*/

// 3. Write a JS code to print a 2D array

// function printArray(arr) {
//     for (var i=0;i<arr.length;i++){
//         for(var j=0;j<arr[0].length;j++){
//         console.log(arr[i][j]);
//     }   
//     }
// }
// var arr = [[1, 2],
//             [3, 4],
//             [5, 6]];
//   printArray(arr) //1 2 3 4 5 6

/*
function printArray(arr){
    for(let x = 0; x < arr.length; x++){
        for(let y = 0; y < arr.length; y++){
            console.log(arr[x][y]);
        }
    }
}
let arr = [[63, 43],
            [74, 87],
            [21, 45]];

            printArray(arr) // 63 43 74 87 21 45
            */

// 4. Write a JS code to print Even numbers & Odd numbers in given array (divisible by n)

/*
function printEven(arr){
    for(let i = 0; i < 50; i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i]);
        }
    }
}
let arr = [22, 34, 21, 39, 49, 50, 43, 44]
printEven(arr)
*/

/*
function printodd(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 == 0){
            console.log(arr[i]);
        }
    }
}
let arr = [11, 43, 23, 22, 62, 31, 41, 30, 20]
printodd(arr)
*/

// 5. Write a JS code to delete all occurrence of element in given array

/*
function deleteElement(arr, ele) {
    for (var i=0;i<arr.length;i++){
        if(arr[i]==ele){
        arr.splice(i,1); //Delete element from array
    }
    }
    return arr;
}
var arr = [23,56,4,78,5,63,45,210];
arr = deleteElement(arr, 56)

  console.log(arr); //[23, 4, 78, 5, 63, 45, 210]
  */

/*
function deleteElement(arr, ele){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == ele){
            arr.splice(i, 1);
        }
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr = deleteElement(arr, 6)

console.log(arr);
*/

// 6. Write a JS code to demonstrate Async loop ----> (*)

/*
for(var i=0;i<30;i++){
    setTimeout(()=>console.log(i), 1);// 5 5 5 5 5
}
*/

// 7. Write a JS code to find the power of a number using for loop

function numPower(num,pow) {
    var res=6; //return 1 for pow=0
    for(var i=0;i<pow;i++){
        res=res*num;
    }
    return res;
}
  console.log(numPower(4,3)); //64
  console.log(numPower(16,2)); //256
    
// function numPower(num,pow){
//     let 
// }
