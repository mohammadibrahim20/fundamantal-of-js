// 1. JSO 
const student = {
    name: 'Shakib',
    roll: 35,
    class: 7,
    marks: [10, 50, 60, 50, 45],
    movies: ['bash', 'shakib']
}
const studentJSON = JSON.stringify(student)
// console.log(student)
// console.log(studentJSON)

const studentObj = JSON.parse(studentJSON)
// console.log(studentObj)

// 2. fetch