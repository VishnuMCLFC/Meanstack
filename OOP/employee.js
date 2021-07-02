class Employee{
    constructor(id,name,desig,salary,exp)
    {
        this.id=id;
        this.name=name;
        this.desig=desig;
        this.salary=salary;
        this.exp=exp;
    }

}

var obj1=new Employee(1,"Ram","devops",2500,3);
var obj2=new Employee(2,"Nikil","devloper",45000,5);
var obj3=new Employee(3,"Rose","ba",18000,1);
var obj4=new Employee(4,"Jay","qa",35000,4);
var obj5=new Employee(5,"Riya","HR",22000,2);


employees=[];
employees.push(obj1,obj2,obj3,obj4,obj5);

let highest=employees.reduce((obj1,obj2)=>obj1.salary>obj2.salary?obj1:obj2);

console.log(highest);

let st=employees.sort((obj1,obj2)=>obj2.exp-obj1.exp);
console.log("Sorted ",st);


let is_qa=employees.some((obj)=>obj.desig=="qa");

if(is_qa==true)
{
    console.log("There is qa people");
}
else{
    console.log("There is no qa ppl");
}
