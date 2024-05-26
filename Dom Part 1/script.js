// Chapter 6
// DOM Part 1 :- Data Object Model
// The 3 Musketeers of Web Dev
// HTML-Structure , CSS-Style, Javascript-logic
// console.log("Hello");
// alert("Page Loading.........");

//Window  Object
// The window object represnts an open window in a browser.it is a browser object(not javascript's ) & is automatically created by javascript.
// it is a global with lots of properties and method.

// What is DOM?
// When a web page is loaded, the browser creates a Document object Model(DOM) of the page.
//      window ->  document ->html
//    html-head -> meta,meta,title,link
//     |
//    body->div->img,h1,p,div
//     |
//   Script

// it will come tree like structure all the element treated as node
// window->document->html->head,body
// head->meta,title,link
// body->div->img,text,script
// we can access html through javascript via window object and window document.

// console.dir-> print object ->properties, method // for object print
// console.log-> print document->
console.log(window.document);
console.dir(window.document);
console.log(document);
console.dir(document);
console.log(window.document.body);
console.dir(window.document.body);
console.log(document.body);
console.dir(document.body);
console.log(window.document.head);
console.dir(window.document.head);
console.log(document.head);
console.dir(document.head);

// DOM Manupulation
// To access html element in javascript

// Selecting with id ->id is unique or to be unique for each element
// id will be used for uniqe element
// id representation with #id
// if there is no id exist then it will come with null
let heading = document.getElementById("heading"); // h1 id from html
console.log(heading);
console.dir(heading);
// Selecting with Class
// class is used for multiple element
// class representation with .class
let heading1 = document.getElementsByClassName("heading1"); // h1,h3,h4 class from html // it will return class which is a html collection
console.log(heading1); // html collection is very similar to an array.
console.dir(heading1);
// if there is no id exist then it will come with empty html collection.

// Selecting with tag
let para = document.getElementsByTagName("p"); // p tag from html
console.log(para); // it will also return the html collection
console.dir(para);

// Query Selector
// we can pass id ,class as well as tag and it will automatically detect which type of element is present in html.
// example
//  return for first element
// Query selector will return node list

// for tagname
let firstElement = document.querySelector("p");
console.log(firstElement);
console.dir(firstElement);

let allEl = document.querySelectorAll("p"); // it will return node list
console.log(allEl);
console.dir(allEl);

// for class
let firstEl = document.querySelector(".heading1");
console.log(firstEl);
console.dir(firstEl);

let allEle = document.querySelectorAll(".heading1"); // it will return node list
console.log(allEle);
console.dir(allEle);

// for id
let firstEle = document.querySelector("#heading");
console.log(firstEle);
console.dir(firstEle);

// Properties
// we can set, get or change ,update the method or element in the DOM.
// tagName :- It returns the tagname for the element nodes.
console.log(firstElement.tagName);

// innerText:- It returns the text content of the element and all its children.
// we know tree structure of the dom or any dom tree
// it will work like parent then child node then siblings
// parent -> child->siblings
// we can refer DOM tree for better understanding.
// DOM tree has three node
// text node,comment node,elements node(imp)
let div = document.querySelector("div");
console.dir(div.innerText);
console.log(div.innerText);
// we can set innertext;

// innerHTML:- it  returns the plain text or HTML contents in the element.
console.dir(div.innerHTML);
console.log(div.innerHTML);
// we can set innerHTML;
// textContent:- it returns textual content even for hidden element
// it will return hidden elment 
console.log(heading.textContent);

// Practise Questions 1
let h2=document.querySelector("h2");
console.dir(h2);
console.log(h2.innerText);
h2.innerText= h2.innerText + " from Abhishek Kumar "; // concatenate two strings;

// Practise Questions 2

let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs)
    {
        console.log(div.innerText);
        div.innerText = `New Unique Value ${idx}`
        idx++;
    }

// divs[0].innerText="New Unique Value 1";
// divs[1].innerText="New Unique Value 2";
// divs[2].innerText="New Unique Value 3";