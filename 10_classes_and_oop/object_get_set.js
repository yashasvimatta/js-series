// getter and setter in objects

const User = {
    _email: 'ym@gmail.com',             
    _password: "abc",


    get email(){                        
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const one = Object.create(User)  //create is  a factory function/ create a object based on user and call it one
console.log(one.email);


// .length property of array - behind the scene uses get set 