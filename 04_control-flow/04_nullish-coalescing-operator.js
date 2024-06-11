// Nullish Coalescing Operator (??)  => works only for null or undefined
// works to provide a fallback value in case of null or undefined


let val1;

val1 = 31 ?? 15;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 55;
console.log(val1);

val1 = null ?? 33 ?? 66;
console.log(val1);

val1 = undefined ?? null ?? 100;
console.log(val1);