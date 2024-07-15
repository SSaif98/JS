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
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function({time : t, address : a, starterIndex : si =0, mainIndex : mi=0}){
        console.log(`Time : ${t}\nAddress : ${a}\n${this.starterMenu[si]}\n${this.mainMenu[mi]}`)
    }
}

//We have to give name to a variable which is the property in the obj
const {resName , openiningHours, categories} = restaurent;
console.log(resName +"\n",openiningHours ,"\n"+ categories)

//if we want to have variable names other then property name then we can have this by writing => name : newName
const {resName : newResName , openiningHours: newOpeniningHours , categories: newCategories} = restaurent;
console.log(newResName +"\n",newOpeniningHours ,"\n"+ newCategories)

// We do not know if the property is present & if present then may be it do not have any value
//  in this case we can initialize it as empty array and we do not fo this then it will be called as undefined
const { menu = [], starter, employee: newEmployee =[], location : newLocation = []} = restaurent;
console.log("Menu : "+menu +"\n"+ "Employee: "+newEmployee+ "\n"+"Starter: "+starter  + "\n"+ "Location: "+ newLocation)

//Mutating Variables:

let a=40
let b=99
const obj= {
    a:45,
    b:100,
    c:200
};
({ a : Aa, b : Bb} = obj); //in this step we are mutating the variable a and b values with object a & b value
console.log(Aa,Bb)  


//nested objs:
console.log(openiningHours)
console.log(newOpeniningHours)

const {fri : {open , close}}= openiningHours  //syntax: { propertyName(which is latter a var) : { propertyName(which is latter a var) } } = objName

console.log(open)
console.log(close)

const {thu : {open : o  , close : c}}= openiningHours  

console.log(o)
console.log(c)

const obj1={
    time: '22:30',
    address: 'Gulshan',
    starterIndex: 2,
    mainIndex: 1
}
const obj2={
    time: '22:30',
    address: 'Gulshan',
    starterIndex: 2
}
restaurent.orderDelivery(obj1)
restaurent.orderDelivery(obj2)