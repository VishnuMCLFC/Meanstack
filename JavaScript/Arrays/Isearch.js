//linear search

var arr=[10,11,12,13,14,15,16];

var element=24;

var flag=0;

for(let num of arr)
{
    if(num==element)
    {
        flag++;
        break;
    }
}

if(flag==0)
{
    console.log("Element Not Found");
}
else{
    console.log("Element Found");
}
