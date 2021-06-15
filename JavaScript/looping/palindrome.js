var num=121;
var num1=num;
var res="";
while(num!=0){
    let digit=num%10;
    res=res+digit;
    num=Math.floor(num/10);
}
console.log(res);
/*
if(res==num1)
{
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome");
}*/

if(res==num1?"Palindrome":"Not palindrome");