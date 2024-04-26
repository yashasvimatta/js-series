//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "yashasvi"

    function two(){
        const website = "LinkedIn"
        console.log(username)
    }
    // console.log(website)             // will give error as website's scope was only till two()
    two()                       
}
one()                           // when one( gets executed two also gets executed

if(true){
    const username = "yashasvi"
    if (username === "yashasvi"){
        const website = " LinkedIn"
        // console.log(username + website )        // output "yashasvi Linkedin"
    }
}

// ----------------------interesting-------------------


addOne(8)                       // if you call this function before declaration it still runs
function addOne(num){
    return num + 1
}

addTwo(5)                                       // but if you call this function before declaration, it throws error
const addTwo = function(num){                   // different way to declare a function
    return num + 2
}
