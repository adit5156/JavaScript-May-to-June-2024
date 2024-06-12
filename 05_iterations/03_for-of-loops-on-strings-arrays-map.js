// for of loop

// ["", "", ""]
// [{}, {}, {}]

// For Of on Array
// const arr = [1, 2, 3, 4, 5];
// for(const iterator of arr) {
//     console.log(iterator);
// }


// For Of on Strings
// const greetings = "Hello World!";
// for(const iterator of greetings) {
//     if(iterator === " ") {
//         continue;
//     }
//     console.log(`Each character is: ${iterator}`);
// }


// Maps => collection of key value pairs with no duplicate values 

// Syntax of Map => Map(item_length) {key => value}


// const map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// console.log(map);       
// Output => Map(3) {'a' => 1, 'b' => 2, 'c' => 3}


const map2 = new Map();
map2.set("IN", "India");
map2.set("USA", "United States of America");
map2.set("UK", "United Kingdom");
map2.set("IN", "India");
// console.log(map2);
// Output => Map(3) {'IN' => 'India', 'USA' => 'United States of America', 'UK' => 'United Kingdom'}

for(const [key, value] of map2) {
    console.log(key, " : ", value);
}