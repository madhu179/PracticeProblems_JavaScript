const args = process.argv.slice(2);
let n = parseInt(args[0]);

for(let i=2;i<=Math.sqrt(n);i++)
{
    if(n%i==0)
    console.log(i);
}