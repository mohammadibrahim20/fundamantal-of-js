//  'almas', 5, true, {}, []
// "", 0, false, null, undefined
// check truthy
let myVar = 5;
// check any truthy
if(myVar){
    myVar = myVar*100;
}
else{
    myVar=0;
}
let myMoney = 50;
// you check negative or falsy anything
if(!myMoney){
}
else{

}
const money = 80;
let food;
if(money> 100){
    food = 'birayani'
}
else{
    food = 'cha biscut'
}

// tarnary
let food1 = money>100? 'birayani': 'cha biscut';
// console.log(food1)

let drink = (money > 100 && myVar > 100)? 'coke': 'filter water';
// console.log(drink)

// number to string convertion
const num1 = 52;
// console.log(num1)
const numStr = num1 + '';
// console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);

// 
const isActive = true;
const showUser =()=> console.log('display User');
const hideUser =()=> console.log('display User');

// isActive ? showUser(): hideUser();
// use && if the left side is true the right side will be executed
isActive && showUser()
// use|| if the left side is false the right side will be executed
isActive || hideUser();

// toglgle boolean 
isActive = !isActive