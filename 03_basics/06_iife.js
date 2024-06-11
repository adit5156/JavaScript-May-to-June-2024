// Immediately Invoked Function Expression (IIFE)

// function chai() {
//     console.log(`DB Connected`);
// }
// chai();

// To prevent the global object clutter we use IIFE 

// () Function Declaration () Function Execution / Function Call

// ; is used after invoking a function so to break the flow of execution of the program

(function chai() {
    // Named IIFE
    console.log(`DB Connected`);
}) ();


( () => {
    // Unnamed IIFE
    console.log(`DB2 Connected Successfully`);
}) ();

((name) => {
    // Unnamed IIFE
    console.log(`${name}, Welcome to the database!`);
}) ("Aditya");

(function namedIIFE() {
    // Named IIFE
    console.log("Welcome to Unnamed IIFE");
}) ();