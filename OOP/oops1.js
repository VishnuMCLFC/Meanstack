class Student{
    setStudent(rl,nm,cs,tot){
        this.rl=rl;
        this.nm=nm;
        this.cs=cs;
        this.tot=tot;
    }
    printStudent()
    {
        console.log(this.rl,this.nm,this.cs,this.tot);
    }
}

var obj=new Student()
obj.setStudent(1,"Vishnu","MCA",450);
obj.printStudent();
