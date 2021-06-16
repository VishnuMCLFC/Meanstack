var num=22,flag=0;
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
        flag++;
    }
}
console.log(flag==0?"Prime":"Non-prime");