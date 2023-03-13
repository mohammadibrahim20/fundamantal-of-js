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
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// keys, value
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in


// add or remove 
const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 70000, brand: 'Iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'black' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
]

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'}

//copy products array and then add newProduct

const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const ramaining = products.filter(pro => pro.name !== 'phone')
