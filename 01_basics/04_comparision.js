// console.log(2 > 1);  //greater than
// console.log(2 >= 1); //greater than or equal to
// console.log(2 < 1); //less than
// console.log(2 == 1); //equal
// console.log(2 != 1); //not equal 


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// The reason is that an equality check == and comparisons > < >= <= work diffrently.
// Comparisions convert null to a number, treating it as 0.
// Thats why (3) null >= 0 is true (1) null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (Strict check)

console.log("2" == 2);
console.log("2" === 2);

