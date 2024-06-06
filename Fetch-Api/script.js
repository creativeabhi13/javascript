// Chapter 12
// Fetch API
// Applicattion Programming Interface

// The Fetch API provides an interface for fetching (sending/receiving) resources.
// it uses Request and Response Objects.
// The fetch() method is used to fetch a resource (data).
// let promise = fetch(url,[options])

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// By default it is aget request if we are not passing options with url
// Understanding Some Terms

// AJAX is Asynchronous JS & XML.
// JSON is JavaScript Object Notation.

// json() method :it returns a second promise that resolves with the result of parsing the response body texts as JSON.
// (input is JSON, output is JS object )
// wehen we send request on api
// 1) Response (JSON) -> JS object (we need to convert from JSON to JS object)
// 2) JS Object -> usable format
// fetch will response first promise
// json will response second promise

const getFacts = async () => {
  console.log("getting data .......");
  // first response from promise
  // response data is not in redable format
  let response = await fetch(URL);
  console.log(response);
  // second response from promise as js object usable data format
  // usable data
  let data = await response.json();
  console.log(data);
  factPara.innerText = data[2].text;
};

btn.addEventListener("click", getFacts);


// Requests & Response 

// HTTP Verbs -it is a type of method which  like / GET,POST,PATCH,DELETE
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// GET
// The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

// HEAD
// The HEAD method asks for a response identical to a GET request, but without the response body.

// POST
// The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

// PUT
// The PUT method replaces all current representations of the target resource with the request payload.

// DELETE
// The DELETE method deletes the specified resource.

// CONNECT
// The CONNECT method establishes a tunnel to the server identified by the target resource.

// OPTIONS
// The OPTIONS method describes the communication options for the target resource.

// TRACE
// The TRACE method performs a message loop-back test along the path to the target resource.

// PATCH
// The PATCH method applies partial modifications to a resource.


// Response Status Code-If status code is 200 (everything is ok) if not then it can be 500 and some other then it is an error.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

// HTTP response headers also contain details about the responses, such as content type,HTTP status code etc
// Header contains extra data or extra response .
// Header contains additional information is coming as response 


// fetch api to use options or send post request 
// status code, data , headers
// Practise Question Sending Post Request 
// To successful post request



