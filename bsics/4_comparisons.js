console.log(2>1);
console.log(2>=1);
console.log(2 ==1);
console.log(2 != 1);

console.log("2" > 1); // sometimes it wont give the output needed
console.log("02" > 1); // it is better to use the same data type

console.log(null > 0); // false baaki dono NaN M CONVERT KRTE
console.log(null == 0); // false it happened because of diff data type
console.log(null >= 0); // true here null is converted to 0

console.log(undefined == 0); // false always
// try to avoid null and undefined conversions

// === strict check

console.log("2" === 2); //checks equality in terms of data types
// == converts the data types then compare


