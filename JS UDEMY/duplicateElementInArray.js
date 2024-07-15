//Duplicate element in an ARRAY.

let str = [12, 4, 4, 5, 2, 6, 7, 7]
let dupStr = []
let index = 0;

for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            dupStr[index] = str[i]
            index++
        }
    }
}
console.log("Orignal Values: ", str)
console.log("Duplicate Values: ", dupStr)





const countryCodes = ["US001", "US002", "CA001", "CA002", "CA003", "GB001", "GB002", "AU001", "AU002", "AU003",
    "DE001", "DE002", "FR001", "FR002", "JP001", "JP002", "IN001", "IN002", "IN003", "IN004"]

function countryC(countryCodes) {
    let cArr = []
    for (let i = 0; i < countryCodes.length; i++) {
        if (countryCodes[i].includes("CA")) {
            cArr.push(countryCodes[i])
        }
    }
    console.log(cArr)
}


countryC(countryCodes)


//UNIQUE VALUE IN ARRAY
let arr = [1, 2, 4, 4, 5, 5, 6, 9, 9, 2, 1]

const arrSet = new Set();

for (var i = 0; i < arr.length; i++) {

    arrSet.add(arr[i])

}
console.log("UNIQUE VALUE IN ARRAY:")
console.log("Orinal Array: ", arr)
console.log("Unique Values: ", arrSet)


//Greater Value:
console.log('Greater/Lesser Value')


let str1 = [1, 9, 2, 3, 4, 5, 0]
console.log('Original Values:')

var greater = 1
var less = 9

for (var i = 0; i < str1.length; i++) {
    if (str1[i] > greater) {
        greater = str1[i]
    }
}

console.log("Greater: ", greater)

for (var i = 0; i < str1.length; i++) {
    if (str1[i] < less) {
        less = str1[i]
    }
}
console.log("Less: ", less)



console.log(Math.max.apply(null, str1))

console.log(Math.max(str1))//NaN
console.log(Math.max(...str1))//NaN


console.log(Math.min.apply(null, str1))
console.log(Math.min(...str1))


//Palindrome


var names = 'tat'

var splitName = names.split('')
//console.log(names)
//console.log(splitName)

var reverseN = splitName.reverse()
//console.log(reverseN)
//console.log(reverseN.join(''))

var reversedName = reverseN.join('')
if (reversedName === names) {
    console.log('TAT is Palindrome')
}


/*Join: it is array method which changes are of data into a single string
let myName=["Saif",'haider']
console.log(myName.join(''))//Saifhaider
console.log(myName.join())//Saif,haider
console.log(myName.join('-'))//Saif-haider

*/



var myName = 'sasaif';
var charCount = [];

for (var i = 0; i < myName.length; i++) {

    var char = myName[i];
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

console.log(charCount);


const obj = {
    lName: ' Ali',
    fName: 'Syed Saif',
    age: 45,
    fullName: function () {
        return this.fName + this.lName
    },
    arrM: [[2, 4, 5, 6], ["saif", 1, 'Haider', true]],
    arrS: [2, 4, 5, 6],
    obj2: {
        newFName: 'Syed Haider ',
        newLName: 'Ali',
        fullName: function () {
            return this.newFName + this.newLName
        }

    }

}
console.log(obj.fullName())
console.log(obj.arrM[0][2])
console.log(obj.arrS[0])

console.log(obj.obj2.fullName())



const freezeObj = Object.freeze({
    age: 25
})

console.log(freezeObj.age)

freezeObj.age = 50;

console.log(freezeObj.age)

const freezeObjNon = {
    age: 25
}

freezeObjNon.age = 500

console.log(freezeObjNon)