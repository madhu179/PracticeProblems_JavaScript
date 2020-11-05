let value1 = Math.floor(Math.random() * 1000);
let value2 = Math.floor(Math.random() * 1000);
let value3 = Math.floor(Math.random() * 1000);
let min=0;
let max=0;
if(value1>value2)
{
    if(value1>value3)
    {
        max = value1;
        if(value3>value2)
        min = value2;
        else
        min = value3;
    }
    else
    {
        max = value3;
        if(value3>value2)
        min = value2;
        else
        min = value3;
    }
}
else
{
    if(value2>value3)
    {
        max = value2;
        if(value3>value1)
        min = value1;
        else
        min = value3;
    }
    else
    {
        max = value3;
        if(value2>value1)
        min = value1;
        else
        min = value2;
    }
}
console.log(value1+" "+value2+" "+value3);
console.log("Max = "+max+" min = "+min);