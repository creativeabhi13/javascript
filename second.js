// Chapter 3: Loops In js
// Loops and String
// for loops
// for (let count=1;count<=5;count++ )
//     {
//         console.log("Mahi Hai to Mumkin Hain");
//     }

// sum of n number
let sum = 0;
var n = prompt("Enter a number");
// for(initilization ; condition ; updation;)
//     {
// do work
//     }
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("Sum = ", sum);
// infinite loop:-a loop that never end

// for(let i=1;i>0;i++)
// {
//     console.log(i);
// }
// do while loop

// intialization;
// while(condition)

// {
//     dowork
//     updation
// }
let i = 1;
sum = 0;
while (i <= n) {
  sum += i;
  i++;
}
console.log("while sum=", sum);
// do while:atleast one time it will run
// intialization;
// do(condition)

// {
//     dowork
//     updation
// }while(condition);
let j = 1;
sum = 0;
do {
  sum += j;
  j++;
} while (j <= n);
console.log(sum);
// for-of loop
// it will works for arrays and string datatypes
// for (let val of strvar)
//     {
//         do work
//     }
let s = "AbhishekKumar";
let size = 0;
for (val of s) {
  console.log("val= ", val);
  size++;
}
console.log("string size", size);
// for-in loop
// it will works for objects
// for (let key in objectsvar)
//     {
//         do work
//     }

let students = {
  name: "Abhishek",
  gender: "M",
  age: 22,
  isPass: true,
};

for (let key in students) {
  console.log("Object Key =", key, "| Value =", students[key]);
}

// Q1 print all even number from 0 to 100.
for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log("num=", num);
  }
}
// Q2 game number
let gameNum = 25;
let userNum = prompt("Guess the Number :");

while (userNum != gameNum) {
  userNum = prompt("You have entered wrong Number. Guess the Number Again ! :");
}
console.log("Congratulations Number Match Game Over !");

// String In JavaScript
// String is the sequence of character used to represent text.
// string are immutable in javascript.
// create String
let str = "Creativeabhi13";
// string length
let len = str.length;
console.log(len);
//string indices
str[0], str[1], str[2];
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
// Template Literals in js
// A way to have embeded expression in string: we can write string as well as variable together

let specialString = `This is a template literal`;
console.log(specialString);
let obj = {
  item: "pen",
  price: 10,
};
// string interpolation
// to create string by doing substitution of placeholder.
`string text ${str} string text`;
console.log(`the cost of ${obj.item} is ${obj.price} .`);

// escape character :- \n to devide a string a word in two lines .
// \n : next line
// \tab : Tab
let str1 = "Abhishek\nKumar";
console.log(`String = ${str1} & Length =${str1.length}`);

let str2 = "Abhishek\tKumar";
console.log(`String = ${str2} & Length =${str2.length}`);
// String Method in Javascript
let str3 = "this is my pen";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim());
console.log(str3.slice(0, 2));
console.log(str.concat(str3));
console.log(str3.replace("th", "Th"));

// Practise question
let userName = prompt("Enter Your Username .!");
let userLen = userName.length;
alert(`@${userName}${userLen}`);
