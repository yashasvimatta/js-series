class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

const yashasvi = new User("yashasvi")
//yashasvi.createId()  // on using static now this will give error as its not allowed to use that fucntion

// sometimes we dont want to give access to a method to every object that has been 
// instantiated by that class. For that we use static . 
// static - stops that method or property from being used 

class Teacher extends User {
    constructor(username ,email){
        super(username)
        this.email = email
    }
}

const two = new Teacher("twouser","two@gmail.com")
two.logMe()
console.log(two.createId()) // will give error