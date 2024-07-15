let str1 = [1, 2, 3]

let str2 = [...str1]
let str3 = str2.concat(str1)

console.log('Str 1: ', str1)

console.log('Str 2: ', str2)

console.log('Str 3: ', str3)

str3.push(4)

console.log('Str 3: ', str3)

//If we copy 1 in array into other empty array like this then if we push any thing in duplicate array then automatically it pushes
//value in  original array

let str4 = str1

console.log('Str 4: ', str4)
str4.push(5)

console.log('Str 4: ', str4)
console.log('Str 1: ', str1)


const arr=[1,2,3]
const arr1=[...arr, 4,arr,5,6,...arr]

console.log(arr1)
console.log(arr)  //[1,2,3]
console.log(...arr);// 1 2 3

const restaurent ={
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


const ingredients= ['i1', 'i2','i3']


const newMenu= [...restaurent.mainMenu, "Karhai"]
console.log(newMenu)

//copyArray
const copyMenus= [...restaurent.mainMenu, ...restaurent.starterMenu]
console.log(copyMenus)

//Iterables : [Arrays, Strings, Set, Maps] NOT objects

const string1="Saif"
const string2= [...string1]
console.log(string2)
console.log(...string1)

//console.log(`${...string1} Ali`) //Can not be done as template literal expects only single value not coma separate values.


console.log(restaurent.orderPasta(...ingredients))

const newResturent = {...restaurent};


restaurent.resName="HotnSpicy";
console.log(restaurent.resName, newResturent.resName)




const [roll, , pizza, ...otherFoods]=[...restaurent.mainMenu, ...restaurent.starterMenu]

console.log(roll, pizza, otherFoods)

function add(...numbers){
    let sum=0
    for(let i=0; i<numbers.length;i++) sum += numbers[i]
    console.log(sum)
}   

add(1,8,9)
add(10,89)

//Spread operators  : unpack element in an array
//Rest Pattern : pack element in an array

//sread because of right hand side of =
const ab=[1,2,3,...[4,5,6]]
console.log(ab)

//REST pattern
const [a,b,...others]= [1,2,3,4,5]

console.log("Test: "+a,b,others)

let [rolls, ,pizza2, ...other]= [...restaurent.mainMenu, ...restaurent.starterMenu] //from mainMenu has 3 elements but during destructuring I have skipped the 2nd element\
//there should be one rest pattern
//In spread we expands and in rest we compress
console.log(rolls, pizza2,other) 


const {sat , ...weekdays}= restaurent.openiningHours
console.log(sat, weekdays)

const adding = function(...numbers){
    let sum = 0
    for( let i=0; i<numbers.length ; i++) sum += numbers[i]
    console.log(sum)
}

adding(2,3)
adding(4,7,9)
adding(9,1,5,7,8)

let x = [34,8,6]
adding(...x)


restaurent.orderFood('olive', 'mashroom')
restaurent.orderFood(...ingredients)

restaurent.orderRest('pizza', 'burger', 'pasta')