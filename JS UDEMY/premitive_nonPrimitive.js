console.log(`/////////////////////////////// Premitive Type  ///////////////////////////////`)

let scoreOne = 100
let scoreTwo = scoreOne
console.log(`Score#1 is ${scoreOne} ,  Score#2 is ${scoreTwo}`)

//if we use premitive data type to store data in database it stores in a STACK 
// If we update the any thing in one stack value it will not reflect the changes in other stack even though it was the copy of 1st var in stack


let score1 = 50
let score2 = score1

score1 = 60

console.log(`Score#1 is ${score1} ,  Score#2 is ${score2}`)

console.log(`/////////////////////////////// Reference Type  ///////////////////////////////`)

//if we use Reference data type to store data in database it stores in a HEAP 
// If we update the any thing in one object value it will  reflect the changes in other object if it was the copy of 1st var in heap
// basically in heap is pointed by a pointer we make 2 object equal then there pointer will be same

let objScore1 = {
    score1: 500
}

let objScore2 = objScore1
console.log(`objScore#1 is ${objScore1.score1} ,  objScore#1 is ${objScore1.score1}`)

objScore1.score1 = 100

console.log(`objScore#1 is ${objScore1.score1} ,  objScore#1 is ${objScore1.score1}`)

/*
Premitive Types:

Number
String
Boolean
Null
Undefined
Symbols

Premitive types are save in stack in DB
Reference types are save in heap in DB

Reference Types:

Object Literals
Arrays
Functions
Dates
All other objects

*/

let myName = "Saif"
let nameChar = []
for (var i = 0; i < myName.length; i++) {

    nameChar = myName[i]

}
