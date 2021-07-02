var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]

//print product names only
var product_names=products.map(item=>item.name)
console.log(product_names);

var upper_case=products.map(item=>item.name.toUpperCase())
console.log(upper_case);

//all products whose mrp<50

var mrp=products.filter(item=>item.mrp<50)
console.log(mrp);

//print out of stock items.

var outofstock=products.filter(item=>item.aval_qty==0)
console.log(outofstock);

//print products available in range of 50-100
var prod=products.filter(item=>item.mrp>50 & item.mrp<100)
console.log("knk",prod);


//print products name starts with b

var nam=products.filter(item=>item.name[0]=="b")
console.log(nam);

//add offer 5% if mrp>55

var res=products.filter(item=>item.mrp>50?item.offer="5%":item.offer="0%")
console.log(res);

//costly product

var costly=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
console.log(costly);

//low cost

var lowcost=products.reduce((item1,item2)=>item1.mrp<item2.mrp?item1:item2)
console.log(lowcost);


let add=(...args)=>args.reduce((num1,num2)=>num1+num2)
console.log(add(10,20,20,80));


//find()

var p_details=products.find(item=>item.name=="carrot")
console.log(p_details);


//some()

var is_available=products.some(item=>item.mrp>30 & item.mrp<50)
console.log(is_available);