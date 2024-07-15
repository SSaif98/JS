//math operators: + - / * % **(power)

console.log(10 / 2)

let radius = 3
console.log(radius % 3) //divide 10/3 and then gives us the reminder which is 0


const pi = 3.142

let area = pi * radius ** 2 //radis**2 mean radius * radius
console.log(area)

//order of operation : BIDMAS (bracket indesis(sq) divide multiply add subt)
let result = 5 * (10 / 2) ** 3

console.log(result)

var likes = 10
//likes=likes+1

likes++; //11
likes--; //10
likes += 9 //19
likes -= 4 //15
likes /= 3 //5
likes *= 2 //10
likes **= 3 //1000
likes %= 5//0

console.log(likes)

// NaN
console.log(6 / 'k') //NaN

//add number in string

var r = 'the blog has ' + likes + ' likes'
console.log(r)



const book = 'Angel'
const auther = 'J.K. Rowling'
const like = 40

//concatenation string
r = 'the blog called ' + book + ' by ' + auther + ' has ' + like + ' likes'
console.log("Concatenation: " + r)

//template string or template literal
r = `the blog called ${book} by ${auther} has ${like} likes`
console.log("Template Literal : " + r)

//creating html template
let html = `
    <h4>${book}</h4>
    <p>${auther}</p>
    <span>${like}</span>
`
console.log(html)