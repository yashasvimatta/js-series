
// console.log(Math.PI);            output 3.14
// Math.PI = 5                      this wont overwrite the value of pi 
// console.log(Math.PI)             ouput will still be 3.14
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);            /* output { 
                                            value: 3.141592653589793,
                                            writable: false,
                                            enumerable: false,
                                            configurable: false
                                        }
                                     */ // the writable proptery is hardcoded false so we cant change 

// we can define our own such properties that cant be writable


const one = {
    name: 'phone',
    price: 23000,
    isAvailable: true,

    orderOne: function(){
        console.log("order rejected");
    }
}
console.log(Object.getOwnPropertyDescriptor(one,"name")); // we need to specify property as well with the object 
/* output
{
  value: 'phone',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
// now in order to change the property
Object.defineProperty(one, "name",{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(one,"name"));

// for (let [key,value] of one) { // will give error
//     console.log(`${key} ${value}`);    
// }
for (let [key,value] of Object.entries(one)) { // this is how we iterate object
    if (typeof value !== 'function') {         // this condition will take care if theer is a function in the object
        console.log(`${key} ${value}`);  
    }       
}               // output price 23000
                // isAvailable true
                // this happens as we wrote writable: false for 'name' keyword
