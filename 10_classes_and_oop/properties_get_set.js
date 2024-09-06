function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {   //defineproperty is a getetr setter's property
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const yashasvi = new User("yashasvi@gmail.com", "123")

console.log(yashasvi.email);