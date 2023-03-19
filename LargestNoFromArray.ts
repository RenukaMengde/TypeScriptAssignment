/*
1. Write typescript program which contains one function named as Maximum. That function should accept
array of number and returns largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum No is 89
*/

var ArrayOfNum : number[] = [23, 89, 6, 29, 56, 45, 77, 32];
var MaxNo = Maximum(ArrayOfNum);
console.log("Maximum No is : " + MaxNo);

function Maximum(ArrayOfNum : number[]) : number
{
    var no : number = 0;
    for (var i = 0; i < ArrayOfNum.length; i++)
    {
        if (ArrayOfNum[i] > no)
        {
            no = ArrayOfNum[i];
        }
    }
    return no;
}
