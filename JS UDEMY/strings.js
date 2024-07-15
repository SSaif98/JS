let day = 'tuesday '


let subDay1 = day.split('s')
console.log(subDay1[0])
console.log(subDay1[1].length)
console.log(subDay1[1].trim().length)

//trim => it trims white spaces

let date = '21'
let nextDate = '27'
let diff = parseInt(nextDate - date)
console.log(diff)

console.log(diff.toString())

var newDay = day + "is funday."
console.log(newDay)
var count = 0
var val = newDay.indexOf('day')

while (val !== -1) {
    count++
    val = newDay.indexOf('day', val + 1)
}
console.log(count)




//STRINGS:

console.log('Hello')

let myName = 'Saif'
console.log(myName)

let fName = 'Syed'
let lName = 'Saif Ali'
console.log(fName + ' ' + lName)

//character
console.log(myName[0])

//length
console.log(lName.length) //length is a property

//String Method

console.log(fName.toUpperCase())  // toUpperCase() is method,  length is not a method it is a property
console.log(fName)

let lowerLName = lName.toLowerCase()
console.log(lowerLName)
// Function : a snip of code performs specific task
// Method : Function associated with with particular object 

console.log(lowerLName.charAt(5)) //returns char at 5th index
console.log(lowerLName.includes('a')) //returns true/false

console.log(lowerLName.endsWith('i')) //returns true/false
console.log(lowerLName.endsWith('z')) //returns true/false

console.log(lowerLName.indexOf('f')) //returns index of char 'f'

console.log(lowerLName.indexOf('a'))
console.log(lowerLName.lastIndexOf('a')) //returns last index of char 'a'

////// SLICE (starting index , end index-1) ////////

let newLower1 = lowerLName.slice() //it will slice complete string and save it in other variable
console.log(newLower1)

let newLower2 = lowerLName.slice(5) //it will slice after 5th index (0-4) and save it in other var
console.log(newLower2)

let newLower3 = lowerLName.slice(2, 5) //it will slice from 3rd index to 5-1 index
console.log(newLower3)


let splitExample = "Syed Haider Ali"

let splitted = splitExample.split(' ') //it will split the string when the space occur
console.log(splitted)

let splittedString = splitExample.split('d') //it will split the string when the "e" letter occur
console.log(splittedString)

let splittedString1 = splittedString[1]
console.log(splittedString1.trim()) // it tirms white spaces from left right

//SUBSTR  (starting index , number of indexes we want)

let str = "saifali7522@gmail.com"

console.log("Slice: " + str.slice(0, 10)) //it will print 0 to 9 index
console.log("Substr: " + str.substr(0, 10)) //it will print index staring from 0 till 10 charactore


console.log("Slice: " + str.slice(4, 10)) //it will print 0 to 9 index
console.log("Substr: " + str.substr(4, 10)) //it will print index staring from 4 till 10 characters

//REPLACE : replaces a char with another character

console.log("Replace: " + str.replace('a', 'o')) //it will replace first "a" charac with "o"