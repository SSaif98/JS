//Destructuring: Breaking a complex data structure down into a smaller data structure. 

const arr=[1,2,4]

//Destructuring
const a= arr[0]
const b= arr[1]
const c= arr[2]

//Destructuring
const [d,e,f] = arr;
//console.log(arr)

const newArr=arr

//console.log(newArr)

const restaurent ={
    name:'HotnRoll',
    location: 'Gulshan-e-Iqbal',
    mainMenu: ['Rolls', 'Burger', 'Pizza'],
    categories: ['Italian', 'Fast Food', 'Desi'],
    starterMenu: ['Garlic Bread', 'Fried Fish', 'Fries'],
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}

const [first, second] = restaurent.categories; //Destructuring works with indexes. 
//console.log(first, second)

const [h, , i] = restaurent.starterMenu; //Destructuring works with indexes. If we want to skip any index value we have to explicitely give empty space.
//console.log(h,i)

let [main, ,secondary] = restaurent.categories
console.log(main, secondary);

// Switching variables
// let temp=main
// main =secondary
// secondary=temp
// console.log(main, secondary)

// Switching variables using new destructuring
[secondary, main] = [main, secondary];
console.log(main, secondary)

console.log(restaurent.order(2,0))
const [strOrd, mainOdr]= restaurent.order(2,0)
console.log(strOrd, mainOdr)

const nestedArr= [2,3,[4,5]]

let [ns1, ,ns2]= nestedArr
console.log(ns1, ns2)

//Destructuring in nested array
let [na1, ,[na2, na3]]= nestedArr
console.log(na1, na2, na3)

//We do not know array length then we can initiate all the variables with 1 so if the code unable to find the element in array it will assign the variable value 1
let [aa,bb,cc] = [10,2]

console.log(aa,bb,cc); //1 2 undefined

[aa=1,bb=1,cc=1] = [10,2];
console.log(aa,bb,cc) 


let var1= 56
let var2=100;
[var1, var2]= [var2, var1]
console.log("Var# 1 : "+var1+ "\nVar# 2 : "+var2);

[var3, var4]= [var1]
console.log("Var# 3 : "+var3+ "\nVar# 4 : "+var4);