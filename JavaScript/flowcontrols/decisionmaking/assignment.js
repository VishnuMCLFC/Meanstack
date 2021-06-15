var a=30,b=35,c=20;

if(a>b)
{
    if(a>c)
    {
        console.log(a," Is biggest");
    }
    else{
        console.log(c," Is bigger");
    }
}
else if(b>c)
{
    console.log(b," Is bigger");
}
else{
    console.log(c," Is bigger");
}

/*console.log((a>b)&(a>c)?a:(b>a)&(b>c)?b:c);*/