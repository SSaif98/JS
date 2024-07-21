
const lufthansa = {
    airline : 'Lufthansa',
    iataCode : 'LH',
    bookings: [],
    // book:  function(){}
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name})
    }
}

lufthansa.book(3478, 'Saif Ali')
lufthansa.book(6523, 'Osama Ali')

// console.log(lufthansa.bookings)

const book = lufthansa.book

const eurwings = {
    airline : 'Eurowings',
    iataCode : 'EW',
    bookings: []
}
//Will not work
//book(23, 'Saif')

/*
By using call function we are telling the book function to point which obj as the book function uses this keyword it should know 
from where we are calling it.
*/
book.call(eurwings, 23, 'Saif')
console.log(eurwings)

book.call(lufthansa, 67, "Haider")
console.log(lufthansa)


//Apply method
//It receives the arguments in array

const data = [90, "Anwer"]
book.apply(eurwings, data)
console.log(eurwings)


book.call(lufthansa, ...data)
console.log(lufthansa)


//BIND Method
/*
Bind does not imediatelly call the function instead returns a new function
*/
const bookEW = book.bind(eurwings)
const bookLH = book.bind(lufthansa)
bookEW(9090, 'Atiya Ali')
bookLH(7878, 'Atiya Ali')
// console.log(eurwings)

const bookEW23 = book.bind(eurwings, 23)

bookEW23('Jonas')
bookEW23('Alys')

//Partial function

// const addTax = (rate, value)=>{
//     return value + value*rate
// }

// console.log(addTax(0.10, 400))

// const addVAT = addTax.bind(null, 0.23)
// console.log(addVAT(300))

const addTaxx = (rate)=>{
    return function (value){
        return value + value*rate
    }
}
const addVAT2 = addTaxx(0.23)
console.log(addVAT2(600))



