var a=0,b=1,n=10,i=1;

console.log(a,b);
var res=a+b;
while(i<=n)
{   
    console.log(res);
    a=b;
    b=res;
    res=a+b;
    i++;
}