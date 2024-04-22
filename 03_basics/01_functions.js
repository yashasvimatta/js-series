// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){     
    return number1 + number2                        // returns the value , the function above didnt return any value so result was undefined
}
const result = addTwoNumbers(3, 6)
// console.log("Resut: ", result)

function loginMessage(user) {
    if(!user){                              // !user means not undefined(euivalent to user === undefined).If we wrote if(undefined) then condition would not run as it would be false
        console.log("Please enter username")
        return 
    }
    return `${user}, you are logged in `
}
console.log(loginMessage("Yashasvi"))  
console.log(loginMessage())       // if you dont pass any value then it wil show "undefined , you are logged in"

/* ... is the rest operator. Its usage defined whether it is 
used as rest or spread. Here we dont know how many 
arguements or values we'll get. On using this operator it returns all values passed.
*/
function calculateCartTotal(...num1){       
        return num1
}
console.log(calculateCartTotal(10, 20, 40, 80))             // outputs [ 10, 20, 40, 80 ]

function calculateCartPrice(val1, val2 , ...num1){       
    return num1
}
console.log(calculateCartPrice(10, 20, 40, 80))             // outputs [40, 80 ]


const user = {
    username: "yashasvi",
    total: 210
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.total}`)
}
handleObject(user)                                          // output is "Username is yashasvi and price is 210"

// you can pass objects directly as well 
handleObject({
    username: "sammy",
    total: 2100
})

// similary with arrays

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));