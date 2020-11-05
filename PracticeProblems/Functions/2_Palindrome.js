let n1 = 234;
let n2 = 432;

let n3 = 12345;
let n4 = 19876;


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
   console.log("The 2 numbers are palindromes");
   else
   console.log("The 2 numbers are not palindromes");
}

checkPalindrome(n1,n2);
checkPalindrome(n3,n4);