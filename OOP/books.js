class BookLibrary{
    books={
        "alchemist":{bname:"alchemist",auth:"rowling",price:200,no_of_cpy:100,sold:10},
        "randamoozham":{bname:"randamoozham",auth:"MT",price:150,no_of_cpy:200,sold:110},
        "jk":{bname:"jk",auth:"kkp",price:20,no_of_cpy:10,sold:1},
        "dcompany":{bname:"dcompany",auth:"davood",price:100,no_of_cpy:50,sold:30},
    }
    findBook(bname){
        let bdata=this.books;
        if(bname in bdata)
        {
            let no_cop=bdata[bname].no_of_cpy-bdata[bname].sold;
            console.log(`Book ${bname} found, we have ${no_cop} copies available`);
            console.log(this.books[bname]);
        }
        else{
            console.log(`Book ${bname} not found`);
        }
    }
}
var ob=new BookLibrary();
let bk=ob.findBook("randamoozham");
