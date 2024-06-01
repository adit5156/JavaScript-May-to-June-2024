// Dates

const currentDate = new Date();
console.log(currentDate);
console.log(typeof currentDate);       // Output => object


console.log(currentDate.toString());
console.log(currentDate.toLocaleString());
console.log('*********************** " Date and Time Methods Above " ***************');

console.log(currentDate.toDateString());
console.log(currentDate.toLocaleDateString());
console.log('*********************** " Date Method Above " ********************');

console.log(currentDate.toTimeString());
console.log(currentDate.toLocaleTimeString());
console.log('*********************** " Time Method Above " *************');

const customDate1 = new Date(2024, 1, 29, 5, 9);   // YYYY-MM-DD HH-MM     // Jan => 0, Feb => 1, Mar => 2
console.log(customDate1.toLocaleString());

const customDate2 = new Date("2022-12-31");        // YYYY-MM-DD
console.log(customDate2.toLocaleDateString());

const customDate3 = new Date("10-23-2010");        // MM-DD-YYYY
console.log(customDate3.toLocaleDateString());



// TimeStamps

const myTimeStamp = Date.now();
// console.log(myTimeStamp);
const altTimeStamp = new Date().getTime();
// console.log(altTimeStamp);

// console.log(customDate3.getTime());


console.log((Date.now()/1000));
console.log((Date.now()/1000).toFixed(0));
console.log(Math.round(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}));