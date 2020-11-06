let birthMap = new Map();

for(let i=1;i<=50;i++)
{
    let month = 1 + Math.floor(Math.random()*12)%12;
    birthMap.set(i,month);
}

for(let i=1;i<=12;i++)
{
    console.log("The people with birthday in month "+i+" are:");
    let str = "";
    for([key,value] of birthMap)
    {
        if(value==i)
        {
            str+=key;
            str+=",";
        }
    }
    console.log(str);
}
