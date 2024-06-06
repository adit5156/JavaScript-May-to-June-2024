// Global Scope 

// var c = 300;
let a = 300;

if(true) {
    // Block Scope
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log(c);
    console.log("Inner Scope: ",a)
}

console.log("Global Scope: ",a);
// console.log(b);
// console.log(c);