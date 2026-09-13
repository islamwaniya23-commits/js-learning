let score ="33"

console.log(typeof score); // or console.log(typeof(score))
//if "33" type will give string

// if var is number type but we know that we need to use the value in string datatype
let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// now if somebody wrote 33abc it still gives number 
//when u will print valueinnumber it will give NaN
//NAN is a type => not a number

let scoree = null
let value= Number(scoree)
console.log(typeof value); // this will give 0

let scoreee = undefined
let val= Number(scoree)
console.log(typeof val); // this gives NaN 

// for boolean it give true to 1 and false to 0
// for string which is a name => NaN


let islogged = 1

let bolislogged = Boolean(islogged)
console.log(bolislogged); // gives true 


// if used "" => false
// if name => true
// if null => false

let somenumber = 33
let stringnumber= String(somenumber)
console.log(typeof stringnumber); // gives string and on printing the number prints 33 only

