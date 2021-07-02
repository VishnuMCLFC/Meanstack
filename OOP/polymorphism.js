class Calculations{
    add(){
        console.log("inside no arg methode");
    }
    add(num){
        console.log("inside one arg method");
    }
    add(num1,num2){
        console.log("inside two arg method");
    }
   
}
var calc=new Calculations();
calc.add();
calc.add(10);
calc.add(20,30);