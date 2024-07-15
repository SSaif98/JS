const inputYear = '1991'
const month = '12'

console.log(parseInt(inputYear))
console.log(Number(month))

console.log(Number('john')) //NaN

console.log((inputYear).toString())
console.log(String(month))

const boolYear = true
const boolMonth = false

console.log((boolYear).toString())
console.log(String(boolMonth))

console.log(Boolean(inputYear))


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


//type coercion
console.log('I am ' + 25 + ' years oldd')//JS will automatically convert number : 25 in to string. 
//Plus sign is doing it.
console.log('10' - '5' - 3) //JS will automatically convert String : 10 & 5 in to number.
//Minus sign is doing it.

console.log('10' + 5 - 3) //JS will automatically convert String : 5 into string. Then the 
//Minus sign will convert 105 into number then subtracting it with 3. 

console.log(10 - '5' + '3') //JS will automatically convert String : 5 into number because of minus sign 
//then 10-5=5 after that the plus sign will number  5 in to string

console.log('10' * '5' - 3) //JS will automatically convert String : 10 & 5 in to number.
//multiple sign is doing it.

console.log('10' / '5' + 3) //JS will automatically convert String : 10 & 5 in to number.
//divide sign is doing it.

let n = '1' + 1
n = n - 1
console.log(n)//10

//TRUTHY AND FALSY VALUES
/*
  5 Falsy Values: 0, '', undefined, null, NaN
*/

console.log('5 Falsy Values: ')
var k = Boolean('')
console.log(k + ' ' + typeof (k))

var k = Boolean(0)
console.log(k + ' ' + typeof (k))

var k = Boolean(undefined)
console.log(k + ' ' + typeof (k))

var k = Boolean(NaN)
console.log(k + ' ' + typeof (k))

var k = Boolean(null)
console.log(k + ' ' + typeof (k))

var k = Boolean()
console.log(k + ' ' + typeof (k))


console.log('All truthy Values: ')


var k = Boolean(100)
console.log(k + ' ' + typeof (k))

var k = Boolean(-100)
console.log(k + ' ' + typeof (k))

var k = Boolean('100')
console.log(k + ' ' + typeof (k))

var k = Boolean({})
console.log(k + ' ' + typeof (k))


const money = 0

if (money) {
    console.log('Spend it')
} else {
    console.log('save it')
}


let height;

if (height) {
    console.log('Spend it')
} else {
    console.log('save it')
}
//Prompt
//prompt('Hello')//It always returns numbers in strings

//Statement vs Expression
// 1. Expression produce values
// 2. In template literal we can only insert expresions not statements

//        `This is statement ${25+26}`  --This will not work