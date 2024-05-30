//datatypes are based on memory allocation

// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

// Stack (Primitive), Heap(Reference)

let myYoutubeName = "adityasinghdotcom";
let anotherName = myYoutubeName;
anotherName = "I am a web developer";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};
let userTwo = userOne;
userTwo.upi = "aditya@ybl";

console.log(userOne);
console.log(userTwo);