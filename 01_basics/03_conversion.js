let marks ="33"
console.log(typeof(marks))

let marksInNumber = Number(marks)               // converts string to number
console.log(typeof marksInNumber)               // output = number 


let score ="33abc"
console.log(typeof(score))                      // outputs- string
let scoreInNumber = Number(score)               // converts the value to a number , altough its not a number
console.log(typeof scoreInNumber)               // ouput - number even though it is not a number
console.log(scoreInNumber)                      // outputs NaN(not a number)


// true => 1 ; false => 0

let isUser = "Yashasvi"

let booleanIsUser = Boolean(isUser)
console.log(booleanIsUser)                  //output- true
// 1 => true; 0 => false
// "" => false
// "Yashasvi" => true

// similary can use String

//-----------------------------------------------Operations----------------------------------------------------

let str1 = "Hello"
let str2= " World"
console.log(str1+str2)
// console.log("1" + 2);                          // outputs 12
// console.log(1 + "2");                          // outputs 12
// console.log("1" + 2 + 2);                      // ouputs 122
// console.log(1 + 2 + "2");                      // outputs 32

let gameCounter = 100
++gameCounter;
console.log(gameCounter);                           // outputs 101