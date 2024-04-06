// console.log("2"> 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* 
    equality check == and comparisions work differently 
    comparision converts null to a number , treating it as 0
    therefore >= 0 is true and > is false 
*/


// ===

console.log("2" === 2)                  // outputs false as === checks value as well as type of the operand
