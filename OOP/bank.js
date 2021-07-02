class Bank {
    /*createAccount(account_num,name,balance)
    {
        this.account_num=account_num;
        this.name=name;
        this.balance=balance;
    }*/

    accounts = {
        1000: { account_number: 1000, name: "ajay", balance: 4000, username: 1000, password: "userone" },
        1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
        1002: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
        1003: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
    }
    getAccountDetails() {
        
        return this.accounts
    }

    status = 0;
    authenticate(uname, pwd) {
        let data = this.getAccountDetails()
        if (uname in data) {
            if (uname == data[uname]["username"] & pwd == data[uname]["password"]) {
                this.status = 1;
                return uname;//success auth
                
            }
            else {
                return -1; //log incorrect pwd
            }
        }
        else {
            return 0; //invalid user
        }


    }

    /*balanceEnquiry()
    {
        console.log("Your available balance: "+this.balance);
    }*/
    balanceEnquiry(accno) {
        if (this.status == 1) {
            let data = this.getAccountDetails()

            console.log(data[accno]["balance"]);
        }
        else {
            console.log("You must login");
        }
    }
    fundTransfer(user,to_accno,amount)
    {
        let data=this.getAccountDetails()
        if(!(to_accno in data))
        {
            console.log("Invalid to_account number");
        }
        let balance=data[user]["balance"];
        if(balance<amount){
            console.log("Transaction failed: Insufficiant balance");
        }
        else{
            data[to_accno].balance+=amount;
            data[user].balance-=amount;
        }
    }
    /*deposit(amt){
        this.balance+=amt;
        console.log((`Your account number: ${this.account_num} has been credited with ${amt}. Your available balance is: ${this.balance}`));
    }

    withdrawal(amt)
    {
        if(this.balance<amt)
        {
            console.log("Transaction failed!! Insufficient balance");
        }
        else{
            this.balance-=amt;
            console.log(`${amt} has been withdrawn from your account ${this.account_num}. Your available balance is: ${this.balance}`);
        }
    }
}*/
}
var obj = new Bank();
let usr = obj.authenticate(1000, "userone");
obj.fundTransfer(usr,1001,2000);

obj.balanceEnquiry(usr);

//obj.deposit(2000);