/*
1. Write typescript program which contains one function named as Maximum. That function should accept
array of number and returns second largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum No is 77
*/

var ArrayOfNum : number[] = [23, 89, 6, 29, 56, 45, 77, 32];
var ArrayOfNum1 : number[] = [];
var MaxNo = SecondLargestNo(ArrayOfNum);
console.log("Maximum No is : " + MaxNo);

function SecondLargestNo(ArrayOfNum : number[]) : number
{
    var firstNo : number = 0;
    var secondNo : number = 0;
    for (var i = 0; i < ArrayOfNum.length; i++)
    {
        if (ArrayOfNum[i] > firstNo)
        {
            secondNo = firstNo;
            firstNo = ArrayOfNum[i];
        }
        else if (ArrayOfNum[i] > secondNo && ArrayOfNum[i] != firstNo)
        {
            secondNo = ArrayOfNum[i];
        }
    }
    return secondNo;
}