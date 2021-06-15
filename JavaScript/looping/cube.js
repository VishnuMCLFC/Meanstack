var num=123,sum=0;

while(num!=0){
let digit=num%10;
let cb=digit*digit*digit;
sum=sum+cb;
num=Math.floor(num/10);
}
console.log(sum);