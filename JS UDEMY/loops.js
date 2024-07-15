//FOR LOOP
console.log('FOR LOOP')

for (var i = 0; i < 5; i++) {
    console.log('in loop: ', i)
}
console.log('Loop Finish')

const names = ['Saif', 'Haider', 'Ali']

for (i = 0; i < names.length; i++) {
    //console.log(names[i])
    let html = `<div> This is For Loop: ${names[i]} </div>`
    console.log(html)
}

var value = [45, 12, 14, 13]
for (i = 0; i < value.length; i++) {
    if (value[i] % 2 > 0) {
        console.log('This is ODD', value[i])
    }
    else {
        console.log('This is EVEN', value[i])
    }
}



//WHILE LOOP
console.log('WHILE LOOP')

var k = 0
while (k < names.length) {
    let html = `<p> This is While Loop: ${names[k]} </p>`
    console.log(html)
    k++
}


let dice = Math.trunc((Math.random() * 6) + 1)

while (dice != 6) {
    console.log(dice)
    dice = Math.trunc((Math.random() * 6) + 1)
    if (dice === 6) {
        console.log('loop ends')
    }
}

//DO-WHILE LOOP
console.log('DO-WHILE LOOP')
let j = 5
do {
    console.log(j)
    j++;
} while (j < 5);