//First class functions
/*
Functions are values
Functions are just another type of objects
We can pass function in argument of other function
*/

//Higher order function
/*
A function that receives another function as an argument , that returns a new function , or both
*/

const word = (str) => {
    return str.replace(/ /g, '').toLowerCase()
}

// console.log(word('Syed Saif Ali'))

const upperFirstWord = (str) => {
 let [first, ...other] =    str.split(" ")
 return [first.toUpperCase(), ...other].join(' ')
}
// console.log(upperFirstWord('Saif Ali'))

//Higher order function

const transformer = (str, fn) =>{
    console.log(`Origial String : ${str}`)
    console.log(`Transformed String : ${fn(str)}`)
    console.log(`Transformed By: ${fn.name}`) //Return name of the function
}

 transformer('JavaScript is the best', upperFirstWord)
 transformer('JavaScript is the best', word)

//Abstraction :  Hide detail of code implementation
//The transformer function doesn't know how the transformation is done