//a
let dice = 1+Math.floor(Math.random()*10)%6;

//b
while(true)
{
    dice = 1+Math.floor(Math.random()*10)%6;
    if(dice==6)
    break;
}

//c
let counter = 0;
let dictionary = new Map();
while(true)
{
    dice = 1+Math.floor(Math.random()*10)%6;
    if(dictionary.has(dice))
    {
        counter = dictionary.get(dice);
        dictionary.set(dice,++counter); 
    }
    else
    {
       dictionary.set(dice,1); 
    }
    if(dice==6)
    break;
}

//d
let counter2 = 0;
let dictionary2 = new Map();

loop1:
while(true)
{
    dice = 1+Math.floor(Math.random()*10)%6;
    if(dictionary2.has(dice))
    {
        counter = dictionary2.get(dice);
        dictionary2.set(dice,++counter); 
    }
    else
    {
       dictionary2.set(dice,1); 
    }
    for(let value of dictionary2.values())
    {
        if(value==10)
        break loop1;
    }
}
console.log(dictionary2);

//e
let maxCountNum = 0;
let minCountNum = 0;
let min = 11;
for(let [key,value] of dictionary2)
    {
        if(min>value)
        {
        min = value;
        minCountNum = key;
        }

        if(value==10)
        maxCountNum = key;
    }
console.log("The key with min count = "+minCountNum);
console.log("The key with max count = "+maxCountNum);