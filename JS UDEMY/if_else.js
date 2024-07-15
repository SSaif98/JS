//if statements
const age = 20

if (age < 2) {
    console.log('if block')
}
else {
    console.log('else block')
}

var names = ['saif', 'haider', 'anwer']

if (names.includes('haide')) {
    console.log('Haider here')
} else {
    console.log('Saif, Anwer here')
}

if (names.length > 2) {
    console.log('Hi IF')
} else {
    console.log('Hi ELSE')
}


let pas = 'password1234'

if (pas.length >= 12 && pas.includes('@')) {
    console.log('Password is strong')
} else if (pas.length >= 8 || pas.includes('4') && pas.includes('@')) {
    console.log('Password is long enough')
} else {
    console.log('Re-enter password')
}

//LOGICAL NOT

let user = false

if (!user) {
    console.log('User can  login')
} else {
    console.log('User can not login')
}

console.log(!true)
console.log(!false)


let score = [10, 20, 0, 30, 40, 50]
for (var i = 0; i < score.length; i++) {
    console.log('Your score is : ', score[i])
    if (score[i] === 0) {
        console.log('Keep trying!')
        continue
    }
    if (score[i] === 30) {
        console.log('Finished')
        break
    }

}