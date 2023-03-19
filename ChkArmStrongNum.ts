/*
1. Write typescript program which contains one function named as ChkArmstrong. That function should accept
a number and check whether number is armstrong or not.
Input : 153
Output : It is Armstrong number
*/

var input : number = 153;

ChkArmstrong(input);

function ChkArmstrong(num : number) : void
{
    var temp : number = num;
    var sum : number = 0;
    var r : number = 0;
    while(num > 0)
    {
        r = num % 10;        
        sum += (r * r * r); 
        num = parseInt((num / 10).toString());
    }

    if (temp == sum)
    {   
        console.log(temp + " is Armstrong number"); 
    }
    else
    {
        console.log(temp + " is not a Armstrong number"); 
    }
}