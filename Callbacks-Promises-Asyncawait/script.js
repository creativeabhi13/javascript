// Chapter 11
// Callbacks Promises & Async-await
// Asynchronous Programming
// async await >> promises chain >> callback hell

// Synchronous
// Synchronous means that the code runs in a particular sequence of instructions given in the program.
// Each instructions waits for the previous instructions to complete the execution.

// Asynchronous
// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions ,which causes delay in the ui.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow

// asynchrnous programming example.

console.log("code1");
console.log("code2");

setTimeout(() => {
  console.log("hello");
}, 4000); //timeout

console.log("code3");
console.log("four");

// Callbacks
// A callback is a function passed as an argument to an another function.

function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(1, 2, sum);

// Callback Hell
// Nested Callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom).
// This style of programming become difficult to understand and manage .

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data ", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
// suppose we want output to come like first after 2 sec next after next 2 sec
// callback hell
getData(1, () => {
  console.log("getting data 2.....");
  getData(2, () => {
    console.log("getting data 3.....");
    getData(3, () => {
      console.log("getting data 4.....");
      getData(4);
    });
  });
});
//  it is a very difficult to understand manage so we come with promises.

// To solve callback hell we have a promises in javascript
// Promises
// Promise is for "eventual" completion of task.it is an object in JS.
// it is a solution of callback hell

// let promise = new Promise((resolve ,reject) =>{
//     //Function with two handler
//     // resolve and reject are callback provided by JS.
//     // resolve means your problem solved.
//     // reject means fullfilled with error
//     console.log("i am a promise");
// //  resolve("success");
//     reject("some error")
// //   console.log(resolve);
//   console.log(reject);
// })
// Promise is an object in javascript.
// Promise has 3 state : Pending, Resolved, Reject
// Pending : the result is undefined
// Resolve : the result is value (fulfilled) resolve(result)
// Reject : the result is an error object reject(error)

function getData1(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    console.log("data", dataId);
    resolve("sucess");
    setTimeout(() => {
      if (getNextData) {
        getNextData();
      }
    }, 50000);
  });
}

// How to use promise
// for fullfill / resolve we will use .then method
// for reject will use .catch method

// promise.then((resolve) => {....})
// promise.catch((reject) => {....})

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a Promise");
    // resolve("sucess");
    reject("error");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fullfilled", res);
});

promise.catch((err) => {
  console.log("promise rejected", err);
});

// Promises chain
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("sucess");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("sucess");
    }, 4000);
  });
}

console.log("fetching data 1.... ");
asyncFunc1().then((res) => {
  console.log(res);
  console.log("fetching data 2.... ");
  asyncFunc2().then((res) => {
    console.log(res);
  });
});

// order of callback hell ,promise chain and async await
// Async-Await >> Promise Chain >> Callback Hell
// Async- Await
// Best Approach
// async function always return a promise.
// async function myFunc(){...}
//await pause the execution of its surrounding async function untils promise is settled.
// async will automatically return promise
// promise can be pending,resolve and reject
// await will come always with async & it will waits untils promise is settled.
async function hello() {
  console.log("hello");
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api();
  await api();
}
let w = getWeatherData();
console.log(w);

async function getAllData() {
  console.log("Geting data 1 ...... ");
  await getData1(1);
  console.log("Geting data 2 ...... ");
  await getData1(2);
  console.log("Geting data 3 ...... ");
  await getData1(3);
}

// getAllData();
// one drawn back with async await is we need to wrap or put inside function and need to call again and again .
// IIFE Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon it is defined
// ( write function) ();
// example  three ways to defined in IIFE
// m1
(function () {
  // .....
})();

// m2
(() => {
  // ...
})();

// m3
(async () => {
  //....
})();

(async () => {
  console.log("Geting data 1 ...... ");
  await getData1(1);
  console.log("Geting data 2 ...... ");
  await getData1(2);
  console.log("Geting data 3 ...... ");
  await getData1(3);
})();
