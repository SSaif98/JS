//Immediately invoked function expression
// A function that disappear right after it is called

// const runOnce = function(){
//     console.log('This will run again & again')
// }
// runOnce()




(function(){ console.log('This will never run again') })()

// (() => console.log('This will never run again also'))()

