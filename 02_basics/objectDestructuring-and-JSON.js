const course = {
    courseName: "JavaScript in One Go",
    coursePrice: "999",
    courseInstructor: "Aditya"
};

// console.log(course.courseInstructor);


// Object Destructuring

// Syntax

// let/const {object_key : short_name} = object;


const {courseInstructor: instructor} = course;
console.log(instructor);


// JSON => JavaScript Object Notation

/*
{
    "key" : "value"
}
*/

// Example of JSON

/*
{
    "name": "Aditya",
    "courseName": "JavaScript in One Go",
    "price": "free"
}
*/

/*
[
    {},
    {},
    {}
]
*/