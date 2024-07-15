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


const menu = [...restaurent.starterMenu, ...restaurent.mainMenu]

console.log(menu)

for(const item of menu) console.log(item[0])  //initial of each element in an array
for(const item of menu) console.log(item)  //return array values
for(const item of menu) console.log(item.length)  //return length of each value in an array
//It return array 
//enteries return index number value its self
for(const item of menu.entries()) {
    // console.log(item)
    console.log(`${item[0]+1} : ${item[1]}`)
}
console.log("DESTRUCTURING")
for(const [i, el] of menu.entries()) {
    // console.log(item)
    console.log(`${i+1} : ${el}`)
}
