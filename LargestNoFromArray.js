/*
1. Write typescript program which contains one function named as Maximum. That function should accept
array of number and returns largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum No is 89
*/
var ArrayOfNum = [23, 89, 6, 29, 56, 45, 77, 32];
var MaxNo = Maximum(ArrayOfNum);
console.log("Maximum No is : " + MaxNo);
function Maximum(ArrayOfNum) {
    var no = 0;
    for (var i = 0; i < ArrayOfNum.length; i++) {
        if (ArrayOfNum[i] > no) {
            no = ArrayOfNum[i];
        }
        // for (var j = i+1; j < ArrayOfNum.length; j++)
        // {
        //     if(no < ArrayOfNum[j])
        //     {
        //         no = ArrayOfNum[j];
        //     }
        // }
    }
    return no;
}
