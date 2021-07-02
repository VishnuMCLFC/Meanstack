class Student{
    constructor(rn,name,cs,tot)
    {
        this.rn=rn;
        this.nam=name;
        this.cs=cs;
        this.tot=tot;
    }
    printStudent()
    {
        console.log(this.rn,this.nam);
    }
}

var obj=new Student(1,"Vishnu","MCA",450);

obj.printStudent();
