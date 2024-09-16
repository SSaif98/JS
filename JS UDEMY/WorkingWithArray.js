let arr = ['a','b','c','d','e']

//SLICE //It doesn't change the original array
// console.log(arr.slice())  //[ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr.slice(1)) //[ 'b', 'c', 'd', 'e' ]
// console.log(arr.slice(1,4)) //[ 'b', 'c', 'd' ]
// console.log(arr.slice(-2)) //[ 'd', 'e' ]
// console.log(arr.slice(1,-2)) //[ 'b', 'c' ] //Mean start from index 1 and left the last 2 indexes of the array
// console.log(...arr)  //a b c d e
// console.log([...arr]) //[ 'a', 'b', 'c', 'd', 'e' ]

//SPLICE //It does change the original array means if we delete or add some thing then original array will be changed
// arr.splice(-2) //deletes 2 elements from last
// console.log(arr)

// arr.splice(3, 0, 'f','g')  
/* 1st arg: from where to start, 2nd arg: how many elements to delete (delete count), 
rest of the arg: add elements in array from the staring point defined */
// console.log(arr)

//REVERSE //It does change the original array
let arr2 = ['t', 'h', 'l', 'p']
arr2.reverse()
console.log(arr2)

//CONCAT
let con = arr.concat(arr2)
console.log(con)
console.log(...arr, ...arr2) //a b c d e p l h t

//JOIN
console.log(con.join('-'))

//AT method
console.log(arr.at(2))

//Last element of the array
console.log(arr[arr.length -1])
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))


let movements= [134,-566,77,80,-45,87,-34,-90]
//For Of Loop
// for(let movement of movements){
for(let [i, movement] of movements.entries()){
    if(movement>0){
        console.log(`Movement ${i+1}: Deposited ${Math.abs(movement)}`)
        if(movement === 87){
            break
        }
    }else{
        console.log(`Movement ${i+1}: Credited ${Math.abs(movement)}`)
    }
}
console.log('------------FOR EACH---------------')

//For Each Loop 
//It can take three arguments: actual val, index, complete array
//We can not break a for each loop in between
movements.forEach((movement, i , arr)=>{
    if(movement>0){
        console.log(`Movement ${i+1}: Deposited ${Math.abs(movement)}`)
        // if(movement === 87){
        //     break
        // }
        // console.log(`Movement ${i+1}: Deposited ${Math.abs(movement)} ${arr}`)
    }else{
        console.log(`Movement ${i+1}: Credited ${Math.abs(movement)}`)
        // console.log(`Movement ${i+1}: Credited ${Math.abs(movement)} ${arr}`)

    }
})

const currenciesMap = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling']
])
const currenciesSet = new Set(['USD', 'EUR', 'PKR', 'INR', 'USD'])
console.log('---------MAP----------')
currenciesMap.forEach(function(value, key, map){
    console.log(`${key} : ${value}`)
})
console.log('---------SET---------')
//Because set do not have keys and indexes
currenciesSet.forEach(function(value, key, map){
    console.log(`${key} : ${value}`)
})

