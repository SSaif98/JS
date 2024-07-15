let ninja = ['syed', 'saif', 'ali']
console.log(ninja) // [ 'syed', 'saif', 'ali' ]

console.log(ninja[1]) // ['saif']

//override
ninja[1] = 'haider'
console.log(ninja[1])  // ['haider']

let ages = [10, 20, 30]
console.log(ages) //[ 10, 20, 30 ]

//delete element at last of an array //distructive method
ages.pop()
console.log(ages) //[ 10, 20]
/*
let newAges = ages.pop() //returns the delete element
console.log(newAges) 
*/

//add element at last of an array we can push multiple element //distructive method
ages.push(12, 25)
console.log(ages) //[ 10, 20, 12,25]

/*
let newAges = ages.push(4) //returns length of new array
console.log(newAges) 
*/

//add element at start of an array  we can unshift multiple element //distructive method
ages.unshift(50, 54)
console.log(ages) //[50, 10, 20, 12]

//delete element at start of an array //distructive method
ages.shift()
console.log(ages) //[10, 20, 12]


//ARRAY METHODS

//length of an array 
console.log(ages.length) //[3]

//Concat :
//it concats 1 or more then one array. It can concat same array like if some one say duplicate the array value
//It can concat the array with new values.
let ages1 = [45, 5, 6]
let ages2 = [4.5, 10.3, 6.3]
console.log(ages.concat(ages1, ages2, ages)) // [10, 20,  12, 45, 5, 6, 4.5, 10.3,6.3 ,10, 20, 12]
console.log(ages.concat(100, 200)) //[ 10, 20, 12, 100, 200 ]

//Join  
//it will join the array with the opertaor given in the parametor of join and make it a single string
//if we donot give any parametor then it wil join with ","
let str = ["syed", "saif", "ali"]
console.log(str.join()) //syed,saif,ali
console.log(str.join(' ')) //syed saif ali

//Indexof
console.log(ages.indexOf(4)) // if the value is not present it returns -1
console.log(ages.indexOf(12)) //3


var countries = ['Pak', 'SL', 'AFG', 'IND']

console.log(countries[Math.floor(Math.random() * countries.length)])

//Regular Expression:

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n)

console.log(text.search('W3Schools'))


//Accessing the Last Array Element

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruit = fruits[fruits.length - 1];
//let fruit = fruits[fruits.length];  //undefined 

console.log(fruit)


//A Common Error
const point = [40];
//is not the same as:
const points = new Array(40);  // Create an array with 40 undefined elements:

console.log(point) //[ <40 empty items> ]

const point1 = new Array([40]);

console.log(point1) //[ <40 empty items> ]

console.log(typeof (point)) //it will always return "Object"
//how to find if point is an array or not.
console.log(Array.isArray(point))
console.log(point instanceof Array)

//Without using push function how to add element at end of the array

var ar = [1, 4, 5, 8]
ar[ar.length] = 90
console.log(ar)

delete ar[0] //if we do this it will left us with an empty space in array.
console.log(ar)

var subArray = [[1, 2, 34], [6, 8, 9]]
var singleArray = subArray.flat() //it will combine all sub arrays and make it a single array
console.log(singleArray)



var s = 'northstarSaif'
console.log(s.slice(2)) //2-1 > 0,1
console.log(s.slice(0, 2))//2-1> 0,1

/* 
The splice() method adds new items to an array.
The slice() method slices out a piece of an array.
*/

//SPLICE

/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, 'saif', 'hai')  //[ 'Banana', 'Orange', 'saif', 'hai', 'Apple', 'Mango' ]
console.log(fruits)

fruits.splice(2, 2)  //[ 'Banana', 'Orange', 'saif', 'hai', 'Apple', 'Mango' ]
console.log(fruits)

//Slicing the array
console.log(fruits.slice(0)) //get you first element in array


const num = [40, 100, -1, 5, 25, 10];
console.log(num.sort((a, b) => a - b))
console.log(num.sort((a, b) => b - a))

console.log(num.sort()) //Will give incorrect ans as we have a negative number

console.log(fruits.sort())
console.log(fruits.reverse())

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

console.log(cars.sort((a, b) => a.year - b.year))


const ar1 = [4, 5, 6, 7]
const ar2 = new Array(40, 14)
const ar3 = new Array(40)


console.log(ar2, ar3)

let arrray01 = [1, 2, 3]
let arrray02 = [5, 6, 8, arrray01]
console.log(arrray02)



const jonas = ["saif", "haider"]
let jonasArr = []
for (var i = 0; i < jonas.length; i++) {
  jonasArr.push(typeof jonas[i])
  jonasArr.push(jonas[i])

}
console.log(jonasArr)

for (var i = jonasArr.length - 1; i >= 0; i--) {
  console.log(jonasArr[i])
}

for (var i = 0; i < jonas.length; i++) {
  jonasArr.push(typeof jonas[i])
  jonasArr.push(jonas[i])

}
for (var i = 1; i <= 3; i++) {
  console.log('Starting # ', i)
  for (var j = 1; j <= jonas.length; j++) {
    console.log(jonas[j], j)
  }
}