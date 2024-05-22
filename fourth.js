// Chapter 5 Function in Javscript
// Block of code that performs a specific task, can be invoked(call) whenever needed.
// Function Definition
function functionName() {
  console.log("abc");
  // do some work
}
function functionName1(a, b) {
  console.log("def");
  // do some work
}
// function call
functionName();
functionName1();

// Function  with void / no return type 2 numbers ,sum
function sum(x, y) {
  console.log(`The sum of ${x} + ${y} = ${x + y}`);
}
sum(12, 2);

// function with return type
function sum1(x, y) {
  // local scope of the variable
  s = x + y;
  return s;
}
let val = sum1(5, 7);
console.log(val);

function mul(x, y) {
  s = x * y;
  return s;
}

let multiplication = mul(5, 2);
console.log(multiplication);

// Arrow Functions :- A compact way of writing Arrow functions
const functionName2 = (para1, para2) => {
  // do some work
};

const arrowSum = (x, y) => {
  console.log(x + y);
};
arrowSum(5, 6);

const arrowMul = (x, y) => {
  console.log(x * y);
};
arrowMul(5, 6);

// single line arrow Functions
const printHello = () => console.log("Hello");
printHello();

// Practise Questions
// Create A Function using function keyword that take string as an argument & returns the number of vowels in the string.

// Normal function

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
let v = countVowels("abhishek");
console.log(v);

//Create a same task with arrow function

const countVowels1 = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
let v1 = countVowels("abhishek");
console.log(v1);

// forEach Loop in Arrays
// arr.forEach(callBackFunction)
//CallbackFunction:-Here, it is a function to execute for each element in the array.
// A callback is a function passed as an argument to another function
// forEach is used for normal calculation and it will not create new array.
//A call back function has 3 parameter :-> value(items) ,index(position),array

// for each is higher order function or higher order method
// higher order defined as it will return function or pass parmater as function something so it is called higher order function
// higher order fn- return function and take paramaeter as functions
let arr = [5, 6, 7, 8];
arr.forEach(function printValue(val) {
  console.log(val);
});
// right way to use for loop function
arr.forEach((val) => {
  // Each value
  console.log(val);
});
let city = ["Delhi", "Mumbai", "Kolkata", "Bangalore", "Pune"];
// example 2ƒ
city.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

// Practise question
// for given array of numbers print square of each value using for each loop
let square = (num) => {
  console.log(num * num);
};
arr.forEach((val) => {
  console.log(val * val);
});
arr.forEach(square);

// Some More Arrays Method
// Map :-it is similar to forEach but it will return new array by using there old value.
// Creates  a new array with the results of some operation.The value returns are used to form new array.
//A call back function has 3 parameter :-> value(items) ,index(position),array.
// let callbackFunction=(value)=>{
// }
// arr.map(callbackFunction(value,index,array));
// example
let newArr = arr.map((val) => {
  return val * 2;
});

let nums = [1, 2, 3, 4, 5];
nums.map((val) => {
  console.log(val);
});

let newArray = nums.map((val) => {
  return val * val;
});
console.log(nums);
console.log(newArray);
// Filter Method:
// Creates a new array of elements that give true for a condition/filter.
// Example Even number.

nums = [2, 3, 4, 5, 6];
console.log(nums);

let newFilterArr = nums.filter((val) => {
  return val % 2 == 0;
});
console.log(newFilterArr);

// Reduce Method:
// Perform some operations & reduce the array to single value.it returns that single value .
// Example: if there is an array so we should perform some operation at the end we should get single value as a result.
// sum ,avg are the example where we are going to get single value at the end.
// Whereever we need single value as a result we can use reduce array method.
// two parameter comes in reduct -accumulator(result),currentvalue(value)
const arr1 = [1, 2, 3, 4];
// 0+1+2+3+4
const initialValue = 0;
const sumWithInitial = arr1.reduce((result, current) => {
  return result + current;
});
console.log(arr1);
console.log(`sum of the array ${sumWithInitial}`);

const largestNumber = arr1.reduce((previous, current) => {
  return current > previous ? current : previous;
});
console.log(arr1);
console.log(`Largest NUmber in the array is ${largestNumber}`);

// Practise Question 1
// we are given array of mark of student .Filter out of the marks of the studnet scored 90+.
let marks = [89, 93, 67, 99, 86, 95, 78, 97];
let marksMoreThanNinety = marks.filter((val) => {
  return val > 90;
});

console.log(marks);
console.log("Student Scored 90+ are", marksMoreThanNinety);

// Practise Question 2
// Take a number n as input  from user .create an array of numbers from 1 to n.
// use reduce method to calculate the sum  of all numbers in array.
// use reduct method to calculate the multiplication of all numbers in array.

let n = prompt("Enter a number : ");
let array2 = [];
for (let i = 1; i <= n; i++) {
  array2[i - 1] = i; // 1(0),2(1)
}
console.log(array2);

let sum2 = array2.reduce((prev, curr) => {
  return prev + curr;
});
console.log("Sum = ", sum2);

let factorial = array2.reduce((prev, curr) => {
  return prev * curr;
});
console.log("Factorial = ", factorial);
