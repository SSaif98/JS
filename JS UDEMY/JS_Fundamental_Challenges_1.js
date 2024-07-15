

//Coding Challenge #1 & 2

const markWeight = 78
const markHeight = 1.69

const johnWeight = 92
const johnHeight = 1.95

let markBMI = Math.round(markWeight / markHeight ** 2)
let johnBMI = Math.round(johnWeight / johnHeight ** 2)
console.log(markBMI, johnBMI)

let higherBMI = markBMI > johnBMI
console.log(higherBMI)


if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) \n\
    is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's ${markBMI}!`)
}

//Coding Challenge #3


/*
//TASK # 1

let dolphins = [96, 108, 89]
var dolphinsTotal = 0
for (var i = 0; i < dolphins.length; i++) {
    dolphinsTotal += dolphins[i]
}

let dolphinsAvg = Math.round(dolphinsTotal / 3)

let koalas = [88, 91, 110]
var koalasTotal = 0
for (var i = 0; i < koalas.length; i++) {
    koalasTotal += koalas[i]
}
let koalasAvg = Math.round(koalasTotal / 3)

if (dolphinsAvg > koalasAvg) {
    console.log("Dolphins are winners")
} else if (dolphinsAvg < koalasAvg) {
    console.log("Koalas are winners")
} else if (dolphinsAvg === koalasAvg) {
    console.log("Draw")
} else {
    console.log('Try again')
}
*/


/*
//TASK # 2

let dolphins = [97, 112, 101]
var dolphinsTotal = 0
for (var i = 0; i < dolphins.length; i++) {
    dolphinsTotal += dolphins[i]
}

let dolphinsAvg = Math.round(dolphinsTotal / 3)


let koalas = [109, 195, 123]
var koalasTotal = 0
for (var i = 0; i < koalas.length; i++) {
    koalasTotal += koalas[i]
}
let koalasAvg = Math.round(koalasTotal / 3)


if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
    console.log("Dolphins are winners")
} else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
    console.log("Koalas are winners")
} else if (dolphinsAvg === koalasAvg) {
    console.log('Draw')
}

*/

/*

//TASK # 3

let dolphins = [97, 112, 101]
var dolphinsTotal = 0
for (var i = 0; i < dolphins.length; i++) {
    dolphinsTotal += dolphins[i]
}

let dolphinsAvg = Math.round(dolphinsTotal / 3)


let koalas = [97, 112, 101]
var koalasTotal = 0
for (var i = 0; i < koalas.length; i++) {
    koalasTotal += koalas[i]
}
let koalasAvg = Math.round(koalasTotal / 3)


if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
    console.log("Dolphins are winners")
} else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
    console.log("Koalas are winners")
} else if (koalasAvg >= 100 && dolphinsAvg >= 100 && koalasAvg === dolphinsAvg) {
    console.log('Both wins')
} else {
    console.log('No one wins')
}

*/


//Coding Challenge # 4


let bill = 275
let tip = 0

bill >= 50 && bill <= 300 ? tip = bill * (15 / 100) : tip = bill * (20 / 100)

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)


// if (bill >= 50 && bill <= 300) {
//     tip = bill * (15 / 100)
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
// } else {
//     tip = bill * (20 / 100)
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// }


//During Production: Use Babel to transpile and polyfill your code(converting back to ES5 to ensure browser compatibility for all users.)