const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow Card']
])

//1
// let eventSet = new Set()

// for(let [key, value] of gameEvents) {
//     eventSet.add(value)
// }
// let events = [...eventSet]
console.log(gameEvents.entries()) //print whole map in object form
console.log(gameEvents.keys()) //Print keys of the map
console.log(gameEvents.values()) //print values of the map

let events = [...new Set (gameEvents.values())]
console.log(events)

// console.log(events)

//2
gameEvents.delete(64)
// console.log(gameEvents)

//3
const time = [...gameEvents.keys()].pop()
console.log(time)
console.log(`An event happened, on avg, every ${time/gameEvents.size} minutes`)


//4
for(let [key, value] of gameEvents){
    // if(key<45){
    //     console.log(`[First Half] ${key}: ${value}`)
    // }else{
    //     console.log(`[Second Half] ${key}: ${value}`)
    // }
    const half = key<=45 ? 'First' : 'Second'
    console.log(`[${half} Half] ${key}: ${value}`)
}