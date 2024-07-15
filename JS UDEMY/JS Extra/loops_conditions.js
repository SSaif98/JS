const flag = true

if (!flag) { console.log("True") }
else { console.log("False") }

if (flag) { console.log("True") }
else { console.log("False") }

/* infinite loop
while(flag){
    console.log("True") 
}
 */


//LOOPs 
/*
    while loop: if you have an assignment to evaluate to be TRUE or FAlSE then use while.
    for loop: if you want to run anything nth number of time use for loop
*/
let req = true
while (req) {
    console.log(req)
    req = false
}

console.log("WHILE LOOP EXECUTION")
let i = 0
while (i < 10) {
    i++
    console.log(i)
}

console.log("DO-WHILE LOOP EXECUTION")
let j = 0
do {
    console.log(j)
    j++
} while (j <= 10);

console.log("FOR LOOP EXECUTION")
for (let k = 0; k < 10; k++) {
    console.log(k)
}

//from 1 to 10 give me common multiple values of 2 and 5
console.log('New Task# 1')

for (let m = 1; m <= 10; m++) {
    if (m % 2 == 0 && m % 5 == 0) {
        console.log(m)
    }
}

console.log('New Task# 2')

for (let m = 1; m <= 100; m++) {
    if (m % 2 == 0 || m % 5 == 0) {
        console.log(m)
    }
}

console.log('New Task# 3 - Give me 3 records only')
let c = 0
for (let m = 1; m <= 100; m++) {
    if (m % 2 == 0 && m % 5 == 0) {
        console.log(m)
        c++
        if (c == 3) {
            break
        }
    }

}


//FOR

for (let g = 1; g < 4; g++) {
    console.log(g)
}

//For in
// This type of loop is used when you want to iterate through the properties of obj and iterate through an array
const person = { name: "saif", age: 25 }



for (let h in person) {
    console.log(person[h])
}

const emp1 = ['anwer', 56]
for (let l in emp1) {
    console.log(emp1[l])
}



//For of
const emp = ['haider', 26]

for (let m of emp) {
    console.log(emp)
}


const total = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
    const val = previous + current;
    console.log("The previous value is " + previous +
        "; the current value is " + current +
        ", and the current iteration is " + (index + 1));
    return val;
}, 0);

console.log("The loop is done, and the final value is " + total + ".");

var total2 = [1, 2, 3, 4, 5]

console.log(total2.filter(tot => tot % 2 === 0).map(s => s * 2).reduce((ac, ex) => ac + ex, 0));

const arr = function (a) {
    console.log(a)
}
arr(112)

const arr2 = (b) => {
    console.log(b)
}
arr2(44)

const arr3 = c => console.log(c)
arr3(8)

//let all=score1.filter(score=> score%2==0).map(s=>s*3).reduce((actual,expect)=>actual+expect,0)


var name1 = "Saif"


var newName = name1.split("").join()
console.log(newName)



var newName2 = name1.split("")
console.log(newName2)

//console.log(newName)
/*let counter = 0 
for(let i =0; i<newName.length; i++){
    for(let j =0; j>newName.length;j++){
        if(newName[i] == newName[j+1]){
            counter++;
        }
       else {
        console.log(newName[i] + "Occurence : "+counter)
       }
    }

}
*/
