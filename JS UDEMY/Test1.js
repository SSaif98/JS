const game= {
    team1: 'Bayren Munich',
    team2: 'Borrussia Dortmund',
    player : [
        [
            'Neuer1',
            'Neuer2',
            'Neuer3',
            'Neuer4',
            'Neuer5',
        ],
        [
            'Burki1',
            'Burki2',
            'Burki3',
            'Burki4',
            'Burki5',
        ]
    ],
    score: '4:0',
    scored: ['Neuer1', 'Neuer2', 'Neuer3', 'Neuer3'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
}



// 1
//  for(let [index, goal] of Object.entries(game.scored)){
     for(let [index, goal] of game.scored.entries()){
    console.log(`Goal ${parseInt(index)+1}: ${goal}`)
}

// 2

let avg =0;
let odds = Object.values(game.odds)
for(let odd of odds){
    avg+= odd
}
console.log(avg/odds.length)


for(let [team , odds] of Object.entries(game.odds)){
    let result = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odds of ${result} ${odds}`)
}
// console.log(avg/3)

// let avg = (game.odds.team1 + game.odds.team2)/2
// console.log(avg)

// // //Task# 1

// let [player1, player2] = game.player

//  console.log(player1)
// console.log(player2)

// // //Task#2
// let [gk , ...fieldPlayer] = player1
// console.log('Task# 2',gk, fieldPlayer)

// //Task# 3
// let allPlayers = [player1, player2]
// console.log('Task# 3 All players: ',allPlayers)


// //Task# 4
// let finalPlayers = [...player1, 'Neuer6', 'Neuer7', 'Neuer8' ]
// console.log('Task# 4',finalPlayers)

// //Task# 5

// let {odds : {team1, x : draw, team2}} = game
// console.log(team1, draw, team2)

// // Task# 6

// const printGoals= (...players)=>{
//     console.log(`${players.length} goals were scored`)
// }

// printGoals('Neuer1', 'Neuer2', 'Neuer3', 'Neuer3')
// printGoals('Neuer1', 'Neuer2')
// printGoals(...game.scored)

// team1 < team2 && console.log('Team 1 is likely to win')

// let team1= game.odds?.team1
// console.log(team1)
// let team2= game.odds?.team2
// console.log(team2)

// let draw= game.odds?.draw ?? 'No value found'
// console.log(draw)

