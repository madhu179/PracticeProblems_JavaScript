const args = process.argv.slice(2);
let a = parseInt(args[0]);
let b = parseInt(args[1]);
let c = parseInt(args[2]);

let opeation1 = a + b*c;
let opeation2 = a%b+c;
let opeation3 = c+a/b;
let opeation4 = a*b+c;

let max;

if(opeation1>opeation2)
{
    if(opeation1>opeation3)
    {
        if(opeation1>opeation4)
        max = opeation1;
        else
        max = opeation4;
    }
    else
    {
        if(opeation3>opeation4)
        max = opeation3;
        else
        max = opeation4;
    }
}
else
{
     if(opeation2>opeation3)
    {
        if(opeation2>opeation4)
        max = opeation2;
        else
        max = opeation4;
    }
    else
    {
        if(opeation3>opeation4)
        max = opeation3;
        else
        max = opeation4;
    }
}

console.log("Max = "+max);
