class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{                         // inherits the User class
    constructor(username, email, password){
        super(username)             // super keyword does what .call() was doing before
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course has been added by ${this.username}`);
    }
}

const userOne = new Teacher("one","one@gmail.com","123")
userOne.addCourse()

const userTwo = new User("user");
userTwo.logMe()

console.log(userOne === userTwo); // output false
console.log(userOne === Teacher); // output false
console.log(userOne instanceof Teacher) ;// output true
console.log(userOne instanceof User); // output true






