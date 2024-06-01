// Chapter 10
// Classes & Objects
// Prototype in Javascript
// A JavaScript object is an entity having state and behaviour (properties and method).
// Js Object have a special property called prototype
// we can set prototype using _ _proto_ _
// if object and prototype have same method , object method will be used.

// Whenever an object is created in js there is a special property called prototype & this prototype property is an object itself.
// prototype has special property and method
// it will come inside object 
// prototype is an reference to an object
// Normal Object Creation
const student = {
    fullName:"Abhishek Kumar",
    marks:94.3,
    printMarks:function(){
        console.log("marks = ",this.marks);
    },
};

// prototype example.

let arr=['apple','bannna',"mango"];
arr.push("litchi");

// we can create our own prototype
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
    calcTax1: function() {
        console.log("tax rate is 10%");
    }
};

const karanArjun ={
    salary:50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

// creating prototype for karanarjun
karanArjun.__proto__ =employee;

// if object and prototype have same method , object method will be used.

// Classes In Javascript
// class is a program-code template for creaing object. 
// Those objects will have some state(varibale) & some behaviour(function)inside it.

class MyClass{
    // constructor
    Myclass(){

    }
    myMethod(){

    }
}
let myObj=new MyClass();

// if we need to create alot of objects for similar type of entity we use class .
// class is an blueprint for an object or template .
// Constructor() method is :
// automatically invoked by new
// initializes object 

class JeepCar{
    constructor (brand,mileage){
        console.log("New Object created");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("START");
    }
    stop(){
console.log("STOP");
    }
  
}

// creating object using class 
let compass = new JeepCar("Compass",15); // constructor
console.log(compass);
let wrangler = new JeepCar("Wrangler",11); // constructor 
console.log(wrangler);

// Inheritance in Javascript
// inheritance is passing down properties & methods from parent class to child.
// if child & Parent have same method, child's method will be used .[Method overriding]
// we will use extends keyword for passing down properties & method 
// when we have same function in parent and child then child class will have higher preference.

class Person{
    constructor(){
        this.species = "home sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve Problems, Build Something");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treat Patients ");
    }
}

let abhishek=new Engineer();
console.log(abhishek);
let tirthRaj= new Doctor();
console.log(tirthRaj);


// Super Keyword
// Super keyword is used to call constructor of its parent class to access parents properties and methods.
// super

class P{
    constructor (name){
        console.log("Enter ParentConstructor");
        this.species ="New Person Created";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class E extends P {
    constructor(name){
        // User Super Keyword to call parent constructor 
        console.log("Enter Child Constructor");
        super(name);
        this.branch="Computer Science";
        console.log("Exit Child Constructor");
    }
    work(){
        super.eat();
        console.log("Solve Problems, Build Something");
    }
}
let vandana = new E("Vandana Abhishek");
console.log(vandana);

// Practise Question 1
let data ="Secret Information";
 class User {
   constructor(name,email){
    this.name=name;
    this.email=email;
   }

   viewData(){
    console.log("Website Data = ",data);
   }
 }

 let student1=new User("Abhishek Vandana","abhishek@gmail.com");
 let student2=new User("Vandana Abhishek","vandana@gmail.com");

 let teacher1= new User("Sarvana Mk","sarvanamk@gmail.com");
 console.log(student1);
 console.log(student1.viewData());
 console.log(student2);

 // Practise Question 2
 class Admin extends User{
    constructor (name,email){
super(name,email);
    }
    editData(){
        data="some New ";
    }
 }

 let admin1= new Admin("Admin1","admin1@gmail.com");
 console.log(admin1);
 console.log(admin1.editData());

 // Error Handaling
 try {
    // normal code
 } catch (error) {
    // error handaling code
    
 }