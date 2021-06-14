var a=15,b=23,c=32;

if(a<b && a<c)
{
    if(b<c)
    {
        console.log(a,b,c);
    }   
    else{
        console.log(a,c,b);
    }
}
else if(b<a && b<c)
{
    if(c<a)
    {
        console.log(b,c,a);
    }else{
        console.log(b,a,c);
    }
}
else if(c<a && c<b)
{
    if(b<a)
    {
        console.log(c,b,a);
    }
    else
    {
        console.log(c,a,b);
    }
}