 // array creates shallow copies (same reference , changes in orignal copy)

 const  arr = [1,2,3,4,5]
//  console.log(arr)

const myArray = new Array(1,2,3,4,5,6)

console.log(myArray(3))                            // access spefic element . outputs 4


// Array methods
myArray.push(6)
myArray.push(7)
myArray.pop()