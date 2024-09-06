// getter setter in classes
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    // getter and setter get made as a method on all variables
    get password(){
        return `${this._password}abc`
    }         // if you want to geta value from outside class use getetr
    set password(value){     // if there is get there will be set
        this._password = value // used to set values from outside class
    }   // problem is constructor and set both are setting values, hence we'll get an error
        // so we use different variable altogether _password

//value storing to database thru set but if someone wants to get the value it will be diffreent

    get email(){
        return this._email.toUpperCase() //getters have return statement
    }
    set email(value){
        this._email = value             // setters dont have a return statement
    }
}

const yashasvi = new User("yashasvi@gmail.com","1234")
console.log(yashasvi.email)