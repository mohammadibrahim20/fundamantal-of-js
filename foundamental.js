// 1. how to declare a variable using let and const 
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter ';

// 6basic conditions: <,>,===,!==,<=,>=
// multiple condions: &&, ||

if(fatherName ==='Anold'|| season==='rainy'){
    
}
else if(fatherName === 'arnold'){

}
else{

}

// 3. array Declare
// index
// length, push
const numbers = [89,35,98,12];
numbers[0]=56;
// 4.for loop or while loop

for(let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
}

// 5. function
function multiply(num1, num2){
    const result = num1*num2;
    return result;
}

const output = multiply(10,50);

// 6. Object
// 3 ways to acces property by name
const student ={
    name: 'Shakib',
    roll: 35,
    class: 7,
    marks: [10,50,60, 50,45]
}
const myVar = 'age';
console.log(student.age); //direct by property
console.log(student['age']);//acces via property nam string
console.log(student[myVar]) //acces via property name in variable