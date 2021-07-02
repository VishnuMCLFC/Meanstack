function add(...arg)
{
    let tot=0;
    for(let num of arg)
    {
        tot+=num;
    }
    return tot;
    //console.log(arg);
}
console.log(add(10,20));
console.log(add(10,20,30));
