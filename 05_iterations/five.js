//for each

const languages= ['english','hindi','sanskrit','marathi','kashmiri']

languages.forEach( function(item){
    // console.log(item)
}) // remove the function name and the parameter will be the value that forEach brings in everytime


languages.forEach( (item)=> {           //similarly for arrow function
    // console.log(item);
})

function printme(item){
    console.log(item);
}
languages.forEach(printme)              // so we can pass a function that is writte somewhere else, as well


languages.forEach((item,index,arr)=>{                   //forEach has other paramenters like index and entire array as well
    console.log(item,index,arr)
})

const lang = [
    {
        langName: "Javascript",
        langExt: "js"
    },
    {
        langName: "Python",
        langExt: "py"
    },
    {
        langName:"Java",
        langExt: "java"
    },
]

lang.forEach( (item) =>{
    console.log(item.langName);
})

 