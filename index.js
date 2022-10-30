// comments in javascript

/*
this is multiple line comment 

*/













document.write("This is an external javascript file","<br>");


document.getElementById('th').innerHTML = 'This is a paragraph';

var a1 = 4;
var a2 = 'this is abhishek';
document.write(a1,"<br>");
document.write(a2); 


// simple calcultaor
         let v1 = 25;
        let v2 = 10;
        let add = v1 + v2;
        let sub = v1 - v2;
        let mul = v1 * v2;
        var div = v1 / v2;

document.write("<br>","Addition is ", + add,"<br>", " Subtraction is " + sub, "<br>"," Multiplication is " + mul, "<br>"," Division is " + div, "<br>",);
       
console.log("Addition is ", + add, " Subtraction is " + sub, " Multiplication is " + mul, " Division is " + div);
 // how to use prompt,alert ,doc.write and console.log
 var age = prompt("Tell Me");
console.log(age);
alert(add); 

document.write("5 + 9","<br>", 5 + 9, "<br>");
document.write("5 - 9","<br>",  5 - 9, "<br>");
document.write("5 * 9", "<br>", 5 * 9, "<br>");
document.write("5 / 9","<br>",  5 / 9, "<br>");
document.write("5 % 9","<br>",  5 % 9, "<br>");




//how to take input from the user using prompt
document.write("hey i am javascript 2.0");
var foodcost = prompt("What is total amount"); 
 var no_of_people = prompt("No of people");
document.write(
        " The total cost of the food was ", foodcost,"<br>");
document.write("Each one have to pay ", (foodcost / no_of_people).toFixed(2), "<br>"); 