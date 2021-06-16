var n=3,lw=8,upp=26,res=0;

for(let i=1;res<upp;i++)
{
    res=i**n;
    if(res>=lw && res<=upp)
    {
        console.log(res);
    }
}