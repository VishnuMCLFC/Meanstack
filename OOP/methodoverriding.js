class Parent{
    bike(){
        console.log("Passion pro");
    }
    phone(){
        console.log("Samsung");
    }
}
class Child extends Parent{
    phone(){
        console.log("iphone");
    }
    bike(){
        console.log("re350");
    }
}
var child=new Child();
child.phone();
child.bike();
var parent=new Parent();
parent.bike();

