/////////////  var  ////////////////
console.log('/////////////  var  ////////////////')

var a = 50
console.log('Outside if a:', a)
if (true) {
    var b = 100
    console.log('declare outside if using inside if: using var a= ', a)
}
console.log('declared in IF Block using outside IF Block: using var b= ', b)
var a = 150
console.log('Variable with var keyword can be redeclared: a= ', a)
a = 500
console.log('Variable with var keyword can be reassigned: a= ', a)


/////////////  let  ////////////////

console.log('/////////////  let  ////////////////')
let c = 15
let f = 14
console.log('Outside if c:', c)
console.log('Outside if f:', f)
if (true) {
    let d = 115
    console.log('declare outside if using inside if: using let c [NOT POSSIBLE] ')
    // d's scope is in this if block only
    let c = 1500
    //this c variable is only for if block outside if block c's  value is 15
    console.log('declare inside if using inside if: using let c= ', c)
    f = 14.5
    console.log('declare outside if using inside if also reassigning: using let f= ', f)
}
console.log('declared in IF Block using outside IF Block using let d [NOT POSSIBLE] ')
//var c=150
console.log('Variable with let keyword can not be redeclared: c= ', c)
c = 500
console.log('Variable with let keyword can be reassigned: c= ', c)


/////////////  const  ////////////////

console.log('/////////////  const  ////////////////')
const e = 150
console.log('Outside if e:', e)
if (true) {
    const f = 1150
    console.log('declare outside if using inside if: using const e= ', e)
}
console.log('declared in IF Block using outside IF Block (CAN NOT USE IT) using const  ')
//const f=150
console.log('Variable with const keyword can not be redeclared')
//f=500
console.log('Variable with const keyword can not be reassigned')

//const undef; //we can not left undefine any variable using const keyword

let ab, ba;


// VAR
/*
1. Declare ouside if block can  access inside if block.
2. Can be redeclare inside and outside of if block.
3. Can be reassigned inside and outside of if block.
5. Is function scope
*/

// LET
/*
1. Declare ouside if block can not be accessed inside if block.
2. Decalre inside if block can only be access inside if block not outside if block
    2.1 We can redeclare same variable using let key which scope is inside if block
2. Can be not redeclare outside of if block.
3. Can be reassigned outside of if block.
4. Is blocked scope
*/