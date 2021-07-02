var arr=[1,2,3,4];
var cnt=0;
var num=6;
var lw=0;
var upp=arr.length-1;

while(lw<upp){
    let tot=arr[lw]+arr[upp];

    if(num==tot)
    {
        console.log(arr[lw],arr[upp]);
        lw++;
    }
    else if(num>tot)
    {
        lw++;
    }
    else if(num<tot)
    {
        upp--;
    }
    cnt++;
}
console.log(cnt);