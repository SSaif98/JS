//Object can have multiple properties and can also have some methods
//Mthods are functions but it is define in an object


const weekDays = ['mon', 'tues', "wed", 'thus', 'fri', 'sat', 'sun']

const openiningHours= {
    [weekDays[3]]:{
        open: 12,
        close: 22
    },
    fri:{
        open: 11,
        close: 23
    },
    sat:{
        open: 0,
        close: 24
    }
}

let user = {
    email: 'saifali@gmail.com',
    username: 'Saif Ali',
    gender: 'Male',
    hobbies: ['gym', 'crickt', 'games'],
    age: 25,
    arrObj: [  //object in an array
        {
            o1: 'Object1 in Array#1 o1',
            o2: 'Object1 in Array#1 o2'
        }, {
            o3: 'Object1 in Array#1 o3',
            o4: 'Object1 in Array#1 o4'
        }
    ],
    openiningHours,
    login: () => {
        console.log("Hello, I'm a object function",)
    },
    logHobby: function () {
        /*  for(var i=0; i<this.hobbies.length;i++){
              console.log(this.hobbies[i]) //this keyword is a context obj
          } */
        /* this.hobbies.forEach((hobby, index)=>{
             console.log(hobby,index)
         })*/
        this.hobbies.forEach(hobby => {
            console.log(hobby)
        })
    },
    regFunc() {
        console.log('this is also a regular function not an arrow func')
    },
} 



console.log(user)
console.log(user.email)

console.log(user['age'])
console.log(user.age)

console.log(user.hobbies[2])
console.log(user.hobbies)


user.age = 50
user['age'] = 78

user.hobbies[3] = 'party'
user.hobbies[0] = 800



console.log(user)

console.log(user.login())
console.log(user.logHobby())
console.log(user.regFunc())

console.log(user.arrObj[0].o1)

user.arrObj.forEach((obj, i) => {
    console.log(obj, i)
})



const newUser = {
    firstName: "Saif",
    lastName: "Ali",
    age: 2023 - 1998,
    job: "SQA Engineer",
    skills: ['js', 'sql', 'react'],
    hasDriving: true,
    func1: () => {
        console.log('Funstion# 1: ')
        return this.age //undefined [we cannot use this keyword in arrow function]
    },
    func2: function () {
        console.log("Function# 2")
        this.newAge = this.age - 2  //Creating a new porperty "newAge"  
        return this.newAge
    },
    func3(age) {
        //  console.log("Function# 3 " + this.job, this.age)
        return age - 3
    },
    getSummary: function () {
        console.log(`Jonas is ${this.func3()} year's old, and has  ${this.hasDriving ? 'a ' : 'no'} driving licesne`)
    }
}

console.log(newUser)
console.log(newUser.age)
console.log(newUser['job'])
//console.log(newUser[job]) // Error "job is not defined"
newUser['university'] = "Sir Syed University"
console.log(newUser.university)
console.log(`Name of the employee is ${newUser.firstName} and it has ${newUser.skills.length} skills. His best skill is ${newUser.skills[2]}`)

const name = "Name"
console.log(newUser['first' + name], newUser['last' + name])
console.log('\nDOT Notation')
console.log(newUser.func1())
console.log(newUser.func2())
console.log(newUser.func3(45))

console.log(`\n Bracket Notation`)
console.log(`${newUser['func1']()}`)
console.log(newUser['func3'](45))


//If we are trying to access a property which is not there in object the output will be "undefined"
/*
const interestIn = prompt("What do you want to know about jonas? Choose between firstName, lastName, age, job")
console.log(newUser.interestIn) [undefined]
console.log(newUser[interestIn]) [Correct result]
*/

if (!newUser['cast']) {
    console.log('invalid property')
}

console.log(newUser.newAge)

console.log(newUser.getSummary())

console.log(user)


if(user.openiningHours && user.openiningHours.mon){
    console.log(user.openiningHours.mon.open)
}

//Optional chaining

console.log(user.openiningHours.mon?.open)

console.log(user.openiningHours?.mon?.open)
console.log(user.openiningHours?.fri?.open)

// console.log(user.openiningHours.mon.open) //this will give us an error

for(const day of weekDays){
    
//nullish coalescing '??'
// it works with nullish value instead of falsy value
   const open = user.openiningHours[day]?.open ?? 'closed'
    // const open = user.openiningHours[day]?.open || 'closed'

    console.log(`On ${day}, we are open at ${open}`)
}


//Methods [optional chaining]

console.log(user.regFunc?.() ?? 'Method does not exist')

//Arrays [optional chaining]

const newU = [{
    name: 'Jonas',
    age: 25
}]

console.log(newU[0]?.name ?? `User doesn't exist`)


let testArray =[1,2,3,4]

for( let test of testArray){
    console.log(test)
}

testArray.forEach((value, index)=>{
    console.log(value,index)
})


//Property Names
let properties = Object.keys(openiningHours)
console.log(properties.length)

let openStr= ` We are open on ${properties.length} days: `
 
for( let day of properties){
    openStr += `${day}, `
}
console.log(openStr)

//Property Values
let value = Object.values(openiningHours)
console.log(value)

// console.log(Object.entries(openiningHours))
let store= Object.entries(openiningHours)

for(let [key, {open,close}] of store){
    console.log(`${key}, ${open}, ${close}`)
}