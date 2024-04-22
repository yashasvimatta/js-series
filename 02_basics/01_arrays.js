 // array creates shallow copies (same reference , changes in orignal copy)
const  arr = [1,2,3,4,5]
 console.log(arr)

const myArray = new Array(1,2,3,4,5)

console.log(myArray[3])                            // access spefic element . outputs 4


// Array methods
myArray.push(6)
myArray.push(7)
console.log(myArray)
myArray.pop()
console.log(myArray)   

myArray.unshift(9)                              // outputs array with 9 as first element shift all values of array to right , time consuming method
myArray.shift()                                 // removes 9
console.log(myArray)            
const newArr = myArray.join()

console.log(newArr)

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3)               // solice changes the original array 
console.log("C ", myArray);
console.log(myn2);