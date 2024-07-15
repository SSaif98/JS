//Use to map values to keys
//Key value pair
//Do not accept duplicate keys

//Direernce between Map and Object
    // In maps the keys can have any type
    // In object keys are always strings

const rest = new Map()
rest.set('Name', 'Saif')
rest.set(1, 'Karachi')
rest.set(1, 'Karachi')
console.log(rest.set(2, 'Lahore'))
console.log(rest)


console.log('Enteries: ',rest.entries())
console.log(rest)

//Returns values of map
console.log(rest.values())
console.log('Values: ',rest)

//Check if key is present in map
console.log(rest.has(2))// return boolean value
console.log(rest)

//Delete a key value pair by giving which key to delete
console.log(rest.delete(1))// return boolean value
console.log(rest.delete(7))// return boolean value
console.log(rest)

//Delete all key value pair by giving which key to delete
console.log(rest.clear())
console.log(rest)


let newMap = new Map()
//Chaining of set
newMap
.set('category', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 12)
.set(true, "We are open today")
.set(false, "We are closed today")
console.log(newMap)
console.log(newMap.get('open'))

const time =21
console.log(newMap.get( time > newMap.get('open') && time < newMap.get('close')))
console.log(newMap.size)

// newMap.set([1,2], 'Test')
// console.log(newMap)
// console.log(newMap.get([1,2])) //Undefined

let ar= [1,2]
newMap.set(ar, 'Test')
console.log(newMap)
console.log(newMap.get(ar)) 


//When we do not want to add multiple records in map without using set
let mapArray= [
    ['question', 'What is th best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JS'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try Again']
]
const question = new Map(mapArray)

console.log(question)

//covert object to map
//Object.enteries gives the same out what Map function receives
const obj= {
    "name": 'Saif',
    age: 56,
}
console.log(Object.entries(obj))

const  objToMap =  new Map(Object.entries(obj))
console.log(objToMap)

console.log(question)
console.log(question.get('question'))
for(let [key, value] of question){//key and its values
    if(typeof key === 'number') console.log(`Answer of ${key}: ${value}`)
}  

const number = 3
console.log(number)

console.log(question.get(question.get('correct') === number))
//convert map into array
//Using spread operator
console.log(...question)
console.log([...question.values()])
console.log([...question.keys()])


// for(let o of question) console.log(o) //complete map

    // question.forEach((o,i) => console.log(o, i)) //value and key




    