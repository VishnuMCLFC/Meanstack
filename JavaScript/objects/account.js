var accounts = {
    1000: {
        acno: 1000, ac_type: "savings", balance: 5000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1001: {
        acno: 1001, ac_type: "savings", balance: 6000, c_transactions: [
            { date: "01/06/2021", from: 1000, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1002: {
        acno: 1002, ac_type: "credit", balance: 3000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1000, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    }

}



console.log(accounts[1002].c_transactions);//console.log(accounts[1002]["c_transactions"]);



//print all credit trans of 1000 whose amount is > 500

accounts[1000].c_transactions.filter(transaction=>transaction.amount>500).forEach(transaction=>console.log(transaction));


var trans=accounts[1000].c_transactions.filter(trans=>trans.amount>500)
console.log("shsh",trans);

console.log(accounts[1000].c_transactions.filter(trans=>trans.amount>500));


var sum=accounts[1000].c_transactions.map(trans=>trans.amount).reduce((t1,t2)=>t1+t2);
console.log(sum);



var lowest=accounts[1000].c_transactions.map(trans=>trans.amount).reduce((amt1,amt2)=>amt1<amt2?amt1:amt2)
console.log(lowest);


//credit transactions date

accounts[1000].c_transactions.forEach(trandate=>console.log(trandate.date));

//first date


console.log(accounts[1000].c_transactions[0].date);