const userEmail = "abc@gmail.com"
if (userEmail){
    console.log("Email received");
} else{
    console.log("Dont have user")
}
// falsy values
 // false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values
 // "0", "false", " ", [], {}, function(){}
 
 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0) {    //Object.keys(emptyObj) this will return an empty array and length of empty aray 0 will check if its empty or not
     console.log("Object is empty");
 }


 // Nullish Coalescing Operator (??): null and undefined

 let val1;
 val1 = null ?? 10              // if we get a value then assign value otherwise null 
console.log(val1)               // output 10
// val1 = undefined ?? 10       // similar, output 10

val1 = null ?? 10 ?? 20            // output 10 - will output the first value it gets


// Terniary operator                    // syntax for if else

// condition ? true : false                // if conndition is true execute the first statement else execute statement after :

const price  = 100
price >= 90 ? console.log("price is high"): console.log("price is cheap")       // output "price is high"