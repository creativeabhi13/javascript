/*
 chapter 1: Varibales and Data type
Primitive Data Type:-
Number,
String ,
Boolean ,
Undefined,
Null,
BigInt,
Symbol,
Non Primitive Data Type:-
objects:-Collection of values,it will store in the form of key values pair in block .
Arrays:-collection of same data type with index

*/

let age = 24;
let name = "Abhishek";
istrue = true;
let y;
let z = null;
let ab = Symbol("Hello Ji!");
//objects 
const student = {
    name: "Abhishek",
    age: 20,
    cgpa: 8.5,
    isPass: true,

}
student.age = student.age + 1;
student['cgpa'] = student['cgpa'] - 0.5;
// access objects in 2 ways
console.log(student.age);
console.log(student['cgpa']);
console.log(student.name);
console.log(student['name']);

var bb;
bb = 5;
var bb = 6;
let c = 6;

const product = {
    name: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 200
}
console.log(product);

const profile = {
    name: "Abhishek Kumar",
    isFollow: false,
    posts: 200,
    followers: 10000,
    following: 2000,
    bio: "Creativeabhi13 from Siwan BR",

}
console.log(profile);

// Chapter 2:Operators

// Arithmetic Operators = there is operator which is used to do functionality for operands

let v1 = 2;
let v2 = 3;
// console.log("v1 = ", v1 , " & v2 = ", v2 );
// console.log("v1 + v2  =", v1+v2);
// console.log("v2 - v1 =", v2-v1);
// console.log("v1 * v2 =", v1*v2);
// console.log("v1 / v2 =", v1/v2);
// console.log("v2 % v1 =", v2%v1);
// console.log("v1 ^ v2 =", v1**v2);

// Unary Operators

console.log("v1++ =", v1++);   // post increment-first print then increment 
console.log("v1 =", v1);
console.log("v1-- =", v1--);  // post decrement-first print then decrement 
console.log("v1 =", v1);
console.log("++v1 =", ++v1);  // pre increment-first increment then print
console.log("v1 =", v1);
console.log("-v1 =", --v1);   // pre decrement- first decrement then print

// Assignment Operators = to assign values
a = 1;
a += 1;
console.log("a =", a);
a *= 2;
console.log("a =", a);
a /= 2;
console.log("a =", a);
a += 1;
console.log("a =", a);
a %= 2;
console.log("a =", a);
a += 1;
console.log("a =", a);
a **= 2;
console.log("a =", a);

//Comparision Operators == , != , === , !== , > , >= , < , <= 

a = 2;
b = 5;

console.log("a == b", a == b); // Equal to == :- it will check only value 
console.log("a != b", a != b); // Not Equal to != it will check only value
// when the number is like below it may be string we have to used strict version of equal to
a = 5;
b = "5";
console.log("a === b", a === b); //  Equal to & Type  === it will check value as well as type data
console.log("a !== b", a !== b); // Type & Not Equal to !== it will check value as well as type of data

// Logical Operators
// Logical && 
// Logical || 
// Logical !

let d = 6;
let e = 5;
console.log("cond1 && cond2 = ", d > e && d === 6);// logical &&

let f = 4;
let g = 6;
console.log("cond1 || cond2 = ", g > f || g === 5); // logical ||
console.log(" !(f<g) = ", !(f < g));

// Conditional Statements

age = 25;
if (age > 18) {
    console.log("You Can Vote!");
}
else {
    console.log("You Cannot Vote");
}

let color = "dark";

if (color === "dark") {
    console.log("dark");
}
else if (color === "white") {
    console.log("white");
}
else {
    console.log("neither dark nor white");
}

// Ternary Operators
// condition ? "True output" :"false output"
let res = age > 18 ? "Adult" : "Not An Adult";
console.log(res);

// MDN DOCS


// Prompt - to take user input
// question - Get a user input a number using promt("enter a number ").check if it is a multiple of 5 or not.

// let v=prompt("Enter a Number");
// if(v%5===0)
//     {
//         console.log("Multiple of 5");
//         alert("multiple of 5");
//     }
// else{
//     console.log("Not Multiple of 5");
//     alert("Not a multiple of 5");
// }
// question 2

// let marks=prompt("Enter a Student Total Percentage");
// if(marks>=90 && marks <=100)
//     {
//         console.log(" A");
//         alert("A");
//     }
// else if(marks>=70 && marks<90){
//     console.log("B");
//     alert("B");

// }
// else if(marks>=60 && marks<70){
//     console.log("C");
//     alert("C");

// }else if(marks>=50 && marks<60){
//     console.log("D");
//     alert("D");

// }
// else {
//     console.log("Fail");
//     alert("Fail");
// }

