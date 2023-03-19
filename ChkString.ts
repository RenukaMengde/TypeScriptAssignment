/*
1. Write typescript program which contains one function named as ChkString. That function should accept
one string and check whether that string contain Marvellous or not.
Input : "Pune Kothrud Marvellous Infosystems"
Output : String contains Marvellous in it.
*/

var Input : string = "Pune Kothrud Marvellous Infosystems";
ChkString(Input);

function ChkString(Input : string) : void
{
    var name : string = "Marvellous"; 
    var flag : boolean = false;
    var strArray : string[] = Input.split(' ');
    for (var i = 0; i < strArray.length; i++)
    {
        if(strArray[i] == name)
        {
            flag = true;
        }
    }

    if(flag)
    {
        console.log("Input string contains "+ name +" in it.");
    }
    else
    {
        console.log("Input string not contains "+ name +" in it.");
    }
}
