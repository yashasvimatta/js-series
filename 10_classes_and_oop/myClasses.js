// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){                      // no need of function keyword when declaring fxn inside class
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const one = new User("one", "one@gmail.com", "123")

console.log(one.encryptPassword());         // output 123abc
console.log(one.changeUsername());          // output ONE

// behind the scene

function UserNew(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
UserNew.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
UserNew.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`  
}
const userNew = new UserNew("abc","abc@gmail.com","098")
console.log(userNew.encryptPassword());
console.log(userNew.changeUsername());

