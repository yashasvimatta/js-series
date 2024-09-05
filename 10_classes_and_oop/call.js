// call() - passes current execution context to another function
// if a function is declared within the other function then how to get the values from that function
// to the current function , we use call for that.

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("setUsername is called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //.call holds the refernce of that function call //call gives this of that specific function 
    this.email = email
    this.password = password
}