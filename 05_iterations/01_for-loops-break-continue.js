// for loop

// for(let i = 1; i <= 10; i++) {
//     if(i === 5) {
//         console.log("5 is the best number!");
//     }
//     console.log(i);
// }
// console.log(i);



// for(let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop Value: ${i}`);
//     for(let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop Value: ${j} and Outer Loop Value: ${i}`);
//         console.log(i + '*' + j + ' = ' + i * j);
//     }
// }


// let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
// for(let i = 0; i<myArray.length; i++) {
//     console.log(myArray[i]);
// }



// break , continue


for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log("5 has been detected");
        // break;
        continue;
    }
    console.log(i);
}