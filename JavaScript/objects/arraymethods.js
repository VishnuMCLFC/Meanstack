//arrow function

let add=(num1,num2)=> num1+num2;

let sub=(num1,num2)=> num1-num2;
let cube=(num1)=> num1**3;

//(param1,param2)=> return statement

console.log(add(10,20));
console.log(sub(20,15));
console.log(cube(3));


var num_chk=num=>num%2==0?"even":"odd";
console.log(num_chk(7));


var arr=[1,5,6,7,3,4]

var squares=arr.map(num=>num**2)
console.log(squares);

var cubes=arr.map(num=>num**3)
console.log(cubes);

//print all even (apply filter when conditions are there)

var evens=arr.filter(num=>num%2==0)
console.log(evens);


//apply reduce when we need single answers

var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);

