// Chapter 7
// DOM Part 2 :- Data Object Model
// DOM Manupulation
// Attributes
// getAttribute(attr) to get attribute value
// setAttribute(attr,value) to set the attribute value

let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let id1=div.getAttribute("name");
console.log(id1);

let para=document.querySelector("p");
console.log(para);

let cl=para.getAttribute("class");
console.log(cl);

// let setAttr=para.setAttribute("class","newClass");
// console.log(setAttr);

// style value manipulation via node in js
// access style in javascript
console.log(div.style);
div.style.backgroundColor="red";
// div.style.visibility="hidden";
div.style.fontSize="20px";
// div.innerHTML="Hello"

// we have seen how to access and change  screen element via javascript.

// Insert Elements - Add new element
// first need to create then add
// insert is two line process
// 1. Create 2. Add

// Create
let newBtn=document.createElement("button");
newBtn.innerText="Click Me";
console.log(newBtn);

// node.append(el) // adds at the end of the node (inside)
// node.prepend(el) // adds at the start of the node (inside)
// node.before(el) // adds before the node (outside)
// node.after(el) // adds after the node (outside) 
// Add
let div1 =document.querySelector("div");
div1.append(newBtn); 
div1.prepend(newBtn);
div1.before(newBtn);
div1.after(newBtn);

// Create new Heading Element

let head=document.createElement("h1");
head.innerText="Hello This is Insert New Element to the HTML via js"

// Delete Element
// node.remove() // remove the node

head.remove();

// append child :The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.
// Create a new paragraph element, and append it to the end of the document body

// Create a new paragraph element, and append it to the end of the document body
const p = document.createElement("p");
document.body.appendChild(p);

// removechild
// The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);


// Practise Question1
// Create a button tag
let btn=document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="red";
btn.style.color="white";

// Add it to first element inside body tag

let b=document.querySelector("body");
b.prepend(btn);

// Practise Question 2

let para1=document.querySelector("p");
para1.classList.add("newClass");
