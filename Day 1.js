// Convert normal function to arrow function
function number() {
    return 10;
}
console.log(number());

// Converting it to arrow function

const number1 = ()=> 10;
console.log(number1());

// with a console.log()
const number2 = ()=> console.log(10);
number2();

// with multiple parameters
let sum = 0;
const number3 = (a,b)=>{
    sum = a + b;
    return sum;
}
const result = number3(2,3);
console.log(result)