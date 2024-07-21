const greet = function (greeting) {
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const greeter = greet('Hey')

greeter('Saif')

// greet('Hey') it returns a function so we can write also like this
greet('Hi')('Osama')


//Functional programing

const greetArrow = greeting => name =>{ console.log(`${greeting} ${name}`) }
greetArrow('Hello')('Saif')

