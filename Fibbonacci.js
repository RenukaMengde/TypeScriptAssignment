/*
1. Write typescript program which contains one function named as Fibbonacci. That function should accept
one number and Fibbonacci series till that number
Input : 21
Output : 1 1 2 3 5 8 13 21
*/
var num = 21;
Fibbonacci(num);
function Fibbonacci(num) {
    var res = "";
    var cnt = 1;
    var temp = 0;
    while (cnt <= num) {
        res += cnt + ",";
        var sum = cnt + temp;
        temp = cnt;
        cnt = sum;
    }
    console.log("Fibbonacci series of number " + num + " is " + res);
}
