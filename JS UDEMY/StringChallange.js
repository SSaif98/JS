let variableNames = 'underscore_case\n first_Name\nSome_Variable\n calculate_AGE\ndelayed_departure'

// console.log(variableNames)

let splittedVar = variableNames.split('\n')
// console.log(splittedVar)

for( let [i,row] of splittedVar.entries()) {
  let [first, second]  =row.toLowerCase().trim().split('_')
  let output = first+second[0].toUpperCase()+second.slice(1)
//   console.log(output.padEnd(20)+`${'*'.repeat(i+1)}`)
}


// for(let i=1; i<=4;i++){
//     console.log('*'.repeat(i))
// }

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

let mainText = []
   for(let flight of flights.split('+')) 
   {
    let [type, from, to, time ] = flight.split(';')
    let mainType = type.replaceAll('_', ' ')
    let mainFrom = from.slice(0,3).toUpperCase()
    let mainTo = to.slice(0,3).toUpperCase()
    let mainTime = time.replace(':', 'h')
    mainText.push(`${mainType.trimStart()} from ${mainFrom} to ${mainTo} (${mainTime})`)
   }
   let paddingLength = mainText[0].length
    for(let flight of mainText){
        flight.startsWith('Delayed') ? console.log(`*${flight.padStart(paddingLength, ' ')}`) : console.log(`${flight.padStart(paddingLength+1, ' ')}`)
    }

