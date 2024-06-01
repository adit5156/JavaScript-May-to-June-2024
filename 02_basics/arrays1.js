// Arrays => shallow copy of an object is a copy whose properties share the same reference.

const myArr = [6,12,18,24,30,36];
console.log(myArr);
console.log(myArr[1]);
console.log(myArr[5]);

// Array Methods 

myArr.push(25);
console.log(myArr);

myArr.push(50);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.unshift(100);
console.log(myArr);

console.log(myArr.includes(2));
console.log(myArr.includes(12));
console.log(myArr.includes("Aditya"));

console.log(myArr.indexOf(300)); // Output => -1
console.log(myArr.indexOf(24));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

// slice 

const myNewArr1 = myArr.slice(1,3);
console.log("Orginal Array => ", myArr);
console.log("Sliced Array => " ,myNewArr1);

// splice 

const myNewArr2 = myArr.splice(1,4);
console.log("Original Array => ", myArr);
console.log("Spliced Array => " ,myNewArr2);


// Array Methods
/*
1) push()
2) pop()
3) unshift()
4) shift()
5) includes() => returns true or false
6) indexOf() => returns value if true / returns -1 if value does not exist
7) join() => converts array into string
8) slice() => original array remains unchanged
9) splice() => original array gets changed
*/