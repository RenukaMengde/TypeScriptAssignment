/*
1. Write typescript program which contains one function named as Area. That function calculate area of circle. 
Accept radius value from user and returns its Area. 
Default value of pi should be 3.15 if it is not provided by caller
Input : 5
*/

var Radius : number = 5;

AreaOfCircle(Radius);

function AreaOfCircle(Radius : number) : void
{
    var pi : number = 3.14;
    var area : number = 0;

    area = pi * Radius * Radius;

    console.log("Area of Circle is "+ area);
}