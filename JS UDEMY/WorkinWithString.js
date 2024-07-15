let airline = 'TAP Air Portugal'
let plane = 'A320'

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log('B200'[3])
console.log(plane.length)
console.log('B200'.length)

//String functions
console.log('Actual String: '+airline)
console.log("Index of P: "+airline.indexOf('P'))
console.log("Index of Portugal: "+airline.indexOf('Portugal'))

console.log("Last Index of a: "+airline.lastIndexOf('a'))
console.log("Index of p which is not there : "+airline.indexOf('p')) //It is case sensitive returns -1

//1- SLICE:
console.log(airline.slice()) // Returns complete string
console.log(airline.slice(4)) //Returns string starting from index 4
console.log(airline.slice(4,7)) //Returns string between 4 to 7 i.e 4,5,6
console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ')+1))
console.log(airline.slice(-2)) //Starts from end of the string
console.log(airline.slice(1,-1))


let checkMiddleSeat= (seat)=>{
    // let s = seat.slice(seat.length -1)
    let s = seat.slice(-1)

    s==='B' || s=== 'E' ? console.log('Its middle seat') : console.log('You got lucky')
}

checkMiddleSeat('11B')
checkMiddleSeat('11C')
checkMiddleSeat('11E')


//When ever we call a method on a string JS will automtically covert string premitive in string object called Boxing


console.log(airline.toLocaleLowerCase())
console.log(airline.toUpperCase())

//Fix captalization in string

let fNama= 'jOnAs'
let a = fNama.toLocaleLowerCase()
let ab= a[0].toLocaleUpperCase()+a.slice(1)
console.log(ab)


let correctNameFormat= (name)=>{
    let lowerName= name.toLocaleLowerCase()
    let formattedName = lowerName[0].toLocaleUpperCase() + lowerName.slice(1)
    return formattedName
}

console.log(correctNameFormat('hAider'))

const email= 'hello@jonas.io'
const loginEmail = ' Hello@Jonas.io \n'

// let splitEmail = loginEmail.split(' ')
// console.log(splitEmail)
// let finalEmail = splitEmail[1].toLowerCase()
// console.log(finalEmail)
// finalEmail === email ? console.log('WOW') : console.log('TRY AGAIN')


let finalEmail = loginEmail.toLowerCase().trim()
console.log(finalEmail)
finalEmail === email ? console.log('WOW') : console.log('TRY AGAIN')

// console.log(loginEmail.trimStart())
// console.log(loginEmail.trimEnd())

//Replacing => case sensitive

let priceGB = '277,89%'
let priceUS = priceGB.replace(',','.').replace('%','$')
console.log(priceUS)
let announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door', 'gate'))
console.log(announcement.replace(/door/g, 'gate'))

//Boolean
const newPlane= 'Boing'
console.log('Startswith: ')
console.log(newPlane.startsWith()) //false
console.log(newPlane.startsWith('B')) //true
console.log(newPlane.startsWith('b')+'\n') //false
console.log('Endswith: ')
console.log(newPlane.endsWith()) //false
console.log(newPlane.endsWith('g')) //true
console.log(newPlane.endsWith('G')+'\n') //false
console.log('Includes: ')
console.log(newPlane.includes()) //false
console.log(newPlane.includes('i')) //true
console.log(newPlane.includes('I')+'\n') //false


const checkBaggage= (items)=>{
    let baggage= items.toLowerCase()
    baggage.includes('knife') || baggage.includes('gun') ? console.log('You are not allowed to board') : console.log('You are allowed')
}

checkBaggage('I have Laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('got some snacks and a gun for protection')

//Split and join
console.log('syed+saif+ali'.split('+'))

let fname = 'Saif ali'
let [mName, lName] = fname.split(' ')
console.log(mName, lName)
console.log(['Mr', mName, lName.toUpperCase()].join(" "))

let passenger= 'jessica ann smith davis'

// let splitTest = (name)=>{
//     let splittedName =  name.split(' ')
//     console.log(splittedName)
//     let capitalized = []
//     for(let i=0; i<splittedName.length ; i++){
//         capitalized.push(correctNameFormat(splittedName[i]))
//     }
//     console.log(capitalized.join(' '))
// }
// splitTest(passenger)

let splitTest = (name)=>{
    let splittedName =  name.split(' ')
    let capitalized = []
    for(let i of splittedName){
        capitalized.push(i.replace(i[0], i[0].toUpperCase()))
    }
    console.log(capitalized.join(' '))
}
splitTest(passenger)


const message = 'Go to gate 23!'
console.log(message.padStart(25, '+')) //25 means the length of mesage string should be 25 after pading the string with + from start
console.log('Saif'.padStart(25, '+'))
console.log(message.padStart(25, '+').padEnd(30, '+'))  //25 means the length of mesage string should be 25 after pading the string with + from start then make the length to 35 after pading the string with + from end


//How to mask credit card number?

const maskNumber = (number) => {
    let str = String(number)
    let lastDigits = str.slice(-4)
    console.log(lastDigits.padStart(str.length,'*'))
}

maskNumber(4567890346789)
maskNumber(8899768542111143)


//Repeat
const msg='Bad weather... All Departures are delayed '
console.log(msg.repeat(5))