// Primitive

// 7 types => Pass by value data types : String, Number, Boolean, undefined, null, Symbol, BigInt

const scorerName = "Aditya";
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol("123");
const id2 = Symbol("123");
console.log(id === id2);

const bigIntNumber = 349832649328468n;

// Reference Type(Non-Primitive)

// Pass by Reference => Arrays, Objects, Functions

const heros = ["Shaktiman", "Iron Man", "Spider Man"];

let myDetails = {
  userName: "Aditya",
  rollNo: 5,
  age: 19,
};

let myFunc = function () {
  console.log("Hello World From Aditya's PC!");
};

myFunc();

console.log(typeof id);
console.log(typeof myFunc);
console.log(typeof heros);
console.log(typeof myDetails);


// type of all datatypes

// string => string
// number => number
// boolean => boolean
// undefined => undefined
// null => object
// symbol => symbol
// bigInt => undefined

// function => function
// array => object
// object => object