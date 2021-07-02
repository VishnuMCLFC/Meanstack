var expense={jan:10000,feb:15000,march:22000,april:23000,may:20000,jan:12000}

console.log(expense.march);
console.log(expense["march"]);

console.log(expense.jan);

expense.june=25000;
console.log(expense);

expense.march+=3000;
console.log(expense);

console.log("july" in expense);

if(!("july" in expense))
{
    
    expense.june=25000
}
console.log(expense);