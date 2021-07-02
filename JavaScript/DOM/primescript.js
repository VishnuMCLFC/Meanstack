function checkPrime() {
    let lw = document.getElementById("lower").value;
    let upp = document.querySelector("#higher").value;
    let res=[];
    for (let i = lw; i <= upp; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag++;
                break;
            }
        }
        if (flag == 0) {
            
            res.push(i);
            
        }
    }
    result.innerHTML=res;

}