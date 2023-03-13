// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0]
// const y = numbers[1]

// const [x, y] = [42, 65]
const [x, y] = numbers;

function boxify(nam1, num2) {
    const nums = [nam1, num2];
    return nums
}

// const[frist, second] = [90,34]
const [frist, second] = boxify(90, 34)
// console.log(boxify(90,34))
// console.log(frist, second)

const student = {
    name: 'Shakib',
    roll: 35,
    class: 7,
    marks: [10, 50, 60, 50, 45],
    movies: ['bash', 'shakib']
}
// const [firtsMovie, secondMovie] = ['bash', 'shakib']
const [firtsMovie, secondMovie] = student.movies;

// object destructuring
// const {name, age} ={name: 'alu', age: 14};
const { name, age } = { id: 12, name: 'alu', age: 14, salary: 1000 }

const employee = {
    ide: 'Vs code',
    designation: 'devoloper',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    sprcification: {
        height: 66,
        wieght: 67,
        addres: 'chawkbaza',
        drink: 'weatar',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garming'
        }
    }
}

const { machine, ide } = employee;
const { wieght, addres } = employee.sprcification;
const { brand } = employee?.sprcification?.watch