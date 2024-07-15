/*
difference between function declaration & function expression
If we do create a function using "function declaration" then js(hosting) will put the function at the top automatically at the backend
and we can call it any where.
If we do create a function using "function expression" then js(hosting) does not work here and we can not call this function any where
but after the declaration only
*/

//function declaration
function greet() {
    console.log('greeting')
}
greet()

//function expression
//when ever we declare a variable and set it equal to something then this is now expression.

const speak = function (a) { // "a" is parametor
    console.log(`'speak good day',${a}`)
}

const add = function (a = 25, b = 45) {
    console.log(a + b)
}
const loud = () => {  //arrow function
    console.log('loud')
}
get = function () {
    console.log('get')
}
set = () => {  //arrow function
    console.log('loud')
}
speak('Saif') // "Saif" is argument
loud()
get()
set()
add() //In this function we are not passing any arguments the funcion will get it from its parametor
add(100, 12) //In this function we are  passing  arguments which will override the values that parametor of already has
add(12) //In this function we are  passing  1st argument only which will override 1st parametor only of the fucntion


arrowFun = arrow => {  /*arrow function if we have only one parathesis then we can write this also like note writing it (arrow)=> just
                    write arrow => */
    console.log('Arrow Function', arrow)
}
arrowFun('Saif')

//RETURN FUNCTION

const calcArea = (r) => {
    // let area = 3.142*r**2
    return 3.142 * r ** 2
}

let area = calcArea(3)
console.log('Area of circle: ', area)

const calcVol = (area) => {
    return area * 5
}

let volume = calcVol(area)
console.log('volume of circle: ', volume)

/* if we have only  if we have only one parathesis then we can write this also like not writing it '(r)=>' just write 'r=>'
    also we have only one line in the fuction which also we returning the we can erase 'return' keyword also remove the curly braces
*/
const arrowFun2 = r => 3.142 * r ** 2
console.log('Arrow function : ', arrowFun2(3))


const bill = (products, tax) => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
        total += (products[i] + products[i]) * tax

    }
    return total
}
let products = [1, 2, 3, 4, 5]
console.log(bill(products, 5))




function f1() {
    console.log("F1")
}

const f2 = function () {
    console.log("F2")
}

const f3 = () => {
    console.log("F3")
}

const f4 = () => console.log('F4')

const f5 = r => 3.142 * r ** 2

f1()
f2()
f3()
f4()

console.log(f5(2))

function age1() {
    return 25
}
console.log(age1())

const age2 = function () {
    return 35
}
console.log(age2())

const age3 = () => {
    return 33
}
console.log(age3())

const age4 = age => 25 - age

console.log(age4(22))


const cutFruit = (fruit) => {
    return fruit * 3
}

const fruitProcessor = (apples, oranges) => {

    const applePieces = cutFruit(apples)
    const orangePieces = cutFruit(oranges)

    const juice = console.log(`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`)
    return juice;
}
fruitProcessor(2, 3)