
const user = {
    username: "yashasvi",
    age: 18,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`); //this refers to current context
        console.log(this);
    }

} 
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this)                   // outputs {} becuase right npow we are node env
// if we output this in browser console. this will contain windows refernce

function one(){
    let username= "yashasvi"
    console.log(this.username)              // outputs undefined. this context works in object not in function
}
// one()

// arrow function

const two = () => {
    let username= "yashavsi"
    // console.log(this.username)
}

const addFun = (number1,number2)=>{
    return number1 + number2
}
console.log(addFun(7, 9))

//implicit return 
const addOne = (number1,number2) => number1 + number2 // no need to write the return with implicit return 
const addtwo = (number1,number2) => (number1 + number2) // if you use curly braces then need to write the return keyword, if parenthis used no need for return keyword 
console.log(addOne(7, 9))

// for object -curly brackets inside of parenthesis
const addthree = (number1,number2) => ({username: "yashasvi"})