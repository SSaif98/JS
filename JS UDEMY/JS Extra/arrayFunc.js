let array2 = [4, , 5, 7, 0, 3]


//reduce filter map
console.log("Reduce Method")

let total = array2.reduce((sum, totalSum) => sum + totalSum, 0)
console.log(total)


// Filter, Map, Reduce

var testVar = [15, 2, 14, 19, 20]
//in filter it will match condition 
//In map it will map a new code and sends

var newTestVar = testVar.filter(test => test % 2).map(t => t * 4).reduce((exp, act) => exp + act, 0)
console.log(newTestVar)

let array = [4, 5, 7, 1, 3, 10, 9, 100]
let arr = array.sort((a, b) => a - b)
console.log(arr)

let greater = array[array.length - 1]
console.log(greater)

let array3 = [0]
for (var i = 0; i < array.length; i++) {
    if (array[i] < array3) {
        array3 = array[i]
    }
}
console.log(array3)




var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = []
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
        arr2.push(arr[i])
    }
}
console.log(arr2)

var duplicate = [1, 2, 3, 4, 5, 6]
var newDup = duplicate.concat(duplicate)
console.log(newDup)

console.log(duplicate)


var birthday = new Date("1998-01-14")
var nextBirthday = new Date("2024-01-14")
var today = new Date()



console.log(today)


