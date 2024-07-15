const grade = 'F'

switch (grade) {
    case 'A+':
    case 'A':
        console.log('You passed the exam: A or A+')
        break
    case 'B':
        console.log('You passed the exam: B')
        break
    case 'C':
        console.log('You passed the exam: C')
        break
    case 'D':
        console.log('You passed the exam: D')
        break
    default:
        console.log('try again')
}

/*
switch uses strict equalator means if the grade is '50' then case should be '50' not just 50
*/