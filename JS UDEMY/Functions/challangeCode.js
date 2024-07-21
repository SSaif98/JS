const poll= {
    question: 'What is your favorite programming language?',
    options: ['0: JS', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer(answer){
        // if(typeof(answer)== 'number'&& answer<=this.options.length){
        //     this.answers[answer]++
        // }else{
        //     console.log('Answer is out of options')
        // }
        typeof(answer)== 'number'&& answer<=this.options.length && this.answers[answer]++ //short circuiting
        this.displayPollResults()
        this.displayPollResults('string')
    },
    displayPollResults(type='array'){
        if(type === 'array'){
            console.log(this.answers)
        }else if(type='string'){
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }else{
            console.log('invalid')
        }
}
}

console.log(poll.registerNewAnswer(2))

poll.displayPollResults.call({answers: [5,2,3]}, 'string')
