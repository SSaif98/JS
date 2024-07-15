console.log(3 || 'text')

console.log('' || 'saif')

console.log(true || 0)

console.log(undefined || null)


console.log(undefined || 0 || 'saif' || 23 ||null)

restaurent ={
    resName:'HotnRoll',
    location: 'Gulshan-e-Iqbal',
    mainMenu: ['Rolls', 'Burger', 'Pizza'],
    categories: ['Italian', 'Fast Food', 'Desi'],
    starterMenu: ['Garlic Bread', 'Fried Fish', 'Fries'],
    openiningHours:{
        thu:{
            open: 12,
            close: 22
        },
        fri:{
            open: 11,
            close: 23
        },
        sat:{
            open: 0,
            close: 24
        }
    },
    orderPasta : function(i1,i2,i3){
        console.log(`Here is your delicious pasta`)
        console.log(`${i1} , ${i2} , ${i3}`)
    },
    orderFood : function(...ingredient){
        console.log(`Here is your delicious pasta`)
        for(let i =0 ; i<ingredient.length;i++)  console.log(`${ingredient[i]}`)
    },
    orderRest : function(ingredient, ...otheIngredient){
        console.log(ingredient, otheIngredient)
    }
}


const guest1 = restaurent.guestNum ? restaurent.guestNum : 10
console.log(guest1)

//short-circuiting 
const guest2 = restaurent.guestNum || 11

console.log(guest2)

restaurent.guestNum = 45

const guest3 = restaurent.guestNum || 11

// console.log(restaurent)
console.log(guest3)


// ----------- OR || --------------- operator
// When it finds first true value it short circuits


// ----------- AND && --------------- operator
// When it finds first false value it short circuits

console.log( 0 && 'saif')

console.log( 7 && 'saif')


//nullish coalescing

restaurent.numGuest = 0

console.log(restaurent.numGuest )

const guest = restaurent.numGuest || 10
console.log(guest) //10  [0 is a falsy value and OR short circuits when it finds 1st true value]

//nullish coalescing '??'
// it works with nullish value instead of falsy value

const newGuest = restaurent.numGuest ?? 10
console.log(newGuest)

const res1 ={
    name: "Capri",
    numGuest: 10
}

const res2 ={
    name: "Pizza Hutt",
    owner: 'Saif'
}


//OR assignment operator

// res1.numGuest= res1.numGuest || 20
// res2.numGuest= res2.numGuest || 20
// console.log(res1)
// console.log(res2)

res1.numGuest ||=15
res2.numGuest ||=50

console.log(res1)
console.log(res2)

//nullish assignment operator [null or undefined]

const res3 ={
    name: "Capri",
     numGuest: 0
}

res3.numGuest ??=15  //15
console.log(res3)

//AND assignment operator
// It short circuits on first falsy value and return the false value
// res2.owner = res2.owner && 'ANONYMUS'  //{ name: 'Pizza Hutt', owner: 'ANONYMUS', numGuest: 50 }
// res1.owner = res1.owner && 'ANONYMUS' //{ name: 'Capri', numGuest: 10, owner: undefined }

res2.owner &&= 'ANONYMUS' //{ name: 'Pizza Hutt', owner: 'ANONYMUS', numGuest: 50 }
res1.owner &&= 'ANONYMUS' //{ name: 'Capri', numGuest: 10 }

console.log(res2)
console.log(res1)


