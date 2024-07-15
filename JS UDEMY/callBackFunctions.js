
// Callback Functions
//We pass a function  as an argument in another function call

const myFunc= function(callingMyFunc){
    let value= 50
    callingMyFunc(value)
}

myFunc(function callMyFunc(value){
    console.log(value)
})

/*
const myFunc2= callBackFunc =>{
    let value= 100
    callBackFunc(value)
}


myFunc2( value =>{
    console.log(value)
})

myFunc2( (value) =>{
    console.log(value)
})
*/

//forEach method is used to iterate thorugh an array just like a loop
//forEach method requires a call back function

// Iterating thorugh an array and displaying on the content of an array
var people=['saif','haider', 'anwer', 'tooba']
people.forEach((person)=>{
    console.log(person)
}) 

/* saif
haider
anwer
tooba
*/

//Iterating thorugh an array and displaying on the content of an array

var people=['A','B', 'C', 'D']
people.forEach((person, index)=>{
    console.log(person, index)
}) 

/* 
A 0
B 1
C 2
D 3
*/

var people= ['Element#','Element#','Element#','Element#' ]
const persons= (p, i)=>{
    console.log(`${p} ${i}`)
}
people.forEach(persons); //for each receives a call back function either we call another function or create on spot