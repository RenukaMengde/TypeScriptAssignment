/*
1. Write typescript program which contains one function named as DisplayFactors. That function should accept
one number and display factor of that number
Input : 20
Output : 1 2 4 5 10
*/


var num : number = 20;

DisplayFactors(num);

function DisplayFactors(num : number) : void
{
       var reminder : number = 0;
       var res : string = "";
       for (var i = 1; i < num; i++)
       {
         reminder = num % i;
         if(reminder == 0)
         {
            res += i + ",";
         }
       }

       console.log("Factors of number '"+num+"' is : " + res);
}