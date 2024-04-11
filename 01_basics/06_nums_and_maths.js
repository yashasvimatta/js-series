const marks = 500
// console.log(marks);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const bignum = 1000000
console.log(bignum.toLocaleString());                        // output 1,000,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math.random());                                 // gives number between 0 and 1
console.log((Math.random()*10) + 1);                        // to shift to right but floor will give 0.1 as 0 
console.log(Math.floor(Math.random()*10) + 1);              // to get values between 1 to 9


//sometimes we need values bwteen a spefic range 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min )                 // will give whole values bwteen 10 and 20
