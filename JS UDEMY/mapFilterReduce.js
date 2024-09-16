/*
MAP:
Create a new array
map returns a new array containing the results of applying an operation of all original array elements

FILTER:
filter returns a new array containing the array elements that passed a specific text condition

REDUCE:
reduces all array element down to one single value (adding all elements together)
*/

let movements= [200,-566,77,80,-45,87,-34,-90]
let euroToUsd = 1.1

let movementsUSD = movements.map(function(mov){
    return Math.abs(mov*euroToUsd)
})
console.log(movementsUSD)
console.log(movements.map( mov =>{ return mov*euroToUsd}))

let movementsDesc = movements.map((movement, i, arr)=>{
    return `Movement ${i+1}: You ${movement>0 ? `deposited` : "withdraw"}  ${Math.abs(movement)} | ${arr}`
})

console.log(movementsDesc)

let user = 'Steven Thomas Williams'
let createUserName= (user) => {
    return user.toLowerCase().split(' ').map((user)=>  user[0]).join('')
}

// console.log(createUserName(user))


let acc1= {
    owner: 'Steven Thomas Williams',
    movements: [200, -90, 987, -56],
    interestRate : 0.7,
    pin : 1111
}

let acc2= {
    owner: 'Jorge Clarke',
    movements: [200, -90, 987, -56],
    interestRate : 0.7,
    pin : 2222
}
let acc3= {
    owner: 'Bob Johnson',
    movements: [200, -90, 987, -56],
    interestRate : 0.6,
    pin : 3333
}
let acc4= {
    owner: 'Stephin Clarke',
    movements: [200, -90, 987, -56],
    interestRate : 0.9,
    pin : 4444
}

let accounts = [acc1, acc2, acc3, acc4]
// console.log(accounts)

// for(let account of accounts){
//     account.userName = createUserName(account.owner)
//     // console.log(createUserName(account.owner))
// }

// console.log(accounts)

accounts.forEach((account)=>{
    account.userName = createUserName(account.owner)
})
console.log(accounts)



/*
 et userName = user.toLowerCase().split(' ')
let u =userName.map((user, i)=>{
    return user[0]
})
console.log(u.join(''))
*/

// console.log(movements.map(function(mov){
//     return mov*euroToUsd
// }))





//FILTER
const deposit  = movements.filter((mov, i, arr)=>{
    return mov > 0 
})
console.log(deposit)
// console.log(movements)

//REDUCE
//accumulator
const result = movements.map(mov => mov*2.3).filter(mov => mov>0).reduce((acc, cur, i, arr)=> { return acc+cur },100)

// const result = movements.map((mov) => {
//     mov*2.3
// }).filter((mov) => {
//     mov>0
// }).reduce((acc, cur, i, arr)=> {return acc+cur}, 0)

console.log(result)