const bookings = []
const createBooking = (flightNum, numPassengers = 1, price = 199*numPassengers) =>{
    //ES5
    // numPassengers = numPassengers || 1 
    // price = price || 1
    const booking ={
        flightNum, 
        numPassengers, 
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123') //{ flightNum: 'LH123', numPassengers: 1, price: 199 }
createBooking('LH122', 2,800) //{ flightNum: 'LH122', numPassengers: 2, price: 800 }
createBooking('LH122', 2) //{ flightNum: 'LH122', numPassengers: 2, price: 398 }
createBooking('LH122', null,800) //{ flightNum: 'LH122', numPassengers: null, price: 800 }
createBooking('LH122', undefined,800)  // {flightNum: 'LH122', numPassengers: 1, price: 800}


const flight = 'LH234'
const saif = {
    name : 'Syed Saif Ali',
    passport: 7865436789
}


const checkIn = function (flightNum, passenger){
    flightNum = 'LH999'
    passenger.name= 'Mr. ' + passenger.name
    if(passenger.passport === 7865436789){
        console.log('Checked In')
    }else{
        console.log('Wrong Passport')

    }
}
checkIn(flight, saif)
console.log(flight, saif)  
//LH234 { name: 'Mr. Syed Saif Ali', passport: 7865436789 } 
/* Here when we passed flight in the checkin function it copies the flight value to flightNum that's why when we changed the flightNum value 
it do not change the flight value. On the other hand when we passed saif through the function it copies the references to passenger so when we changes the passenger 
it changes the saif obj.
*/

//This what we are doing in the function
const flightNum = flight
const passenger= saif //When we try to copy object like this we are copying the reference only both points saif obj in memory


const newPassport= person => {
    person.passport = Math.trunc((Math.random() * 1000))
    return person.passport
}
console.log(newPassport(saif)) //Here we have passed saif obj in newPassport function which changes the person.passport value which is refering to saif.passport value
checkIn(flight, saif)


//Passin by value or Passing by reference
    //JS only have passsing by value
        