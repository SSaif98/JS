// Set doesn't accpet duplicate value
//Collection of unique value
//No key value pair
//Order of element is irrelevant

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Lasania', 'Risoto'])
console.log(orderSet)

//If we write like this then set treat it like itratble
console.log(new Set('saif')) // { 's', 'a', 'i', 'f' }
console.log(new Set('saif').size) // { 's', 'a', 'i', 'f' }


console.log('Size : ',orderSet.size)


//Check certain elemnt in set
console.log(orderSet.has('saif'))
console.log(orderSet.has('Pizza'))


//Add element in a set
orderSet.add('Garlic Bread')
orderSet.add('Garlic Bread')
console.log(orderSet)

//Delete element from set
orderSet.delete('Risoto')
console.log(orderSet)

//Displays all elements of the set including duplicate values
// console.log(orderSet.entries())

console.log("\nFor Each Loop: ")
orderSet.forEach(test => console.log(test))

console.log("\nFor Of Loop: ")
for(let order of orderSet) console.log(order)


//Remove duplicate value from an array
let arr = ['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Lasania', 'Risoto']
let setA = new Set()
for(let s of arr){
    setA.add(s)
}
console.log(setA)

let newArr= []
for(let s of setA){
    newArr.push(s)
}
console.log(newArr)

//Smart Way
let arr1 = ['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Lasania', 'Risoto']
//#1
// let uniqueArr =  new Set(arr1)
// console.log(uniqueArr) //Set

//#2
// let uniqueArr =  [...new Set(arr1)]
// console.log(uniqueArr) //Array

//#3
let uniqueSet =  new Set(arr1)
console.log(uniqueSet) //Set
let uniqueArr = [...uniqueSet]
console.log(uniqueArr) //Array



//Clear clear/delete complete set
// console.log(orderSet.clear())
// console.log(orderSet)
