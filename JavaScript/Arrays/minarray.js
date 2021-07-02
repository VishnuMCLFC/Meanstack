var arr=[2000,1000,10,12000,11000];
var min=arr[0];
for(let exp of arr)
{
    if(exp<min)
    {
        min=exp;
    }
}
console.log(min);