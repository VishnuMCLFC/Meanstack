function checkAge(){
let age=document.querySelector("#age").value;
//let html_data=age>18?"Eligible for vaccination":"Not eligible for vaccination";
//alert(html_data);
//alert(age)
let html_data=" ";
if(age>18)
{
    html_data=`<div style="background-color: seagreen;"> Eligible</div>`
}
else{
    html_data=`<div style="background-color:red;"> Not Eligible</div>`
}

result.innerHTML=html_data;
}