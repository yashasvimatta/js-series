// javascript has protypal inheritance
function multiplyby5(num){
    return num * 5
}

multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);  // output will be 2
console.log(multiplyby5.prototype)   // output {}
// fucntion is function as well and a object as well.. everything in js is an object

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){            // inject a function increment in prototype of createUser
    this.score++    //jisne bhi bulaay hai increase their value - this is what this is doing
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const one = new createUser("one",25)
const two = new createUser("two",67)
one.printMe() // we dont need tot write one.prototype.printMe , JS will understand itself
// without new we will get error that it cannot read properties of undefined
// the properties that we declared have been made in function but when we declared fucntion we didnt tel const one that these properties have beenmade
// for that we use new keyword. if the properties were given within createUser then its okay otherwise gotta use new


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked 
to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/