let myName = "yashasvi";

console.log(myName.length);
// now i want ssomething that will create a property truelength with every string by default taht will give the actual length without spaces

let myHeros = ['thor','spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
}

Object.prototype.yashasvi = function(){
    console.log("Yashasvi is present in all objects");
}

Array.prototype.hiYashasvi = function(){
    console.log(`Yashasvi says hello`);
}
heroPower.yashasvi()
myHeros.hiYashasvi()       // array has the hiYashasvi function access as we gave it to array
// heroPower.hiYashasvi()      // this object doesnt have the property hiYashasvi 

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
// above is the old syntax


// modern syntax for prototypal inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)  // this way TeachingSupport can access all properties of the teacher 

let anotherUsername = "YashasviJS             "

String.prototype.trueLength = function(){
    console.log(`${this}`);         // output YashasviJS, happens becaise in anotherUsername we gave refernce of YashasviJS itself
    console.log(`True length is : ${this.trim().length}`); // output True length is : 10
}
anotherUsername.trueLength()
"Yashaasvi".trueLength();           // now as its injected in String itself , we can use it directly like this
"Summer".trueLength();              // each this will be different , whoever calls it will be thier this