/*
1. Write typescript program which contains one function named as ChkPrime. That function should accept
one number and return true if number is prime no and false if not a prime no.
Input : 11
Output : Its a prime number
*/
var num = 11;
ChkPrime(num);
function ChkPrime(num) {
    var result = 0;
    var flag = false;
    for (var i = 2; i < num; i++) {
        result = num % i;
        if (result == 0 && i < num) {
            flag = false;
            break;
        }
        else {
            flag = true;
        }
    }
    if (flag) {
        console.log(num + " Number is prime!!");
    }
    else {
        console.log(num + " Number is not prime!!");
    }
}
