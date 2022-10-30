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

// some maths function
document.write("2^7 = ", Math.pow(2, 7), "<br>");
document.write("abs(-34)=", Math.abs(-34), "<br>");

document.write("sqrt(36)=", Math.sqrt(36), "<br>");

//string function

var str1 = "creativeabhi13";
document.write("size of the string is ", str1.length, "<br>");
document.write("index of the string is ", str1.indexOf("13"), "<br>");
document.write("slice of the string is ", str1.slice(1,3), "<br>");
document.write("slice of the string is ", str1.slice(1), "<br>");
document.write("slice of the string is ", str1.slice(5), "<br>");
document.write("substr of the string is ", str1.substring(2,5), "<br>");
document.write("substr of the string is ", str1.substring(3), "<br>");
document.write("replace of the string is ", str1.replace("abhi13", "ashwin24"), "<br>");

document.write("Capital of the string is ", str1.toUpperCase(), "<br>");
document.write("smaller of the string is ", str1.toLowerCase(), "<br>");

document.write("smaller of the string is ", str1.reverse(), "<br>");


// relational operators : ==,>,<,>=,<=,!=,
//Logical operator : && , ||
//bitwise op : & , |

var age1 = prompt("what is your age");
while (age1 > 0) {
        if (age1 < 18) {
                document.write("your are not eligible for vote");
        }
        else if (age1 < 10 || age1 > 3) {
                document.write("your are also not eligible for vote");
        }
        else {
           document.write("your are  eligible for vote");
           }

}



// diff example
var age2 = prompt("What is your age");

if (age2<20 && age2>=10)
{

	document.write("You go to the school");
}

else if(age2<10 && age2>3)
{
	document.write("You also go to the school");
}

else
{
	document.write("Do whatever you want");
}

// switch case
var age = prompt("What is your age?");
switch(age)
{

	case "22":
		document.write("22 years old.. okay");
		break;

	case "21":
		document.write("21 years old.. okay");
		break;
		

	case "12":
		document.write("12 years old.. okay");
		break;
		

	default:
		document.write("default years old.. okay");
		break;			

}

// while loop
var i =1;
while(i<=100)
{
	document.write(i,"<br>");
	i++;
}


var i =101;
do
{
	document.write(i,"<br>");
	i++;
} while(i<=100)



// for loop
for (var i = 0; i < 2; i++) {
	document.write(i,"<br>");
}

// array

var books = ["Harry potter", "ncert", "ctci", 65];

document.write(books[3]);


// function
function harry(){

	document.write("We are calling harry");
	console.log("We have executed harry function");


}

harry();