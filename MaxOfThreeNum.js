/*
1. Write typescript program which contains one function named as Maximum. That accepts three parameters
and it should returns largest value from the three input.
Input : 23  89  6
*/
var No1 = 23;
var No2 = 89;
var No3 = 6;
var result = Maximum(No1, No2, No3);
console.log("Largest Number is : " + result);
function Maximum(no1, no2, no3) {
    var temp = 0;
    if (no1 > no2 && no1 > no3) {
        temp = no1;
    }
    else if (no2 > no1 && no2 > no3) {
        temp = no2;
    }
    else {
        temp = no3;
    }
    return temp;
}
