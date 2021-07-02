class Parent{
    m1(){
        console.log("Inside m1 methode");
    }
}
class Child extends Parent{
    m2(){
        console.log("Inside m2 method");
    }

}
class subChild extends Child{
    m3(){
        console.log("Inside m3 method");
    }
}
var obj=new subChild();
obj.m3();
obj.m2();
obj.m1();
