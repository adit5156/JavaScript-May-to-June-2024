const score = 400;
console.log(score);

const balance = new Number(100);
console.log(typeof balance);
console.log(balance);

console.log(balance.toString());
console.log(typeof balance.toString()); // output => string

console.log(balance.toString().length); // output => 3

console.log(balance.toFixed(1));
console.log(balance.toFixed(2));
console.log(balance.toFixed(3));

const otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// ******************************************* Math ********************************************

console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(4.3));
console.log(Math.round(16.51));

console.log(Math.ceil(7.2));
console.log(Math.floor(7.9));


console.log(Math.pow(5,3));
console.log(Math.sqrt(36));

console.log(Math.min(4, 2, 1, 10, 50, 82));
console.log(Math.max(4, 2, 1, 10, 50, 82));


console.log(Math.random()) // => value is between 0 and 1

console.log(Math.floor(0 + Math.random()*(10))+1);


const min = 10;
const max = 20;
const random = Math.floor(min + Math.random()* (max-min) + 1);
console.log(random);


// **************************** Summary ************************************

// Number Methods : toString(), toFixed(), toPrecision(), toLocaleString()


// Math Methods : abs(), random(), round(), ceil(), floor(), pow(), sqrt(), min(), max()

