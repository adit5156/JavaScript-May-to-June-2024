// singleton => constructor method of declaring objects using Object.create() method
// Constructor Method => Object.create()

// Another way
// Object Literal {}

const mySmb = Symbol("mykey1");

const jsUser = {
  name: "Aditya",
  "full name": "Aditya Singh",
  [mySmb]: mySmb,
  age: 19,
  location: "West Bengal",
  email: "aditya@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser["full name"]);


console.log(jsUser[mySmb]);
console.log(typeof jsUser[mySmb]);


jsUser.email = "aditya@chatgpt.com";
console.log(jsUser.email);

// Object.freeze()

// Object.freeze(jsUser);

jsUser.email = "aditya@microsoft.com";
console.log(jsUser.email);

jsUser.age = 20;

console.log(jsUser);


jsUser.greetings = function () {
    console.log("Hello JS User");  
};

jsUser.greetings2 = function () {
    console.log(`Hello JS User,  ${this.name}`);
}

// console.log(jsUser);
console.log(jsUser.greetings);
console.log(jsUser.greetings2);


console.log(jsUser.greetings());
console.log(jsUser.greetings2());