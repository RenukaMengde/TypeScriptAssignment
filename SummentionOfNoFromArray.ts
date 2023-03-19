/*
1. Write typescript program which contains one function named as Summation. That function should accept
array of number and returns summation of all numbers from array.
Input : 23 6 7 4 5 7
Output : Addition is 52
*/

var ArrayOfNum : number[] = [23, 6, 7, 4, 5, 7];

function Summation(ArrayOfNum : number[]) : number
{
     var sum : number = 0;

     for (var i = 0; i < ArrayOfNum.length; i++)
     {
          sum += ArrayOfNum[i];
     }
     return sum;
}

var Total = Summation(ArrayOfNum);
console.log("Summation of array is : " + Total);
