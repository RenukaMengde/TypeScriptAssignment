/*
1. Write typescript program which contains one function named as DisplayFactors. That function should accept
one number and display factor of that number
Input : 20
Output : 1 2 4 5 10
*/
var num = 20;
DisplayFactors(num);
function DisplayFactors(num) {
    var reminder = 0;
    var res = "";
    for (var i = 1; i < num; i++) {
        reminder = num % i;
        if (reminder == 0) {
            res += i + ",";
        }
    }
    console.log("Factors of number '" + num + "' is : " + res);
}
