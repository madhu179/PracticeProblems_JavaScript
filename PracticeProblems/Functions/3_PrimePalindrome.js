
const args = process.argv.slice(2);
let number = parseInt(args[0]);

function checkPrime(number)
{
    let count=0;

    for(let i=2;i<=Math.sqrt(number);i++)
    {
        if(number%i==0)
        count++;
    }

    if(count>=1 || number==1)
    return false;
    else
    return true;
}

function checkPalindrome(p1,p2)
{
    let rev = 0;
    let length = 0;
    let digitPosition = 1;
    let p = p1;
    while(p>=1)
    {
        p = p/10;
        length++;
        digitPosition*=10;
    }
    digitPosition/=10;
   while(length--)
   {
       rev += p1%10 * digitPosition;
       p1 = parseInt(p1/10);
       digitPosition/=10;
   }
   if(rev==p2)
   return true;
   else
   return false;
}

function getPalindrome(number)
{
    let rev = 0;
    let length = 0;
    let digitPosition = 1;
    let p = number;
    while(p>=1)
    {
        p = p/10;
        length++;
        digitPosition*=10;
    }
    digitPosition/=10;
   while(length--)
   {
       rev += number%10 * digitPosition;
       number = parseInt(number/10);
       digitPosition/=10;
   }
   return rev;
}

let isPrime = checkPrime(number);
if(isPrime)
{
    let palindrome = getPalindrome(number);
    let isPalindromePrime = checkPrime(palindrome);
    if(isPalindromePrime)
    console.log("Both the number and its palindrome are prime");
    else
    console.log("The number is prime but its palindrome is not prime");
}
else
console.log("The numbernot prime");