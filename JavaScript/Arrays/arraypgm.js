var arr=[4,5,3];
var tot=0;

for(let num of arr)
{
    tot+=num;
}
res=[];
 for(let num  of arr)
 {
    res.push(tot-num)
 }
 console.log(res);