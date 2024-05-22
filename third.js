// Chapter 4: Arrays in Javscript
// Collection of items with similar or disimilar data types
// Create an Array: Lenear way :it is special type of object
// array is mutable

let Car = ["BMW", "Mercedes", "Hyundai", "Jeep"];
let marks = [78, 98, 68, 87, 92, 66, 67, 86, 76];
let info = ["Abhishek", 22, "Delhi"];

// Array is special type of object

console.log(Car);
console.log(typeof Car);
console.log(marks);
console.log(info);

// Array Indices

console.log(Car[0]);
Car[2] = "Toyota";
console.log(Car);

// Looping Over an Array for loop
for (let idx = 0; idx < marks.length; idx++) {
  console.log(marks[idx]);
}
// for-of loop in array
for (let mark of marks) {
  console.log(mark);
}
// Practise question 1
// using for loop
let sum = 0;
for (let idx = 0; idx < marks.length; idx++) {
  sum += marks[idx];
}
console.log("Total Marks =", sum);
console.log("Average Marks =", sum / marks.length);
// using for-of loop
sum = 0;
for (let mark of marks) {
  sum += mark;
}
console.log("Total Marks =", sum);
console.log("Average Marks =", sum / marks.length);

// Practise question 2
// using for-of loop
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
  // console.log(`value at index ${i} = ${val} `);
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer at index ${i} = ${items[i]} `);
  i++;
}

// using for loop
items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] = items[i] - offer;
}
console.log(items);

// arrays method in Javscript
// push():add element in array at last
// pop():delete element at end and return
// toString():convert array to string
let veggies = ["potato", "tomato", "onion", "apple"];
console.log(veggies);
veggies.push("brinjal");
veggies.push("garlic");
console.log(veggies);
veggies.pop();
console.log(veggies);
console.log(veggies.toString());
// concat(): join multiple arrays and returns result
// unshift() : add to start
// shift(): delete from start and return
let starter = ["samosa", "panipuri", "rasogulla"];
let food = starter.concat(veggies);
console.log(food);
veggies.unshift("cabbage");
console.log(veggies);
veggies.shift();
console.log(veggies);

// slice: return the piece of an array -slice(startindex,endindex)
// splice: change the original array-splice(add,remove,replace) ->splic(strtindex,delcount,new element)
let S = veggies.slice(0, 2);
console.log(S);
veggies.splice(1, 1, "papaya");
console.log(veggies);
veggies.splice(3, 1, "watermelon", "cucumber");
console.log(veggies);

// Practise Question
let comapanies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(comapanies);
comapanies.shift(); //a
console.log(comapanies);
comapanies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
comapanies.splice(2, 1, "Ola"); //b
console.log(comapanies);
comapanies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
comapanies.push("Amazon"); //c
console.log(comapanies);
