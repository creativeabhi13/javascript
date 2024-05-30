// Chapter 8
// Event in JavaScript
// The change in state of an object is known as an Event.
// Events are fired to notify code of  "interesting changes" that may affect code execution.

// Mouse events (click, double click etc.)
// Keyboard events (keypres, keyup, keydown )
// Form events (submit etc.)
// Print events & many More

// Event Handaling in javascript

// inline handaling
// js node event handler


let btn1=document.querySelector("#btn1");
btn1.onclick = () =>{
    console.log("Button was clicked at once time");
    let a=25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover=() =>{
    console.log("You are inside div");
}
// Event Object
// it is a special object that has detailed about the event.
// All event handlers have access to event object's properties and method.

// node.event =(e) =>{
//     // // handle here 
//     // e.target;
//     // e.type,
//     // e.clientx,
// }

let btn2=document.querySelector("#btn2");
btn2.ondblclick=(e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}

// Event Listeners
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)


// Event handaler
// we can perform multiple event at same element 
// we can access event object inside event listeners

let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",(evt)=>{
    console.log("Button 3 was clicked 1");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
})
btn3.addEventListener("click",()=>{
    alert("Button 3 was clicked 1");
})

btn3.addEventListener("click",()=>{
    console.log("Button 3 was clicked 2");

})
const handler= ()=>{
    console.log("Button 3 was clicked 3");
}
btn3.addEventListener("click",handler)

// callback reference should be same to remove.

btn3.removeEventListener("click",handler);

// Practise question
// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let mode = document.querySelector("#mode");
let currMode = "light"; // dark

mode.addEventListener("click",()=>{
   if(currMode === "light"){
    currMode="dark";

document.querySelector("body").style.backgroundColor="black";
   }
   else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";
   }
   console.log(currMode);
})

// Not Working
// let mode1= document.querySelector("#mode1");
// let body=document.querySelector("body");
// let currMode1='light'; // dark

// mode1.addEventListener("click",()=> {
//     if(currMode1 === "light")
//         {
//             currMode1="dark";
//             body.classList.add("dark");
//             body.classList.remove("light");
//         }
//         else{
//             currMode1="ligth";
//             body.classList.add("light"); 
//             body.classList.remove("dark");
//         }
//         console.log(currMode1);
// })