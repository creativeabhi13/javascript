//how to take input from the user using prompt
document.write("hey i am javascript 2.0");
var foodcost = prompt("What is total amount"); 
 var no_of_people = prompt("No of people");
document.write(
        " The total cost of the food was ", foodcost,"<br>");
document.write("Each one have to pay ", (foodcost / no_of_people).toFixed(2), "<br>"); 