var a=50,b=55,c=60;

if(a>b)
{
    if(b>c)
    {
        console.log(b," Is second largest");
    }
    else if(a>c){
        console.log(c," Is second largest");
    }
    else{
        console.log(a," Is second largest");
    }
}
else if(a>c){
    console.log(a," Is second largest");
}   
else if(b>c){
    console.log(c, "Is second largest");
}
else{
    console.log(b," Is second largest");
}