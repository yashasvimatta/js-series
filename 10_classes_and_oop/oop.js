// object literal

const user ={               // literally a object, this si the basic unit 
    username1: "Yashasvi",
    loginCount: 5,
    signedIn: true,

    getUserdetails: function(){
        //console.log("Got user details");
        // this keyword talks about current context
        //console.log(`Username: ${username}`) // this will give error as we dont know which username we are talking about
        console.log(`Username: ${this.username1}`); // for telling it that we are talking about current context we use usernaem , now output will be Yashasvi
        console.log(this);
    }
}
//console.log(this); //will be empty 
console.log(user.username1);
console.log(user.getUserdetails())

//constructor function

function User(username, loginCount, isLoggedIn){
    //username = username // as this is confusing 
    this.username = username; // we write this left side is the variable and right is the value being passed
    //this is a blank object and we are adding values to it this.username etc
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this  // returned the whole object 

}

const userOne = new User("yashasvi",12,true) // te constructor function gives a new instance
//const userTwo = User("matta",17,false) // this will override the previous instance tehrefore we use new keyword
const userTwo = new User("matta",17,false)
console.log(userOne)
console.log(userTwo)

// 1.new keyword first creates an empty object that is called an instance 
// 2. then the constructor function is called due tot he new keyword- packs all arguements
// 3. then the arguements get injected in 'this' keyword and we get them


console.log(userOne.constructor);  // output [Function: User]
// so basically the constructor property is a refernce to the fucntion itself
