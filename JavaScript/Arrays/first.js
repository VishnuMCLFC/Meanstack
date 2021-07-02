var expenses=[30000,25000,27000,25000,25000];
/*for(let i=0;i<expenses.length;i++)
{
    console.log(expenses[i]);
}

for( let val of expenses)
{
    console.log(val);
}*/
var tot=0;
for( let val of expenses)
{
    tot+=val;
}
console.log("Total "+tot);

for( let val of expenses)
{
    if(val>25000)
    console.log(val);
}
var cnt=0;
for( let val of expenses)
{
    if(val>25000)
    cnt++;
}
console.log("There are "+cnt+" value greater than 25000");