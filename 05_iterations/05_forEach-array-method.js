const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (element, index) {
//     console.log(index, element);
// });


// function printMe(element) {
//     console.log(element);
// }
// coding.forEach(printMe);

// coding.forEach((element, index, arr) => {
//     console.log(index, element, arr);
// });


const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
]

myCoding.forEach((element, index, arr) => {
    console.log(index, element);
});

myCoding.forEach((element) => {
    console.log(element.languageName);
});