const args = process.argv.slice(2);
let n = parseInt(args[0]);

function isPrime(n) {
let count=0;

for(let i=2;i<=Math.sqrt(n);i++)
{
    if(n%i==0)
    count++;
}

if(count>=1 || n==1)
return false;
else
return true;

}

let primeFactorsArray = new Array();
for(let i=2;i<n/2;i++)
{
    if(n%i==0)
    {
        if(isPrime(i))
        primeFactorsArray.push(i);
    }
}

console.log(primeFactorsArray);
