console.log("Hello World")

//comments
/*
Comments  
*/

let a = 6
let b = "c"
var age = 78
var name = "Saif"
let bol = true
const constVariable = 80

//if you want to see which variable if of which type.
console.log(typeof (b))
console.log(typeof (age))
console.log(typeof (bol))
console.log(constVariable)
/*
2 more datat types: null & undefined

null : if we define null value then this variable of datatype NULL
undefined: if we donot define any thing then it is undefined.
*/

let nullValue = null
let undefined
console.log(typeof (nullValue))
console.log(typeof (undefined))

let sum = a + age
console.log(sum)

/*
Difference between var and let and const
 let:   We can not redeclare varibale with let keyword
 var:   We can redeclare variable with var keyword
 const: We can not reassign or redeclare variable with const keyword.

 In var and let: We can reassign value in both type of variables.
*/

console.log(!bol)
console.log(bol)

console.log(5 === "5")



//variable declare with var in IF block | FOR LOOP can be accessible outside IF Block | FOR LOOP

if (true) {
    var k = 90
    console.log(k)
}

console.log(k)

for (var o = 1; o < 4; o++) {
    var j = 10
    j++
}

console.log(j)

//variable declare with var keyword in function then it can not be accessed directly.
function add() {
    var p = 9
}
console.log(add.p)
//console.log(p)


//variable declare with let in IF block | FOR LOOP can not access outside IF Block | FOR LOOP

if (true) {
    let z = 90
    console.log(z)
}
//console.log(z)

for (var o = 1; o < 4; o++) {
    let x = 10
    x++
}
//console.log(x)

//variable declare with let keyword in function then it can not be accessed directly.
function add() {
    let y = 9
}
console.log(add.y)
//console.log(y)



var i = 5
i < 6 ? console.log(i) : console.log(i + 4)

///////////////// LET /////////////////

//we can not redeclare same variable
/* 
let jo=90
let jo=100; 
*/

//we can reassign value variable
let ai = 45
ai = 150
console.log(ai)


///////////////// VAR /////////////////

//we can  redeclare same variable
var ko = 90
var ko = 100;
console.log(ko)

//we can reassign value variable
var ji = 45
ji = 120
console.log(ji)

///////////////// CONST /////////////////

//we can not redeclare same variable
/*
const j=90
const j=100; 
*/

//we can not reassign value to variable
/*
const ab=45
ab=100
console.log(ab)
*/


//OBJECT

var obj = { cric: "pak", age: 25 }

console.log(obj.age)


let sayHello = function () {
    console.log("hi")
}

sayHello();

let sq = (x) => x * x
console.log(sq(4))


var array2 = [12, 3, 4]
console.log(array2.length)

let total = array2.reduce((sum, totalSum) => sum + totalSum, 0)
console.log(total)


//DATA TYPS:
/*
Number= 1 ,100 ,1.2
String= "SAif" , 'hello world'
Boolean= True/False
Null= If we declare a variable and do not assign any value
Undefined= If do not declare a variable
Object= Arrays , Dates
Symbols= used with objects
*/

//if the variable is DEFINED  only but no value given then if we add any thing in it , it will as undefine and will not any thing init.
var y;
console.log(y, y + 3, `The value is ${y}`)
console.log(typeof (y)) //Undefined


//if the variable is set to null then if we add any thing in it , it will act as 0 and add the value in it.
var x = null;
console.log(x, x + 3, `The value is ${x}`)


let n = 'saif'

console.log(n == 'Saif') //case sensitive [false]
console.log(n > 'Saif') //case sensitive but small 's' is always greater then any capital letter [true]
console.log(n > 'crystal') // it compares s with c which comes first. true
console.log(n > 'Crystal')



/*
    ==  > abstract equalator or loss equalator it will not match type. Means different types can be equal
*/
console.log('//////////////////////')
let d = 25
console.log(d == 25) //true
console.log(d == '25') //true [it is not comparing the type of both that is why is saying true]
// JS is converting '25' into 25 called Type convertion

console.log(d === 25) //true
console.log(d === '25') //false [it is comparing the type of both that is why is saying false]
console.log(d !== '25') //true


console.log('//////////////////////')


let e = "25"
console.log(e == 25) //true [it is not comparing the type of both that is why is saying true]
// JS is converting 25 into '25' called Type convertion
console.log(e == '25') //true 

console.log(e === 25) //false [it is comparing the type of both that is why is saying false]
console.log(e === '25') //true 


//TYPE CONVERSION : Converting one data type to other
console.log('Type conversion')
var h = '25'
console.log(parseInt(h) + 2) //27
console.log(Number(h) + 2) //27

var h = 5
console.log(h.toString() + 5) //55 [it converted '5' into 5. Instead of adding 5+5 now its '5'+5]
console.log(String(h) + 5) //55

var j = 'hello'
console.log(Number(j) + 2) //NaN

var k = Boolean(100)
console.log(k + ' ' + typeof (k))

var k = Boolean(-100)
console.log(k + ' ' + typeof (k))

var k = Boolean('100')
console.log(k + ' ' + typeof (k))

var k = Boolean('')
console.log(k + ' ' + typeof (k))

var k = Boolean(0)
console.log(k + ' ' + typeof (k))