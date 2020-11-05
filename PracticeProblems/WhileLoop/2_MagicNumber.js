const args = process.argv.slice(2);
let n = parseInt(args[0]);
while(n>=1)
{
    n=n/2;
}

console.log("Magic number = "+n);