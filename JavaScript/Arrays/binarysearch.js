var arr=[10,13,12,11,17,15,18];
arr.sort((num1,num2)=> num1 -num2)
console.log(arr);

var element=11,flag=0;
var lw=0,upp=arr.length-1;

while(lw<upp)
{
    let mid=Math.floor((lw+upp)/2)
    if((element>arr[mid]))
    {
        lw=mid+1;
    }
    else if(element<arr[mid])
    {
        upp=mid-1;
    }
    else if(element==arr[mid])
    {
        flag++;
        break;
    
    }
}
console.log(flag==0?"Element not found":"Element found");